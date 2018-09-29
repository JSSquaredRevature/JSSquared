import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashService } from '../dash.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cases =null;
  constructor(private router: Router,private dashserv: DashService) { }

  ngOnInit() {
  }

  CreateCase(){
    this.router.navigate(['create-form'])
    console.log("reached")
  }

  viewCases(){

    this.dashserv.getForms().subscribe(data=>{
      this.cases=data;
      console.log(data);
    })


  }

}
