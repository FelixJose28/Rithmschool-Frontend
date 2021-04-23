import { UserLogin } from './../models/UserLogin';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';

const TOKEN_KEY = "token";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = "https://localhost:44344/api";
  constructor(private http: HttpClient) { }

  signUp(user: UserLogin): Observable<UserLogin>{
    const fullApiUrl = `${this.apiUrl}/Authentication/Loggin`;
    return this.http.post<UserLogin>(fullApiUrl,user);

  }
  signIn(user: User):Observable<User>{
    const fullApiUrl = `${this.apiUrl}/Authentication/RegisterUser`;
    return this.http.post<User>(fullApiUrl,user);
  }

}
