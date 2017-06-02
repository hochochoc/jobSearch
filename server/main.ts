import { Meteor } from 'meteor/meteor';
import { loadJobs } from './imports/fixtures/jobs';
import { loadUsers } from './imports/fixtures/users';
import './imports/publications/jobs';
import './imports/publications/users';
import '../both/methods/jobs.methods';


Meteor.startup( () => {
    loadJobs();
    loadUsers();
});