import ProductoCard from "@/components/ProductoCard";
import Tienda from "@/app/(content)/componentes/Tienda";
import Footer from "@/app/(content)/componentes/Footer";

export default function AgricolaPage() {
  const productos = [
    {
      nombre: "Semillas de Maíz Híbrido 20kg",
      precio: 180000,
      imagen: "/productos/semillas-maiz.jpg",
      descripcion: "Semilla certificada de alto rendimiento",
    },
    {
      nombre: "Fertilizante Triple 15 50kg",
      precio: 95000,
      imagen: "/productos/fertilizante.jpg",
      descripcion: "Fertilizante completo NPK 15-15-15",
    },
    {
      nombre: "Herbicida Glifosato 1L",
      precio: 45000,
      imagen: "/productos/herbicida.jpg",
      descripcion: "Herbicida de amplio espectro",
    },
    {
      nombre: "Bomba Fumigadora 20L",
      precio: 250000,
      imagen: "/productos/fumigadora.jpg",
      descripcion: "Bomba de espalda profesional",
    },
    {
      nombre: "Malla Anti-pájaros 10m",
      precio: 85000,
      imagen: "/productos/malla.jpg",
      descripcion: "Protección para cultivos",
    },
    {
      nombre: "Sistema de Riego por Goteo",
      precio: 320000,
      imagen: "/productos/riego.jpg",
      descripcion: "Kit completo para 500m²",
    },
  ];

  return (
    <>
      <Tienda />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Productos Agrícolas
            </h1>
            <p className="text-gray-600 text-lg">
              Insumos para cultivos productivos y rentables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productos.map((producto) => (
              <ProductoCard key={producto.nombre} {...producto} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
