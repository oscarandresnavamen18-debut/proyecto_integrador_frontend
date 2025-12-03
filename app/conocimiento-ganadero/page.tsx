"use client";

import Link from "next/link";
import { BookOpen, Sprout, TrendingUp, Users, Award, Heart } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ConocimientoGanaderoPage() {

  const categorias = [
    {
      titulo: "Manejo del Ganado",
      descripcion: "Técnicas y mejores prácticas para el cuidado diario",
      icono: Users,
      color: "bg-blue-500",
      temas: ["Alimentación", "Reproducción", "Manejo de praderas", "Bienestar animal"]
    },
    {
      titulo: "Nutrición Animal",
      descripcion: "Dietas balanceadas y suplementación nutricional",
      icono: Sprout,
      color: "bg-green-500",
      temas: ["Pastos y forrajes", "Suplementos", "Minerales", "Agua"]
    },
    {
      titulo: "Productividad",
      descripcion: "Estrategias para mejorar el rendimiento del hato",
      icono: TrendingUp,
      color: "bg-purple-500",
      temas: ["Genética", "Registros", "Análisis de datos", "Eficiencia"]
    },
    {
      titulo: "Bienestar Animal",
      descripcion: "Prácticas éticas y responsables en ganadería",
      icono: Heart,
      color: "bg-pink-500",
      temas: ["Confort", "Manejo bajo estrés", "Instalaciones", "Transporte"]
    },
    {
      titulo: "Sostenibilidad",
      descripcion: "Ganadería amigable con el medio ambiente",
      icono: BookOpen,
      color: "bg-teal-500",
      temas: ["Rotación de pasturas", "Agroforestería", "Captura de carbono", "Conservación"]
    },
    {
      titulo: "Certificaciones",
      descripcion: "Estándares de calidad y buenas prácticas",
      icono: Award,
      color: "bg-orange-500",
      temas: ["BPG", "Calidad", "Trazabilidad", "Certificación orgánica"]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-cyan-50">
        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-3 bg-white/20 px-6 py-3 rounded-full mb-6">
              <BookOpen className="w-6 h-6" />
              <span className="font-bold text-lg">Centro de Conocimiento</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Conocimiento Ganadero
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Recursos educativos, guías prácticas y mejores prácticas para el manejo exitoso de tu ganadería
            </p>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Aprende y Mejora tu Ganadería
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Bienvenido al Centro de Conocimiento Ganadero, donde encontrarás información actualizada,
              técnicas probadas y consejos expertos para optimizar tu operación ganadera de manera
              sostenible y rentable.
            </p>
            <p className="text-gray-600">
              Explora nuestras categorías y descubre cómo implementar las mejores prácticas en tu finca.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {categorias.map((categoria, index) => {
              const Icon = categoria.icono;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
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
                    <div className="text-center text-gray-500 font-semibold text-sm">
                      Contenido educativo disponible próximamente
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Necesitas Asesoría Personalizada?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Nuestro equipo de expertos está listo para ayudarte a optimizar tu operación ganadera
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/contacto"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors">
                Solicitar Asesoría
              </Link>
              <Link
                href="/tienda-agricola"
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors border-2 border-white">
                Ver Productos
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
