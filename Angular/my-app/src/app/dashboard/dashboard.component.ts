import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DashService } from '../dash.service';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(private auth: AuthService, private router: Router) { }

  calendarOptions: Options;

  ngOnInit() {
    document.body.className = "hold-transition skin-blue sidebar-mini";
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      }
      
    };
  }

  ngOnDestroy() :void {
    document.body.className = "";
  }

  CreateCase(){
    this.router.navigate(['create-form'])
    console.log("reached")
  }


  

}
