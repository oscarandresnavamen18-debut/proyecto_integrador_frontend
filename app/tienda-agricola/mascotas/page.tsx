import ProductoCard from "@/components/ProductoCard";
import Tienda from "@/app/(content)/componentes/Tienda";
import Footer from "@/app/(content)/componentes/Footer";

export default function MascotasPage() {
  const productos = [
    {
      nombre: "Concentrado para Perros 25kg",
      precio: 85000,
      imagen: "/productos/concentrado-perros.jpg",
      descripcion: "Alimento balanceado premium para perros adultos",
    },
    {
      nombre: "Arena para Gatos 10kg",
      precio: 35000,
      imagen: "/productos/arena-gatos.jpg",
      descripcion: "Arena aglomerante con control de olores",
    },
    {
      nombre: "Juguete Kong para Perros",
      precio: 45000,
      imagen: "/productos/juguete-kong.jpg",
      descripcion: "Juguete resistente de caucho natural",
    },
    {
      nombre: "Correa Retráctil 5m",
      precio: 38000,
      imagen: "/productos/correa.jpg",
      descripcion: "Correa extensible para paseos seguros",
    },
    {
      nombre: "Shampoo Antipulgas",
      precio: 28000,
      imagen: "/productos/shampoo.jpg",
      descripcion: "Shampoo medicado para perros y gatos",
    },
    {
      nombre: "Cama para Mascotas M",
      precio: 95000,
      imagen: "/productos/cama-mascota.jpg",
      descripcion: "Cama acolchada lavable tamaño mediano",
    },
  ];

  return (
    <>
      <Tienda />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Productos para Mascotas
            </h1>
            <p className="text-gray-600 text-lg">
              Todo lo que tu mascota necesita para estar feliz y saludable
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
