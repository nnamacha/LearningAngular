import { NgModel } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent , children: [
      { path: ':id/:name', component: UserComponent }
    ]},

    { path: 'servers', canActivateChild: [AuthGuardService], component: ServersComponent , children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent }
    ]},
    { path: 'not-found', component: NotFoundComponent },
    { path: '**' , redirectTo: '/not-found'}

  ];

@NgModule({

    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
