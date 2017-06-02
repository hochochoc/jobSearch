import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Meteor } from 'meteor/meteor';
import { AuthService } from './auth.service';
import template from './login-employer.component.html';
import { Roles } from 'meteor/alanning:roles';
@Component({
    selector: 'loginem',
    template
})

export class LoginEmployerComponent implements OnInit{
    loginForm: FormGroup;
    error: string;
    user: Meteor.User;
    redirect: string = '';

    constructor(private router: Router, private authService: AuthService, private zone: NgZone, private formBuilder: FormBuilder){

    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.error='';
    }

    login(){
        if (this.loginForm.valid){
            Meteor.loginWithPassword(this.loginForm.value.email, this.loginForm.value.password, (err)=>{
                if (err) {
                    this.error = err;
                }else {
                    this.authService.testLogin().subscribe(()=> {
                        if (!!this.authService.user && Roles.userIsInRole(this.authService.user, ['employer'])){
                            this.zone.run(()=>{
                                this.router.navigate(['/employer']);
                            })
                        }
                        

                    });
                }
            })
        };
    }
            //     this.zone.run(()=>{
            //         if (err){
            //             this.error = err;
            //         }
            //         else {
            //             this.router.navigate(['/admin']);
            //         }
            //     });
            // });
}