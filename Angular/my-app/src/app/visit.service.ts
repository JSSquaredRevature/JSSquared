import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Visit } from './visit';
import { UrlService } from './url.service'
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VisitService {
  
  private visitUrl = this.url.getUrl()+'visit';  // URL to web api

  constructor(private http: HttpClient, private url :UrlService, private auth:AuthService) { }

  getVisits (): Observable<Visit[]> {
    if(+this.auth.getIsAdmin() == 0)
      return this.http.get<Visit[]>(this.visitUrl+ '/' + this.auth.getId());

    return this.http.get<Visit[]>(this.visitUrl);
  }

  updateVisits (visit: Visit): Observable<any> {
    return this.http.put(this.visitUrl, visit, httpOptions)
  }

  addVisit (visit: Visit): Observable<Visit> {
    return this.http.post<Visit>(this.visitUrl, visit, httpOptions);
  }

  deleteVisit (visit: Visit): Observable<Visit> {
    const url = this.visitUrl + '/' + visit.id;
  
    return this.http.delete<Visit>(url, httpOptions);
  }
}
