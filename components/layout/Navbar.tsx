"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Exo_2 } from "next/font/google";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-green-300  shadow-lg px-20 py-6 flex justify-between items-center sticky top-0 z-90 animate-fadeDown">
     
      <div className="flex items-center gap-4">
        <Image
          src="/logo.png"
          alt="Logo de La Casa del Ganadero"
          width={99}
          height={49}
          className="rounded-full"/></div>
          <div>
        <div className="flex justify-items-center">
          <h1 className="text-6xl font-extrabold justify-center text-gray-900 drop-shadow text-center">
    La Casa del Ganadero
      </h1>
</div>
      </div>
      <button
        className=" flex  text-black text-9xl transition-transform hover:scale-110"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <ul
        className={`absolute top-full items-center justify-between left-0 w-full bg-gray-600 shadow-md flex flex-col text-5xl py-9 gap-10 text-black font-semibold transition-all duration-500 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <li className="px-6 hover:text-transition transition">
          <Link href="/tienda-agricola/ferreteria">Ferretería</Link>
        </li>
        <li className="px-6 hover:text-white transition">
          <Link href="/tienda-agricola/agricola">Agrícola</Link>
        </li>
        <li className="px-6 hover:text-white transition">
          <Link href="/tienda-agricola/ganaderia">Ganadería</Link>
        </li>
        <li className="px-6 hover:text-white transition">
          <Link href="/tienda-agricola/mascotas">Mascotas</Link>
        </li>
      </ul>
    </nav>
  );
}