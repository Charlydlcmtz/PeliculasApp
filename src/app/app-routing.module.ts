import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isNotAuthenticatedGuard } from './auth/guards/is-not-authenticated.guard';
import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';

const routes: Routes = [
  {
    path: 'auth',
    // Guards
    canActivate: [ isNotAuthenticatedGuard ],
    //loadChildren: () =>
  },
  {
    path: 'dashboard',
    // Guards
    canActivate: [ isAuthenticatedGuard ],
    //loadChildren: () =>
  },
  {
    path: 'peliculas',
    // Guards
    canActivate: [ isAuthenticatedGuard ],
    //loadChildren: () =>
  },
  {
    path: 'usuarios',
    //Guards
    canActivate: [ isAuthenticatedGuard ],
    //locadChildren:
  },
  {
    path: '**',
    redirectTo: 'auth',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
