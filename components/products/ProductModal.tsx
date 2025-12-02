"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ShoppingCart, Heart, Share2, Minus, Plus, Tag, Package, Truck, Shield } from "lucide-react";
import { Producto } from "@/types/product";
import { motion, AnimatePresence } from "framer-motion";

interface ProductModalProps {
  producto: Producto | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ producto, isOpen, onClose }: ProductModalProps) {
  const [cantidad, setCantidad] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!producto) return null;

  const handleIncrementar = () => setCantidad((prev) => Math.min(prev + 1, 99));
  const handleDecrementar = () => setCantidad((prev) => Math.max(prev - 1, 1));

  const precioTotal = producto.precio * cantidad;
  const ahorroTotal = producto.precioOriginal
    ? (producto.precioOriginal - producto.precio) * cantidad
    : 0;

  return (
    <section>
      {isOpen && (
        <>
                  <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"/>
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden my-8" >
              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                <X className="w-6 h-6 text-gray-700" />
              </button>
              <div className="overflow-y-auto max-h-[90vh]">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  
                      <div className="space-y-4">
                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
                      <Image
                        src={producto.imagen}
                        alt={producto.nombre}
                        fill
                        className="object-cover"/>
                      {producto.enPromocion && producto.descuento && (
                        <div className="absolute top-4 right-4">
                          <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg flex items-center gap-2 shadow-xl animate-pulse">
                            <Tag className="w-5 h-5" />
                            {producto.descuento}%
                          </div>
                        </div>
                      )}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full text-sm font-semibold uppercase shadow-lg">
                        {producto.categoria}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="flex flex-col items-center p-4 bg-green-50 rounded-xl">
                        <Truck className="w-6 h-6 text-green-600 mb-2" />
                        <span className="text-xs text-gray-700 font-semibold text-center">Envío gratis</span>
                      </div>
                      <div className="flex flex-col items-center p-4 bg-blue-50 rounded-xl">
                        <Shield className="w-6 h-6 text-blue-600 mb-2" />
                        <span className="text-xs text-gray-700 font-semibold text-center">Garantía</span>
                      </div>
                      <div className="flex flex-col items-center p-4 bg-purple-50 rounded-xl">
                        <Package className="w-6 h-6 text-purple-600 mb-2" />
                        <span className="text-xs text-gray-700 font-semibold text-center">En stock</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {producto.nombre}
                      </h2>

                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        {producto.descripcion}
                      </p>
                      <div className="mb-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-100">
                        <div className="flex items-baseline gap-3 mb-2">
                          <span className="text-5xl font-bold text-green-600">
                            ${precioTotal.toLocaleString("es-CO")}
                          </span>
                          {cantidad > 1 && (
                            <span className="text-lg text-gray-600">
                              (${producto.precio.toLocaleString("es-CO")} c/u)
                            </span>
                          )}
                        </div>

                        {producto.precioOriginal && (
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="text-xl text-gray-400 line-through">
                              ${(producto.precioOriginal * cantidad).toLocaleString("es-CO")}
                            </span>
                            <span className="text-lg font-bold text-red-600 bg-red-100 px-3 py-1 rounded-full">
                              Ahorras ${ahorroTotal.toLocaleString("es-CO")}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="mb-6">
                        <p className="block text-sm font-semibold text-gray-700 mb-3">
                          Cantidad
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center border-2 border-gray-300 rounded-xl overflow-hidden">
                            <button
                              type="button"
                              onClick={handleDecrementar}
                              disabled={cantidad <= 1}
                              className="p-3 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                              <Minus className="w-5 h-5 text-gray-700" />
                            </button>
                            <input
                              type="number"
                              value={cantidad}
                              onChange={(e) => {
                                const val = parseInt(e.target.value) || 1;
                                setCantidad(Math.max(1, Math.min(99, val)));
                              }}
                              className="w-20 text-center text-xl font-bold text-gray-900 border-x-2 border-gray-300 focus:outline-none"
                              min="1"
                              max="99"/>
                            <button
                              type="button"
                              onClick={handleIncrementar}
                              disabled={cantidad >= 99}
                              className="p-3 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                              <Plus className="w-5 h-5 text-gray-700" />
                            </button>
                          </div>
                          <s className="text-sm text-gray-600">
                            Disponible: <p className="font-semibold text-green-600">En stock</p>
                          </s>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 border-t pt-6">
                      <button
                        type="button"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl hover:scale-[1.02]">
                        <ShoppingCart className="w-6 h-6" />
                        Agregar al carrito
                      </button>

                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setIsFavorite(!isFavorite)}
                          className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all ${
                            isFavorite
                              ? "bg-red-100 text-red-600 border-2 border-red-200"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-gray-200"
                          }`}>
                          <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-600" : ""}`} />
                          {isFavorite ? "Guardado" : "Guardar"}
                        </button>
                         <button
                          type="button"
                          className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-colors border-2 border-gray-200">
                          <Share2 className="w-5 h-5" />
                          Compartir
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </section>
  );
}
