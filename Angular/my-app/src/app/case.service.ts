import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Case } from './case';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  private headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  private casessUrl = this.url.getUrl()+'login';  // URL to web api

  constructor(private http: HttpClient, private url: UrlService) { }

  /** GET heroes from the server */
  getCases (): Observable<Case[]> {
    //return this.http.get(this.casessUrl)
    return this.http.post<Case[]>(this.casessUrl,'', {headers: this.headers, withCredentials: true})
  }

}
