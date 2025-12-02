import { CategoriaInfo, Categoria } from "@/types/product";

// Información de las categorías (se mantiene porque no viene del API)
export const categoriasInfo: Record<Categoria, CategoriaInfo> = {
  mascotas: {
    titulo: "Mascotas",
    color: "blue",
    descripcion: "Productos para el cuidado, alimentación y salud de tus mascotas domésticas.",
    imagen: "https://www.shutterstock.com/image-photo/group-pets-posing-together-dog-260nw-2518087139.jpg",
  },
  ferreteria: {
    titulo: "Ferretería",
    color: "gray",
    descripcion: "Herramientas, materiales y productos para construcción y jardín.",
    imagen: "https://i.pinimg.com/originals/1f/fc/27/1ffc2732fd1f4a03802051f0f38cd7dd.jpg",
  },
  ganaderia: {
    titulo: "Ganadería",
    color: "green",
    descripcion: "Suplementos, medicamentos y productos para el manejo del ganado.",
    imagen: "https://www.shutterstock.com/image-photo/production-organic-dairy-products-milk-260nw-2606465721.jpg",
  },
  agricola: {
    titulo: "Agrícola",
    color: "emerald",
    descripcion: "Semillas, fertilizantes y productos para producción agrícola.",
    imagen: "https://concepto.de/wp-content/uploads/2014/09/agricultura-e1551193452226.jpg",
  },
};

export const categorias: Categoria[] = ["mascotas", "ferreteria", "ganaderia", "agricola"];
