import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { ProductService } from '../servicios/product.service'; // Ajusta el path según tu estructura
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export const productGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> => {
  const router = inject(Router);
  const productService = inject(ProductService);
  const id = route.paramMap.get('id');

  if (!id) {
    return of(router.createUrlTree(['/home']));
  }

  // Aquí consultamos la API para validar existencia
  return productService.getProductById(id).pipe(
    map(product => !!product || router.createUrlTree(['/home'])),
    catchError(() => of(router.createUrlTree(['/home'])))
  );
};
