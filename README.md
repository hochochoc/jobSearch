#Usage 
Đầu tiên, cài đặt Meteor trên máy tính
- Linux: 
```
curl https://install.meteor.com/ | sh
```
- Window: 
Làm theo hướng dẫn trong tutorial install của Meteor:
https://www.meteor.com/install

Để chạy chương trình:
```
meteor
```
Reset dữ liệu:
```
meteor reset 
```
## App Contents

This boilerplate contains the basics that requires to quick start with Angular2-Meteor application.

Gói gồm: 

- TypeScript hỗ trợ  (`@types`) và trình dịch Angular 2 cho Meteor
- Angular2-Meteor
- Angular 2 (core, common, compiler, platform, router, forms)
- Hỗ trợ SASS, LESS, CSS
- Testing framework: Mocha và Chai
- [Meteor-RxJS](http://angular-meteor.com/meteor-rxjs/)
Ứng dụng gồm: 

- Main Component (`/client/imports/app/app.component`)
- Child Component:
job:
	JobsListComponent (`/client/imports/app/job/jobs-list.component`)
	JobDetailComponent (`/client/imports/app/job/job-detail.component`)
	JobFormComponent (`/client/imports/app/job/job-form.component`)
auth: 
	LoginComponent (`/client/imports/app/auth/login.component`)
	RecoverComponent (`/client/imports/app/auth/recover.component`)
	SignupComponent (`/client/imports/app/auth/signup.component`)	
compose-message: 
	ComposeMessageComponent (`/client/imports/app/compose-message.component`)
page-not-found:
	PageNotFoundComponent (`/client/imports/app/page-not-found.component`)
- Pipe:
	RsvpPipe (`/client/imports/app/shared/rsvp.pipe`)
	DisplaynamePipe (`/client/imports/app/shared/displayname.pipe`)
- Method:(`/both/methods/jobs.methods`)
- Models:(`/both/models/jobs.model`)
- Mongo Collection (`/both/collections`)
	Job (`/both/collections/jobs.collection`)
	User (`/both/collections/users.collection`)
- Server side:
fixtures: 
	job (`/server/imports/fixtures/jobs`)
publications:
	job (`/server/imports/publications/jobs`)
	user (`/server/imports/publications/users`)



