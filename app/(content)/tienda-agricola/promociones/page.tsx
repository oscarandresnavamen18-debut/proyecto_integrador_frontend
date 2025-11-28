"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import { productosPorCategoria } from "../data/productos";
import { Producto } from "@/types/product";
import ProductModal from "../components/ProductModal";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Promociones" }
          ]}
        />

        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push('/tienda-agricola')}
          className="mb-6 inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Volver
        </motion.button>

        {/* Hero banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-3xl shadow-2xl mb-12 p-8 md:p-16"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

          <div className="relative text-center">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1
              }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 drop-shadow-2xl">
                ¡OFERTAS INCREÍBLES!
              </h1>
            </motion.div>
            <p className="text-xl md:text-2xl text-white/90 font-semibold">
              Descuentos de hasta 60% en productos seleccionados
            </p>
          </div>
        </motion.div>

        {/* Info section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
            Aprovecha Estas Ofertas
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Los mejores precios en productos de calidad para tu finca y ganado
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12 flex justify-center gap-4 flex-wrap"
        >
          <div className="bg-white rounded-2xl shadow-lg px-6 py-4 border-2 border-red-200">
            <div className="text-3xl font-extrabold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              {productosEnPromocion.length}
            </div>
            <div className="text-sm text-gray-600 font-semibold">
              Productos en oferta
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg px-6 py-4 border-2 border-orange-200">
            <div className="text-3xl font-extrabold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Hasta 60%
            </div>
            <div className="text-sm text-gray-600 font-semibold">
              de descuento
            </div>
          </div>
        </motion.div>

        {/* Products grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {productosEnPromocion.map((producto) => (
            <ProductCard
              key={`${producto.categoria}-${producto.id}`}
              producto={producto}
              onClickCard={handleClickCard}
              onClickComprar={handleClickComprar}
            />
          ))}
        </motion.div>

        {/* Empty state */}
        {productosEnPromocion.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="text-gray-400 text-6xl mb-4">🎁</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              No hay productos en promoción en este momento
            </h3>
            <p className="text-gray-500 mb-6">
              Vuelve pronto para ver nuestras increíbles ofertas
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/tienda-agricola')}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Ver todos los productos
            </motion.button>
          </motion.div>
        )}
      </div>

      <Footer />

      <ProductModal producto={productoSeleccionado} onClose={handleCloseModal} />
    </div>
  );
}
