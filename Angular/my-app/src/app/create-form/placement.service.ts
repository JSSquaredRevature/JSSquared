import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlacementService {

  constructor(private http:HttpClient) { }

  getPlacement(){
    return this.http.get('http://localhost:8080/JSSquared/placement')
  }
}
