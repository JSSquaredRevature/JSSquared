import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Case } from '../case';
import { CaseService }  from '../case.service';
import { PhoneLogService } from '../phone-log.service';
import { Router } from '@angular/router';
import { PlacementService } from '../create-form/placement.service';
import { SubmitService } from '../create-form/submit.service';
import { AuthService } from '../auth.service';
import { SocialwService } from '../create-form/socialw.service';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {

  cases: Case[];
  selectedp=null;
  selectedsw=null;
  thisSoc = null;
  thisp = null;

  selectedcase=null;
  constructor(
    private phoneLogService: PhoneLogService,
    private caseService: CaseService,
    private location: Location,
    private route: Router,
    private placement:PlacementService,
    private submit:SubmitService,
    private auth: AuthService,
    private socialw:SocialwService) { }

  ngOnInit(): void {
    document.body.className = "hold-transition skin-blue sidebar-mini";
    this.getCases();
    if(+this.auth.getIsAdmin()!=0){
      this.placement.getPlacement().subscribe(data=>{this.thisp=data});
      this.socialw.getSocialW().subscribe(data=>{this.thisSoc=data});

    }

  }
 
  setCase(c){
    this.selectedcase=c;
  }
  setSelectedP(p,sw){

    console.log(p);
    console.log('change');
    this.selectedp=p;
    this.selectedsw=sw;
  }

  cancel(): void {
    this.selectedp = null;
    this.selectedsw= null;
  }

  getCases(): void {
    this.caseService.getCases()
      .subscribe(Case=> this.cases = Case);
  }
 
  goBack(): void {
    this.location.back();
  }
  getPhoneLog(id:number): void{
    this.phoneLogService.setCaseId(id);
    this.route.navigate(['phonelog']);
  }

  isGreen(rating){
      if(Number(rating) >= 80){
        return true;
      }
      return false;
  }
  isYellow(rating){
    if(Number(rating) >= 65 && Number(rating) < 80){
      return true;
    }
    return false;
  }
  isRed(rating){
    if(Number(rating) < 65){
      return true;
    }
    return false;
  }






  newForm(event){
    event.preventDefault()
    const target = event.target
    
    const birthdate = target.querySelector('#birthdate').value
    
    const age = new Date().getFullYear()-new Date(birthdate).getFullYear();
    console.log(this.selectedcase);
    
    if(age>this.selectedp.agemax){
      alert(`Child must be under ${this.selectedp.agemax} for selected placement`);
      return;
    }
    if(age<this.selectedp.agemin){
      alert(`Child must be over ${this.selectedp.agemin} for selected placement`);
      return;
    }
    
    
    
    this.submit.updateForm(this.selectedcase).subscribe(data =>{
      if(data){
        window.alert("Case Updated");
        
      }
      else{
        window.alert("Could not update case")
      }
    })
  }

}
