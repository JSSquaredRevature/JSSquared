import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule} from 'ng-fullcalendar'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { CreateFormComponent } from './create-form/create-form.component';

import { TopnavbarComponent } from './layout/topnavbar/topnavbar.component';
import { SidenavbarComponent } from './layout/sidenavbar/sidenavbar.component';
import { FooterComponent } from './layout/footer/footer.component';

import {UrlService} from './url.service';
import { CaseComponent } from './case/case.component';
import { SocialWorkerComponent } from './social-worker/social-worker.component';
import { CourtDateComponent } from './court-date/court-date.component';
import { CalexComponent } from './calex/calex.component';

import { PhoneLogComponent } from './phone-log/phone-log.component';
import { CalweekComponent } from './calweek/calweek.component';
import { CalagendaComponent } from './calagenda/calagenda.component';

import { VisitComponent } from './visit/visit.component';


import { TransportationComponent } from './transportation/transportation.component';
import { ProfileComponent } from './profile/profile.component';
import { PlacementComponent } from './placement/placement.component';
import { NgxPermissionsModule } from 'ngx-permissions';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    DashboardComponent,
    CreateFormComponent,
    TopnavbarComponent,
    SidenavbarComponent,
    FooterComponent,
    CaseComponent,
    SocialWorkerComponent,
    CourtDateComponent,
    CalexComponent,
    CalweekComponent,
    CalagendaComponent,
    VisitComponent,
    TransportationComponent,
    ProfileComponent,
    PhoneLogComponent,
    PlacementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FullCalendarModule,
    NgxPermissionsModule.forRoot(),
    FormsModule,
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
      component: AdminComponent,
      canActivate: [AuthGuard]
    },
    {path: 'cases', component: CaseComponent, canActivate: [AuthGuard]},
    {path: 'case', component: CaseComponent, canActivate: [AuthGuard]},
    {path: 'phonelog', component: PhoneLogComponent, canActivate: [AuthGuard]},
    {path: 'socialworker', component: SocialWorkerComponent, canActivate: [AuthGuard]},
    {path: 'courtdate', component: CourtDateComponent, canActivate: [AuthGuard]}, 
    {path: 'calendar', component: CalexComponent, canActivate: [AuthGuard]},   
    {path: 'visit', component: VisitComponent, canActivate: [AuthGuard]},
    {path: 'transportation', component: TransportationComponent, canActivate: [AuthGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'placement', component: PlacementComponent, canActivate: [AuthGuard]}

    ])
  ],
  providers: [AuthGuard, UrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
