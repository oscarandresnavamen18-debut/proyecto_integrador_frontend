"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Header from "../../(content)/tienda-agricola/components/Header";
import Footer from "../../(content)/tienda-agricola/components/Footer";
import ProductCard from "../../(content)/tienda-agricola/components/ProductCard";
import { ProductModal } from "@/components/products/ProductModal";
import Breadcrumbs from "../../(content)/tienda-agricola/components/Breadcrumbs";
import { productosPorCategoria, categoriasInfo, Producto } from "../../(content)/tienda-agricola/data/productos";
import { Package, TrendingUp } from "lucide-react";
import { notFound } from "next/navigation";
import { Categoria } from "@/types";

export default function CategoriaPage() {
  const params = useParams();
  const categoria = params.categoria as string;
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

  if (!productosPorCategoria[categoria as Categoria]) {
    notFound();
  }

  const productos = productosPorCategoria[categoria as Categoria];
  const categoriaInfo = categoriasInfo[categoria as Categoria];

  const productosEnPromocion = productos.filter((p) => p.enPromocion).length;
  const totalProductos = productos.length;

  const colorClasses = {
    blue: {
      gradient: "from-blue-500 to-blue-700",
      badge: "bg-blue-500",
      hover: "hover:border-blue-200",
    },
    gray: {
      gradient: "from-gray-500 to-gray-700",
      badge: "bg-gray-500",
      hover: "hover:border-gray-200",
    },
    green: {
      gradient: "from-green-500 to-green-700",
      badge: "bg-green-600",
      hover: "hover:border-green-200",
    },
    emerald: {
      gradient: "from-emerald-500 to-emerald-700",
      badge: "bg-emerald-500",
      hover: "hover:border-emerald-200",
    },
  };

  const colors = colorClasses[categoriaInfo.color as keyof typeof colorClasses] || colorClasses.green;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className={`bg-gradient-to-r ${colors.gradient} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className={`inline-block ${colors.badge} px-4 py-1.5 rounded-full text-sm font-semibold mb-4`}>
                Categoría
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">{categoriaInfo.titulo}</h1>
              <p className="text-lg text-white/90 mb-6">{categoriaInfo.descripcion}</p>

              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  <span className="font-semibold">{totalProductos} Productos</span>
                </div>
                {productosEnPromocion > 0 && (
                  <div className="bg-red-500 px-4 py-2 rounded-lg flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-semibold">{productosEnPromocion} en Promoción</span>
                  </div>
                )}
              </div>
            </div>

            <div className="w-full md:w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src={categoriaInfo.imagen}
                alt={categoriaInfo.titulo}
                className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: categoriaInfo.titulo }]}/>
          {productos.length > 0 ? (
            <>
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  Todos los Productos ({totalProductos})
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {productos.map((producto) => (
                  <ProductCard key={producto.id} producto={producto} onOpenModal={handleOpenModal} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No hay productos disponibles
              </h3>
              <p className="text-gray-500">
                Pronto agregaremos productos en esta categoría
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <ProductModal
        producto={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}/>
    </div>
  );
}
