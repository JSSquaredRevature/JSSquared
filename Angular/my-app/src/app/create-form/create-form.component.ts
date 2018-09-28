import { Component, OnInit } from '@angular/core';
import { SocialwService } from './socialw.service';
import { PlacementService } from './placement.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  constructor(
    private socialw:SocialwService,
    private placement:PlacementService
  ) { }

  thisSoc = null;
  thisp = null;
  ngOnInit() {
    this.socialw.getSocialW().subscribe(data =>{
      this.thisSoc = data;
      console.log(data);
    })
    
    this.placement.getPlacement().subscribe(data =>{
      this.thisp = data;
      console.log(data);
    })
  }
}