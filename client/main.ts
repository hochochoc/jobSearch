import 'angular2-meteor-polyfills';

import { platformBrowserDynamic }  from '@angular/platform-browser-dynamic';
import { AppModule } from './imports/app/app.module';
import '../both/methods/jobs.methods';

Meteor.startup(()=> {
    const platform = platformBrowserDynamic();
    platform.bootstrapModule(AppModule);
});
