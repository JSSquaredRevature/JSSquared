import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { HttpClient } from '@angular/common/http';
import {forkJoin} from 'rxjs';

import { Case } from '../case';

@Component({
  selector: 'app-calex',
  templateUrl: './calex.component.html',
  styleUrls: ['./calex.component.scss']
})

export class CalexComponent implements OnInit {
  calendarOptions: Options;
  displayEvent: any;

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    let cases = this.http.get('http://localhost:8080/JSSquared/admin/json');
    let courtDates = this.http.get('http://localhost:8080/JSSquared/courtdate/json');
    let visitations = this.http.get('http://localhost:8080/JSSquared/visit/json');
    let transportation = this.http.get('http://localhost:8080/JSSquared/transportation/json');

    forkJoin([cases, courtDates, transportation, visitations]).subscribe(data=> {
      var eventArr: any[] = [];

      var anyCase: any = data[0];
      for (let i = 0; i < Object.keys(data[0]).length; i++) {
        var eventTitle = anyCase[i].firstname + ' ' + anyCase[i].lastname + '\'s Birthday';        
        var monthDay = anyCase[i].birthdate.substr(5, 7);
        var date = new Date().getFullYear();
        var eventStart = date + '-' + monthDay;

        var caseEventObj = {
          caseid: anyCase[i].caseid,
          firstname: anyCase[i].firstname,
          lastname: anyCase[i].lastname,
          rating: anyCase[i].rating,
          socialworker: anyCase[i].sw,
          placement: anyCase[i].placement,
          siblings: anyCase[i].siblings,
          youngersiblings: anyCase[i].youngersiblings,
          title: eventTitle,
          start: eventStart
        }
        eventArr.push(caseEventObj);
      }

      var anyCourtDate: any = data[1];
      for (let i = 0; i < Object.keys(data[1]).length; i++) {
        var eventTitle = "Case #" + anyCourtDate[i].caseid + '\nCourt Date';
        var eventStart = (new Date(anyCourtDate[i].time)).toString();
  
        var courtDateEventObj = {
          id: anyCourtDate[i].id,
          caseid: anyCourtDate[i].caseid,
          time: anyCourtDate[i].time,
          location: anyCourtDate[i].location,
          transportationid: anyCourtDate[i].transportationid,
          title: eventTitle,
          start: eventStart
        }
        eventArr.push(courtDateEventObj);
      }

      var anyTransportation: any = data[3];
      for (let i = 0; i < Object.keys(data[3]).length; i++) {
        var eventTitle = "Social Worker #" + anyTransportation[i].socialworkerid +
                        "\nCase #" + anyTransportation[i].caseid + '\nTransportation Date';
        var eventStart = (new Date(anyTransportation[i].time)).toString();

        var transportationEventObj = {
          id: anyTransportation[i].id,
          socialworkerid: anyTransportation[i].socialworkerid,
          caseid: anyTransportation[i].caseid,
          time: anyTransportation[i].time,
          location: anyTransportation[i].location,
          title: eventTitle,
          start: eventStart
        }
        eventArr.push(transportationEventObj);
      }

      var anyVisitation: any = data[2];
      for (let i = 0; i < Object.keys(data[2]).length; i++) {
        var eventTitle = "Social Worker #" + anyVisitation[i].socialworkerid +
        "\nCase #" + anyVisitation[i].caseid + '\nVisitation';
        var eventStart = (new Date(anyVisitation[i].time)).toString();

        var visitationEventObj = {
          id: anyVisitation[i].id,
          time: anyVisitation[i].time,
          location: anyVisitation[i].location,
          transportationid: anyVisitation[i].transportationid,
          socialworkerid: anyVisitation[i].socialworkerid,
          caseid: anyVisitation[i].caseid,
          title: eventTitle,
          start: eventStart
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
    // console.log(typeof(model));
    // model = {
    //   event: {
    //     id: model.event.id,
    //     start: model.event.start,
    //     end: model.event.end,
    //     title: model.event.title,
    //     caseid: model.event.caseid,
    //     firstname: model.event.firstname,
    //     lastname: model.event.lastname,
    //     rating: model.event.rating,
    //     socialworker: model.event.socialworker,
    //     placement: model.event.placement,
    //   },
    //   duration: {
    //     _data: model.duration._data
    //   }

    // }
    // this.displayEvent = model;

    // this.case.caseid = model.event.caseid;
    // this.case.firstname = model.event.firstname;
    // this.case.lastname = model.event.lastname;
    // var newDate: Date = new Date(model.event.start['_d'].getFullYear() + '-' 
    // + (model.event.start['_d'].getMonth() +1) + '-' + (model.event.start['_d'].getDate() + 2) +'Z');
    // console.log(newDate);
    // this.case.birthdate = newDate;
    // this.case.rating = model.event.rating;
    // this.case.sw = model.event.socialworker;
    // this.case.placement = model.event.placement;

    // this.caseService.updateCase(this.case).subscribe();

    // Need to retrieve data from database to use right before updating.
    // this.http.get(this.casesUrl + '/update').subscribe(data => {
  
    // });
  }

}
