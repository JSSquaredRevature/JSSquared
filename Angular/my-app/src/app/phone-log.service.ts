import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from './url.service';
import { AuthService } from './auth.service';
import { PhoneLog } from './phone-log';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PhoneLogService {
  private caseid=0;
  private phoneLogUrl = this.url.getUrl()+'phonelog';  // URL to web api
  constructor(private http: HttpClient, private url :UrlService, private auth: AuthService) { }
  getPhoneLogs (): Observable<PhoneLog[]> {
    return this.http.get<PhoneLog[]>(this.phoneLogUrl + '/' +this.caseid);
    
  }

  updatePhoneLog (phoneLog: PhoneLog): Observable<any> {
    return this.http.put(this.phoneLogUrl, phoneLog, httpOptions)
  }

  addPhoneLog (phoneLog: PhoneLog): Observable<PhoneLog> {
    return this.http.post<PhoneLog>(this.phoneLogUrl, phoneLog, httpOptions);
  }
  setCaseId(id){
    this.caseid=id;
  }
  getCaseId():number{
    return this.caseid;
  }
}
