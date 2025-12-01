import ProductoCard from "@/components/ProductoCard";
import Tienda from "@/app/(content)/componentes/Tienda";
import Footer from "@/app/(content)/componentes/Footer";

export default function FerreteriaPage() {
  const productos = [
    {
      nombre: "Machete 18 pulgadas",
      precio: 45000,
      imagen: "/productos/machete.jpg",
      descripcion: "Machete de acero templado con mango de madera",
    },
    {
      nombre: "Pala Cuadrada",
      precio: 38000,
      imagen: "/productos/pala.jpg",
      descripcion: "Pala reforzada para trabajo pesado",
    },
    {
      nombre: "Carretilla 60L",
      precio: 120000,
      imagen: "/productos/carretilla.jpg",
      descripcion: "Carretilla metálica con llanta neumática",
    },
    {
      nombre: "Rastrillo 16 Dientes",
      precio: 32000,
      imagen: "/productos/rastrillo.jpg",
      descripcion: "Rastrillo de acero para jardín",
    },
    {
      nombre: "Manguera 30m",
      precio: 85000,
      imagen: "/productos/manguera.jpg",
      descripcion: "Manguera reforzada para riego",
    },
    {
      nombre: "Tijeras de Podar",
      precio: 55000,
      imagen: "/productos/tijeras.jpg",
      descripcion: "Tijeras profesionales con hoja de acero",
    },
  ];

  return (
    <>
      <Tienda />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Ferretería Agrícola
            </h1>
            <p className="text-gray-600 text-lg">
              Herramientas de calidad para el trabajo en el campo
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
