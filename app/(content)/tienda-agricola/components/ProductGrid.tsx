"use client";

import { useState } from "react";
import { Producto } from "@/types/product";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "./Breadcrumbs";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface ProductGridProps {
  productos: Producto[];
  titulo: string;
  categoria?: string;
}

export default function ProductGrid({ productos, titulo, categoria }: ProductGridProps) {
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);
  const router = useRouter();

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-50">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumbs */}
        {categoria && (
          <Breadcrumbs
            items={[
              { label: titulo.replace("Catálogo de Productos - ", "") }
            ]}
          />
        )}

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

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
            {titulo}
          </h1>
          <div className="flex justify-center">
            <div className="h-1.5 w-32 bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 rounded-full" />
          </div>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Descubre nuestra selección de productos de alta calidad
          </p>
        </motion.div>

        {/* Products count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8 flex justify-between items-center flex-wrap gap-4"
        >
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
            <span className="text-gray-600">Total de productos:</span>
            <span className="font-bold text-green-600 text-lg">{productos.length}</span>
          </div>

          {/* Promo count if any */}
          {productos.filter(p => p.enPromocion).length > 0 && (
            <div className="flex items-center gap-2 bg-gradient-to-r from-red-50 to-orange-50 px-4 py-2 rounded-lg shadow-sm border border-red-200">
              <span className="text-red-600 font-semibold">En promoción:</span>
              <span className="font-bold text-red-600 text-lg">
                {productos.filter(p => p.enPromocion).length}
              </span>
            </div>
          )}
        </motion.div>

        {/* Products grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {productos.map((producto) => (
            <ProductCard
              key={producto.id}
              producto={producto}
              onClickCard={handleClickCard}
              onClickComprar={handleClickComprar}
            />
          ))}
        </motion.div>

        {/* Empty state */}
        {productos.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="text-gray-400 text-6xl mb-4">📦</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              No hay productos disponibles
            </h3>
            <p className="text-gray-500">
              Vuelve pronto para ver nuestras novedades
            </p>
          </motion.div>
        )}
      </div>

      <Footer />

      <ProductModal producto={productoSeleccionado} onClose={handleCloseModal} />
    </div>
  );
}
