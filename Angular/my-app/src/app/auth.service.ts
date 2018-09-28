import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  
  constructor(private http: HttpClient) { }

  getUserDetails(username, password){
    const body = `username=${username}&password=${password}`;
    return this.http.post('http://localhost:8082/JSSquared/login', body, {headers: this.headers, withCredentials: true})

  }
}
