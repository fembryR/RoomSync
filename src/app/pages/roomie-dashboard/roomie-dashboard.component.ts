import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roomie-dashboard',
  imports: [CommonModule],
  templateUrl: './roomie-dashboard.component.html',
  styleUrl: './roomie-dashboard.component.scss'
})
export class RoomieDashboardComponent {

  constructor(
    private router: Router,
    private location: Location
  ) {}

  goToTasks() {
    this.router.navigate([
      '/tasks'
    ]);
  }

  goToTickets() {
    this.router.navigate([
      '/tickets'
    ]);
  }

  goToPayments() {
    this.router.navigate([
      '/roomie-payments'
    ]);
  }

  goBack() {
    this.location.back();
  }

}