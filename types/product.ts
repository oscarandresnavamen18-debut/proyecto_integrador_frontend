export interface Producto {
  id: string;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
  categoria: 'mascotas' | 'ferreteria' | 'ganaderia' | 'agricola';
  enPromocion?: boolean;
  descuento?: number; // Porcentaje de descuento
  precioOriginal?: number;
}

export type Categoria = 'mascotas' | 'ferreteria' | 'ganaderia' | 'agricola';

export interface CategoriaInfo {
  titulo: string;
  color: string;
  descripcion: string;
  imagen: string;
}
