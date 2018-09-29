import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DashService } from '../dash.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

<<<<<<< HEAD
  constructor(private auth: AuthService, private router: Router) { }
=======
  cases =null;
  constructor(private router: Router,private dashserv: DashService) { }
>>>>>>> staging

  ngOnInit() {
    document.body.className = "hold-transition skin-blue sidebar-mini";
  }

  ngOnDestroy() :void {
    document.body.className = "";
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
