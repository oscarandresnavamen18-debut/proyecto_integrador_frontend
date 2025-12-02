"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Tienda from "@/app/(content)/componentes/Tienda";
import Footer from "@/app/(content)/componentes/Footer";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Tag, Loader2 } from "lucide-react";
import { categoriasInfo } from "@/data/products";
import { Categoria, Producto } from "@/types/product";
import Image from "next/image";
import { ProductModal } from "@/components/products/ProductModal";
import { getProductsByCategory } from "@/services/productService";

export default function CategoriaPage() {
  const params = useParams();
  const categoria = params.categoria as Categoria;
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar productos desde la API
  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError(null);
        const data = await getProductsByCategory(categoria);
        setProductos(data);
      } catch (err) {
        console.error("Error cargando productos:", err);
        setError("Error al cargar los productos. Por favor, intenta nuevamente.");
      } finally {
        setLoading(false);
      }
    }

    if (categoria) {
      loadProducts();
    }
  }, [categoria]);

  const handleProductClick = (producto: Producto) => {
    setSelectedProduct(producto);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const info = categoriasInfo[categoria];

  if (!info) {
    return (
      <>
        <Tienda />
        <main className="min-h-screen bg-gradient-to-b from-red-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Categoría no encontrada
            </h1>
            <Link
              href="/tienda-agricola"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver a la tienda
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    gray: "from-gray-500 to-gray-600",
    green: "from-green-600 to-green-700",
    emerald: "from-emerald-500 to-emerald-600",
  };

  const gradientColor = colorClasses[info.color as keyof typeof colorClasses] || "from-green-500 to-green-600";

  return (
    <>
      <Tienda />
      <main className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Link
            href="/tienda-agricola"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Volver a categorías</span>
          </Link>

          {/* Header con imagen */}
          <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl">
            <div className="relative h-80">
              <Image
                src={info.imagen}
                alt={info.titulo}
                fill
                className="object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${gradientColor} opacity-85`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                <h1 className="text-6xl font-bold mb-4">{info.titulo}</h1>
                <p className="text-2xl font-light max-w-2xl">{info.descripcion}</p>
                {!loading && (
                  <div className="mt-6 flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                    <ShoppingCart className="w-5 h-5" />
                    <span className="font-semibold">{productos.length} productos disponibles</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Estado de carga */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="w-16 h-16 text-green-600 animate-spin mb-4" />
              <p className="text-gray-600 text-lg">Cargando productos...</p>
            </div>
          )}

          {/* Error */}
          {error && !loading && (
            <div className="text-center py-16">
              <div className="text-red-500 text-6xl mb-4">⚠️</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                {error}
              </h3>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Reintentar
              </button>
            </div>
          )}

          {/* Grid de productos */}
          {!loading && !error && productos.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
              {productos.map((producto) => (
                <div
                  key={producto.id}
                  onClick={() => handleProductClick(producto)}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 cursor-pointer"
                >
                  {/* Imagen del producto */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <Image
                      src={producto.imagen}
                      alt={producto.nombre}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {producto.enPromocion && producto.descuento && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm flex items-center gap-1 shadow-lg">
                        <Tag className="w-4 h-4" />
                        -{producto.descuento}%
                      </div>
                    )}
                  </div>

                  {/* Información del producto */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-14">
                      {producto.nombre}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-10">
                      {producto.descripcion}
                    </p>

                    {/* Precios */}
                    <div className="mb-4">
                      {producto.precioOriginal ? (
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-green-600">
                            ${producto.precio.toLocaleString("es-CO")}
                          </span>
                          <span className="text-sm text-gray-400 line-through">
                            ${producto.precioOriginal.toLocaleString("es-CO")}
                          </span>
                        </div>
                      ) : (
                        <span className="text-2xl font-bold text-gray-900">
                          ${producto.precio.toLocaleString("es-CO")}
                        </span>
                      )}
                    </div>

                    {/* Badge de "Ver detalles" */}
                    <div className="text-center text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                      Ver detalles →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Mensaje si no hay productos */}
          {!loading && !error && productos.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                No hay productos disponibles
              </h3>
              <p className="text-gray-500 mb-6">
                Pronto agregaremos más productos a esta categoría
              </p>
              <Link
                href="/tienda-agricola"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Explorar otras categorías
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />

      {/* Modal de producto */}
      <ProductModal
        producto={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
