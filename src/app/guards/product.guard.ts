import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { inject } from '@angular/core';

export const productGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const id = route.paramMap.get('id');
  
  // Validar que el ID sea numérico
  if (id && !isNaN(Number(id))) {
    return true;
  } else {
    router.navigate(['/home']); // Redirigir si es inválido
    return false;
  }
};
