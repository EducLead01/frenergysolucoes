"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "SERVIÇOS", href: "#servicos" },
  { label: "COMO FUNCIONA", href: "#como-funciona" },
  { label: "SEGMENTOS", href: "#segmentos" },
  { label: "CALCULADORA", href: "#calculadora" },
  { label: "DEPOIMENTOS", href: "#depoimentos" },
  { label: "CONTATO", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex justify-center mx-6 lg:mx-auto transition-all duration-700 ${
        scrolled ? "mt-2" : "mt-4"
      }`}
    >
      <div
        className="container flex items-center justify-between rounded-lg px-5 py-3 lg:px-8 lg:py-4 backdrop-blur-lg bg-teal-800/90"
      >
        {/* Logo */}
        <a href="/">
          <img
            src="/frenergy-logo-white.svg"
            alt="Frenergy Soluções"
            className="w-24 lg:w-32"
          />
        </a>

        {/* Desktop nav links */}
        <div className="hidden font-bold uppercase lg:flex lg:space-x-6 xl:space-x-10 text-white text-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-amber-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + mobile hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="/produtos"
            className="border border-white text-white font-bold uppercase text-xs lg:text-sm px-4 py-2 hover:bg-white hover:text-teal-900 transition-colors"
          >
            QUERO ECONOMIZAR
          </a>
          {/* Mobile hamburger */}
          <img
            src="/img/icons/icon-menu.svg"
            alt="Menu"
            className="lg:hidden w-5 h-5 cursor-pointer invert"
          />
        </div>
      </div>
    </nav>
  );
}
