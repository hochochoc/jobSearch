import { Component, OnInit, OnDestroy } from '@angular/core';
import template from './jobs-detail.component.html';
import style  from './jobs-detail.component.scss';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import { ActivatedRoute, CanActivate } from '@angular/router';
import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';
import { Observable } from 'rxjs/Observable';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Location } from '@angular/common';
import { MouseEvent } from 'angular2-google-maps/core';
import { Job } from '../../../../both/models/job.model';
import { Jobs } from '../../../../both/collections/jobs.collection';
import { Users } from '../../../../both/collections/users.collection';
import { User } from '../../../../both/models/user.model';

@Component({
    template,
    styles: [style]
})

@InjectUser('user')
export class JobDetailComponent implements OnInit, OnDestroy, CanActivate{
    job: Job;
    jobId: string;
    paramsSub: Subscription;
    jobSub: Subscription;
    users: Observable<User>;
    uninvitedSub: Subscription;
    user: Meteor.User;
    centerLat: number = 37.4292;
    centerLng: number = -122.1381;

    constructor(private route: ActivatedRoute, private location: Location){

    }
    ngOnInit(): void {
        this.paramsSub = this.route.params.map(params => params['jobId']).subscribe(jobId => {
            this.jobId = jobId;
            if (this.jobSub){
                this.jobSub.unsubscribe();
            }
            this.jobSub = MeteorObservable.subscribe('job', this.jobId).subscribe(() => {
                MeteorObservable.autorun().subscribe(()=>{
                    this.job = Jobs.findOne(this.jobId);
                    this.getUsers(this.job);
                });
                
            });
            if (this.uninvitedSub){
                this.uninvitedSub.unsubscribe();
            }
            this.uninvitedSub = MeteorObservable.subscribe('uninvited', this.jobId).subscribe(()=>{
                this.getUsers(this.job);
                
            });
      
        });
    }

    getUsers(job: Job){
        if (job){
            this.users = Users.find({
                _id: {
                    $ne: Meteor.userId()
                }
            }).zone();
        }
    }
    ngOnDestroy(): void {
        this.paramsSub.unsubscribe();
        this.jobSub.unsubscribe();
        this.uninvitedSub.unsubscribe();
    }
    saveJob(): void {
        if (!Meteor.userId()){
            alert('Please log in to change this job');
            return;
        }
        Jobs.update(this.job._id, {
            $set: {
                ten_cong_viec: this.job.ten_cong_viec,
                nha_tuyen_dung: this.job.nha_tuyen_dung,
                location: this.job.location,
                mo_ta: this.job.mo_ta,
                yeu_cau: this.job.yeu_cau,
                dien_thoai: this.job.dien_thoai,
                luong: this.job.luong,
                public: this.job.public,
                date: new Date(this.job.date),
            }
        })
        alert('Sua thanh cong');
    }

    invite(user: Meteor.User) {
        MeteorObservable.call('invite', this.job._id, user._id).subscribe(()=>{
            alert('User successfully invited');
        }, (error)=> {
            alert(`Failed to invite due to ${error}`);
        });
    }

    reply(rsvp: string){
        MeteorObservable.call('reply', this.job._id, rsvp).subscribe(()=>{
            alert('You successfully replied');
        }, (error)=> { 
            alert(`Failed to reply due to ${error}`);
        });
    }

    get isOwner(): boolean{
        return this.job && this.user && this.user._id === this.job.owner;
    }

    get isPublic(): boolean {
        return this.job && this.job.public;
    }

    get isInvited(): boolean {
        if (this.job&&this.user){
            const invited = this.job.invited || [];
            return invited.indexOf(this.user._id) !==-1;
        }
        return false;
    }

    get lat(): number {
        return this.job && this.job.location.lat;
    }

    get long(): number {
        return this.job && this.job.location.lng;
    }

    mapClicked($event: MouseEvent) {
        this.job.location.lat = $event.coords.lat;
        this.job.location.lng = $event.coords.lng;
    }

    canActivate() {
        const job = Jobs.findOne(this.jobId);
        return (job && job.owner == Meteor.userId());
    }
    goBack(): void {
        this.location.back();
    }
}