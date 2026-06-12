export interface Payment {

  id?: string;

  concepto: string;

  monto: number;

  estado: string;

  fechaVencimiento: string;

  departamento: string;
}