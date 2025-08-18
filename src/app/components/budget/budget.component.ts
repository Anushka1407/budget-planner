import { Component } from '@angular/core';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-budget',
  imports: [],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.scss'
})
export class BudgetComponent {
  transactions: Transaction[] = [];
  
  // test changes

  public addIncome() {
    this.transactions.push({
      id: this.transactions.length + 1,
      type: 'income',
      amount: 0
    });
  }

}
