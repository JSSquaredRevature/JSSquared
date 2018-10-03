import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Transportation } from './transportation';
import { UrlService } from './url.service';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TransportationService {

  private transportationUrl = 'http://localhost:8080/JSSquared/transportation';

  constructor(
    private http: HttpClient,
    private url: UrlService, 
    private auth: AuthService) { }

  getTransportations (): Observable<Transportation[]> {
    if(+this.auth.getIsAdmin() == 0)
      return this.http.get<Transportation[]>(this.transportationUrl+ '/' + this.auth.getId());

    return this.http.get<Transportation[]>(this.transportationUrl);
  }

  updateTransportation (transportation: Transportation): Observable<any> {
    return this.http.put(this.transportationUrl, transportation, httpOptions)
  }

  addTransportation (transportation: Transportation): Observable<Transportation> {
    return this.http.post<Transportation>(this.transportationUrl, transportation, httpOptions);
  }

}
