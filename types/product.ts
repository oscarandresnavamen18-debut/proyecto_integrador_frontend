export type Categoria = "mascotas" | "ferreteria" | "ganaderia" | "agricola";

export interface Producto {
  id: string;
  nombre: string;
  precio: number;
  precioOriginal?: number;
  descripcion: string;
  imagen: string;
  categoria: Categoria;
  enPromocion: boolean;
  descuento?: number;
}

export interface CategoriaInfo {
  titulo: string;
  color: string;
  descripcion: string;
  imagen: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
}
