import { Component, OnInit } from '@angular/core';
import { PlacementService } from '../create-form/placement.service';
import { Location, Time } from '@angular/common';
import { Placement } from '../placement';
import { AuthService } from '../auth.service';

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
    private location: Location,
    private auth: AuthService) { }

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

  delete(): void {
    if(confirm("Are you sure you want to delete Court Id #" + this.placementSelected.id)) {
      this.placementService.deletePlacement(this.placementSelected).subscribe(() => this.getPlacements());
      this.placementSelected = null;
    }
  }

  insert(id: number, type: string, maxcapacity: number, agemin: number, agemax: number): void {
    this.placementService.addPlacement({ 'id':id, 'type':type,'maxcapacity':maxcapacity,'agemin':agemin,'agemax': agemax} as Placement)
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
