import { Component, OnInit } from '@angular/core';
import { Location, Time } from '@angular/common';
import * as moment from 'moment';

import { CourtDate } from '../court-date';
import { CourtDateService }  from '../court-date.service';

@Component({
  selector: 'app-court-date',
  templateUrl: './court-date.component.html',
  styleUrls: ['./court-date.component.css']
})
export class CourtDateComponent implements OnInit {

  courtDates: CourtDate[];
  selectedCourtDate: CourtDate;
  showInsertForm: boolean;
  courtDate: CourtDate[];
  
  constructor(
    private courtDateService: CourtDateService,
    private location: Location) { }

    ngOnInit(): void {
      document.body.className = "hold-transition skin-blue sidebar-mini";
      this.getCourtDates();
    }
   
    insertButtonSelected(): void {
      this.showInsertForm = true;
      this.selectedCourtDate = null;
    }
    
    courtDateSelected(courtDate: CourtDate): void {
      this.showInsertForm = false;
      this.selectedCourtDate = courtDate;
      this.selectedCourtDate.time = new Date(this.selectedCourtDate.time);
    }

    getCourtDates(): void {
      this.courtDateService.getCourtDates()
        .subscribe(CourtDate=> this.courtDates = CourtDate);
    }
   
    save(): void {
      var alteredDate = moment(new Date(this.selectedCourtDate.time).toISOString(), 'YYYY-MM-DD');
      this.selectedCourtDate.time = alteredDate['_i'];
      this.courtDateService.updateCourtDate(this.selectedCourtDate)
        .subscribe(() => this.getCourtDates());
    }

    insert(id: number, caseid: number, time: Date, location: string, transportationid: number): void {
      this.courtDateService.addCourtDate({ id, caseid, time, location, transportationid} as CourtDate)
      .subscribe(() => this.getCourtDates());

    }

    cancel(): void {
      this.selectedCourtDate = null;
      this.showInsertForm = false;
    }

    goBack(): void {
      this.location.back();
    }

}
