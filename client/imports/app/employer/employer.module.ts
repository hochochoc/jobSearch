import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from '../routing.module';
import { Ng2PaginationModule } from 'ng2-pagination';
import { AuthGuard, AuthJobsGuard, AuthUsersGuard } from '../auth/auth-guard.service';
import { EmployerComponent } from './employer.component';
import { JobsFormComponent } from './jobs-form.component';
import { AuthService } from '../auth/auth.service';
import { ManageJobsEmployerComponent } from './manage-jobs-employer.component';
import { JobDetailComponent } from './jobs-detail.component';
@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2PaginationModule
  ],
  providers: [
    AuthGuard, AuthJobsGuard, AuthUsersGuard , AuthService
  ],
  declarations: [
    EmployerComponent,
    JobsFormComponent,
    ManageJobsEmployerComponent,
    JobDetailComponent

  ]
})
export class EmployerModule { }