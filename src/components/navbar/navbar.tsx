"use client";

import { FC, useState } from "react";
import { Button } from "@/components";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full max-w-screen z-50 flex justify-between md:justify-evenly items-center p-4 bg-white shadow-md">
      {/* Logo o Nombre de la Empresa */}
      <Link href="/#Home">
        <button className="text-base md:text-2xl font-bold text-black uppercase cursor-pointer">
          londoño ingeniería
        </button>
      </Link>

      {/* Menú de Navegación - Versión Desktop */}
      <nav className="hidden md:flex gap-6 text-gray-500 text-sm items-center">
        <ul className="flex gap-6">
          <Link href="/#Home">
            <li className="cursor-pointer hover:text-blue-700 hover:underline underline-offset-8">
              Inicio
            </li>
          </Link>
          <Link href="/#AboutUs">
            <li className="cursor-pointer hover:text-blue-700 hover:underline underline-offset-8">
              Acerca de Nosotros
            </li>
          </Link>
          <Link href="/#Services">
            <li className="cursor-pointer hover:text-blue-700 hover:underline underline-offset-8">
              Servicios
            </li>
          </Link>
        </ul>
        <div className="hidden md:block">
          <Link href="/#Contact">
            <Button title="Contáctanos" onClick={() => {}} />
          </Link>
        </div>
      </nav>

      {/* Menú Hamburguesa - Versión Mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={24} color="black" />
          ) : (
            <Menu size={24} color="black" />
          )}
        </button>
      </div>

      {/* Menú Desplegable en Mobile */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg px-6 py-4 md:hidden animate-fade-in-down">
          <ul className="flex flex-col gap-4 text-gray-700">
            <Link href="/#Home" onClick={() => setIsOpen(false)}>
              <li>Inicio</li>
            </Link>
            <Link href="/#AboutUs" onClick={() => setIsOpen(false)}>
              <li>Acerca de Nosotros</li>
            </Link>
            <Link href="/#Services" onClick={() => setIsOpen(false)}>
              <li>Servicios</li>
            </Link>
            <li>
              <Link href="/#Contact">
                <Button
                  title="Contáctanos"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="w-full"
                />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
