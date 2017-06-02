import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { JobsListComponent } from './employee/jobs-list.component';
import { JobDetailComponent } from './employer/jobs-detail.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ComposeMessageComponent } from './compose-message.component';
import { LoginComponent } from './auth/login.component';
import { SignupComponent } from './auth/signup.component';
import { RecoverComponent } from './auth/recover.component';
import { LoginAdminComponent } from './auth/login-admin.component';
import { LoginEmployerComponent } from './auth/login-employer.component';
import { AuthGuard, AuthJobsGuard, AuthAdminGuard, AuthUsersGuard } from './auth/auth-guard.service';
import { ManageJobsComponent } from './admin/manage-jobs.component';
import { ManageUsersComponent } from './admin/manage-users.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployerComponent } from './employer/employer.component';
import { PageHomeComponent } from './pages-home.component';
import { ManageJobsEmployerComponent } from './employer/manage-jobs-employer.component';
import { JobsFormComponent } from './employer/jobs-form.component';
import { JobDetailEmployeeComponent } from './employee/job-detail-employee.component';
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'compose',
                component: ComposeMessageComponent,
                outlet: 'popup'
            },
            {
                path: 'home',
                component: PageHomeComponent
            },
            {
                path: 'jobs', 
                component: JobsListComponent
            },
            
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'loginAdmin',
                component: LoginAdminComponent
            },
            {
                path: 'loginEmployer',
                component: LoginEmployerComponent
            },
            {
                path: 'signup',
                component: SignupComponent
            },
            {
                path: 'recover',
                component: RecoverComponent
            },
            {
                path: 'admin',
                component: AdminComponent, 
                canActivate: [AuthGuard],
                children: [
                    {
                        path: 'jobs-list', 
                        canActivateChild: [AuthJobsGuard],
                        children: [
                            {
                                path: '', 
                                component: ManageJobsComponent
                            }                            
                        ]
                    },
                    {
                        path: 'users',
                        canActivateChild: [AuthUsersGuard],
                        children:[
                            {
                                path: '',
                                component: ManageUsersComponent
                            }
                        ]
                    },
                    {
                        path:'',
                        component: AdminDashboardComponent
                    }
                ]
            },
            {
                path: 'employer',
                component: EmployerComponent,
                canActivate: [AuthGuard],
                children: [
                    {
                        path: 'jobs-form',
                        component: JobsFormComponent,
                        canActivateChild: [AuthGuard],
                    },
                    {
                       path: 'jobs-list-created',
                       canActivateChild: [AuthJobsGuard],
                       children: [
                           {
                               path: '', component: ManageJobsEmployerComponent
                           },
                           {
                               path: ':jobId', component: JobDetailComponent
                           }
                       ]
                       
                    }
                    
                ]
            },
            {
                path: 'employee',
                component: EmployeeComponent,
                canActivate: [AuthGuard],
                children: [
                    {
                        path: 'jobs',
                        canActivateChild: [AuthJobsGuard],
                        children: [
                            {
                                path: '',
                                component: JobsListComponent
                            },
                            {
                                path: ':jobId',
                                component: JobDetailEmployeeComponent
                            }
                        ]
                        
                    }
                ]
            },
            { 
                path: '',   
                redirectTo: '/home', 
                pathMatch: 'full' 
            },
            {
                path: '**',
                component: PageNotFoundComponent
            }
    
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule{}