"use client";

import { useState, useEffect } from "react";
import Header from "../(content)/tienda-agricola/components/Header";
import Footer from "../(content)/tienda-agricola/components/Footer";
import DecayCard from "../(content)/tienda-agricola/components/DecayCard";
import ProductCard from "../(content)/tienda-agricola/components/ProductCard";
import { ProductModal } from "@/components/products/ProductModal";
import { categoriasInfo, productosPorCategoria, categorias, Producto } from "../(content)/tienda-agricola/data/productos";
import { Sparkles, TrendingUp, Award, Truck } from "lucide-react";
import Link from "next/link";
import { Categoria } from "@/types";

export default function TiendaAgricolaPage() {
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (producto: Producto) => {
    setSelectedProduct(producto);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const featuredProducts = Object.values(productosPorCategoria)
    .flat()
    .slice(0, 4);

  const promoCount = Object.values(productosPorCategoria)
    .flat()
    .filter((p) => p.enPromocion).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50">
      <Header />

      <section className="relative bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float-1" />
          <div className="absolute top-20 right-0 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl animate-float-2" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-float-3" />
          <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-green-300/20 rounded-full blur-2xl animate-float-4" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Bienvenido a La Casa del Ganadero</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Todo lo que necesitas
              <br />
              <span className="text-green-200">para el campo</span>
            </h1>

            <p className="text-lg sm:text-xl text-green-100 max-w-2xl mx-auto">
              Encuentra productos de calidad para mascotas, ganadería, agricultura y ferretería.
              Precios competitivos y envío a todo el país.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link
                href="#categorias"
                className="bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
              >
                Explorar Categorías
              </Link>
              <Link
                href="/tienda-agricola/promociones"
                className="bg-red-500 text-white px-8 py-3 rounded-full font-bold hover:bg-red-600 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Ver {promoCount} Promociones
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-12 sm:h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-gray-50"
            />
          </svg>
        </div>
      </section>
            <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Calidad Garantizada",
                description: "Productos certificados",
              },
              {
                icon: Truck,
                title: "Envío Nacional",
                description: "A todo Colombia",
              },
              {
                icon: TrendingUp,
                title: "Mejores Precios",
                description: "Precios competitivos",
              },
              {
                icon: Sparkles,
                title: "Promociones",
                description: `${promoCount} ofertas activas`,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="bg-green-100 p-3 rounded-lg">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="categorias" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Explora Nuestras Categorías
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Encuentra todo lo que necesitas organizado por categorías especializadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categorias.map((categoria) => {
              const info = categoriasInfo[categoria as Categoria];
              const productCount = productosPorCategoria[categoria as Categoria].length;

              return (
                <DecayCard
                  key={categoria}
                  titulo={info.titulo}
                  descripcion={info.descripcion}
                  imagen={info.imagen}
                  color={info.color}
                  href={`/tienda-agricola/${categoria}`}
                  productCount={productCount}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Productos Destacados
            </h2>
            <p className="text-lg text-gray-600">
              Selección especial de nuestros mejores productos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((producto) => (
              <ProductCard key={producto.id} producto={producto} onOpenModal={handleOpenModal} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/tienda-agricola/promociones"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              Ver Todas las Promociones
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <ProductModal
        producto={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
