"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const phrases = [
  "A conta de luz da sua empresa é maior que 3 mil reais por mês?",
  "Conheça nosso planejamento e gestão de energia Frenergy e invista seu tempo e dinheiro no que realmente importa.",
];

function Typewriter() {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 40);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 20);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <p className="text-xl lg:text-2xl font-bold text-[#4D4D4D] leading-snug min-h-[4rem]">
      {displayed}
      <span className="inline-block w-[2px] h-[1.2em] bg-[#F0416E] ml-1 align-middle animate-pulse" />
    </p>
  );
}

export function EsferaHero() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: logo + typewriter + CTA */}
          <div className="flex-1 flex flex-col gap-6">
            <Image
              src="/frenergy-logo.svg"
              alt="Frenergy"
              width={220}
              height={70}
              className="object-contain"
            />
            <Typewriter />
            <div>
              <a
                href="#contato-esfera"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-[70px] text-white font-bold text-base transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
              >
                Economize com a Frenergy
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: decorative image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/esfera/group-hero.png"
              alt="Frenergy"
              width={500}
              height={400}
              className="object-contain w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
