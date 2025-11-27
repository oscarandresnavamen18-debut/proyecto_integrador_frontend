"use client";

import { Producto } from "@/types/product";

interface ProductModalProps {
  producto: Producto | null;
  onClose: () => void;
}

export default function ProductModal({ producto, onClose }: ProductModalProps) {
  if (!producto) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center p-4 z-50 animate-fadeIn">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full animate-scaleIn">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-64 object-cover rounded-lg shadow-md"/>
          </div>
     <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {producto.nombre}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {producto.descripcion}
              </p>

              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <span className="text-green-700 font-bold text-4xl">
                  ${producto.precio.toLocaleString('es-CO')}
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Cerrar
              </button>

              <button
                onClick={() => {
                  alert(`Producto "${producto.nombre}" agregado al carrito`);
                  onClose();
                }}
                className="flex-1 bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300" >
                Comprar
              </button>
     </div>
         </div>
        </div>
      </div>
    </div>
  );
}
