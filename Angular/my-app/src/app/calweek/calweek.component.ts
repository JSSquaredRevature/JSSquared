import { Component, OnInit } from '@angular/core';
import { Options } from 'fullcalendar';
import { HttpClient } from '@angular/common/http';
import {forkJoin} from 'rxjs';

import { Case } from '../case';

@Component({
  selector: 'app-calweek',
  templateUrl: './calweek.component.html',
  styleUrls: ['./calweek.component.scss']
})
export class CalweekComponent implements OnInit {

  constructor(private http: HttpClient) { }

  calendarOptions: Options;
  displayEvent: any;

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
          left: 'prev,next week',
          center: 'title',
          right: 'agendaWeek'
        },
        events: eventArr,
        defaultView: 'basicWeek'
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
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }
}
