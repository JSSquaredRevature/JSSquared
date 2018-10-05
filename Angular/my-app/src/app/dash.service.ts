import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  constructor(private http: HttpClient,private url:UrlService) { }
  getForms(){
    return this.http.get(this.url.getUrl()+'login');
  }
}
