import { Component } from '@angular/core';
import { Transaction } from '../../models/transaction.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-budget',
  imports: [FormsModule, CommonModule],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.scss'
})
export class BudgetComponent {
  transactions: Transaction[] = [];

  public addIncome() {
    this.transactions.push({
      id: this.transactions.length + 1,
      name: '',
      type: 'income',
      amount: 0
    });
  }

  public addExpense() {
    this.transactions.push({
      id: this.transactions.length + 1,
      name: '',
      type: 'expense',
      amount: 0
    });
  }

  public calculateTotal(e: Event, id: number) {
    const value = (e.target as HTMLInputElement).value.trim();
    if (value) {
      this.transactions.forEach(transaction => {
        // find index of current transaction
        const indexOfCurrentTransaction = this.transactions.indexOf(transaction)

        // find previous transaction if current transaction is not first transaction
        if (indexOfCurrentTransaction === 0) {
          transaction.total = transaction.amount;
        } else {
          const previousTotal = this.transactions[indexOfCurrentTransaction - 1].total || 0;
          transaction.total = Number(previousTotal) + Number(transaction.amount);
        }

      });
    }
  }

  public onAmountChange(value: number, transaction: any) {
    if (transaction.type === 'income') {
      transaction.amount = value;
    } else {
      transaction.amount = value > 0 ? -value : value;
    }
  }
}
