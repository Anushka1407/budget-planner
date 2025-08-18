import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BudgetComponent } from './components/budget/budget.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent },
    {path: 'budget', component: BudgetComponent}
];
