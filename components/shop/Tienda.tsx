"use client";

import Link from "next/link";
import { ShoppingCart as CarritoCompras, Menu as MenuIcono, X as Cerrar, Sparkles as Destellos } from "lucide-react";
import { useState } from "react";
import { motion as Animacion } from "framer-motion";

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
`+`          <Link href="/" className="flex items-center gap-3 group">
            <div className="text-5xl transition-transform group-hover:rotate-12 group-hover:scale-110 duration-300">
              🐄
            </div>
            <div>
              <h1 className="text-2xl font-black text-gray-900 group-hover:text-green-600 transition-colors">
                La Casa del Ganadero
              </h1>
              <p className="text-sm text-gray-600 font-medium">
                Todo para el campo colombiano
              </p>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-3">
            {[
              { name: "Inicio", href: "/" },
              { name: "Mascotas", href: "/tienda-agricola/mascotas" },
              { name: "Ferretería", href: "/tienda-agricola/ferreteria" },
              { name: "Ganadería", href: "/tienda-agricola/ganaderia" },
              { name: "Agrícola", href: "/tienda-agricola/agricola" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2.5 rounded-xl text-gray-700 font-semibold transition-all duration-300 hover:scale-105 hover:bg-green-100 hover:text-green-700"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/tienda-agricola/promociones"
              className="relative ml-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 hover:scale-110 shadow-lg flex items-center gap-2"
            >
              <Destellos className="w-5 h-5" />
              Promociones
            </Link>
          </nav>
          <button
            type="button"
            aria-label="Abrir carrito"
            className="hidden lg:flex relative p-3 hover:bg-green-50 rounded-xl transition-all duration-200 hover:scale-110 group"
          >
            <CarritoCompras className="w-6 h-6 text-gray-700 group-hover:text-green-600 transition-colors" />

            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold shadow-lg">
              2
            </span>
          </button>
          <button
            type="button"
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuAbierto(!menuAbierto)}
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
              menuAbierto ? "bg-green-100 scale-105" : "hover:bg-green-50"
            }`}>
            <Animacion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: menuAbierto ? 90 : 0 }}
              transition={{ duration: 0.2 }}>
              {menuAbierto ? (
                <Cerrar className="w-7 h-7 text-gray-700" />
              ) : (
                <MenuIcono className="w-7 h-7 text-gray-700" />
              )}
            </Animacion.div>
          </button>
        </div>
      </div>
      {menuAbierto && (
        <Animacion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-green-100 shadow-lg"
        >
          <nav className="px-4 py-6 space-y-3">
            {[
              { label: "🏠 Inicio", href: "/" },
              { label: "🐾 Mascotas", href: "/tienda-agricola/mascotas" },
              { label: "🔧 Ferretería", href: "/tienda-agricola/ferreteria" },
              { label: "🐄 Ganadería", href: "/tienda-agricola/ganaderia" },
              { label: "🌾 Agrícola", href: "/tienda-agricola/agricola" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block font-semibold text-gray-700 px-4 py-3 rounded-xl hover:bg-green-50 hover:text-green-700"
                onClick={() => setMenuAbierto(false)}>
                {item.label}
              </Link>
            ))}
            <Link
              href="/tienda-agricola/promociones"
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2"
              onClick={() => setMenuAbierto(false)}>
              <Destellos className="w-5 h-5" />
              Promociones Especiales
            </Link>
            <div className="pt-4 mt-4 border-t border-green-200">
              <button
                type="button"
                aria-label="Abrir carrito de compras"
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors hover:bg-green-100"
                onClick={() => setMenuAbierto(false)}
              >
                <div className="flex items-center gap-3">
                  <CarritoCompras className="w-6 h-6 text-emerald-700" />
                  <span className="font-medium text-gray-800">Mi Carrito</span>
                </div>

                <span className="min-w-[50px] text-center px-3 py-1 text-sm font-semibold rounded-full bg-red-500 text-white">
                  2 artículos
                </span>
              </button>
            </div>
          </nav>
        </Animacion.div>
      )}
    </header>
  );
}
