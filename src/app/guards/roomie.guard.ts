import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router
} from '@angular/router';

import { AuthService } from '../services/auth.service';

export const roomieGuard: CanActivateFn =
  async () => {

    const authService =
      inject(AuthService);

    const router =
      inject(Router);

    const role =
      await authService.getUserRole();

    if (role === 'roomie') {
      return true;
    }

    router.navigate(['/login']);
    return false;
  };