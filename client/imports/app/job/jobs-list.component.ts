import { Component, OnInit, OnDestroy } from '@angular/core';
import template from './jobs-list.component.html';
import style from './jobs-list.component.scss';
import { Observable } from 'rxjs/Observable';
import { MeteorObservable } from 'meteor-rxjs';
import { PaginationService } from 'ng2-pagination';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Counts } from 'meteor/tmeasday:publish-counts';
import { Jobs } from '../../../../both/collections/jobs.collection'
import { Job } from '../../../../both/models/job.model';

interface Pagination {
    limit: number;
    skip: number;
}

interface Options extends Pagination {
    [key: string]: any
}


@Component({
    selector: 'jobs-list',
    template,
    styles: [style]
})
@InjectUser('user')
export class JobsListComponent implements OnInit, OnDestroy{
    jobs: Observable<Job[]>;
    jobsSub: Subscription;
    pageSize: Subject<number> = new Subject<number>();
    curPage: Subject<number> = new Subject<number>();
    nameOrder: Subject<number> = new Subject<number>();
    optionsSub: Subscription;
    jobsSize: number =0;
    autorunSub: Subscription;
    user: Meteor.User;
    location: Subject<string> = new Subject<string>();
    

    constructor(private paginationService: PaginationService){}
    
    ngOnInit(): void {
        
        this.optionsSub = Observable.combineLatest(
            this.pageSize,
            this.curPage,
            this.nameOrder,
            this.location
           
        ).subscribe(([pageSize, curPage, nameOrder, location])=>{
            const options: Options = {
            limit: pageSize as number,
            skip: ((curPage as number) -1)* (pageSize as number),
            sort: {ten_cong_viec: nameOrder as number}
        };
        this.paginationService.setCurrentPage(this.paginationService.defaultId(), curPage as number);
        
        if (this.jobsSub){
            this.jobsSub.unsubscribe();
        }

        this.jobsSub = MeteorObservable.subscribe('all-jobs', options, location).subscribe(()=>{
                this.jobs = Jobs.find({},{
                    sort: {
                        ten_cong_viec: this.nameOrder
                    }
                }).zone();            
                
            }); 
        });
        this.paginationService.register({
            id: this.paginationService.defaultId(),
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.jobsSize,
        });
        this.pageSize.next(5);
        this.curPage.next(1);
        this.nameOrder.next(1);
        this.location.next('');
        
        
        this.autorunSub = MeteorObservable.autorun().subscribe(() => {
            this.jobsSize = Counts.get('jobsCount');
            this.paginationService.setTotalItems(this.paginationService.defaultId(), this.jobsSize);
        })
    }
    isOwner(job: Job): boolean {
        return this.user && this.user._id === job.owner;
    }
    removeJob(job: Job): void{
        Jobs.remove(job._id);
    }

    search(value: string): void{
        this.curPage.next(1);
        this.location.next(value);
    }

    onPageChanged(page: number): void {
        this.curPage.next(page);
    }

    changeSortOrder(nameOrder: string): void {
        this.nameOrder.next(parseInt(nameOrder));
    }

    
    ngOnDestroy(): void {
        this.jobsSub.unsubscribe();
        this.optionsSub.unsubscribe();
        this.autorunSub.unsubscribe();
        
    }
}
