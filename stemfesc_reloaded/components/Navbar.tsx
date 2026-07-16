"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/#sobre", label: "¿Quiénes somos?" },
  { href: "/#actividades", label: "Actividades" },
  { href: "/#ubicacion", label: "Ubicación" },
  { href: "/#miembros", label: "Miembros" },
  { href: "/#redes", label: "Redes Sociales" },
  { href: "/#email", label: "Contáctanos por email" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0 transition-colors duration-300 ${
        scrolled ? "bg-black/50 backdrop-blur-sm shadow-lg" : "bg-black/50 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/Imagenes/logo_sinFondo.png" className="h-9" alt="STEM FESC" />
          <span className="self-center text-xl text-white font-semibold whitespace-nowrap">
            Stem Fesc <i className="bi bi-rocket-takeoff"></i>
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-300"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
          </svg>
        </button>

        <div className={`${open ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-white/10 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-black/70 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 px-3 text-white rounded hover:text-cyan-400 md:hover:text-cyan-400 md:p-0 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
