import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Case } from './case';
import { UrlService } from './url.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  

  private casessUrl = this.url.getUrl()+'admin';  // URL to web api

  constructor(private http: HttpClient, private url:UrlService, private auth:AuthService) { }

  getCases (): Observable<Case[]> {
    //return this.http.get(this.casessUrl)

    if(+this.auth.getIsAdmin() == 0)
      return this.http.get<Case[]>(this.casessUrl+ '/' + this.auth.getId());

    return this.http.get<Case[]>(this.casessUrl);
  }

}
