import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable } from 'rxjs';

import { Payment } from '../../models/payment';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-roomie-dashboard',
  imports: [CommonModule],
  templateUrl: './roomie-dashboard.component.html',
  styleUrl: './roomie-dashboard.component.scss'
})
export class RoomieDashboardComponent implements OnInit {

  payments$!: Observable<Payment[]>;

  constructor(
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {

    this.payments$ =
      this.paymentService.getPayments();
  }

}