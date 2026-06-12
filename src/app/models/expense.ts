export interface Expense {
  id?: string;
  nombre: string;
  monto: number;
  categoria: string;
  createdAt: Date;
}