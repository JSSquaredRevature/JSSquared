import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> staging

@Injectable({
  providedIn: 'root'
})
export class AuthService {
<<<<<<< HEAD

  private headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http: HttpClient, private myRoute: Router) { }

  getUserDetails(username, password){
   const body = `username=${username}&password=${password}`;
   return this.http.post('http://localhost:8080/JSSquared/login', body, {headers: this.headers, withCredentials: true})
  }

  sendToken(token) {
    localStorage.setItem("LoggedInUser", token)
  }
  getToken() {
    return localStorage.getItem("LoggedInUser")
=======
  private headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  
  constructor(private http: HttpClient) { }

  getUserDetails(username, password){
    const body = `username=${username}&password=${password}`;
    return this.http.post('http://localhost:8082/JSSquared/login', body, {headers: this.headers, withCredentials: true})

>>>>>>> staging
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate(["Login"]);
  }
  

  
}
