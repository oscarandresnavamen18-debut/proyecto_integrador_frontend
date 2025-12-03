"use client";

import { useEffect } from "react";
import { X, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Categoria {
  titulo: string;
  descripcion: string;
  icono: LucideIcon;
  color: string;
  temas: string[];
}

interface HealModalProps {
  categoria: Categoria | null;
  isOpen: boolean;
  onClose: () => void;
}

export function HealModal({ categoria, isOpen, onClose }: HealModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!categoria) return null;

  const Icon = categoria.icono;

  return (
    <section>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden my-8"
            >
              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-gray-100 transition-colors shadow-lg"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>

              <div className="overflow-y-auto max-h-[90vh]">
                <div className={`${categoria.color} p-8 text-center`}>
                  <Icon className="w-20 h-20 text-white mx-auto mb-4" />
                  <h2 className="text-4xl font-bold text-white mb-3">
                    {categoria.titulo}
                  </h2>
                  <p className="text-white/90 text-lg">
                    {categoria.descripcion}
                  </p>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Temas incluidos
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {categoria.temas.map((tema, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <div className={`${categoria.color} w-2 h-2 rounded-full`} />
                        <span className="text-gray-800 font-medium">{tema}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mb-6">
                    <p className="text-yellow-800 font-medium">
                      Esta información es de carácter educativo. Siempre consulte con un médico veterinario certificado para casos específicos.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 rounded-xl transition-colors"
                    >
                      Cerrar
                    </button>
                    <button
                      type="button"
                      className={`flex-1 ${categoria.color} hover:opacity-90 text-white font-bold py-3 rounded-xl transition-opacity`}
                    >
                      Ver más detalles
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </section>
  );
}
