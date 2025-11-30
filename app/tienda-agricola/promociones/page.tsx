import ProductoCard from "@/components/ProductoCard";
import Tienda from "@/app/(content)/componentes/Tienda";
import Footer from "@/app/(content)/componentes/Footer";
import { Sparkles } from "lucide-react";

export default function PromocionesPage() {
  const promociones = [
    {
      nombre: "Concentrado para Perros 25kg",
      precio: 85000,
      descuento: 20,
      imagen: "/productos/concentrado-perros.jpg",
      descripcion: "Alimento balanceado premium",
    },
    {
      nombre: "Fertilizante Triple 15 50kg",
      precio: 95000,
      descuento: 15,
      imagen: "/productos/fertilizante.jpg",
      descripcion: "Fertilizante completo NPK",
    },
    {
      nombre: "Bomba Fumigadora 20L",
      precio: 250000,
      descuento: 25,
      imagen: "/productos/fumigadora.jpg",
      descripcion: "Bomba de espalda profesional",
    },
    {
      nombre: "Carretilla 60L",
      precio: 120000,
      descuento: 10,
      imagen: "/productos/carretilla.jpg",
      descripcion: "Carretilla metálica resistente",
    },
    {
      nombre: "Sal Mineralizada 25kg",
      precio: 65000,
      descuento: 15,
      imagen: "/productos/sal-mineral.jpg",
      descripcion: "Suplemento mineral para ganado",
    },
    {
      nombre: "Sistema de Riego por Goteo",
      precio: 320000,
      descuento: 30,
      imagen: "/productos/riego.jpg",
      descripcion: "Kit completo para 500m²",
    },
  ];

  return (
    <>
      <Tienda />
      <main className="min-h-screen bg-gradient-to-b from-red-50 to-pink-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full mb-4">
              <Sparkles className="w-6 h-6" />
              <span className="font-bold text-lg">OFERTAS ESPECIALES</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Promociones del Mes
            </h1>
            <p className="text-gray-600 text-lg">
              Aprovecha estos descuentos increíbles por tiempo limitado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promociones.map((producto) => (
              <ProductoCard key={producto.nombre} {...producto} />
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              No te pierdas nuestras ofertas
            </h2>
            <p className="text-gray-600 mb-6">
              Suscríbete a nuestro boletín y recibe promociones exclusivas
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
