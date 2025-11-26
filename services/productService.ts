import { get } from "./apiClient";
import { Producto } from "@/types/product";

export async function listProducts(): Promise<Producto[]> {
  const data = await get<{ products: Producto[] }>("/api/products");
  return data.products;
}

export async function getProductById(id: string): Promise<Producto | undefined> {
  const products = await listProducts();
  return products.find((p) => p.id === id);
}
