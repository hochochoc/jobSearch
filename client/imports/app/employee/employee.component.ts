import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meteor } from 'meteor/meteor';
import { MeteorReactive } from 'angular2-meteor';
import { Roles } from 'meteor/alanning:roles';
import 'rxjs/add/operator/map';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import template from './employee.component.html';
import style from './employee.component.scss';

@Component({
  selector: 'employercontent',
  template,
  styles: [ style ]
})
@InjectUser('user')
export class EmployeeComponent implements OnInit{
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