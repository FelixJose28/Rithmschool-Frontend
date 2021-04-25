import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Buy } from '../models/Buy';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  private apiUrl = "https://localhost:44344/api";

  buyCourse(buy: Buy):Observable<Buy>{
    const fullUrl = `${this.apiUrl}/Buy/PostBuy`;
    return this.http.post<Buy>(fullUrl,buy);
  }
  getBuys():Observable<Buy[]>{
    const fullUrl = `${this.apiUrl}/Buy/GetBuys`;
    return this.http.get<Buy[]>(fullUrl);
  }
  getBuy(id: number):Observable<Buy>{
    const fullUrl = `${this.apiUrl}/Buy/GetBuy/${id}`;
    return this.http.get<Buy>(fullUrl);
  }
}
