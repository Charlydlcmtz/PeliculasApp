import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isNotAuthenticatedGuard } from './auth/guards/is-not-authenticated.guard';
import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';

const routes: Routes = [
  {
    path: 'auth',
    // Guards
    canActivate: [ isNotAuthenticatedGuard ],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'dashboard',
    // Guards
    canActivate: [ isAuthenticatedGuard ],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'peliculas',
    // Guards
    canActivate: [ isAuthenticatedGuard ],
    loadChildren: () => import('./peliculas/pelicula.module').then(m => m.PeliculaModule),
  },
  {
    path: 'usuarios',
    //Guards
    canActivate: [ isAuthenticatedGuard ],
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule),
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
