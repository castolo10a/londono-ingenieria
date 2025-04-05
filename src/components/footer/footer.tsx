"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-16 py-10 mt-auto">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1 */}
        <div>
          <h2 className="text-2xl font-bold uppercase">Londoño Ingeniería</h2>
          <p className="mt-2 text-sm">
            Edificando el futuro con calidad y compromiso.
          </p>
        </div>

        {/* Columna 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Enlaces rápidos</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/#Home" className="hover:underline">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/#AboutUs" className="hover:underline">
                Acerca de Nosotros
              </Link>
            </li>
            <li>
              <Link href="/#Services" className="hover:underline">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/#Contact" className="hover:underline">
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contáctanos</h3>
          <p>
            <a href="tel:+573115726968" className="text-sm hover:underline">
              📞 +57 311 572 6968
            </a>
          </p>
          <p>
            <a
              href="mailto:londonoingenieriacivil@gmail.com"
              className="text-sm hover:underline"
            >
              ✉️ londonoingenieriacivil@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-white mt-8 pt-4 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} Londoño Ingeniería. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};
