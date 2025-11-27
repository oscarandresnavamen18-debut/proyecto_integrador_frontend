import { Producto } from "@/types/product";

export default function ProductCard({ product }: { product: Producto }) {
  return (
    <div className="rounded border p-4">
      <h3 className="font-semibold">{product.nombre}</h3>
      <p className="text-sm">{product.descripcion}</p>
      <p className="mt-2 font-medium">${product.precio}</p>
    </div>
  );
}
