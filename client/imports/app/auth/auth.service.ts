import { Injectable } from '@angular/core';
import { Meteor } from 'meteor/meteor';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
    constructor(private router: Router) { }
    isLoggedIn: boolean = false;

    // store the URL so we can redirect after logging in
    redirectUrl: string;
    user: Meteor.User;
    testLogin(): Observable<boolean> {
        return Observable.of(!!Meteor.user())
            /*.delay(500)*/
            .do(val => this.user = Meteor.user());
    }

}