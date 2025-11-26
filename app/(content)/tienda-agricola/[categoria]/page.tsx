import { notFound } from "next/navigation";
import { productosPorCategoria, categoriasInfo, categorias } from "../data/productos";
import { Categoria } from "@/types/product";
import ProductGrid from "../components/ProductGrid";

interface CategoriaPageProps {
  params: Promise<{
    categoria: string; }>;
}

export async function generateStaticParams() {
  return categorias.map((categoria) => ({
    categoria: categoria,
  }));
}

export default async function CategoriaPage({ params }: CategoriaPageProps) {
  const { categoria } = await params;
  if (!categorias.includes(categoria as Categoria)) {
    notFound();
  }

  const productos = productosPorCategoria[categoria as Categoria];
  const info = categoriasInfo[categoria as Categoria];

  // Genera el título dinámico
  const titulo = `Catálogo de Productos - ${info.titulo}`;

  return <ProductGrid productos={productos} titulo={titulo} />;
}
export async function generateMetadata({ params }: CategoriaPageProps) {
  const { categoria } = await params;

  if (!categorias.includes(categoria as Categoria)) {
    return {
      title: "Categoría no encontrada",
    };
  }

  const info = categoriasInfo[categoria as Categoria];

  return {
    title: `${info.titulo} - La Casa del Ganadero`,
    description: info.descripcion,
  };
}
