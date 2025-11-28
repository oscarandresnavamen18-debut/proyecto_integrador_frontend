"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Minus, Plus, Sparkles, Package, BadgeCheck } from "lucide-react";
import { Producto } from "@/types/product";
import { useState, useEffect } from "react";

interface ProductModalProps {
  producto: Producto | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ producto, isOpen, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!producto) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    // Aquí puedes agregar la lógica del carrito
    console.log(`Agregando ${quantity} ${producto.nombre} al carrito`);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>

            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Left: Image */}
              <div className="relative">
                {/* Promotion Badge */}
                {producto.enPromocion && producto.descuento && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full flex items-center gap-2 font-bold shadow-lg z-10"
                  >
                    <Sparkles className="w-5 h-5" />
                    <span>{producto.descuento}% OFF</span>
                  </motion.div>
                )}

                {/* Image Container */}
                <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden">
                  <motion.img
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-full h-full object-contain p-8"
                  />
                </div>
              </div>

              {/* Right: Info */}
              <div className="flex flex-col justify-between overflow-y-auto max-h-[70vh]">
                <div>
                  {/* Category Badge */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-4 ${
                      producto.categoria === "mascotas" ? "bg-blue-100 text-blue-700" :
                      producto.categoria === "ferreteria" ? "bg-gray-100 text-gray-700" :
                      producto.categoria === "ganaderia" ? "bg-green-100 text-green-700" :
                      "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    <Package className="w-4 h-4" />
                    <span className="capitalize">{producto.categoria}</span>
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-bold text-gray-900 mb-4"
                  >
                    {producto.nombre}
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 mb-6 leading-relaxed"
                  >
                    {producto.descripcion}
                  </motion.p>

                  {/* Features */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 mb-6"
                  >
                    <div className="flex items-center gap-2 text-green-700 font-semibold mb-2">
                      <BadgeCheck className="w-5 h-5" />
                      <span>Producto Certificado</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ Calidad garantizada</li>
                      <li>✓ Envío a toda Colombia</li>
                      <li>✓ Soporte técnico incluido</li>
                    </ul>
                  </motion.div>

                  {/* Price */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mb-6"
                  >
                    {producto.enPromocion && producto.precioOriginal ? (
                      <div className="space-y-2">
                        <div className="flex items-baseline gap-3">
                          <span className="text-4xl font-bold text-green-600">
                            {formatPrice(producto.precio)}
                          </span>
                          <span className="text-xl text-gray-400 line-through">
                            {formatPrice(producto.precioOriginal)}
                          </span>
                        </div>
                        <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                          <TrendingDown className="w-4 h-4" />
                          Ahorra {formatPrice(producto.precioOriginal - producto.precio)}
                        </div>
                      </div>
                    ) : (
                      <span className="text-4xl font-bold text-gray-900">
                        {formatPrice(producto.precio)}
                      </span>
                    )}
                  </motion.div>
                </div>

                {/* Quantity Selector & Add to Cart */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-4"
                >
                  {/* Quantity */}
                  <div className="flex items-center gap-4">
                    <span className="text-gray-700 font-semibold">Cantidad:</span>
                    <div className="flex items-center gap-3 bg-gray-100 rounded-full p-1">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-50"
                      >
                        <Minus className="w-4 h-4" />
                      </motion.button>
                      <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setQuantity(quantity + 1)}
                        className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-50"
                      >
                        <Plus className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all"
                  >
                    <ShoppingCart className="w-6 h-6" />
                    Agregar al Carrito - {formatPrice(producto.precio * quantity)}
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

function TrendingDown({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
    </svg>
  );
}
