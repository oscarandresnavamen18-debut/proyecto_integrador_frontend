// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ganadería Sostenible",
  description: "Tecnología e Innovación para el campo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}