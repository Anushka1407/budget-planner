import { Component } from '@angular/core';
import { Transaction } from '../../models/transaction.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-budget',
  imports: [FormsModule],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.scss'
})
export class BudgetComponent {
  transactions: Transaction[] = [];

  // test changes

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
      // we have list of transactions
      // we want to display total amount on each column
      // we need to add or substract depending on type of transaction
      // we want to display the total in the corner of the amount box 
      this.transactions.forEach(transaction => {
        // find index of current transaction
        const indexOfCurrentTransaction = this.transactions.indexOf(transaction)

        // find previous transaction if current transaction is not first transaction
        if (indexOfCurrentTransaction === 0) {
          transaction.total = transaction.type === 'income' ? transaction.amount : -(transaction.amount)
        } else {
          const previousTotal = this.transactions[indexOfCurrentTransaction - 1].total || 0;
          transaction.total = transaction.type === 'income' ?
            previousTotal + transaction.amount :
            previousTotal - transaction.amount
        }

      });
    }
  }

}
