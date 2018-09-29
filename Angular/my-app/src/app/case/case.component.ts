import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Case } from '../case';
import { CaseService }  from '../case.service';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {

  cases: Case[];

  constructor(
    private caseService: CaseService,
    private location: Location) { }

  ngOnInit(): void {
    this.getCases();
  }
 
  getCases(): void {
    this.caseService.getCases()
      .subscribe(Case=> this.cases = Case);
  }
 
  goBack(): void {
    this.location.back();
  }

}
