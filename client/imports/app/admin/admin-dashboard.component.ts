import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Subject, Subscription, Observable } from 'rxjs';
import { MeteorObservable } from 'meteor-rxjs';

import template from './admin-dashboard.component.html';
import style from './admin-dashboard.component.scss';

@Component({
    selector: 'admin-dashboard',
    template,
    styles: [style]
})

export class AdminDashboardComponent implements OnDestroy, OnInit{
    constructor (){

    }
    ngOnInit(){
        
    }
    admin() {
        return Roles.userIsInRole(Meteor.user(), ['admin']);
    }
    userRoles(){
        return Roles.getRolesForUser(Meteor.user());
    }
    ngOnDestroy(){

    }
    defFile(){
        console.log('delete');
    }
}