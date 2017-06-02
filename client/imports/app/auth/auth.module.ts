import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';
import { RecoverComponent } from './recover.component';
import { LoginAdminComponent } from './login-admin.component';
import { LoginEmployerComponent } from './login-employer.component';
import { LoginComponent } from './login.component';
import { RoutingModule } from '../routing.module';
import {
  AuthGuard,
  AuthJobsGuard,
  AuthUsersGuard,
  AuthAdminGuard
} from './auth-guard.service';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthGuard,
    AuthJobsGuard,
    AuthUsersGuard,
    AuthAdminGuard,
    AuthService
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    RecoverComponent,
    LoginAdminComponent,
    LoginEmployerComponent

  ]
})
export class AuthModule { }