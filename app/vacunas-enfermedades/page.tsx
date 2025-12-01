"use client";

import { useState } from "react";
import Link from "next/link";
import { Syringe, AlertTriangle, Shield, Activity, ClipboardCheck, Pill } from "lucide-react";
import { Navbar } from "@/app/Components/layout/Navbar";
import Footer from "@/app/(content)/componentes/Footer";
import { HealthModal } from "@/components/health/HealthModal";

export default function VacunasEnfermedadesPage() {
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategoryClick = (categoria: any) => {
    setSelectedCategory(categoria);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCategory(null), 300);
  };

  const categorias = [
    {
      titulo: "Plan de Vacunación",
      descripcion: "Calendario y esquemas de vacunación recomendados",
      icono: Syringe,
      color: "bg-red-500",
      temas: ["Aftosa", "Brucelosis", "Rabia", "Carbón bacteridiano"]
    },
    {
      titulo: "Enfermedades Comunes",
      descripcion: "Identificación y manejo de patologías frecuentes",
      icono: AlertTriangle,
      color: "bg-orange-500",
      temas: ["Mastitis", "Neumonía", "Diarrea", "Parásitos"]
    },
    {
      titulo: "Prevención",
      descripcion: "Medidas profilácticas y bioseguridad",
      icono: Shield,
      color: "bg-blue-500",
      temas: ["Bioseguridad", "Cuarentena", "Higiene", "Desinfección"]
    },
    {
      titulo: "Diagnóstico",
      descripcion: "Signos clínicos y métodos de detección",
      icono: Activity,
      color: "bg-purple-500",
      temas: ["Síntomas", "Análisis", "Pruebas", "Laboratorio"]
    },
    {
      titulo: "Tratamientos",
      descripcion: "Protocolos terapéuticos y medicamentos",
      icono: Pill,
      color: "bg-teal-500",
      temas: ["Antibióticos", "Antiparasitarios", "Antiinflamatorios", "Vitaminas"]
    },
    {
      titulo: "Registros Sanitarios",
      descripcion: "Control y documentación de la salud del hato",
      icono: ClipboardCheck,
      color: "bg-green-500",
      temas: ["Histórico", "Reportes", "Certificados", "Trazabilidad"]
    }
  ];

  const enfermedadesDestacadas = [
    {
      nombre: "Fiebre Aftosa",
      nivel: "Crítica",
      color: "text-red-600",
      bgColor: "bg-red-100",
      descripcion: "Enfermedad viral altamente contagiosa",
      vacuna: "Obligatoria"
    },
    {
      nombre: "Brucelosis",
      nivel: "Alta",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      descripcion: "Enfermedad bacteriana zoonótica",
      vacuna: "Obligatoria"
    },
    {
      nombre: "Mastitis",
      nivel: "Frecuente",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      descripcion: "Inflamación de la glándula mamaria",
      vacuna: "Prevención"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-red-50 via-white to-pink-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-3 bg-white/20 px-6 py-3 rounded-full mb-6">
              <Syringe className="w-6 h-6" />
              <span className="font-bold text-lg">Centro de Salud Animal</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Vacunas y Enfermedades
            </h1>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Información completa sobre prevención, diagnóstico y tratamiento de enfermedades bovinas
            </p>
          </div>
        </section>

        {/* Alert Banner */}
        <div className="max-w-7xl mx-auto px-4 -mt-8 mb-12">
          <div className="bg-red-600 text-white rounded-2xl shadow-2xl p-6 flex items-center gap-4">
            <AlertTriangle className="w-8 h-8 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1">Importante</h3>
              <p className="text-red-100">
                Ante cualquier síntoma de enfermedad, consulte inmediatamente con un médico veterinario certificado.
                La detección temprana salva vidas.
              </p>
            </div>
          </div>
        </div>

        {/* Enfermedades Destacadas */}
        <section className="max-w-7xl mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Enfermedades Prioritarias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {enfermedadesDestacadas.map((enfermedad, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{enfermedad.nombre}</h3>
                  <span className={`${enfermedad.bgColor} ${enfermedad.color} text-xs font-bold px-3 py-1 rounded-full`}>
                    {enfermedad.nivel}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{enfermedad.descripcion}</p>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="font-semibold text-green-600">{enfermedad.vacuna}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Intro Section */}
        <section className="max-w-7xl mx-auto px-4 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Protege la Salud de tu Ganado
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              La prevención es la clave para mantener un hato saludable y productivo. Aquí encontrarás
              información detallada sobre vacunas, enfermedades comunes, tratamientos y medidas de bioseguridad.
            </p>
            <p className="text-gray-600">
              Nuestro equipo de veterinarios expertos ha recopilado guías prácticas basadas en las
              últimas investigaciones y normativas sanitarias vigentes en Colombia.
            </p>
          </div>
        </section>

        {/* Categorías Grid */}
        <section className="max-w-7xl mx-auto px-4 pb-16 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {categorias.map((categoria, index) => {
              const Icon = categoria.icono;
              return (
                <div
                  key={index}
                  onClick={() => handleCategoryClick(categoria)}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 cursor-pointer"
                >
                  <div className={`${categoria.color} p-6 text-center`}>
                    <Icon className="w-16 h-16 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-white">
                      {categoria.titulo}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">
                      {categoria.descripcion}
                    </p>
                    <div className="space-y-2 mb-6">
                      <p className="text-sm font-semibold text-gray-700">Temas incluidos:</p>
                      <div className="flex flex-wrap gap-2">
                        {categoria.temas.map((tema, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                          >
                            {tema}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-center text-red-600 font-semibold text-sm group-hover:text-red-700 transition-colors">
                      Ver más información →
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Necesitas Productos Veterinarios?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Encuentra vacunas, medicamentos y suplementos de calidad en nuestra tienda
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/tienda-agricola/ganaderia"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors"
              >
                Ver Productos
              </Link>
              <Link
                href="/contacto"
                className="bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-800 transition-colors border-2 border-white"
              >
                Consultar Veterinario
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Modal de categoría */}
      <HealthModal
        categoria={selectedCategory}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
