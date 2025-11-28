"use client";

import { Producto } from "@/types/product";
import { ShoppingCart, Percent } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  producto: Producto;
  onOpenModal?: (producto: Producto) => void;
}

export default function ProductCard({ producto, onOpenModal }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleCardClick = () => {
    onOpenModal?.(producto);
  };

  return (
    <div
      className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200 w-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Image Container */}
      <div className="relative w-full h-56 overflow-hidden bg-gray-50">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className={`w-full h-full object-contain p-2 transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        {/* Promotion Badge */}
        {producto.enPromocion && producto.descuento && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1.5 rounded-full flex items-center gap-1 font-bold text-sm shadow-lg animate-pulse-slow">
            <Percent className="w-4 h-4" />
            <span>{producto.descuento}% OFF</span>
          </div>
        )}

        {/* Category Badge */}
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold capitalize shadow-md ${
          producto.categoria === "mascotas" ? "bg-blue-500 text-white" :
          producto.categoria === "ferreteria" ? "bg-gray-500 text-white" :
          producto.categoria === "ganaderia" ? "bg-green-600 text-white" :
          "bg-emerald-500 text-white"
        }`}>
          {producto.categoria}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2 min-h-[40px] group-hover:text-green-600 transition-colors">
          {producto.nombre}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-500 line-clamp-2 mb-3">
          {producto.descripcion}
        </p>

        {/* Pricing */}
        <div className="mb-4">
          {producto.enPromocion && producto.precioOriginal ? (
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-green-600">
                  {formatPrice(producto.precio)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400 line-through">
                  {formatPrice(producto.precioOriginal)}
                </span>
                <span className="text-xs font-semibold text-red-500">
                  Ahorra {formatPrice(producto.precioOriginal - producto.precio)}
                </span>
              </div>
            </div>
          ) : (
            <span className="text-xl font-bold text-gray-800">
              {formatPrice(producto.precio)}
            </span>
          )}
        </div>

        {/* View Details Button */}
        <div className="w-full bg-linear-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white py-3 px-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl relative overflow-hidden group-hover:animate-pulse">
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <ShoppingCart className="w-5 h-5 relative z-10" />
          <span className="relative z-10 text-base">Ver Detalles</span>
        </div>
      </div>
    </div>
  );
}
