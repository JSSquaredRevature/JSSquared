import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../url.service';


@Injectable({
  providedIn: 'root'
})
export class SocialwService {

  constructor(private http:HttpClient,private url:UrlService) { }


  getSocialW(){
    return this.http.get(this.url.getUrl()+'sw')
  }
}
