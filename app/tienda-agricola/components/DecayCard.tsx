"use client";

import Link from "next/link";

interface DecayCardProps {
  titulo: string;
  descripcion: string;
  imagen: string;
  color: string;
  href: string;
  productCount: number;
}

export default function DecayCard({
  titulo,
  descripcion,
  imagen,
  color,
  href,
  productCount,
}: DecayCardProps) {
  return (
    <Link href={href}>
      <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-80">
        <div className="absolute inset-0">
          <img
            src={imagen}
            alt={titulo}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
          <div className={`absolute inset-0 bg-gradient-to-t from-${color}-900/90 via-${color}-800/60 to-transparent`}></div>
        </div>
        <div className="relative h-full flex flex-col justify-end p-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 w-fit mb-3">
            <span className="text-white text-sm font-semibold">
              {productCount} productos
            </span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
            {titulo}
          </h3>
          <p className="text-white/90 text-sm group-hover:translate-x-2 transition-transform duration-300 delay-75">
            {descripcion}
          </p>
          <div className="mt-4 flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all duration-300">
            <span>Explorar</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
