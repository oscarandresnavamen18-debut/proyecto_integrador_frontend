"use client";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter,  } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-500 text-black py-15 px-12 mt-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
    
        <div className="flex flex-col items-center sm:items-start gap-4">
          <Image
            src="/logo.png"
            alt="Logo de La Casa del Ganadero"
            width={190}
            height={90}
            className="rounded-full items-center"
          />
          <h2 className="text-5xl font-bold">La Casa del Ganadero</h2>
          <p className="text-xl text-green-900">
            Productos para el campo, ganadería y mascotas.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          
          
          
          
          
          
        </div>
        <div className="flex justify-center gap-8">
          <Link href="https://www.instagram.com" target="_blank">
            <Instagram className="w-10 h-10 hover:text-pink-400 transition" />
          </Link>
          <Link href="https://www.facebook.com" target="_blank">
            <Facebook className="w-10 h-10 hover:text-blue-400 transition" />
          </Link>
          <Link href="https://www.twitter.com" target="_blank">
            <Twitter className="w-10 h-10 hover:text-sky-400 transition" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col mt-10  text-center text-sm text-green-900">
        <Link href="/terminos" className="hover:underline text-xl text-green-900">
  Términos y Condiciones
</Link>
<Link href="/privacidad" className="hover:underline  text-xl text-green-900">
  Política de Privacidad.
</Link>
        © {new Date().getFullYear()} La Casa del Ganadero. Todos los derechos reservados.

      </div>
    </footer>
  );
}