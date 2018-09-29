import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  
  constructor(private http: HttpClient,private url:UrlService) { }

  getUserDetails(username, password){
    const body = `username=${username}&password=${password}`;
<<<<<<< HEAD
    return this.http.post(this.url.getUrl()+'login', body, {headers: this.headers, withCredentials: true})
=======
    return this.http.post('http://localhost:8080/JSSquared/login', body, {headers: this.headers, withCredentials: true})
>>>>>>> 4ad3538aae5d8f28209f48c2519dd2c077219df4

  }
}
