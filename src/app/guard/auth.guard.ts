import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthentificationService, public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // Check the user is logged in or not
    //(In case the user is logged in he will have the access to pages that SecureInnerPage Guard have implimented 'Check app.routing.module.ts')
    if(this.authService.isLoggedIn === true) {
      this.router.navigate(['/listenote']);
    }
     return true;
    }
  
}
