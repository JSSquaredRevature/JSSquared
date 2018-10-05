import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {UrlService} from '../url.service';
import {Placement} from '../placement';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PlacementService {

  constructor(private http:HttpClient,private url:UrlService ) { }

  getPlacement(){
    return this.http.get(this.url.getUrl()+'placement')
  }

  addPlacement(p: Placement): Observable<Placement>{
    return this.http.post<Placement>(this.url.getUrl()+'placement',p, httpOptions);
  }
  updatePlacement(p): Observable<any>{
    return this.http.put(this.url.getUrl()+'placement',p,httpOptions)
  }

  deletePlacement (placement: Placement): Observable<Placement> {
    const url = this.url.getUrl()+'placement' + '/' + placement.id;
  
    return this.http.delete<Placement>(url, httpOptions);
  }
}
