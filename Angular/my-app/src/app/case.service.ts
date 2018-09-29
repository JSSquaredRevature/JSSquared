import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Case } from './case';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  private casessUrl = 'http://localhost:8080/JSSquared/admin';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getCases (): Observable<Case[]> {
    return this.http.get<Case[]>(this.casessUrl);
  }

}
