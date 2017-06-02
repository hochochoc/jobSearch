import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { Ng2PaginationModule } from 'ng2-pagination';
import { AuthGuard, AuthJobsGuard, AuthUsersGuard } from '../auth/auth-guard.service';
import { AuthService } from '../auth/auth.service';
import { RoutingModule } from '../routing.module';
import { ManageJobsComponent } from './manage-jobs.component';
import { ManageUsersComponent } from './manage-users.component';
import { SHARED_DECLARATIONS} from '../shared/index';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RoutingModule,
        Ng2PaginationModule
    ],
    providers: [
        AuthGuard, AuthJobsGuard, AuthService, AuthUsersGuard
    ],
    declarations: [
        AdminComponent,
        AdminDashboardComponent,
        ManageJobsComponent,
        ManageUsersComponent,
        
    ]
})
export class AdminModule{}