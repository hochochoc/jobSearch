import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Meteor } from 'meteor/meteor';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Jobs } from '../../../../both/collections/jobs.collection'; 
import template from './jobs-form.component.html';
import style from './jobs-form.component.scss';
@Component({
    selector: "jobs-form",
    template,
    styles: [style]
})

@InjectUser('user')
export class JobsFormComponent implements OnInit{
    addForm: FormGroup;
    user: Meteor.User;
    newJobPosition: {lat:number, lng: number} = {lat: 37.4292, lng: -122.1381};
    

    constructor(
        private formBuilder: FormBuilder
    ){

    }

    ngOnInit(): void {
        console.log(this.user);
        this.addForm = this.formBuilder.group({
            ten_cong_viec: ['', Validators.required],
            nha_tuyen_dung: ['', Validators.required],
            location: ['', Validators.required],
            mo_ta: [],
            yeu_cau: [],
            dien_thoai: ['', Validators.required],
            luong: [],
            public: [true],
            date: ['', Validators.required]
        })
    }

    mapClicked($event) {
        this.newJobPosition = $event.coords;
    }

    addJob(): void {
        if (!Meteor.userId){
            alert('Please log in to add a job');
            return ;
        }
        if (this.addForm.valid){
            console.log('a');
            Jobs.insert({
                ten_cong_viec: this.addForm.value.ten_cong_viec,
                nha_tuyen_dung: this.addForm.value.nha_tuyen_dung,
                location: {
                    name: this.addForm.value.location,
                    lat: this.newJobPosition.lat,
                    lng: this.newJobPosition.lng

                },
                mo_ta: this.addForm.value.mo_ta,
                yeu_cau: this.addForm.value.yeu_cau,
                dien_thoai: this.addForm.value.dien_thoai,
                luong: this.addForm.value.luong,
                public: this.addForm.value.public,
                owner: this.user._id,
                date: new Date(this.addForm.value.date)
            });
            this.addForm.reset();
            alert('Dang tin thanh cong');
        }
        else {
            alert("Bạn chưa nhập đủ dữ liệu, hãy kiểm tra lại");
        }
    }

}
