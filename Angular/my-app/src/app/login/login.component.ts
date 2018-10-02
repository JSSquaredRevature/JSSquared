import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService,
  			  private router: Router) { }

  ngOnInit() {
    document.body.className = 'hold-transition login page skin-blue';
  }

  loginUser(event) {
  event.preventDefault()
  const target = event.target
  const username = target.querySelector('#username').value
  const password = target.querySelector('#password').value

  this.Auth.getUserDetails(username, password).subscribe(data => {
  	if(data){
      console.log(data['firstname'], data['lastname'], data['isadmin'], data['id'])
      const fullname = data['firstname'] + ' ' + data['lastname'];
      const isadmin = data['isadmin'];
      const id = data['id'];
      this.Auth.sendToken(username, fullname, isadmin, id)
  		this.router.navigate(['dashboard'])
  	} else {
      window.alert("Bad Credentials")
    }
  })
}

}
