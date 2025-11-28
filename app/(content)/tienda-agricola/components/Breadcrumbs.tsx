"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center space-x-2 text-sm mb-6 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm border border-gray-200"
    >
      <Link
        href="/"
        className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
      >
        <Home className="w-4 h-4" />
      </Link>

      <ChevronRight className="w-4 h-4 text-gray-400" />

      <Link
        href="/tienda-agricola"
        className="text-gray-600 hover:text-green-600 transition-colors font-medium"
      >
        Tienda Agrícola
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-gray-400" />
          {item.href ? (
            <Link
              href={item.href}
              className="text-gray-600 hover:text-green-600 transition-colors font-medium"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-green-600 font-semibold">{item.label}</span>
          )}
        </div>
      ))}
    </motion.nav>
  );
}
