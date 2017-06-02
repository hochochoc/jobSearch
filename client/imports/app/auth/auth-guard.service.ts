import { Injectable } from '@angular/core';
import {
    CanActivate, CanActivateChild, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    redirectUrl: string;
    user: Meteor.User;
    constructor(private router: Router,
        private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return !!this.checkLogin(url);
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
    checkLogin(url: string): boolean {
        if (!!this.authService.user) {
            /**normal */
            return true;
        } else {
            this.authService.testLogin().subscribe(() => {
                if (!!this.authService.user) {
                    /**refresh */
                    this.router.navigate([url]);
                    return true;
                } else {
                    this.authService.redirectUrl = url;
                    this.router.navigate(['/login']);
                    return false;
                }
            });
        }
    }
}
/**jobs */
@Injectable()
export class AuthJobsGuard implements CanActivate, CanActivateChild {
    redirectUrl: string;
    user: Meteor.User;
    constructor(private router: Router,
        private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return !!this.checkLogin(url);
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
    checkLogin(url: string): boolean {       
        if (!!(this.authService.user && Roles.userIsInRole(this.authService.user, ['superadmin', 'employer','employee']))) {
            /**normal */
            return true;
        } else {
            this.authService.testLogin().subscribe(() => {
                if (!!(this.authService.user && Roles.userIsInRole(this.authService.user, ['superadmin', 'employer','employee']))) {
                    /**refresh */
                    this.router.navigate([url]);
                    return true;
                } else {
                    if (!!this.authService.user) {
                        return false;
                    }
                    this.authService.redirectUrl = url;
                    this.router.navigate(['/login']);
                    return false;
                }
            });
        }
    }
}
/**users */
@Injectable()
export class AuthUsersGuard implements CanActivate, CanActivateChild {
    redirectUrl: string;
    user: Meteor.User;
    constructor(private router: Router,
        private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return !!this.checkLogin(url);
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
    checkLogin(url: string): boolean {        
        if (!!(this.authService.user && Roles.userIsInRole(this.authService.user, ['superadmin']))) {
            /**normal */
            return true;
        } else {
            this.authService.testLogin().subscribe(() => {
                if (!!(this.authService.user && Roles.userIsInRole(this.authService.user, ['superadmin']))) {
                    /**refresh */
                    this.router.navigate([url]);
                    return true;
                } else {
                    if (!!this.authService.user) {
                        return false;
                    }
                    this.authService.redirectUrl = url;
                    this.router.navigate(['/login']);
                    return false;
                }
            });
        }
    }
}
// /**superadmin */
// @Injectable()
// export class AuthAtelierGuard implements CanActivate, CanActivateChild {
//     redirectUrl: string;
//     user: Meteor.User;
//     constructor(private router: Router,
//         private authService: AuthService) { }

//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//         let url: string = state.url;
//         return !!this.checkLogin(url);
//     }
//     canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//         return this.canActivate(route, state);
//     }
//     checkLogin(url: string): boolean {        
//         if (!!(this.authService.user && Roles.userIsInRole(this.authService.user, ['superadmin']))) {
//             /**normal */
//             return true;
//         } else {
//             this.authService.testLogin().subscribe(() => {
//                 if (!!(this.authService.user && Roles.userIsInRole(this.authService.user, ['superadmin']))) {
//                     /**refresh */
//                     this.router.navigate([url]);
//                     return true;
//                 } else {
//                     if (!!this.authService.user) {
//                         return false;
//                     }
//                     this.authService.redirectUrl = url;
//                     this.router.navigate(['/login']);
//                     return false;
//                 }
//             });
//         }
//     }
// }
/**admin */
@Injectable()
export class AuthAdminGuard implements CanActivate, CanActivateChild {
    redirectUrl: string;
    user: Meteor.User;
    constructor(private router: Router,
        private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return !!this.checkLogin(url);
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
    checkLogin(url: string): boolean {        
        if (!!(this.authService.user && Roles.userIsInRole(this.authService.user, ['superadmin']))) {
            /**normal */
            return true;
        } else {
            this.authService.testLogin().subscribe(() => {
                if (!!(this.authService.user && Roles.userIsInRole(this.authService.user, ['superadmin']))) {
                    /**refresh */
                    this.router.navigate([url]);
                    return true;
                } else {
                    if (!!this.authService.user) {
                        return false;
                    }
                    this.authService.redirectUrl = url;
                    this.router.navigate(['/login']);
                    return false;
                }
            });
        }
    }
}