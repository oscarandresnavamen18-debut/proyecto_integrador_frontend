"use client";

import { Producto } from "@/types/product";

interface ProductCardProps {
  producto: Producto;
  onClickCard?: (producto: Producto) => void;
  onClickComprar?: (producto: Producto) => void;
}

export default function ProductCard({ producto, onClickCard, onClickComprar }: ProductCardProps) {
  return (
    <div
      onClick={() => onClickCard?.(producto)}
      className="relative bg-blue-0 w-99 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
      {producto.enPromocion && producto.descuento && (
        <div className="absolute top-4 right- z-10">
          <div className="bg-red-600 text-white px-3 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
           -{producto.descuento}%
          </div>
        </div>
      )}

      <div className="w-full h-48 sm:h-78 lg:h-56 overflow-hidden bg-white flex items-center justify-center">
        <img src={producto.imagen}
             alt={producto.nombre}
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"/>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold text-green-800 mb-2 line-clamp-2">
          {producto.nombre}
        </h2>

        <p className="text-gray-900 text-base mb-4 line-clamp-3">
          {producto.descripcion}
        </p>

        <div className="space-y-2 mb-4">
          {producto.enPromocion && producto.precioOriginal && (
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm line-through">
                ${producto.precioOriginal.toLocaleString('es-CO')}
              </span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                Ahorra ${(producto.precioOriginal - producto.precio).toLocaleString('es-CO')}
              </span>
            </div>
          )}

          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold text-black">
              ${producto.precio.toLocaleString('es-CO')}
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onClickComprar?.(producto);
              }}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
