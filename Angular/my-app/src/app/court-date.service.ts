import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { CourtDate } from './court-date';
import { UrlService } from './url.service'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CourtDateService {

  private courtDateUrl = this.url.getUrl()+'courtdate';  // URL to web api

  constructor(private http: HttpClient, private url :UrlService) { }

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
