import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import {SocialWorker } from './social-worker';
import { UrlService } from './url.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SocialWorkerService {

  private socialWorkersUrl = this.url.getUrl() + 'sw';  // URL to web api

  constructor(private http: HttpClient, private url: UrlService, private auth:AuthService) { }

  getSocialWorkers (): Observable<SocialWorker[]> {

    // if(+this.auth.getIsAdmin() == 0) {
    //   const options = this.auth.getId() ?
    //   { params: new HttpParams().set('name', this.auth.getId()) } : {};

    //   return this.http.get<SocialWorker[]>(this.socialWorkersUrl, options)
    // }

    return this.http.get<SocialWorker[]>(this.socialWorkersUrl);
  }

  getSocialWorker (): Observable<SocialWorker> {
    return this.http.get<SocialWorker>(this.socialWorkersUrl+ '/' + this.auth.getId());
  }
}
