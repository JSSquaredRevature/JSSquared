import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { CourtDate } from './court-date';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CourtDateService {

  private courtDateUrl = 'http://localhost:8080/JSSquared/courtdate';  // URL to web api

  constructor(private http: HttpClient) { }

  getCourtDates (): Observable<CourtDate[]> {
    return this.http.get<CourtDate[]>(this.courtDateUrl);
  }

  updateCourtDate (courtDate: CourtDate): Observable<any> {
    return this.http.put(this.courtDateUrl, courtDate, httpOptions)
  }

  addCourtDate (courtDate: CourtDate): Observable<CourtDate> {
    return this.http.post<CourtDate>(this.courtDateUrl, courtDate, httpOptions);
  }
  
}
