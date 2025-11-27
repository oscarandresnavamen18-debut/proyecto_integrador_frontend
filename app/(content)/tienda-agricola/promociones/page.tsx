"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { productosPorCategoria } from "../data/productos";
import { Producto } from "@/types/product";
import ProductModal from "../components/ProductModal";
import "../tienda-module.css";

export default function PromocionesPage() {
  const router = useRouter();
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);
  const productosEnPromocion: Producto[] = [];
  Object.values(productosPorCategoria).forEach((productos) => {
    productos.forEach((producto) => {
      if (producto.enPromocion) {
        productosEnPromocion.push(producto);
      }
    });
  });

  const handleClickCard = (producto: Producto) => {
    setProductoSeleccionado(producto);
  };

  const handleClickComprar = (producto: Producto) => {
    alert(`Producto "${producto.nombre}" agregado al carrito`);
  };

  const handleCloseModal = () => {
    setProductoSeleccionado(null);
  };

  return (
    <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 min-h-screen">
      <Navbar />
      <div className="p-6">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <span className="text-xl">←</span>
          Volver Atrás
        </button>
      </div>
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 py-16 px-8">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative max-w-6xl mx-auto text-center">
           <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-4 animate-pulse drop-shadow-2xl">
            ¡OFERTAS INCREÍBLES!
          </h1>
           <div className="flex justify-center gap-4 flex-wrap">
          </div>
        </div>
      </div>
      <div className="p-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Aprovecha Estas Ofertas
          </h2>
          <p className="text-xl text-gray-600">
            Los mejores precios en productos de calidad
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productosEnPromocion.map((producto) => (
            <div
              key={`${producto.categoria}-${producto.id}`}
              onClick={() => handleClickCard(producto)}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group">
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-red-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg animate-pulse">
                  -{producto.descuento}%
                </div>
              </div>
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg capitalize">
                  {producto.categoria}
                </div>
              </div>
              <div className="w-full h-56 overflow-hidden bg-gray-100">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem]">
                  {producto.nombre}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {producto.descripcion}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-sm line-through">
                      ${producto.precioOriginal?.toLocaleString('es-CO')}
                    </span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                      AHORRO: ${((producto.precioOriginal || 0) - producto.precio).toLocaleString('es-CO')}
                    </span>
                  </div>

                  <div className="text-3xl font-extrabold text-red-600">
                    ${producto.precio.toLocaleString('es-CO')}
                  </div>
                </div>
                <button onClick={(e) => {
                    e.stopPropagation();
                    handleClickComprar(producto);
                  }}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg">
                  🛒 Comprar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>

        {productosEnPromocion.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-600">
              No hay productos en promoción en este momento
            </p>
          </div>
        )}
      </div>

      <Footer />

      <ProductModal producto={productoSeleccionado} onClose={handleCloseModal} />
    </div>
  );
}
