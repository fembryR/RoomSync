import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-roomie-dashboard',
  imports: [],
  templateUrl: './roomie-dashboard.component.html',
  styleUrl: './roomie-dashboard.component.scss'
})
export class RoomieDashboardComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async logout() {

    await this.authService.logout();

    this.router.navigate(['/login']);
  }

}