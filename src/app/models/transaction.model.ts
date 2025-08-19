export interface Transaction {
  id: number;
  name: string;
  type: 'income' | 'expense';
  amount: number;
  total?: number;
}
