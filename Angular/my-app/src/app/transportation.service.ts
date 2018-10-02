import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Transportation } from './transportation';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TransportationService {

  private transportationUrl = 'http://localhost:8080/JSSquared/transportation';

  constructor(private http: HttpClient) { }

  getTransportations (): Observable<Transportation[]> {
    return this.http.get<Transportation[]>(this.transportationUrl);
  }

  updateTransportation (transportation: Transportation): Observable<any> {
    return this.http.put(this.transportationUrl, transportation, httpOptions)
  }

  addTransportation (transportation: Transportation): Observable<Transportation> {
    return this.http.post<Transportation>(this.transportationUrl, transportation, httpOptions);
  }

}
