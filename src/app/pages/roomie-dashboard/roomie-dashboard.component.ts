import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable } from 'rxjs';

import { Payment } from '../../models/payment';
import { PaymentService } from '../../services/payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roomie-dashboard',
  imports: [CommonModule],
  templateUrl: './roomie-dashboard.component.html',
  styleUrl: './roomie-dashboard.component.scss'
})
export class RoomieDashboardComponent implements OnInit {

  payments$!: Observable<Payment[]>;

  constructor(
    private router: Router,
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {

    this.payments$ =
      this.paymentService.getPayments();
  }

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

}