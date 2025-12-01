import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Leaf,
  PawPrint,
  Hammer,
  Beef,
  Sprout,
  Tag,
} from "lucide-react";
import Link from "next/link";

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

              <Link
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors no-underline"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors no-underline"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              id="footer-categories-heading"
              className="text-white font-semibold mb-4 text-lg"
            >
              Categorías
            </h4>
            <ul className="space-y-3" role="list">
              <li>
                <Link
                  href="/tienda-agricola/mascotas"
                  className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1"
                  aria-label="Ir a la sección de productos para mascotas"
                >
                  <PawPrint
                    className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors duration-200"
                    aria-hidden="true"
                  />
                  <span className="relative">
                    Mascotas
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-200"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/tienda-agricola/ferreteria"
                  className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1"
                  aria-label="Ir a la sección de ferretería"
                >
                  <Hammer
                    className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors duration-200"
                    aria-hidden="true"
                  />
                  <span className="relative">
                    Ferretería
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-200"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/tienda-agricola/ganaderia"
                  className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1"
                  aria-label="Ir a la sección de ganadería"
                >
                  <Beef
                    className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors duration-200"
                    aria-hidden="true"
                  />
                  <span className="relative">
                    Ganadería
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-200"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/tienda-agricola/agricola"
                  className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1"
                  aria-label="Ir a la sección agrícola"
                >
                  <Sprout
                    className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors duration-200"
                    aria-hidden="true"
                  />
                  <span className="relative">
                    Agrícola
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-200"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/tienda-agricola/promociones"
                  className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1"
                  aria-label="Ver nuestras promociones actuales"
                >
                  <Tag
                    className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors duration-200"
                    aria-hidden="true"
                  />
                  <span className="relative">
                    Promociones
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-200"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4
              id="footer-customer-service-heading"
              className="text-white font-semibold mb-4 text-lg"
            >
              Atención al Cliente
            </h4>
            <ul className="space-y-3" role="list">
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-200"
                >
                  <span className="text-green-500 group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-200"
                >
                  <span className="text-green-500 group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                  Política de Devoluciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-200"
                >
                  <span className="text-green-500 group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-200"
                >
                  <span className="text-green-500 group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-200"
                >
                  <span className="text-green-500 group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
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
            &copy; 2025 La Casa del Ganadero. Todos los
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
