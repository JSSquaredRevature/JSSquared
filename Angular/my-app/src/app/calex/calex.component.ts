import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin } from 'rxjs';

import { Case } from '../case';
import { CaseService } from '../case.service';
import { CourtDate } from '../court-date';
import { CourtDateService } from '../court-date.service';
import { Transportation } from '../transportation';
import { TransportationService } from '../transportation.service';
import { Visit } from '../visit';
import { VisitService } from '../visit.service';
import { AuthService } from '../auth.service';
import { UrlService } from '../url.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-calex',
  templateUrl: './calex.component.html',
  styleUrls: ['./calex.component.scss']
})

export class CalexComponent implements OnInit {
  calendarOptions: Options;
  displayEvent: any;

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  
  constructor(private http: HttpClient,
    private caseService: CaseService, 
    private courtDateService: CourtDateService,
    private transportationService: TransportationService,
    private visitService: VisitService,
    private authService: AuthService,
    private urlService:UrlService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    if (+this.authService.getIsAdmin() === 0) {
      var cases = this.http.get(this.urlService.getUrl() + 'createcase/socialworker/id', 
      { params: { id: this.authService.getId() } } );
      var courtDates = this.http.get(this.urlService.getUrl() + 'courtdate/socialworker/id', 
      { params: { id: this.authService.getId() } } );
      var transportation = this.http.get(this.urlService.getUrl() + 'transportation/socialworker/id', 
      { params: { id: this.authService.getId() } } );
      var visitations = this.http.get(this.urlService.getUrl() + 'visit/socialworker/id', 
      { params: { id: this.authService.getId() } } );
    }
    
    if (+this.authService.getIsAdmin() === 1) {
      var cases = this.http.get(this.urlService.getUrl() + 'createcase');
      var courtDates = this.http.get(this.urlService.getUrl() + 'courtdate');
      var transportation = this.http.get(this.urlService.getUrl() + 'transportation');
      var visitations = this.http.get(this.urlService.getUrl() + 'visit');
    }

    forkJoin([cases, courtDates, transportation, visitations]).subscribe(data=> {
      var eventArr: any[] = [];

      var anyCase: any = data[0];
      for (let i = 0; i < Object.keys(data[0]).length; i++) {
        var eventTitle = anyCase[i].firstname + ' ' + anyCase[i].lastname + '\'s Birthday';        
        var monthDay = anyCase[i].birthdate.substr(5, 7);
        var date = new Date().getFullYear();
        var eventStart = date + '-' + monthDay;
        eventStart = new Date(eventStart).toISOString();

        var caseEventObj = {
          caseid: anyCase[i].caseid,
          title: eventTitle,
          start: eventStart,
          className: 'Case',
        }
        
        eventArr.push(caseEventObj);
      }

      var anyCourtDate: any = data[1];
      for (let i = 0; i < Object.keys(data[1]).length; i++) {
        var eventTitle = "Case #" + anyCourtDate[i].caseid + '\nCourt Date';
        var eventStart = (new Date(anyCourtDate[i].time)).toISOString();
  
        var courtDateEventObj = {
          id: anyCourtDate[i].id,
          title: eventTitle,
          start: eventStart,
          className: 'CourtDate',
        }
        eventArr.push(courtDateEventObj);
      }

      var anyTransportation: any = data[2];
      for (let i = 0; i < Object.keys(data[2]).length; i++) {
        var eventTitle = "Social Worker #" + anyTransportation[i].socialworkerid +
                        "\nCase #" + anyTransportation[i].caseid + '\nTransportation Date';
        var eventStart = (new Date(anyTransportation[i].time)).toISOString();

        var transportationEventObj = {
          id: anyTransportation[i].id,
          title: eventTitle,
          start: eventStart,
          className: 'Transportation',
        }
        eventArr.push(transportationEventObj);
      }

      var anyVisitation: any = data[3];
      for (let i = 0; i < Object.keys(data[3]).length; i++) {
        var eventTitle = "Social Worker #" + anyVisitation[i].socialworkerid +
        "\nCase #" + anyVisitation[i].caseid + '\nVisitation';
        var eventStart = (new Date(anyVisitation[i].time)).toISOString();

        var visitationEventObj = {
          id: anyVisitation[i].id,
          title: eventTitle,
          start: eventStart,
          className: 'Visitation',
        }
        eventArr.push(visitationEventObj);
      }

      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        events: eventArr
      };
      
    });

  }

  clickButton(model: any) {
    this.displayEvent = model;
  }

  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
      },
      duration: {}
    }
    this.displayEvent = model;
  }

  updateEvent(model: any) {
    
    if (model.event.className[0] === "Case") {
      this.http.get<Case>(this.urlService.getUrl() + '/createcase/id', { params: {id: model.event.caseid} })
      .subscribe(data => { data.birthdate = model.event.start._d;
                           this.caseService.updateCase(data).subscribe() } );
    }
    else if (model.event.className[0] === "CourtDate") {
      this.http.get<CourtDate>(this.urlService.getUrl() + '/courtdate/id', { params: {id: model.event.id} })
      .subscribe(data => { data.time = model.event.start._d;
                           this.courtDateService.updateCourtDate(data).subscribe() } );
    }
    else if (model.event.className[0] === "Transportation") {
      this.http.get<Transportation>(this.urlService.getUrl() + '/transportation/id', { params: {id: model.event.id} })
      .subscribe(data => { data.time = model.event.start._d;
                           this.transportationService.updateTransportation(data).subscribe() } );
    }
    else if (model.event.className[0] === "Visitation") {
      this.http.get<Visit>(this.urlService.getUrl() + '/visit/id', { params: {id: model.event.id} })
      .subscribe(data => { data.time = model.event.start._d;
                           this.visitService.updateVisits(data).subscribe() } );
    }

  }

}
