"use client";

import Link from "next/link";
import { useState } from "react";

interface CategoryCardProps {
  titulo: string;
  descripcion: string;
  imagen: string;
  color: string;
  href: string;
  productCount: number;
}

export default function CategoryCard({
  titulo,
  descripcion,
  imagen,
  color,
  href,
  productCount,
}: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    blue: "border-blue-500 hover:border-blue-600 hover:shadow-blue-200",
    gray: "border-gray-500 hover:border-gray-600 hover:shadow-gray-200",
    green: "border-green-500 hover:border-green-600 hover:shadow-green-200",
    emerald: "border-emerald-500 hover:border-emerald-600 hover:shadow-emerald-200",
  };

  const bgColors = {
    blue: "bg-blue-50 hover:bg-blue-100",
    gray: "bg-gray-50 hover:bg-gray-100",
    green: "bg-green-50 hover:bg-green-100",
    emerald: "bg-emerald-50 hover:bg-emerald-100",
  };

  const borderColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.green;
  const bgColor = bgColors[color as keyof typeof bgColors] || bgColors.green;

  return (
    <Link href={href}>
      <div
        className={`flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 ${borderColor} ${bgColor}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Circular Image */}
        <div className="relative w-32 h-32 mb-4">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={imagen}
              alt={titulo}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
            />
          </div>
          {/* Product Count Badge */}
          <div className="absolute -top-2 -right-2 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
            {productCount}
          </div>
        </div>

        {/* Category Info */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{titulo}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4 min-h-[40px]">{descripcion}</p>

        {/* Button */}
        <button
          type="button"
          className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Ver Productos
        </button>
      </div>
    </Link>
  );
}
