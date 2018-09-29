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
    return this.http.post(this.url.getUrl()+'login', body, {headers: this.headers, withCredentials: true})

  }
}
