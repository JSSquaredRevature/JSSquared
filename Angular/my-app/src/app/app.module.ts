import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { CreateFormComponent } from './create-form/create-form.component';
<<<<<<< HEAD
import { TopnavbarComponent } from './layout/topnavbar/topnavbar.component';
import { SidenavbarComponent } from './layout/sidenavbar/sidenavbar.component';
import { FooterComponent } from './layout/footer/footer.component';

=======
import { CaseComponent } from './case/case.component';
import { SocialWorkerComponent } from './social-worker/social-worker.component';
>>>>>>> staging

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    DashboardComponent,
    CreateFormComponent,
<<<<<<< HEAD
    TopnavbarComponent,
    SidenavbarComponent,
    FooterComponent
=======
    CaseComponent,
    SocialWorkerComponent
>>>>>>> staging
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
    {
      path: 'create-form',
      component: CreateFormComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuard]
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
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
