import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(
    private router: Router
  ) {}

  goToProperties() {
    this.router.navigate(['/properties']);
  }

    goToExpenses() {
    this.router.navigate(['/expenses']);
  }

}