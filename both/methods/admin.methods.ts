import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

Meteor.methods({
    setUsername: function(idSTR, username){
        if (Meteor.isServer){
            Accounts.setUsername(idSTR, username);
        }
    },
    setPassword: function (idSTR, password){
        if (Meteor.isServer){
            Accounts.setPassword(idSTR, password);
        }
    },
    setUserRoles: function (idSTR, role){
        if (Meteor.isServer){
            Roles.setUserRoles(idSTR, role, Roles.GLOBAL_GROUP);
        }
    },
})