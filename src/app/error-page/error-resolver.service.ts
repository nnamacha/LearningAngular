import { Injectable } from '@angular/core';
import { ErrorsManagementService } from './errors-management.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Error } from './error.model';

@Injectable({
  providedIn: 'root'
})
export class ErrorResolverService {

  constructor(private errorManagement: ErrorsManagementService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Error> | Promise<Error> | Error {

    return this.errorManagement.getCurrentError();
  }

}
