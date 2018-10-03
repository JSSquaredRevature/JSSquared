import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { HttpClient } from '@angular/common/http';

import { Case } from '../case';

@Component({
  selector: 'app-calex',
  templateUrl: './calex.component.html',
  styleUrls: ['./calex.component.scss']
})

export class CalexComponent implements OnInit {
  calendarOptions: Options;
  displayEvent: any;
  cases: Case[] = [];
  private casesUrl = 'http://localhost:8080/JSSquared/admin';
  convertDataObj2Any: any;
  eventTitle: any;
  eventStart: any;
  
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.casesUrl + '/json').subscribe(data => {
      this.convertDataObj2Any = data;
      var eventArr: any[] = [];
      
      $.each(this.convertDataObj2Any, function (index, item) {
        this.eventTitle = item.firstname + ' ' + item.lastname + '\'s Birthday';        
        var monthDay = item.birthdate.substr(5, 7);
        var date = new Date().getFullYear();
        this.eventStart = date + '-' + monthDay;

        var eventObj = {
          title: this.eventTitle,
          start: this.eventStart
        };

        eventArr.push(eventObj);

      });

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
