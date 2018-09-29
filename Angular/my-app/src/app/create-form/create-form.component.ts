import { Component, OnInit } from '@angular/core';
import { SocialwService } from './socialw.service';
import { PlacementService } from './placement.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  constructor(
    private socialw:SocialwService,
    private placement:PlacementService,
    private auth: AuthService
  ) { }

  thisSoc = null;
  thisp = null;
  ngOnInit() {
    document.body.className = "hold-transition skin-blue sidebar-mini";
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