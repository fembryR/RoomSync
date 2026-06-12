import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Observable } from 'rxjs';

import { Payment } from '../../models/payment';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-roomie-payments',
  imports: [CommonModule],
  templateUrl: './roomie-payments.component.html',
  styleUrl: './roomie-payments.component.scss'
})
export class RoomiePaymentsComponent implements OnInit {

  payments$!: Observable<Payment[]>;
  selectedPaymentId: string | null = null;

  constructor(
    private paymentService: PaymentService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.payments$ = this.paymentService.getPayments();
  }

  toggleTransfer(paymentId: string | undefined) {
    if (!paymentId) {
      return;
    }

    this.selectedPaymentId =
      this.selectedPaymentId === paymentId ? null : paymentId;
  }

  goBack() {
    this.location.back();
  }
}
