import { Component } from '@angular/core';
import template from './page-home.component.html';
import style from './page-home.component.scss';
import { InjectUser } from 'angular2-meteor-accounts-ui';
@Component({
    selector: 'page-home',
    template,
    styles: [style]
})
@InjectUser('user')
export class PageHomeComponent {
    constructor() {
    }
    logout(){
        Meteor.logout();
    }
}