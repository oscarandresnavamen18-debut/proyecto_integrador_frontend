"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";

interface ProductoCardProps {
  nombre: string;
  precio: number;
  imagen: string;
  descripcion?: string;
  descuento?: number;
}

export default function ProductoCard({
  nombre,
  precio,
  imagen,
  descripcion,
  descuento,
}: ProductoCardProps) {
  const precioFinal = descuento
    ? precio - (precio * descuento) / 100
    : precio;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 bg-gray-100">
        <Image
          src={imagen}
          alt={nombre}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {descuento && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{descuento}%
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{nombre}</h3>
        {descripcion && (
          <p className="text-gray-600 text-sm mb-3">{descripcion}</p>
        )}

        <div className="flex items-center justify-between">
          <div>
            {descuento ? (
              <>
                <span className="text-gray-400 line-through text-sm">
                  ${precio.toLocaleString()}
                </span>
                <p className="text-green-600 font-bold text-xl">
                  ${precioFinal.toLocaleString()}
                </p>
              </>
            ) : (
              <p className="text-green-600 font-bold text-xl">
                ${precio.toLocaleString()}
              </p>
            )}
          </div>

          <button
            className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg transition-colors"
            aria-label={`Agregar ${nombre} al carrito`}
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
