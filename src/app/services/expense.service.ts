import { Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  addDoc,
  collectionData
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(
    private firestore: Firestore
  ) {}

  addExpense(expense: Expense) {

    const expenseRef = collection(
      this.firestore,
      'expenses'
    );

    return addDoc(expenseRef, expense);
  }

  getExpenses(): Observable<Expense[]> {

    const expenseRef = collection(
      this.firestore,
      'expenses'
    );

    return collectionData(
      expenseRef,
      { idField: 'id' }
    ) as Observable<Expense[]>;
  }

}