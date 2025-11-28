"use client";

import { Producto } from "@/types/product";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface ProductModalProps {
  producto: Producto | null;
  onClose: () => void;
}

export default function ProductModal({ producto, onClose }: ProductModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (producto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [producto]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {producto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden relative"
          >
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-red-500 text-gray-700 hover:text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <div className="flex flex-col md:flex-row">
              {/* Image section */}
              <div className="md:w-1/2 relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
                {/* Promotional badge */}
                {producto.enPromocion && producto.descuento && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-50 animate-pulse" />
                      <div className="relative bg-gradient-to-br from-red-500 to-red-600 text-white px-4 py-2 rounded-full font-bold shadow-xl">
                        -{producto.descuento}% OFF
                      </div>
                    </div>
                  </div>
                )}

                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-auto max-h-96 object-contain drop-shadow-2xl"
                />

                {/* Category badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full text-sm font-semibold shadow-lg capitalize">
                    {producto.categoria}
                  </div>
                </div>
              </div>

              {/* Content section */}
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <motion.h2
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight"
                  >
                    {producto.nombre}
                  </motion.h2>

                  <motion.p
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 text-base md:text-lg leading-relaxed mb-6"
                  >
                    {producto.descripcion}
                  </motion.p>

                  {/* Pricing section */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-3 mb-8"
                  >
                    {producto.enPromocion && producto.precioOriginal && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="text-gray-400 text-lg line-through">
                            ${producto.precioOriginal.toLocaleString('es-CO')}
                          </span>
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-bold border border-green-200">
                            Ahorra ${(producto.precioOriginal - producto.precio).toLocaleString('es-CO')}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-200">
                      <div className="text-sm text-gray-600 mb-1">Precio:</div>
                      <div className="text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        ${producto.precio.toLocaleString('es-CO')}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Action buttons */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-3"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-4 px-6 rounded-xl transition-all duration-300 border border-gray-300"
                  >
                    Cerrar
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      alert(`Producto "${producto.nombre}" agregado al carrito`);
                      onClose();
                    }}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Comprar Ahora
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
