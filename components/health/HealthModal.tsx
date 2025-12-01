"use client";

import { useEffect } from "react";
import { X, AlertTriangle, Check, FileText, Share2, Calendar, Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface HealthCategory {
  titulo: string;
  descripcion: string;
  icono: LucideIcon;
  color: string;
  temas: string[];
}

interface HealthModalProps {
  categoria: HealthCategory | null;
  isOpen: boolean;
  onClose: () => void;
}

export function HealthModal({ categoria, isOpen, onClose }: HealthModalProps) {
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

  // Extraer el color base
  const colorMatch = categoria.color.match(/bg-(\w+)-/);
  const colorBase = colorMatch ? colorMatch[1] : "red";

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
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/inspiration-geometry.png')]" />
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
                        <AlertTriangle className="w-5 h-5" />
                        <span className="text-sm font-semibold uppercase tracking-wider">Salud Animal</span>
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
                  {/* Alerta de importancia */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-orange-500 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Información Crítica de Salud</h3>
                        <p className="text-gray-700">
                          La prevención y el manejo oportuno de enfermedades es esencial para mantener
                          la salud y productividad de tu ganado. Consulta siempre con un médico veterinario
                          para diagnósticos y tratamientos específicos.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Descripción ampliada */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Información General</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      Esta sección proporciona información detallada sobre <span className="font-semibold">{categoria.titulo.toLowerCase()}</span>,
                      incluyendo signos de alerta, protocolos recomendados, medidas preventivas y guías de actuación.
                      Mantén siempre un registro sanitario actualizado y trabaja en coordinación con profesionales veterinarios.
                    </p>

                    {/* Estadísticas simuladas */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-1">95%</div>
                        <div className="text-sm text-gray-600">Tasa de prevención</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
                        <div className="text-sm text-gray-600">Monitoreo necesario</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-1">{categoria.temas.length}</div>
                        <div className="text-sm text-gray-600">Temas clave</div>
                      </div>
                    </div>
                  </div>

                  {/* Temas principales */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <FileText className="w-6 h-6 text-red-600" />
                      Aspectos Importantes
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {categoria.temas.map((tema, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-red-300 hover:shadow-md transition-all"
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                              <Check className="w-4 h-4 text-red-600" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">{tema}</h4>
                            <p className="text-sm text-gray-600">
                              Protocolos y recomendaciones profesionales
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Protocolo de acción */}
                  <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border-2 border-red-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Bell className="w-6 h-6 text-red-600" />
                      Protocolo de Acción Recomendado
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          1
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Identificación Temprana</h4>
                          <p className="text-gray-700 text-sm">Reconoce signos y síntomas de forma oportuna</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          2
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Consulta Profesional</h4>
                          <p className="text-gray-700 text-sm">Contacta inmediatamente a un médico veterinario</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          3
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Implementación del Tratamiento</h4>
                          <p className="text-gray-700 text-sm">Sigue las indicaciones y dosis prescritas</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          4
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Seguimiento y Prevención</h4>
                          <p className="text-gray-700 text-sm">Monitorea la evolución y aplica medidas preventivas</p>
                        </div>
                      </div>
                    </div>
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
                    <Calendar className="w-5 h-5" />
                    Ver Calendario de Vacunación
                  </button>

                  <button
                    type="button"
                    className="sm:w-auto px-6 py-4 bg-white hover:bg-gray-100 border-2 border-gray-300 rounded-xl font-semibold text-gray-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <FileText className="w-5 h-5" />
                    Guía Completa
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
