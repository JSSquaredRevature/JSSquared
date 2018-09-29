import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http: HttpClient, private myRoute: Router) { }

  getUserDetails(username, password){
<<<<<<< HEAD
   const body = `username=${username}&password=${password}`;
   return this.http.post('http://localhost:8080/JSSquared/login', body, {headers: this.headers, withCredentials: true})
  }
=======
    const body = `username=${username}&password=${password}`;
    return this.http.post('http://localhost:8080/JSSquared/login', body, {headers: this.headers, withCredentials: true})
>>>>>>> staging

  sendToken(token, fullname, isadmin, id) {
    localStorage.setItem("LoggedInUser", token)
    localStorage.setItem("Fullname", fullname)
    localStorage.setItem("IsAdmin", isadmin)
    localStorage.setItem("id", id)
  }
  getToken() {
    return localStorage.getItem("LoggedInUser")
  }  
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate(["/"]);
  }
  

  
}
