import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CanComponentDeactivate } from 'src/app/can-deactive-guard.service';
import { ErrorsManagementService } from 'src/app/error-page/errors-management.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivate<CanComponentDeactivate> {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false ;
  changesSaved = false;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router,
              private errorManagement: ErrorsManagementService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false ;
    });
    this.route.fragment.subscribe();
    const id  = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id']);
    });
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.errorManagement.updateCurrentError(0);
    // this.router.navigate(['not-found'], {relativeTo: this.route});
    this.router.navigate(['not-found']);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean>| boolean {

    if (!this.allowEdit) {
      return true;
    }

    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && this.changesSaved === false) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }

}
