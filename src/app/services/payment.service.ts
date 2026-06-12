import { Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  addDoc,
  collectionData
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private firestore: Firestore
  ) {}

  addPayment(payment: Payment) {

    const paymentRef = collection(
      this.firestore,
      'payments'
    );

    return addDoc(
      paymentRef,
      payment
    );
  }

  getPayments(): Observable<Payment[]> {

    const paymentRef = collection(
      this.firestore,
      'payments'
    );

    return collectionData(
      paymentRef,
      { idField: 'id' }
    ) as Observable<Payment[]>;
  }

}