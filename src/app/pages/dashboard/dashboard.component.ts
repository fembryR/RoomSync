import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  goToProperties() {
    this.router.navigate(['/properties']);
  }

  goToExpenses() {
    this.router.navigate(['/expenses']);
  }

  goToBuildings() {
    this.router.navigate(['/buildings']);
  }

  async logout() {

    await this.authService.logout();

    this.router.navigate(['/login']);
  }

}