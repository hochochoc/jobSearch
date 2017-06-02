import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meteor } from 'meteor/meteor';
import { MeteorReactive } from 'angular2-meteor';
import { Roles } from 'meteor/alanning:roles';
import 'rxjs/add/operator/map';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import template from './admin.component.html';
import style from './admin.component.scss';

@Component({
  selector: 'admincontent',
  template,
  styles: [ style ]
})
@InjectUser('user')
export class AdminComponent implements OnInit{
    user: Meteor.User;
    test: boolean = false;
    constructor(
        private router: Router,
        private state: ActivatedRoute
    ){}

    ngOnInit(){
        if (!Meteor.user()){
            this.router.navigate(['login']);
        }
        else {
            this.user = Meteor.user();
        }
    }
    logout(){
        Meteor.logout();
        this.router.navigate(['/']);
    }
}