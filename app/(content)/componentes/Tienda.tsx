"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

/**
 * TRABAJADOR 1: Header Component
 * Este componente puede ser modificado independientemente
 * Responsabilidades: Navegación, menú mobile, logo, carrito
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-100 bg-white/80 backdrop-blur-xl border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
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
              <p className="text-sm text-gray-600 font-medium">Todo para el campo colombiano</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <Link
              href="/"
              className="px-4 py-2.5 rounded-xl text-gray-700 hover:bg-green-50 hover:text-green-700 font-semibold transition-all duration-200 hover:scale-105"
            >
              Inicio
            </Link>
            <Link
              href="/tienda-agricola/mascotas"
              className="px-4 py-2.5 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-semibold transition-all duration-200 hover:scale-105"
            >
              Mascotas
            </Link>
            <Link
              href="/tienda-agricola/ferreteria"
              className="px-4 py-2.5 rounded-xl text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-semibold transition-all duration-200 hover:scale-105"
            >
              Ferretería
            </Link>
            <Link
              href="/tienda-agricola/ganaderia"
              className="px-4 py-2.5 rounded-xl text-gray-700 hover:bg-green-50 hover:text-green-800 font-semibold transition-all duration-200 hover:scale-105"
            >
              Ganadería
            </Link>
            <Link
              href="/tienda-agricola/agricola"
              className="px-4 py-2.5 rounded-xl text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 font-semibold transition-all duration-200 hover:scale-105"
            >
              Agrícola
            </Link>
            <Link
              href="/tienda-agricola/promociones"
              className="relative ml-2 bg-linear-to-r from-red-500 to-pink-500 text-white px-6 py-2.5 rounded-full hover:from-red-600 hover:to-pink-600 font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="relative z-10">Promociones</span>
            </Link>
          </nav>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-3">
            <button type="button" className="relative p-3 hover:bg-green-50 rounded-xl transition-all duration-200 hover:scale-110 group">
              <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-green-600 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-linear-to-r from-red-500 to-pink-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold shadow-lg">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 hover:bg-green-50 rounded-xl transition-all duration-200"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7 text-gray-700" />
            ) : (
              <Menu className="w-7 h-7 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-green-100 shadow-lg">
          <nav className="px-4 py-6 space-y-2">
            <Link
              href="/"
              className="block text-gray-700 hover:bg-green-50 hover:text-green-700 font-semibold py-3 px-4 rounded-xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              🏠 Inicio
            </Link>
            <Link
              href="/tienda-agricola/mascotas"
              className="block text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-semibold py-3 px-4 rounded-xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              🐾 Mascotas
            </Link>
            <Link
              href="/tienda-agricola/ferreteria"
              className="block text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-semibold py-3 px-4 rounded-xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              🔧 Ferretería
            </Link>
            <Link
              href="/tienda-agricola/ganaderia"
              className="block text-gray-700 hover:bg-green-50 hover:text-green-800 font-semibold py-3 px-4 rounded-xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              🐄 Ganadería
            </Link>
            <Link
              href="/tienda-agricola/agricola"
              className="block text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 font-semibold py-3 px-4 rounded-xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              🌾 Agrícola
            </Link>
            <Link
              href="/tienda-agricola/promociones"
              className="bg-linear-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:from-red-600 hover:to-pink-600 font-bold text-center transition-all shadow-lg flex items-center justify-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Sparkles className="w-5 h-5" />
              Promociones Especiales
            </Link>

            {/* Mobile Cart */}
            <div className="pt-4 border-t border-green-100 mt-4">
              <button type="button" className="w-full flex items-center justify-between p-4 hover:bg-green-50 rounded-xl transition-all">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-6 h-6 text-gray-700" />
                  <span className="font-semibold text-gray-700">Mi Carrito</span>
                </div>
                <span className="bg-linear-to-r from-red-500 to-pink-500 text-white text-sm px-3 py-1 rounded-full font-bold">
                  0 items
                </span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}