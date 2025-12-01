import Tienda from "@/app/(content)/componentes/Tienda";
import Footer from "@/app/(content)/componentes/Footer";
import Link from "next/link";
import { PawPrint, Hammer, Beef, Sprout, Sparkles } from "lucide-react";

export default function TiendaAgricolaPage() {
  const categorias = [
    {
      nombre: "Mascotas",
      icono: PawPrint,
      descripcion: "Todo para el cuidado de tus mascotas",
      href: "/tienda-agricola/mascotas",
      color: "bg-blue-500",
    },
    {
      nombre: "Ferretería",
      icono: Hammer,
      descripcion: "Herramientas para el trabajo en el campo",
      href: "/tienda-agricola/ferreteria",
      color: "bg-orange-500",
    },
    {
      nombre: "Ganadería",
      icono: Beef,
      descripcion: "Insumos para el cuidado de tu ganado",
      href: "/tienda-agricola/ganaderia",
      color: "bg-red-500",
    },
    {
      nombre: "Agrícola",
      icono: Sprout,
      descripcion: "Productos para cultivos productivos",
      href: "/tienda-agricola/agricola",
      color: "bg-green-500",
    },
  ];

  return (
    <>
      <Tienda />
      <main className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              La Casa del Ganadero
            </h1>
            <p className="text-gray-600 text-xl">
              Todo lo que necesitas para el campo colombiano
            </p>
          </div>

          {/* Categorías */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {categorias.map((categoria) => {
              const Icon = categoria.icono;
              return (
                <Link
                  key={categoria.nombre}
                  href={categoria.href}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
                >
                  <div className={`${categoria.color} p-8 text-center`}>
                    <Icon className="w-16 h-16 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h2 className="text-2xl font-bold text-white">
                      {categoria.nombre}
                    </h2>
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-gray-600">{categoria.descripcion}</p>
                    <div className="mt-4 text-green-600 font-semibold group-hover:text-green-700">
                      Ver productos →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Promociones Banner */}
          <Link
            href="/tienda-agricola/promociones"
            className="block bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
          >
            <div className="p-12 text-center text-white">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-10 h-10 animate-pulse" />
                <h2 className="text-4xl font-bold">Promociones Especiales</h2>
                <Sparkles className="w-10 h-10 animate-pulse" />
              </div>
              <p className="text-xl mb-6">
                Aprovecha descuentos de hasta 30% en productos seleccionados
              </p>
              <div className="inline-block bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg group-hover:scale-110 transition-transform">
                Ver Ofertas →
              </div>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
