import { Producto, Categoria } from "@/types/product";

const API_BASE_URL = "https://692714f926e7e41498fce4e4.mockapi.io";

/**
 * Obtiene todos los productos desde la API
 */
export async function getAllProducts(): Promise<Producto[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      cache: "no-store" // Siempre obtener datos frescos
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    throw error;
  }
}

/**
 * Obtiene productos filtrados por categoría
 */
export async function getProductsByCategory(categoria: Categoria): Promise<Producto[]> {
  try {
    const allProducts = await getAllProducts();
    return allProducts.filter(producto => producto.categoria === categoria);
  } catch (error) {
    console.error(`Error al obtener productos de categoría ${categoria}:`, error);
    throw error;
  }
}

/**
 * Obtiene productos en promoción
 */
export async function getProductsOnSale(): Promise<Producto[]> {
  try {
    const allProducts = await getAllProducts();
    return allProducts.filter(producto => producto.enPromocion === true);
  } catch (error) {
    console.error("Error al obtener productos en promoción:", error);
    throw error;
  }
}
