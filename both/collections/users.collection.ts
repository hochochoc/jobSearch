import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

export const Users = MongoObservable.fromExisting(Meteor.users);
function loggedIn() {
  return !!Meteor.user();
}

Users.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});