import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SocialwService {

  constructor(private http:HttpClient) { }


  getSocialW(){
    return this.http.get('http://localhost:8080/JSSquared/sw')
  }
}
