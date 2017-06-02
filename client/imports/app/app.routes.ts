import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Meteor } from 'meteor/meteor';
import { JobsListComponent } from './job/jobs-list.component';

import { PageNotFoundComponent } from './page-not-found.component';
import { ComposeMessageComponent } from './compose-message.component';
import { LoginComponent } from './auth/login.component';
import { SignupComponent } from './auth/signup.component';
import { RecoverComponent } from './auth/recover.component';
export const routes: Routes = [
    
]

export const ROUTES_PROVIDERS = [{}];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);