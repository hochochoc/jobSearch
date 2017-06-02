import { Meteor } from 'meteor/meteor';
import { Jobs } from '../../../both/collections/jobs.collection';
import { Counts } from 'meteor/tmeasday:publish-counts';

interface Options {
    [key: string]: any;
}
Meteor.publish('jobs', function(options: Options, location?: string) {
    const selector = buildEmployerQuery.call(this, null, location);
    Counts.publish(this, 'numberOfJobs', Jobs.collection.find(selector), {noReady: true});
    return Jobs.find(selector, options);
});

Meteor.publish('job', function(jobId: string) {
    return Jobs.find(buildEmployerQuery.call(this, jobId));
})

Meteor.publish('job-public', function (jobId: string){
    return Jobs.find(buildQuery.call(this, jobId));
})
Meteor.publish('all-jobs', function(options: Options, location?: string){
    const selector = buildQuery.call(this, null, location);
    Counts.publish(this, 'jobsCount', Jobs.collection.find(selector), {noReady: true});
    return Jobs.find(selector,options);
})
/**for admin, employee */
function buildQuery(jobId?:string, location?: string): Object{
    if (jobId){
        return {
            _id: jobId
        }
    }
    const searchRegEx = { '$regex': '.*' + (location || '') + '.*', '$options': 'i' };
    return {
        'location.name': searchRegEx
    }
}
/**for employer */
function buildEmployerQuery(jobId?: string, location?: string): Object{
    const isOwnership ={
           $and: [
                    {
                        owner: this.userId
                    },
                    {
                        owner: {
                            $exists: true
                        }
                    }
                ]
          
    };
    if (jobId){
        return {
            $and: [
                {
                    _id: jobId
                },
                isOwnership
            ]
        };
    }
    const searchRegEx = { '$regex': '.*' + (location || '') + '.*', '$options': 'i' };

    return {
        $and: [{
            'location.name': searchRegEx
        },
        isOwnership
        ]
    };
   
}
        
  
