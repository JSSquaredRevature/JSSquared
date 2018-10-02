import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Case } from '../case';
import { CaseService }  from '../case.service';
import { PhoneLogService } from '../phone-log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {

  cases: Case[];

  constructor(
    private phoneLogService: PhoneLogService,
    private caseService: CaseService,
    private location: Location,
    private route: Router) { }

  ngOnInit(): void {
    document.body.className = "hold-transition skin-blue sidebar-mini";
    this.getCases();
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

}
