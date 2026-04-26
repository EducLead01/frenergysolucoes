"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "PRODUTOS", href: "/produtos" },
  { label: "SEGMENTOS", href: "#" },
  { label: "SOBRE NÓS", href: "#" },
  { label: "CONTEÚDO", href: "#" },
  { label: "CONTATO", href: "#" },
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
        className={`container flex items-center justify-between rounded-lg px-5 py-3 lg:px-8 lg:py-4 backdrop-blur-lg transition-all duration-700 ease-in-out ${
          scrolled ? "bg-teal-800/80" : "bg-white/30"
        }`}
      >
        {/* Logo */}
        <a href="/">
          <Image
            src="/Logo-BC-Energia-Vertical-Branco.svg"
            alt="BC Energia"
            width={93}
            height={53}
            className="w-20 lg:w-[5.8rem]"
            priority
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
