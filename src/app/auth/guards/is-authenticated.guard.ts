import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authService = inject( AuthService );
  const router = inject( Router );

  return authService.checkAuthStatus().pipe(
    map(isAuthenticated => {
      if (!isAuthenticated) {
        router.navigateByUrl('/auth/login');
        return false;
      }

      // const userRole = authService.getUserRole();
      // const allowedRoles = route.data['roles'];

      //Si esta autenticado e intenta ir a login, redirigirlo al dashboard
      if (state.url === '/auth/login') {
        router.navigateByUrl('/dashboard');
        return false;
      }

      //Si no se especifican roles, permitir acceso
      // if (!allowedRoles || allowedRoles.includes(userRole.nombre)) {
      //   return true;
      // }

      //Si el usuario no tiene permisos, redirigirlo a "No autorizado"
      router.navigateByUrl('/unauthorized');
      return false;
    })
  );
};
