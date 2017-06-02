import { Jobs } from '../collections/jobs.collection';
import { Email } from 'meteor/email';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

function getContactEmail(user: Meteor.User): string {
    if (user.emails && user.emails.length){
        return user.emails[0].address;
    }
    return null;
}

Meteor.methods({
    invite: function (jobId: string, userId: string){
        check(jobId, String);
        check(userId, String);

        let job = Jobs.collection.findOne(jobId);

        if (!job){
            throw new Meteor.Error('404', 'No such job!');
        }

        if (job.public){
            throw new Meteor.Error('400', 'That job is public. No need to invite');
        }

        if (job.owner !== this.userId){
            throw new Meteor.Error('403', 'No permisstions');
        }

        if (userId !==job.owner && (job.invited || []).indexOf(userId)== -1){
            Jobs.collection.update(jobId, { $addToSet: { invited: userId }});
            let from = getContactEmail(Meteor.users.findOne(this.userId));
            let to = getContactEmail(Meteor.users.findOne(userId));

            if (Meteor.isServer && to){
                Email.send({
                    from: 'noreply@socially.com',
                    to: to,
                    replyTo: from || undefined,
                    subject: 'JOB: ' + job.ten_cong_viec,
                    text: `Hi I just invited you to ${job.ten_cong_viec} on Socially.
                    \n\n come check it out: ${Meteor.absoluteUrl()}\n`
                });
            }
        }
    },
    
    reply: function(jobId: string, rsvp: string){
        check(jobId, String);
        check(rsvp, String);

        if (!this.userId){
            throw new Meteor.Error('403', 'You must be logged in to reply');
        }
        if (['yes', 'no', 'maybe'].indexOf(rsvp)===-1){
            throw new Meteor.Error('400', 'Invalid RSVP');
        }
        let job = Jobs.findOne({_id: jobId});
        if (!job){
            throw new Meteor.Error('404', 'No such job ')
        }
        if (job.owner === this.userId){
            throw new Meteor.Error('500', 'You are the owner');
        }
        if (!job.public && (!job.invited || job.invited.indexOf(this.userId)==-1)){
            throw new Meteor.Error('403', job.public+""+job.invited+" "+ this.userId );
        }
        let rsvpIndex = job.rsvps ? job.rsvps.findIndex((rsvp)=> rsvp.userId === this.userId):-1;
        if (rsvpIndex !==-1){
            if (Meteor.isServer){
                Jobs.update(
                    {
                        _id: jobId,
                        'rsvps.userId': this.userId
                    },
                    {
                        $set: {
                            'rsvps.$.response': rsvp
                        }
                    }
                );
            }
            else {
                let modifier = {
                    $set: {}
                };
                modifier.$set['rsvps.'+rsvpIndex+'.response']= rsvp;
                Jobs.update(jobId, modifier);
            }
        }
        else {
            Jobs.update(jobId,
            {
                $push: {
                    rsvps: {
                        userId: this.userid,
                        response: rsvp
                    }
                }
            });
        }
    }
});