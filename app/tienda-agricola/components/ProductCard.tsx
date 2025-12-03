"use client";

import { ShoppingCart, TrendingUp } from "lucide-react";
import { Producto } from "@/types/product";

interface ProductCardProps {
  producto: Producto;
  onOpenModal: (producto: Producto) => void;
}

export default function ProductCard({ producto, onOpenModal }: ProductCardProps) {
  const precioFinal = producto.enPromocion && producto.precioOriginal
    ? producto.precioOriginal - (producto.precioOriginal * (producto.descuento || 0) / 100)
    : producto.precio;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div
      className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100 hover:border-green-200 hover:-translate-y-2"
      onClick={() => onOpenModal(producto)}>
              <div className="relative overflow-hidden bg-gray-100 h-56">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /> 
        {producto.enPromocion && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            {producto.descuento}% OFF
          </div>
        )}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 capitalize">
          {producto.categoria}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-green-700 transition-colors">
          {producto.nombre}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {producto.descripcion}
        </p>
        <div className="mb-4">
          {producto.enPromocion && producto.precioOriginal ? (
            <div className="space-y-1">
              <div className="text-sm text-gray-500 line-through">
                {formatPrice(producto.precioOriginal)}
              </div>
              <div className="text-2xl font-bold text-green-600">
                {formatPrice(precioFinal)}
              </div>
            </div>
          ) : (
            <div className="text-2xl font-bold text-gray-900">
              {formatPrice(producto.precio)}
            </div>
          )}
        </div>
        <button
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105"
          onClick={(e) => {
            e.stopPropagation();
          }} >
          <ShoppingCart className="w-5 h-5" />
          <span>Agregar al Carrito</span>
        </button>
      </div>
    </div>
  );
}
