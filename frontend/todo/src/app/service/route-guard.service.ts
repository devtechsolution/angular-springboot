import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private hardCodedAuthenticationService: HardcodedAuthenticationService,
    private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      // tslint:disable-next-line:curly
      if (this.hardCodedAuthenticationService.isUserLoggedIn())
        return true;

      this.router.navigate(['login']);
      return false;

   }
}
