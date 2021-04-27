import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {


  constructor(
    private authService:AuthenticationService,
    private router: Router
    ){}

  async canActivate(){
    if (this.authService.isLogged()) {
      const user = await this.authService.getCurrentUser();
      await this.authService.redirectForUser(user!);
      if (user) {
        // TODO: Check if the user is valid for the route
        return true;
      }
    }

    await this.router.navigate(['login']); // Redirect to notfound?
    return false;
  }

}
