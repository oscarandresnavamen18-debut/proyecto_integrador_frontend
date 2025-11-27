"use client";

import { useState } from "react";
import { Producto } from "@/types/product";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface ProductGridProps {
  productos: Producto[];
  titulo: string;
}

export default function ProductGrid({ productos, titulo }: ProductGridProps) {
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);

  const handleClickCard = (producto: Producto) => {
    setProductoSeleccionado(producto);
  };

  const handleClickComprar = (producto: Producto) => {
    alert(`Producto "${producto.nombre}" agregado al carrito`);
  };

  const handleCloseModal = () => {
    setProductoSeleccionado(null);
  };

  return (
    <div className="bg-gradient-to-br from-purple-800 to-green-300 min-h-screen">
      <Navbar />

      <div className="p-8">
        <h1 className="text-4xl font-extrabold text-center text-green-900 mb-10">
          {titulo}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((producto) => (
            <ProductCard
              key={producto.id}
              producto={producto}
              onClickCard={handleClickCard}
              onClickComprar={handleClickComprar}/>
          ))}
        </div>
      </div>

      <Footer />

      <ProductModal producto={productoSeleccionado} onClose={handleCloseModal} />
    </div>
  );
}
