import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Observable } from 'rxjs';

import { Payment } from '../../models/payment';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-payments',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent implements OnInit {

  concepto = '';
  monto = 0;
  estado = 'Pendiente';
  fechaVencimiento = '';
  departamento = '';

  payments$!: Observable<Payment[]>;

  constructor(
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {

    this.payments$ =
      this.paymentService.getPayments();
  }

  async savePayment() {

    await this.paymentService.addPayment({
      concepto: this.concepto,
      monto: this.monto,
      estado: this.estado,
      fechaVencimiento: this.fechaVencimiento,
      departamento: this.departamento
    });

    this.concepto = '';
    this.monto = 0;
    this.estado = 'Pendiente';
    this.fechaVencimiento = '';
    this.departamento = '';
  }

}