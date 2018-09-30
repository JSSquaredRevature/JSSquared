import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import {SocialWorker } from './social-worker';

@Injectable({
  providedIn: 'root'
})
export class SocialWorkerService {

  private socialWorkersUrl = 'http://localhost:8080/JSSquared/sw';  // URL to web api

  constructor(private http: HttpClient) { }

  getSocialWorkers (): Observable<SocialWorker[]> {
    return this.http.get<SocialWorker[]>(this.socialWorkersUrl);
  }
}
