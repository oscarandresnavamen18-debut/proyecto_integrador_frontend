"use client";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { categoriasInfo, categorias } from "./data/productos";

export default function TiendaAgricola() {
  const router = useRouter();

  const tarjetas = categorias.map((cat) => ({
    nombre: categoriasInfo[cat].titulo,
    url: `/tienda-agricola/${cat}`,
    imagen: categoriasInfo[cat].imagen,
    descripcion: categoriasInfo[cat].descripcion,
  }));

  return (
    <div className="bg-gradient-to-br from-blue-900 to-green-400 min-h-screen">

      <Navbar />

      <div className="p-8">
        <h1 className="text-7xl font-extrabold text-center text-green-900 mb-10">
          Bienvenido a La Casa del Ganadero
        </h1>
        <div className="flex justify-center mb-10">
          <button
            onClick={() => router.push("/tienda-agricola/promociones")}
            className="px-8 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold text-lg rounded-full shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl animate-pulse">
         Promociones
          </button>


        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {tarjetas.map((t, i) => (
            <div
              key={i}
              onClick={() => router.push(t.url)}
              className="relative cursor-pointer h-64 rounded-3xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl group">
              <img
                src={t.imagen}
                alt={t.nombre}
                className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 flex flex-col justify-center items-center text-white px-6 text-center group-hover:from-black/80 group-hover:via-black/80 group-hover:to-black/50 transition-all duration-300">
                <h2 className="text-2xl font-bold mb-2 drop-shadow-lg">{t.nombre}</h2>
                <p className="text-sm drop-shadow-md">{t.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 mb-12 space-y-8 text-white animate-fade-in-up">
          <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-center drop-shadow-2xl">
            <span className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-yellow-300 drop-shadow-lg animate-pulse">
              La ganadería colombiana crece
            </span>{" "}
            con productos confiables, prácticos y pensados para el día a día del campo.
            En nuestra tienda agrícola encuentras desde{" "}
            <span className="font-bold text-yellow-200">suplementos y concentrados</span>,
            hasta{" "}
            <span className="font-bold text-yellow-200">herramientas, cercas eléctricas, insumos veterinarios</span>{" "}
            y soluciones para mejorar la productividad de tu hato.
          </p>

          <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-center drop-shadow-2xl">
            Sabemos que cada productor necesita{" "}
            <span className="font-bold text-yellow-200">calidad, respaldo y disponibilidad inmediata</span>.
            Por eso reunimos los mejores productos agrícolas y ganaderos, seleccionados para fortalecer tu finca,
            cuidar tu ganado y optimizar cada proceso.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
