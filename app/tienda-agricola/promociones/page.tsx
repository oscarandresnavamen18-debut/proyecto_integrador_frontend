"use client";

import { useState } from "react";
import Tienda from "@/components/shop/Tienda";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { Sparkles, Tag, ArrowLeft, TrendingDown } from "lucide-react";
import { productosPorCategoria } from "@/data/products";
import { Producto } from "@/types/product";
import Image from "next/image";
import { ProductModal } from "@/components/products/ProductModal";

export default function PromocionesPage() {
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const promociones: Producto[] = Object.values(productosPorCategoria)
    .flat()
    .filter((producto) => producto.enPromocion);
  const descuentoMaximo = Math.max(
    ...promociones.map((p) => p.descuento || 0)
  );

  const handleProductClick = (producto: Producto) => {
    setSelectedProduct(producto);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <>
      <Tienda />
      <main className="min-h-screen bg-linear-to-b from-red-100 via-purple-900 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/tienda-agricola"
            className="inline-flex items-center  text-1xl gap-2 text-gray-900 hover:text-yellow-600 mb-8 transition-colors">
            <p className="w-10 h-12" />
            <span className="font-medium">Volver a categorías</span>
          </Link>
          <div className="relative bg-linear-to-r from-blue-500 via-pink-500 to-orange-500 rounded-3xl overflow-hidden mb-12 shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png')] opacity-100" />
            <div className="relative p-12 text-center text-black-opacity-100">
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
                <p className="w-6 h-6 animate-pulse" />
                <span className="font-bold text-lg">OFERTAS ESPECIALES</span>
                <p className="w-6 h-6 animate-pulse" />
              </div>
               <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Promociones Exclusivas
              </h1>

              <p className="text-2xl font-light mb-6 max-w-3xl mx-auto">
                Aprovecha descuentos de hasta <span className="font-bold text-3xl">{descuentoMaximo}%</span> en productos seleccionados
              </p>

              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full">
                  <Tag className="w-5 h-5" />
                  <span className="font-semibold">{promociones.length} productos en oferta</span>
                </div>
                <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-9 py-2 rounded-full">
                  <p className="w-5 h-5" />
                  <span className="font-semibold">Tiempo limitado</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
            {promociones.map((producto) => (
              <div
                key={producto.id}
                onClick={() => handleProductClick(producto)}
                className="group bg-blue-300 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-9 border-2 border-red-100 cursor-pointer">
                <div className="relative h-64 overflow-hidden bg-gray-900">
                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {producto.descuento && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-red-400 text-white px-4 py-2 rounded-full font-bold text-lg flex items-center gap-2 shadow-xl animate-pulse">
                        <Tag className="w-3 h-5" />
                        -{producto.descuento}%
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-white/900 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                    {producto.categoria}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-500 mb-2 line-clamp-2 min-h-14">
                    {producto.nombre}
                  </h3>
                  <p className="text-gray-900 text-sm mb-4 line-clamp-2 min-h-10">
                    {producto.descripcion}
                  </p>
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-3xl font-bold ">
                        ${producto.precio.toLocaleString("es-CO")}
                      </span>
                    </div>
                    {producto.precioOriginal && (
                      <div className="flex items-center gap-2">
                        <span className="text-2xl text-gray-600 line-through">
                          ${producto.precioOriginal.toLocaleString("es-CO")}
                        </span>
                        <span className="text-sm font-semibold text-green-900">
                          Ahorras ${(producto.precioOriginal - producto.precio).toLocaleString("es-CO")}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="text-center text-red-400 font-semibold text-xl group-hover:text-red-100 transition-colors">
                    Ver detalles 
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-linear-to-br from-white to-red-50 rounded-3xl shadow-xl p-12 text-center border-2 border-red-100">
            <div className="max-w-2xl mx-auto">
              <Sparkles className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                No te pierdas nuestras ofertas
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Suscríbete a nuestro boletín y recibe promociones exclusivas directamente en tu correo
              </p>
              <div className="flex gap-3 max-w-md mx-auto flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"/>
                <button type="button" className="bg-red-200 hover:bg-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg hover:shadow-xl whitespace-nowrap">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ProductModal
        producto={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
