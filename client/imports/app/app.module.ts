import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { Ng2PaginationModule } from 'ng2-pagination';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { FileDropModule } from 'angular2-file-drop';
import { AppComponent } from "./app.component";
import { JOBS_DECLARATIONS } from './job/index';
import { routing, ROUTES_PROVIDERS } from './app.routes';
import { ComposeMessageComponent } from './compose-message.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { SHARED_DECLARATIONS} from './shared/index';
import { PageHomeComponent } from './pages-home.component';
import { EmployerModule } from './employer/employer.module';
import { EmployeeModule } from './employee/employee.module';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    AdminModule,
    EmployeeModule,
    EmployerModule,
    AccountsModule,
    Ng2PaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWoBdZHCNh5R-hB5S5ZZ2oeoYyfdDgniA'
    })
  ],
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    PageNotFoundComponent,
    ...JOBS_DECLARATIONS,
    ...SHARED_DECLARATIONS,
    PageHomeComponent,
    
  ],
  providers:[ ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
