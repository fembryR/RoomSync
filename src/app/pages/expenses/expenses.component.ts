import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Observable } from 'rxjs';

import { Expense } from '../../models/expense';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-expenses',
  imports: [CommonModule, FormsModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.scss'
})
export class ExpensesComponent implements OnInit {

  nombre = '';
  monto = 0;
  categoria = '';

  expenses$!: Observable<Expense[]>;

  constructor(
    private expenseService: ExpenseService
  ) {}

  ngOnInit(): void {
    this.expenses$ = this.expenseService.getExpenses();
  }

  async saveExpense() {

    if (
      !this.nombre ||
      !this.monto ||
      !this.categoria
    ) {
      return;
    }

    await this.expenseService.addExpense({
      nombre: this.nombre,
      monto: this.monto,
      categoria: this.categoria,
      createdAt: new Date()
    });

    this.nombre = '';
    this.monto = 0;
    this.categoria = '';
  }
}