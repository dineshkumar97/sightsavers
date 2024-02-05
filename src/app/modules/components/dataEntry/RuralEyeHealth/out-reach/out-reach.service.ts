import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutReachService {
  public jsonUrl = '/assets/layout/en.json';
  constructor(private http: HttpClient) {


  }

 
  getJSon() {
    return this.http.get(this.jsonUrl);
  }
}
