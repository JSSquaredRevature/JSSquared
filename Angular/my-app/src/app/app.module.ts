import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateFormComponent } from './create-form/create-form.component';
<<<<<<< HEAD
import {UrlService} from './url.service';
=======
import { CaseComponent } from './case/case.component';
import { SocialWorkerComponent } from './social-worker/social-worker.component';

>>>>>>> 24494f745e524221b88b6dc7a04483ff8d625410
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    DashboardComponent,
    CreateFormComponent,
    CaseComponent,
    SocialWorkerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
    {
      path: 'create-form',
      component: CreateFormComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: '',
      component: LoginComponent
    },
    {
      path: 'admin',
      component: AdminComponent
    },
    {path: 'cases', component: CaseComponent},
    {path: 'socialworkers', component: SocialWorkerComponent},
    ])
  ],
  providers: [UrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
