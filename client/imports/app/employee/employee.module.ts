import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from '../routing.module';
import { AuthGuard, AuthJobsGuard, AuthUsersGuard } from '../auth/auth-guard.service';
import { EmployeeComponent } from './employee.component';
import { JobsListComponent } from './jobs-list.component';
import { JobDetailEmployeeComponent } from './job-detail-employee.component';
import { Ng2PaginationModule } from 'ng2-pagination';
import { AuthService } from '../auth/auth.service';
@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2PaginationModule
  ],
  providers: [
    AuthGuard, AuthJobsGuard, AuthUsersGuard, AuthService
  ],
  declarations: [
    EmployeeComponent,
    JobsListComponent,
    JobDetailEmployeeComponent

  ]
})
export class EmployeeModule { }