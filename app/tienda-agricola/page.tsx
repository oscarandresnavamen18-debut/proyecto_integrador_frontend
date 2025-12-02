"use client";

import Tienda from "@/components/shop/Tienda";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { PawPrint, Hammer, Beef, Sprout, Sparkles, ArrowRight } from "lucide-react";
import { categoriasInfo, categorias } from "@/data/products";
import Image from "next/image";

export default function TiendaAgricolaPage() {
  const categoriasConfig = [
    {
      id: "mascotas",
      icono: PawPrint,
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
    },
    {
      id: "ferreteria",
      icono: Hammer,
      color: "from-gray-600 to-gray-500",
      hoverColor: "hover:from-gray-600 hover:to-gray-700",
    },
    {
      id: "ganaderia",
      icono: Beef,
      color: "from-green-900 to-green-100",
      hoverColor: "hover:from-green-700 hover:to-green-800",
    },
    {
      id: "agricola",
      icono: Sprout,
      color: "from-emerald-100 to-emerald-900",
      hoverColor: "hover:from-emerald-600 hover:to-emerald-700",
    },
  ];

  return (
    <>
      <Tienda />
      <main className="min-h-screen bg-gradient-to-b transition-colors from-green-100 via-white to-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-22">
            <h1 className="text-3xl md:text-5xl transition-transform duration-250  text-gray-700  mb-5">
              Tienda Agrícola
            </h1>
            <p className=" text-xl max-w-3xl mx-auto py-12">
              Todo lo que necesitas para el campo colombiano en un solo lugar
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-19 mb-16">
            {categoriasConfig.map((config) => {
              const categoriaInfo = categoriasInfo[config.id as keyof typeof categoriasInfo];
              const Icon = config.icono;
               return (
                <Link
                  key={config.id}
                  href={`/tienda-agricola/${config.id}`}
                  className="group relative bg-pink-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-10">
                  <div className="relative h-74  overflow-hidden">
                    <Image
                      src={categoriaInfo.imagen}
                      alt={categoriaInfo.titulo}
                      fill
                      className="object-cover transition-transform duration-250 group-hover:scale-110"/>
                    <div className={`absolute inset-0 bg-linear-to-t ${config.color} opacity-40 group-hover:opacity-70 transition-opacity`} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                      <Icon className="w-80 h-20 mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                      <h2 className="text-4xl font-bold mb-2">{categoriaInfo.titulo}</h2>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-purple-900 text-lg mb-4 line-clamp-2">
                      {categoriaInfo.descripcion}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-300 transition-colors font-semibold text-lg group-hover:text-blue-600">
                        Explorar productos
                      </span>
                      <p className="w-6 h-6 text-green-600 transform group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <Link
            href="/tienda-agricola/promociones"
            className="block relative bg-linear-to-r from-red-200 via-pink-400 to-purple-500 rounded-3xl shadow-2xl hover:shadow-5xl transition-all duration-500 overflow-hidden group transform hover:scale-105">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png')] opacity-10" />
            <div className="relative p-40 text-center text-white">
              <div className="flex items-center justify-center gap-4 mb-6">
                <p className="w-12 h-12 animate-pulse" />
                <h2 className="text-5xl font-bold">Promociones Especiales</h2>
                <p className="w-12 h-12 animate-pulse" />
              </div>
              <p className="text-2xl mb-8 font-light">
                Aprovecha descuentos de hasta <span className="font-bold text-5xl">60%</span> en productos seleccionados
              </p>
              <div className="inline-flex items-center gap-3 bg-yellow-100 text-red-600 px-10 py-5 rounded-full font-bold text-xl group-hover:scale-90 transition-transform shadow-lg">
                <span>Ver Todas las Ofertas</span>
                <p />
              </div>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
