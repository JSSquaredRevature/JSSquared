import { Component, OnInit } from '@angular/core';
import { Location, Time } from '@angular/common';

import { Visit } from '../visit';
import { VisitService } from '../visit.service';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss']
})
export class VisitComponent implements OnInit {
  
  visits: Visit[];
  selectedvisit: Visit;
  showInsertForm: boolean;
  visit: Visit[];
  
  constructor(
    private visitService: VisitService,
    private location: Location) { }

    ngOnInit(): void {
      document.body.className = "hold-transition skin-blue sidebar-mini";
      this.getVisits();
      this.showInsertForm = false;
    }
   
    insertButtonSelected(): void {
      this.showInsertForm = true;
      this.selectedvisit = null;
    }
    
    visitSelected(visit: Visit): void {
      this.showInsertForm = false;
      this.selectedvisit = visit;
    }

    getVisits(): void {
      this.visitService.getVisits()
        .subscribe(Visit=> this.visits = Visit);
    }
   
    save(): void {
      this.visitService.updateVisits(this.selectedvisit)
      .subscribe(() => this.getVisits());
    }

    insert(id: number, socialworkerid: number, caseid: number, time: Date, location: string, transportationid: number): void {
      this.visitService.addVisit({ id, socialworkerid, caseid,time, location, transportationid} as Visit)
      .subscribe(() => this.getVisits());
    }

    cancel(): void {
      this.selectedvisit = null;
      this.showInsertForm = false;
    }

    goBack(): void {
      this.location.back();
    }
}
