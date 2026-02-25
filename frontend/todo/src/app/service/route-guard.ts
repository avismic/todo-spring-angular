import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthentication } from './hardcoded-authentication';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteGuard implements CanActivate {
  constructor(public hardcodedAuthentication: HardcodedAuthentication, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthentication.isUserLoggedIn()) {
      return true;
      //route the user to the login page

    }
    this.router.navigate(['/login']);
    return false;
  }
}
