import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UrlService } from './url.service';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  
  constructor(private http: HttpClient,private url:UrlService, private myRoute: Router) { }

  getUserDetails(username, password){
    const body = `username=${username}&password=${password}`;
    return this.http.post(this.url.getUrl() + 'login', body, {headers: this.headers, withCredentials: true})
  }

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
    localStorage.removeItem("Fullname");
    localStorage.removeItem("id");
    localStorage.removeItem("IsAdmin");
    this.myRoute.navigate(["/"]);
  }
  
  getFullname() {
    return localStorage.getItem("Fullname")
  }
  
  getId() {
    return localStorage.getItem("id")
  }
  
  getIsAdmin(){
    return localStorage.getItem("IsAdmin")
  }
  
}
