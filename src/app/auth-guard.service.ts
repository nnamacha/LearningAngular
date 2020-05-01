import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { ErrorsManagementService } from './error-page/errors-management.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor( private authService: AuthService,
               private router: Router,
               private errorManagement: ErrorsManagementService) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.isAuthenticates()
      .then ((authenticated: boolean) => {
          if (authenticated) {
            return true;
          } else {
            this.errorManagement.updateCurrentError(1);
            this.router.navigate(['not-found']);
          }
        }
      );

    }

  canActivateChild(route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.canActivate(route, state);
  }

}
