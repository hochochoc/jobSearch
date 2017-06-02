import { User } from '../../../both/models/user.model';
import { Users } from '../../../both/collections/users.collection';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

export function loadUsers(){
    if (Users.find().cursor.count()===0){
        const users = [{
            username: 'superadmin',
            password: 'superadmin',
            role: ['superadmin']
        },
        {
            username: 'employer',
            password: 'employer',
            role: ['employer']
        },
        {
            username: 'employee',
            password: 'employee',
            role: ['employee']
        },
        {
            username: 'guest',
            password: 'a',
            role: ['employer']
        }];
        users.forEach((user)=> userEtRoles(user));
    }
}
function userEtRoles(user: any){
    let id;
    id = Accounts.createUser({
        username: user.username, password: user.password
    });
    if (user.role.length >0 ){
        Roles.addUsersToRoles(id, user.role, Roles.GLOBAL_GROUP);
    }
}