import { Component, OnInit } from '@angular/core';
import { SocialwService } from './socialw.service';
import { PlacementService } from './placement.service';
import { AuthService } from '../auth.service';
import { SubmitService } from './submit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  constructor(
    private socialw:SocialwService,
    private placement:PlacementService,
    private auth: AuthService,
    private submit:SubmitService,
    private router: Router
  ) { }
  selectedp=null;
  thisSoc = null;
  thisp = null;
  ngOnInit() {
    document.body.className = "hold-transition skin-blue sidebar-mini";
    this.socialw.getSocialW().subscribe(data =>{
      this.thisSoc = data;
      console.log(data);
    });
    
    this.placement.getPlacement().subscribe(data =>{
      this.thisp = data;
      console.log(data);
    });
  }

  setSelectedP(p){

    console.log(p);
    console.log('change');
    this.selectedp=p;
  }
  newForm(event){
    event.preventDefault()
    const target = event.target
    const firstname = target.querySelector('#firstname').value
    const lastname = target.querySelector('#lastname').value
    const birthdate = target.querySelector('#birthdate').value
    const rating = target.querySelector('#rating').value
    const socialw = target.querySelector('#socialworker').value
    const placement = target.querySelector('#placement').value
    const age = new Date().getFullYear()-new Date(birthdate).getFullYear();
    console.log(this.selectedp.id);
    if(age>this.selectedp.agemax){
      alert(`Child must be under ${this.selectedp.agemax} for selected placement`);
      return;
    }
    if(age<this.selectedp.agemin){
      alert(`Child must be over ${this.selectedp.agemin} for selected placement`);
      return;
    }
    
    console.log(target.querySelector('#socialworker'));
    console.log(target.querySelector('#placement'));
    console.log(firstname,lastname,birthdate,rating,socialw,placement);
    
    this.submit.submitForm(firstname,lastname,birthdate,rating,socialw,this.selectedp.id).subscribe(data =>{
      if(data){
        window.alert("Case Saved");
        this.router.navigate(['dashboard'])
      }
      else{
        window.alert("Could not save case")
      }
    })
  }
}