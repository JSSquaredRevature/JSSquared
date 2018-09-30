import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Case } from './case';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  private casessUrl = this.url.getUrl()+'admin';  // URL to web api

  constructor(private http: HttpClient, private url:UrlService) { }

  getCases (): Observable<Case[]> {
    return this.http.get<Case[]>(this.casessUrl);
  }

}
