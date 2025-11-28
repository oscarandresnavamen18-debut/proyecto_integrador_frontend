"use client";

import { Producto } from "@/types/product";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProductCardProps {
  producto: Producto;
  onClickCard?: (producto: Producto) => void;
  onClickComprar?: (producto: Producto) => void;
}

export default function ProductCard({ producto, onClickCard, onClickComprar }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onClickCard?.(producto)}
      className="group relative bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer h-full flex flex-col"
    >
      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
      />

      {/* Promotional badge */}
      {producto.enPromocion && producto.descuento && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="absolute top-3 right-3 z-20"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-red-500 rounded-full blur-lg opacity-50 animate-pulse" />
            <div className="relative bg-gradient-to-br from-red-500 to-red-600 text-white px-3 py-2 rounded-full font-bold text-sm shadow-xl">
              -{producto.descuento}%
            </div>
          </div>
        </motion.div>
      )}

      {/* Category badge */}
      <div className="absolute top-3 left-3 z-20">
        <div className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-semibold shadow-md capitalize">
          {producto.categoria}
        </div>
      </div>

      {/* Image container with 3D effect */}
      <div className="relative w-full h-56 md:h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <motion.img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-full object-contain p-4"
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotateY: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
          animate={{
            translateX: isHovered ? "200%" : "-100%",
          }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem] group-hover:text-green-600 transition-colors duration-300">
          {producto.nombre}
        </h2>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
          {producto.descripcion}
        </p>

        {/* Pricing section */}
        <div className="space-y-3 mt-auto">
          {producto.enPromocion && producto.precioOriginal && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-gray-400 text-sm line-through">
                ${producto.precioOriginal.toLocaleString('es-CO')}
              </span>
              <span className="bg-green-50 text-green-700 px-2 py-1 rounded-lg text-xs font-semibold border border-green-200">
                Ahorra ${(producto.precioOriginal - producto.precio).toLocaleString('es-CO')}
              </span>
            </div>
          )}

          <div className="flex justify-between items-center gap-3">
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              ${producto.precio.toLocaleString('es-CO')}
            </span>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                onClickComprar?.(producto);
              }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-2.5 px-5 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Comprar
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom shine effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
