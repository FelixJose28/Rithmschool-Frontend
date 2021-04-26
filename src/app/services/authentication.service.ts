import { UserLogin } from './../models/UserLogin';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { Role } from '../models/Role';
import { Router } from '@angular/router';

const TOKEN_KEY = "token";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user?: User;
  private jwt = new JwtHelperService();


  private apiUrl = "https://localhost:44344/api";
  constructor(
    private http: HttpClient,
    private router: Router) { }

  async signUp(user: UserLogin){
    const fullApiUrl = `${this.apiUrl}/Authentication/Loggin`;
    const result = await this.http.post<UserLogin>(fullApiUrl,user).toPromise();
    localStorage.setItem(TOKEN_KEY,result.token);
    return this.getCurrentUser();;

  }
  async signIn(user: User){
    const fullApiUrl = `${this.apiUrl}/Authentication/RegisterUser`;
    const result = await this.http.post<User>(fullApiUrl,user).toPromise();
    localStorage.setItem(TOKEN_KEY, result.token)
    return this.getCurrentUser();
  }
  getUsuarioByCorreo(user: string): Observable<User> {
    const fullUrl = `${this.apiUrl}/Authentication/GetUserByEmail/${user}`;
    return this.http.get<User>(fullUrl);
  }

  async getRol() {
    return this.getCurrentUser().then(user => user?.roleId as Role | undefined);
  }

  logout() {
    this.user = undefined;
    return localStorage.removeItem(TOKEN_KEY);
  }

  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  isLogged() {
    return localStorage.getItem(TOKEN_KEY) != null;
  }

  decodeToken() {
    const token = this.getToken();
    if (token == null) {
      return null;
    }
    return this.jwt.decodeToken(token);
  }

  async getCurrentUser() {
    if (this.user) {
      return this.user;
    }

    const decoded = this.decodeToken();

    if (decoded == null) {
      return undefined;
    }

    const email = decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'];
    this.user = await this.getUsuarioByCorreo(email).toPromise();
    return this.user;
  }

  redirectForUser(user: User) {
    switch (user.roleId) {
      case Role.admin:
        return this.router.navigate(['/admin/course']);
      case Role.student:
        return this.router.navigate(['/shared/courses/list'])
      default:
        throw new Error(`Invalid role: ${user.roleId}`);
    }
  }
  getUserById(id:number):Observable<User>{
    const fullUrl = `${this.apiUrl}/Authentication/GetUser/${id}`;
    return this.http.get<User>(fullUrl);
  }
  update(user:User):Observable<User>{
    const fullUrl = `${this.apiUrl}//Authentication/UpdateUser`;
    return this.http.put<User>(fullUrl,user);
  }
}
