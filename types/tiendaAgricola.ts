import { Producto } from "./product";


export interface ProductoAgricola extends Producto {
  categoria: 'agricola';
  stock?: number;
  unidadMedida?: 'kg' | 'unidad' | 'litro' | 'bulto' | 'paquete';
  marca?: string;
  proveedor?: string;
}

export interface FiltrosProductoAgricola {
  nombre?: string;
  precioMin?: number;
  precioMax?: number;
  enPromocion?: boolean;
  enStock?: boolean;
  marca?: string;
}

export interface ProductosResponse {
  products: ProductoAgricola[];
  total: number;
  page?: number;
  limit?: number;
}


export interface CrearProductoAgricola {
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
  stock?: number;
  unidadMedida?: 'kg' | 'unidad' | 'litro' | 'bulto' | 'paquete';
  marca?: string;
  proveedor?: string;
  enPromocion?: boolean;
  descuento?: number;
}


export interface ActualizarProductoAgricola extends Partial<CrearProductoAgricola> {
  id: string;
}
