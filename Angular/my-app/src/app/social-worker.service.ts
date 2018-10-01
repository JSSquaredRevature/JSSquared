import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import {SocialWorker } from './social-worker';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class SocialWorkerService {

  private socialWorkersUrl = this.url.getUrl() + 'sw';  // URL to web api

  constructor(private http: HttpClient, private url: UrlService) { }

  getSocialWorkers (): Observable<SocialWorker[]> {
    return this.http.get<SocialWorker[]>(this.socialWorkersUrl);
  }
}
