import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthentificationService } from '../services/authentification.service';


@Injectable({
  providedIn: 'root'
})
export class SecureInnerPageGuard implements CanActivate {
  constructor(private authService: AuthentificationService, public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // Check the user is logged in or not(In case the user is not logged in he will be redirected to Signin page)
    if(this.authService.isLoggedIn !== true) {
      this.router.navigate(['/login'])
    }
    return true;
  }
}
