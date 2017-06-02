import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

export const Roles = MongoObservable.fromExisting(Meteor.users);
function loggedIn(){
    return !!Meteor.user();
}
Roles.allow({
    insert: loggedIn,
    update: loggedIn,
    remove: loggedIn
});