import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Server } from './servers/server/server.model';
import { Observable } from 'rxjs/Observable';
import { ServersService } from './servers/servers.service';

@Injectable({
  providedIn: 'root'
})
export class ServerResolverService implements Resolve<Server> {

  constructor(private serverService: ServersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {

    return this.serverService.getServer(+route.params['id']);
  }
}
