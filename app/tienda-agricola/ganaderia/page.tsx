import ProductoCard from "@/components/ProductoCard";
import Tienda from "@/app/(content)/componentes/Tienda";
import Footer from "@/app/(content)/componentes/Footer";

export default function GanaderiaPage() {
  const productos = [
    {
      nombre: "Sal Mineralizada 25kg",
      precio: 65000,
      imagen: "/productos/sal-mineral.jpg",
      descripcion: "Suplemento mineral para ganado bovino",
    },
    {
      nombre: "Desparasitante Bovino",
      precio: 85000,
      imagen: "/productos/desparasitante.jpg",
      descripcion: "Tratamiento antiparasitario de amplio espectro",
    },
    {
      nombre: "Cerca Eléctrica 100m",
      precio: 180000,
      imagen: "/productos/cerca.jpg",
      descripcion: "Kit completo de cerca eléctrica",
    },
    {
      nombre: "Bebedero Automático",
      precio: 120000,
      imagen: "/productos/bebedero.jpg",
      descripcion: "Bebedero de nivel constante para ganado",
    },
    {
      nombre: "Bloques Nutricionales 20kg",
      precio: 95000,
      imagen: "/productos/bloques.jpg",
      descripcion: "Suplemento alimenticio en bloques",
    },
    {
      nombre: "Ordeñadora Manual",
      precio: 450000,
      imagen: "/productos/ordenadora.jpg",
      descripcion: "Ordeñadora portátil de acero inoxidable",
    },
  ];

  return (
    <>
      <Tienda />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Productos para Ganadería
            </h1>
            <p className="text-gray-600 text-lg">
              Insumos de calidad para el cuidado de tu ganado
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
