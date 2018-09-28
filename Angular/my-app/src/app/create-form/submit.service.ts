import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {
  private headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  constructor(private http: HttpClient) { }

  submitForm(firstname, lastname, birthdate, rating, socialw, placement){
    const body = `firstname=${firstname}&lastname=${lastname}&birthdate=${birthdate}&rating=${rating}&socialId=${socialw}&placementId=${placement}`;
    return this.http.post('http://localhost:8080/JSSquared/createcase', body, {headers: this.headers})
  }
}


