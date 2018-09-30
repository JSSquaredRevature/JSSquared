import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UrlService} from '../url.service';
@Injectable({
  providedIn: 'root'
})
export class PlacementService {

  constructor(private http:HttpClient,private url:UrlService ) { }

  getPlacement(){
    return this.http.get(this.url.getUrl()+'placement')
  }
}
