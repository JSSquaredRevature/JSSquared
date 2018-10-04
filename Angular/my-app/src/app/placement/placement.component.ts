import { Component, OnInit } from '@angular/core';
import { PlacementService } from '../create-form/placement.service';
import { Location, Time } from '@angular/common';
@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.scss']
})
export class PlacementComponent implements OnInit {

  placementSelected;
  placements;
  showInsertForm: boolean;
  constructor(private placementService:PlacementService,
    private location: Location) { }

  ngOnInit() {
    document.body.className = "hold-transition skin-blue sidebar-mini";
      this.getPlacements();
  }

  insertButtonSelected(): void {
    this.showInsertForm = true;
    this.placementSelected = null;
  }

  pSelected(placement): void {
    this.showInsertForm = false;
    this.placementSelected = placement;
  }

  getPlacements(){
    this.placementService.getPlacement().subscribe(data=>{
      this.placements=data;
    })
  }

  save(): void {
    this.placementService.updatePlacement(this.placementSelected)
    .subscribe(() => this.getPlacements());
  }
  insert(id: number, type: string, maxcapacity: number, agemin: number, agemax: number): void {
    this.placementService.addPlacement({ 'id':id, 'type':type,'maxcapacity':maxcapacity,'agemin':agemin,'agemax': agemax})
    .subscribe(() => this.getPlacements());
  }
  
  cancel(): void {
    this.placementSelected = null;
    this.showInsertForm = false;
  }

  goBack(): void {
    this.location.back();
  }
}
