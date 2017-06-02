import { Jobs } from '../../../both/collections/jobs.collection';
import { Meteor } from 'meteor/meteor';
import { Users } from '../../../both/collections/users.collection';

Meteor.publish('uninvited', function(jobId: string){
    const job = Jobs.findOne(jobId);
    if (!job){
        throw new Meteor.Error('404', 'No such job');
    }
    return Meteor.users.find({
        _id: {
            $nin: job.invited || [],
            $ne: this.jobId
        }
    });
});
Meteor.publish('admins', function () {
    return Users.find({}, {
        fields: { username: 1, roles: 1, createdAt: 1 }
    });
});