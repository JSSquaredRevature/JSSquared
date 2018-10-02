import { Component, OnInit } from '@angular/core';
import {Location } from '@angular/common';
import  { Timestamp } from 'rxjs';
import { Time } from "@angular/common";

import { Transportation } from '../transportation';
import { TransportationService } from '../transportation.service';

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
    private location: Location) { }

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
      this.transportationService.updateTransportation(this.selectedTransportation)
        .subscribe(() => this.goBack());
    }

    insert(id: number, socialworkerid: number, caseid: number, time: Timestamp<Time>, location: string): void {
      this.transportationService.addTransportation({ id, socialworkerid, caseid, time, location } as Transportation)
        .subscribe(Transportation => {
          this.transportation.push(Transportation);
        });
    }

    cancel(): void {
      this.selectedTransportation = null;
      this.showInsertForm = false;
    }

    goBack(): void {
      this.location.back();
    }
}
