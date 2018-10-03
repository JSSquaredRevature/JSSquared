import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { HttpClient } from '@angular/common/http';

import { Case } from '../case';
import { CaseService }  from '../case.service';

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
  case: Case = new Case();
  
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(private http: HttpClient,
    private caseService: CaseService) { }

  ngOnInit() {
    this.http.get(this.casesUrl + '/json').subscribe(data => {
      this.convertDataObj2Any = data;
      console.log(this.convertDataObj2Any);
      var eventArr: any[] = [];
      
      $.each(this.convertDataObj2Any, function (index, item) {
        this.eventTitle = item.firstname + ' ' + item.lastname + '\'s Birthday';        
        var monthDay = item.birthdate.substr(5, 7);
        var date = new Date().getFullYear();
        this.eventStart = date + '-' + monthDay;

        var eventObj = {
          caseid: this.caseid,
          firstname: this.firstname,
          lastname: this.lastname,
          rating: this.rating,
          socialworker: this.sw,
          placement: this.placement,
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
        title: model.event.title,
        caseid: model.event.caseid,
        firstname: model.event.firstname,
        lastname: model.event.lastname,
        rating: model.event.rating,
        socialworker: model.event.socialworker,
        placement: model.event.placement,
      },
      duration: {
        _data: model.duration._data
      }

    }
    this.displayEvent = model;

    this.case.caseid = model.event.caseid;
    this.case.firstname = model.event.firstname;
    this.case.lastname = model.event.lastname;
    console.log(model.event.start['_d']);
    console.log(model.event.start['_d'].getDay() + 1);
    console.log(model.event.start['_d'].getDate() + 1);
    var newDate: Date = new Date(model.event.start['_d'].getFullYear() + '-' 
    + (model.event.start['_d'].getMonth() +1) + '-' + (model.event.start['_d'].getDate() + 2) +'Z');
    console.log(newDate);
    this.case.birthdate = newDate;
    this.case.rating = model.event.rating;
    this.case.sw = model.event.socialworker;
    this.case.placement = model.event.placement;

    this.caseService.updateCase(this.case).subscribe();

    // Need to retrieve data from database to use right before updating.
    // this.http.get(this.casesUrl + '/update').subscribe(data => {
  
    // });
  }

}
