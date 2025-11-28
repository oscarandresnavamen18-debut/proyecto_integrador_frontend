"use client";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { categoriasInfo, categorias } from "./data/productos";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TiendaAgricola() {
  const router = useRouter();

  const tarjetas = categorias.map((cat) => ({
    nombre: categoriasInfo[cat].titulo,
    url: `/tienda-agricola/${cat}`,
    imagen: categoriasInfo[cat].imagen,
    descripcion: categoriasInfo[cat].descripcion,
    color: categoriasInfo[cat].color,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-50">
      <Navbar />

      {/* Hero Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 shadow-2xl"
      >
        {/* Decorative background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-white drop-shadow-2xl">
                La Casa del Ganadero
              </h1>
              <div className="flex justify-center mb-8">
                <div className="h-2 w-48 bg-white/50 rounded-full" />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl lg:text-3xl text-white/95 max-w-4xl mx-auto mb-8 font-semibold"
            >
              Tu aliado en el campo. Todo para tu finca, ganado y cultivos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {/* Promo button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/tienda-agricola/promociones")}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                Ver Promociones Especiales
                <span className="text-2xl animate-pulse">🔥</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('categorias');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-2xl shadow-xl hover:bg-white/30 transition-all duration-300 border-2 border-white/50"
              >
                Explorar Categorías
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Wave divider at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#f9fafb" fillOpacity="0.3"/>
            <path d="M0 40L60 46.7C120 53 240 67 360 70C480 73 600 67 720 63.3C840 60 960 60 1080 63.3C1200 67 1320 73 1380 76.7L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V40Z" fill="#f9fafb" fillOpacity="0.5"/>
            <path d="M0 80L60 83.3C120 87 240 93 360 93.3C480 93 600 87 720 83.3C840 80 960 80 1080 83.3C1200 87 1320 93 1380 96.7L1440 100V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V80Z" fill="#f9fafb"/>
          </svg>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Categories section */}
        <div id="categorias" className="mb-16 scroll-mt-8">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Explora Nuestras Categorías
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {tarjetas.map((tarjeta, i) => (
              <CategoryCard key={i} tarjeta={tarjeta} index={i} router={router} />
            ))}
          </motion.div>
        </div>

        {/* Info section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-6xl mx-auto space-y-8"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200">
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-center text-gray-700">
              <span className="font-extrabold text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                La ganadería colombiana crece
              </span>{" "}
              con productos confiables, prácticos y pensados para el día a día del campo.
              En nuestra tienda agrícola encuentras desde{" "}
              <span className="font-bold text-green-600">suplementos y concentrados</span>,
              hasta{" "}
              <span className="font-bold text-green-600">herramientas, cercas eléctricas, insumos veterinarios</span>{" "}
              y soluciones para mejorar la productividad de tu hato.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-xl p-8 md:p-12 border border-green-200">
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-center text-gray-700">
              Sabemos que cada productor necesita{" "}
              <span className="font-bold text-emerald-600">calidad, respaldo y disponibilidad inmediata</span>.
              Por eso reunimos los mejores productos agrícolas y ganaderos, seleccionados para fortalecer tu finca,
              cuidar tu ganado y optimizar cada proceso.
            </p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

function CategoryCard({ tarjeta, index, router }: { tarjeta: any; index: number; router: any }) {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    blue: "from-blue-400 via-blue-500 to-blue-600",
    gray: "from-gray-400 via-gray-500 to-gray-600",
    green: "from-green-400 via-green-500 to-green-600",
    emerald: "from-emerald-400 via-emerald-500 to-emerald-600",
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
          },
        },
      }}
      whileHover={{ y: -15, scale: 1.02, transition: { duration: 0.3 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => router.push(tarjeta.url)}
      className="group relative cursor-pointer rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 h-96"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <motion.img
          src={tarjeta.imagen}
          alt={tarjeta.nombre}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.15 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 group-hover:from-black/95 group-hover:via-black/80 group-hover:to-black/50 transition-all duration-500" />
      </div>

      {/* Animated shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "100%" : "-100%" }}
        transition={{ duration: 0.8 }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-8">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -20 }}
          transition={{ duration: 0.3 }}
          className={`self-start px-4 py-2 bg-gradient-to-r ${colorClasses[tarjeta.color as keyof typeof colorClasses]} text-white text-sm font-bold rounded-full shadow-lg`}
        >
          Ver productos
        </motion.div>

        {/* Bottom content */}
        <div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: isHovered ? -15 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-black mb-4 text-white drop-shadow-2xl">
              {tarjeta.nombre}
            </h2>
            <motion.p
              initial={{ opacity: 0.8, height: "auto" }}
              animate={{
                opacity: isHovered ? 1 : 0.8,
                height: "auto"
              }}
              transition={{ duration: 0.3 }}
              className="text-base text-gray-100 drop-shadow-lg leading-relaxed font-medium"
            >
              {tarjeta.descripcion}
            </motion.p>
          </motion.div>

          {/* Arrow icon */}
          <motion.div
            className="mt-6 flex items-center gap-2"
            animate={{
              x: isHovered ? 10 : 0,
              opacity: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-white font-semibold text-lg">Explorar</span>
            <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent gradient */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${colorClasses[tarjeta.color as keyof typeof colorClasses]} origin-left`}
      />

      {/* Corner glow effect */}
      <motion.div
        className="absolute -top-20 -right-20 w-40 h-40 bg-white/20 rounded-full blur-3xl"
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.3 : 0,
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}
