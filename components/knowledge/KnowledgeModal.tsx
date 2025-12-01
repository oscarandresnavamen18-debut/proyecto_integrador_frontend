"use client";

import { useEffect } from "react";
import { X, BookOpen, Check, Download, Share2, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface KnowledgeCategory {
  titulo: string;
  descripcion: string;
  icono: LucideIcon;
  color: string;
  temas: string[];
}

interface KnowledgeModalProps {
  categoria: KnowledgeCategory | null;
  isOpen: boolean;
  onClose: () => void;
}

export function KnowledgeModal({ categoria, isOpen, onClose }: KnowledgeModalProps) {
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

  // Extraer el color base (ej: "bg-blue-500" -> "blue")
  const colorMatch = categoria.color.match(/bg-(\w+)-/);
  const colorBase = colorMatch ? colorMatch[1] : "blue";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden my-8"
            >
              {/* Header con gradiente */}
              <div className={`bg-gradient-to-r from-${colorBase}-500 to-${colorBase}-600 p-8 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                      <Icon className="w-12 h-12" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="w-5 h-5" />
                        <span className="text-sm font-semibold uppercase tracking-wider">Centro de Conocimiento</span>
                      </div>
                      <h2 className="text-4xl font-bold">{categoria.titulo}</h2>
                    </div>
                  </div>
                  <p className="text-xl text-white/90 max-w-2xl">{categoria.descripcion}</p>
                </div>
              </div>

              {/* Contenido */}
              <div className="overflow-y-auto max-h-[calc(90vh-280px)]">
                <div className="p-8 space-y-8">
                  {/* Descripción ampliada */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Qué aprenderás?</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      Este módulo cubre los aspectos esenciales de <span className="font-semibold">{categoria.titulo.toLowerCase()}</span>,
                      proporcionándote conocimientos prácticos y aplicables para mejorar la gestión de tu ganadería.
                      Aprenderás técnicas probadas, mejores prácticas y estrategias efectivas utilizadas por ganaderos exitosos.
                    </p>

                    {/* Rating simulado */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-gray-600 font-semibold">4.9/5 · Altamente recomendado</span>
                    </div>
                  </div>

                  {/* Temas principales */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <BookOpen className="w-6 h-6 text-green-600" />
                      Temas Principales
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {categoria.temas.map((tema, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-green-300 hover:shadow-md transition-all"
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                              <Check className="w-4 h-4 text-green-600" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">{tema}</h4>
                            <p className="text-sm text-gray-600">
                              Contenido educativo detallado con ejemplos prácticos
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Beneficios */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Beneficios del conocimiento</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Mejora la productividad y rentabilidad de tu ganadería</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Reduce costos operativos mediante prácticas eficientes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Garantiza el bienestar y salud óptima de tus animales</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Cumple con estándares y certificaciones de calidad</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer con botones */}
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    className={`flex-1 bg-gradient-to-r from-${colorBase}-600 to-${colorBase}-700 hover:from-${colorBase}-700 hover:to-${colorBase}-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-[1.02]`}
                  >
                    <BookOpen className="w-5 h-5" />
                    Acceder al Contenido
                  </button>

                  <button
                    type="button"
                    className="sm:w-auto px-6 py-4 bg-white hover:bg-gray-100 border-2 border-gray-300 rounded-xl font-semibold text-gray-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Descargar PDF
                  </button>

                  <button
                    type="button"
                    className="sm:w-auto px-6 py-4 bg-white hover:bg-gray-100 border-2 border-gray-300 rounded-xl font-semibold text-gray-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Share2 className="w-5 h-5" />
                    Compartir
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
