import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { CaseComponent } from './case/case.component';
import { SocialWorkerComponent } from './social-worker/social-worker.component';
import { CourtDateComponent } from './court-date/court-date.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    DashboardComponent,
    CreateFormComponent,
    CaseComponent,
    SocialWorkerComponent,
    CourtDateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
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
    {path: 'case', component: CaseComponent},
    {path: 'socialworker', component: SocialWorkerComponent},
    {path: 'courtdate', component: CourtDateComponent},    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
