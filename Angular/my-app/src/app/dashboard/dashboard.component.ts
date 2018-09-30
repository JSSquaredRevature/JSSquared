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

  constructor(private auth: AuthService, private router: Router) { }

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


  

}
