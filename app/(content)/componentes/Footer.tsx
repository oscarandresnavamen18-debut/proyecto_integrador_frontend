import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Leaf,
} from "lucide-react";
import Link from "next/link";

/**
 * TRABAJADOR 3: Footer Component
 * Este componente puede ser modificado independientemente
 * Responsabilidades: Enlaces, información de contacto, redes sociales
 */

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-green-600 p-2 rounded-lg">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg">
                La Casa del Ganadero
              </h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Tu aliado en el campo. Proveemos productos de calidad para
              mascotas, ganadería, agricultura y ferretería.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors no-underline"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>

              <link
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors no-underline"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </link>
              <link
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors no-underline"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tienda-agricola/mascotas"
                  className="hover:text-white transition-colors"
                >
                  Mascotas
                </Link>
              </li>
              <li>
                <Link
                  href="/tienda-agricola/ferreteria"
                  className="hover:text-white transition-colors"
                >
                  Ferretería
                </Link>
              </li>
              <li>
                <Link
                  href="/tienda-agricola/ganaderia"
                  className="hover:text-white transition-colors"
                >
                  Ganadería
                </Link>
              </li>
              <li>
                <Link
                  href="/tienda-agricola/agricola"
                  className="hover:text-white transition-colors"
                >
                  Agrícola
                </Link>
              </li>
              <li>
                <Link
                  href="/tienda-agricola/promociones"
                  className="hover:text-white transition-colors"
                >
                  Promociones
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Atención al Cliente
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Política de Devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Envíos y Entregas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Calle Principal #123, Zona Rural, Colombia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>info@casadelganadero.com</span>
              </li>
            </ul>
            <div className="mt-4 bg-gray-800 p-3 rounded-lg">
              <p className="text-xs font-semibold text-white mb-1">
                Horario de Atención
              </p>
              <p className="text-xs text-gray-400">
                Lun - Sáb: 7:00 AM - 6:00 PM
              </p>
              <p className="text-xs text-gray-400">Domingo: Cerrado</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} La Casa del Ganadero. Todos los
            derechos reservados.
          </p>
          <p className="mt-1">
            Desarrollado con pasión para el campo colombiano
          </p>
        </div>
      </div>
    </footer>
  );
}
