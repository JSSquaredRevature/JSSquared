import { Component, OnInit } from '@angular/core';
import { Location, Time } from '@angular/common';

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
  
  showAddCourtForm: boolean;

  courtDate: CourtDate[];
  
  constructor(
    private courtDateService: CourtDateService,
    private location: Location) { }

    ngOnInit(): void {
      this.getCourtDates();
    }
   
    addButtonSelected(): void {
      this.showAddCourtForm = true;
      this.selectedCourtDate = null;
    }
    
    onSelect(courtDate: CourtDate): void {
      this.showAddCourtForm = false;
      this.selectedCourtDate = courtDate;
    }

    getCourtDates(): void {
      this.courtDateService.getCourtDates()
        .subscribe(CourtDate=> this.courtDates = CourtDate);
    }
   
    save(): void {
      this.courtDateService.updateCourtDate(this.selectedCourtDate)
        .subscribe(() => this.goBack());
    }

    insert(id: number, caseid: number, time: Time, location: string, transportationid: number): void {
      this.courtDateService.addCourtDate({ id, caseid, time, location, transportationid} as CourtDate)
        .subscribe(CourtDate => {
          this.courtDate.push(CourtDate);
        });
    }

    cancel(): void {
      this.selectedCourtDate = null;
      this.showAddCourtForm = false;
    }

    goBack(): void {
      this.location.back();
    }

}
