<<<<<<< Updated upstream
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
=======
// src/components/layout/Navbar.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, BookOpen, Syringe, User, Menu, X } from 'lucide-react';
import { LoginModal } from '@/components/auth/LoginModal';

export function Navbar() {
  const pathname = usePathname();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      id: 'tienda',
      label: 'Tienda',
      icon: ShoppingCart,
      href: '/tienda-agricola'
    },
    {
      id: 'conocimiento',
      label: 'Conocimiento',
      icon: BookOpen,
      href: '/conocimiento-ganadero'
    },
    {
      id: 'vacunas',
      label: 'Salud Animal',
      icon: Syringe,
      href: '/vacunas-enfermedades'
    }
  ];

  const isActive = (href: string) => pathname.includes(href);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/80 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group transition-transform hover:scale-105"
            >
              <div className="text-4xl transition-transform group-hover:rotate-12">🐄</div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                  Ganadería
                </h1>
                <p className="text-xs text-gray-600">Tecnología para el campo</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {sections.map((section) => {
                const Icon = section.icon;
                const active = isActive(section.href);

                return (
                  <Link
                    key={section.id}
                    href={section.href}
                    className={`
                      flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm
                      transition-all duration-200
                      ${active
                        ? 'bg-green-600 text-white shadow-lg shadow-green-600/30'
                        : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    <Icon size={18} />
                    <span>{section.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Login Button (Desktop) */}
            <button
              type="button"
              onClick={() => setIsLoginModalOpen(true)}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold text-sm hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <User size={18} />
              <span>Ingresar</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                const active = isActive(section.href);

                return (
                  <Link
                    key={section.id}
                    href={section.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-xl font-semibold
                      transition-all duration-200
                      ${active
                        ? 'bg-green-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    <Icon size={20} />
                    <span>{section.label}</span>
                  </Link>
                );
              })}

              <button
                type="button"
                onClick={() => {
                  setIsLoginModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold mt-4"
              >
                <User size={20} />
                <span>Ingresar</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from going under navbar */}
      <div className="h-20" />

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
>>>>>>> Stashed changes
  );
}