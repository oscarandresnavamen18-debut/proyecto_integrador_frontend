"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CONTENEDOR PRINCIPAL */}
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-16 h-16 group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/LOGO_PG.png"
                alt="La Casa del Ganadero"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
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

          {/* NAVEGACIÓN ESCRITORIO */}
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

            {/* PROMOCIONES DESKTOP */}
            <Link
              href="/tienda-agricola/promociones"
              className="relative ml-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 hover:scale-110 shadow-lg flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Promociones
            </Link>
          </nav>

          {/* Desktop Cart */}
          <button
            type="button"
            aria-label="Abrir carrito"
            className="hidden lg:flex relative p-3 hover:bg-green-50 rounded-xl transition-all duration-200 hover:scale-110 group"
          >
            <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-green-600 transition-colors" />

            {/* Badge con cantidad */}
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold shadow-lg">
              2
            </span>
          </button>

          {/* BOTÓN MENÚ MÓVIL */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
              isMenuOpen ? "bg-green-100 scale-105" : "hover:bg-green-50"
            }`}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? (
                <X className="w-7 h-7 text-gray-700" />
              ) : (
                <Menu className="w-7 h-7 text-gray-700" />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {isMenuOpen && (
        <motion.div
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
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* PROMOCIONES MOBILE */}
            <Link
              href="/tienda-agricola/promociones"
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Sparkles className="w-5 h-5" />
              Promociones Especiales
            </Link>

            {/* CARRITO MÓVIL */}
            {/* Mobile Cart */}
            <div className="pt-4 mt-4 border-t border-green-200">
              <button
                type="button"
                aria-label="Abrir carrito de compras"
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors hover:bg-green-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-6 h-6 text-emerald-700" />
                  <span className="font-medium text-gray-800">Mi Carrito</span>
                </div>

                <span className="min-w-[50px] text-center px-3 py-1 text-sm font-semibold rounded-full bg-red-500 text-white">
                  2 items
                </span>
              </button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
