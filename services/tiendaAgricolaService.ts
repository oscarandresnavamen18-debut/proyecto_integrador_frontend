import { get, post, put, patch, del } from "./apiClient";
import {
  ProductoAgricola,
  ProductosResponse,
  CrearProductoAgricola,
  ActualizarProductoAgricola,
  FiltrosProductoAgricola,
} from "@/types/tiendaAgricola";



export async function obtenerProductosAgricolas(
  filtros?: FiltrosProductoAgricola
): Promise<ProductoAgricola[]> {
  const params = new URLSearchParams();

  if (filtros) {
    if (filtros.nombre) params.append('nombre', filtros.nombre);
    if (filtros.precioMin) params.append('precioMin', filtros.precioMin.toString());
    if (filtros.precioMax) params.append('precioMax', filtros.precioMax.toString());
    if (filtros.enPromocion !== undefined) params.append('enPromocion', filtros.enPromocion.toString());
    if (filtros.enStock !== undefined) params.append('enStock', filtros.enStock.toString());
    if (filtros.marca) params.append('marca', filtros.marca);
  }

  const query = params.toString();
  const endpoint = query ? `/productos-agricolas?${query}` : '/productos-agricolas';

  const data = await get<ProductosResponse>(endpoint);
  return data.products;
}

export async function obtenerProductoAgricolaPorId(
  id: string
): Promise<ProductoAgricola | undefined> {
  try {
    const producto = await get<ProductoAgricola>(`/productos-agricolas/${id}`);
    return producto;
  } catch (error) {
    console.error(`Error al obtener producto con ID ${id}:`, error);
    return undefined;
  }
}

export async function crearProductoAgricola(
  producto: CrearProductoAgricola
): Promise<ProductoAgricola> {
  const nuevoProducto = await post<ProductoAgricola>('/productos-agricolas', {
    ...producto,
    categoria: 'agricola',
  });
  return nuevoProducto;
}


export async function actualizarProductoAgricola(
  id: string,
  producto: CrearProductoAgricola
): Promise<ProductoAgricola> {
  const productoActualizado = await put<ProductoAgricola>(
    `/productos-agricolas/${id}`,
    {
      ...producto,
      categoria: 'agricola',
    }
  );
  return productoActualizado;
}


export async function actualizarParcialProductoAgricola(
  id: string,
  cambios: Partial<CrearProductoAgricola>
): Promise<ProductoAgricola> {
  const productoActualizado = await patch<ProductoAgricola>(
    `/productos-agricolas/${id}`,
    cambios
  );
  return productoActualizado;
}


export async function eliminarProductoAgricola(
  id: string
): Promise<{ success: boolean; message: string }> {
  const resultado = await del<{ success: boolean; message: string }>(
    `/productos-agricolas/${id}`
  );
  return resultado;
}


export async function obtenerProductosEnPromocion(): Promise<ProductoAgricola[]> {
  return obtenerProductosAgricolas({ enPromocion: true });
}


export async function obtenerProductosPorMarca(marca: string): Promise<ProductoAgricola[]> {
  return obtenerProductosAgricolas({ marca });
}


export async function actualizarStockProducto(
  id: string,
  stock: number
): Promise<ProductoAgricola> {
  return actualizarParcialProductoAgricola(id, { stock });
}
