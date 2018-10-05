import { Component, OnInit } from '@angular/core';
import {Location } from '@angular/common';
import * as moment from 'moment';

import { Transportation } from '../transportation';
import { TransportationService } from '../transportation.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.scss']
})
export class TransportationComponent implements OnInit {

  transportations: Transportation[];
  selectedTransportation: Transportation;
  showInsertForm: boolean;
  transportation: Transportation[];
  
  constructor(
    private transportationService: TransportationService,
    private location: Location,
    private auth: AuthService) { }

    ngOnInit(): void {
      document.body.className = "hold-transition skin-blue sidebar-mini";
      this.getTransportations();
    }
   
    insertButtonSelected(): void {
      this.showInsertForm = true;
      this.selectedTransportation = null;
    }
    
    transportationSelected(transportation: Transportation): void {
      this.showInsertForm = false;
      this.selectedTransportation = transportation;
    }

    getTransportations(): void {
      this.transportationService.getTransportations()
        .subscribe(Transportation=> this.transportations = Transportation);
    }
   
    save(): void {
      var alteredDate = moment(new Date(this.selectedTransportation.time).toISOString(), 'YYYY-MM-DD');
      this.selectedTransportation.time = alteredDate['_i'];
      this.transportationService.updateTransportation(this.selectedTransportation)
      .subscribe(() => this.getTransportations());
    }

    delete(): void {
      if(confirm("Are you sure you want to delete Court Id #" + this.selectedTransportation.id)) {
        this.transportationService.deleteTransportation(this.selectedTransportation).subscribe(() => this.getTransportations());
        this.selectedTransportation = null;
      }
    }

    insert(id: number, socialworkerid: number, caseid: number, time: Date, location: string): void {
      this.transportationService.addTransportation({ id, socialworkerid, caseid, time, location } as Transportation)
      .subscribe(() => this.getTransportations());
    }

    cancel(): void {
      this.selectedTransportation = null;
      this.showInsertForm = false;
    }

    goBack(): void {
      this.location.back();
    }
}
