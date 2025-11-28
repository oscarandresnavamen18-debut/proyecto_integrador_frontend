import Link from "next/link";
import { AlertCircle, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <AlertCircle className="w-24 h-24 text-red-500 mx-auto mb-6 animate-bounce-slow" />
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Categoría no encontrada
          </h2>
          <p className="text-gray-600">
            Lo sentimos, la categoría que buscas no existe o ha sido movida.
          </p>
        </div>

        <div className="space-y-3">
          <Link
            href="/tienda-agricola"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            Volver al Inicio
          </Link>

          <div className="text-sm text-gray-500">
            <p>Categorías disponibles:</p>
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              {["mascotas", "ferreteria", "ganaderia", "agricola"].map((cat) => (
                <Link
                  key={cat}
                  href={`/tienda-agricola/${cat}`}
                  className="text-green-600 hover:text-green-700 font-medium capitalize"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
