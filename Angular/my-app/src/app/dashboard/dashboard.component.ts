import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AuthService } from '../auth.service';
=======
import { Router } from '@angular/router';
>>>>>>> staging

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

<<<<<<< HEAD
  constructor(private auth: AuthService) { }
=======
  constructor(private router: Router) { }
>>>>>>> staging

  ngOnInit() {
  }

  CreateCase(){
    this.router.navigate(['create-form'])
    console.log("reached")
  }

}
