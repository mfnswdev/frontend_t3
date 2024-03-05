import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

class authAux {
  constructor(private authService: AuthService, private router: Router) { }

}
export const authGuard: CanActivateFn = (route, state) => {
  
  const authService = thconst isAuth = !!this.authService.usuario.value.token;
  if (isAuth) {
    return true;
  }
  return this.router.createUrlTree(['/sem-autorizacao']);
};


