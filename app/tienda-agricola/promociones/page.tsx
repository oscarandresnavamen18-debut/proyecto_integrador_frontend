"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { ProductModal } from "@/components/products/ProductModal";
import Breadcrumbs from "../components/Breadcrumbs";
import { productosPorCategoria, categorias } from "../data/productos";
import { Producto, Categoria } from "@/types/product";
import { Sparkles, Percent, TrendingDown, Filter } from "lucide-react";

export default function PromocionesPage() {
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filtroCategoria, setFiltroCategoria] = useState<string>("todas");

  const handleOpenModal = (producto: Producto) => {
    setSelectedProduct(producto);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const allPromoProducts = categorias
    .flatMap((cat) => productosPorCategoria[cat as Categoria])
    .filter((p) => p.enPromocion);

  const productosFiltered =
    filtroCategoria === "todas"
      ? allPromoProducts
      : allPromoProducts.filter((p) => p.categoria === filtroCategoria);

  const promosPorCategoria = categorias.map((cat) => ({
    categoria: cat,
    count: productosPorCategoria[cat as Categoria].filter((p) => p.enPromocion).length,
  }));

  const mayorDescuento = Math.max(...allPromoProducts.map((p) => p.descuento || 0));
  const totalAhorro = allPromoProducts.reduce(
    (sum, p) => sum + ((p.precioOriginal || 0) - p.precio),
    0
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative bg-gradient-to-r from-red-500 via-red-600 to-orange-500 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-300 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-bold animate-bounce-slow">
              <Sparkles className="w-5 h-5" />
              <span>¡OFERTAS ESPECIALES!</span>
              <Sparkles className="w-5 h-5" />
            </div>

            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
              Promociones Activas
            </h1>

            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Aprovecha nuestras ofertas especiales en productos seleccionados. ¡Ahorra hasta {mayorDescuento}%!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold">{allPromoProducts.length}</div>
                <div className="text-sm text-white/80">Productos en Oferta</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold">{mayorDescuento}%</div>
                <div className="text-sm text-white/80">Descuento Máximo</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold">{formatPrice(totalAhorro)}</div>
                <div className="text-sm text-white/80">Ahorro Total Disponible</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-gray-50"
            />
          </svg>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Promociones" }]} />

          <div className="mb-8 bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-900">Filtrar por Categoría</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setFiltroCategoria("todas")}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  filtroCategoria === "todas"
                    ? "bg-red-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Todas ({allPromoProducts.length})
              </button>

              {promosPorCategoria
                .filter((item) => item.count > 0)
                .map((item) => (
                  <button
                    type="button"
                    key={item.categoria}
                    onClick={() => setFiltroCategoria(item.categoria)}
                    className={`px-4 py-2 rounded-full font-semibold transition-all capitalize ${
                      filtroCategoria === item.categoria
                        ? "bg-red-500 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {item.categoria} ({item.count})
                  </button>
                ))}
            </div>
          </div>

          {productosFiltered.length > 0 ? (
            <>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  {filtroCategoria === "todas" ? "Todas las Promociones" : `Promociones en ${filtroCategoria}`} ({productosFiltered.length})
                </h2>
                <div className="flex items-center gap-2 text-red-600">
                  <TrendingDown className="w-5 h-5" />
                  <span className="font-semibold">Grandes Descuentos</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {productosFiltered.map((producto) => (
                  <ProductCard key={producto.id} producto={producto} onOpenModal={handleOpenModal} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20 bg-white rounded-xl">
              <Percent className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No hay promociones en esta categoría
              </h3>
              <p className="text-gray-500 mb-6">Prueba con otra categoría o ve todas las promociones</p>
              <button
                type="button"
                onClick={() => setFiltroCategoria("todas")}
                className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors"
              >
                Ver Todas las Promociones
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-orange-400 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white border border-white/20">
            <Sparkles className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">¡No te pierdas nuestras ofertas!</h3>
            <p className="text-white/90 mb-6">
              Suscríbete a nuestro boletín y recibe notificaciones de nuevas promociones
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button type="button" className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <ProductModal
        producto={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
