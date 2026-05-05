"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const highlights = [
  { src: "/images/assinestore/highlight1.svg", number: "+ 200", label: "Projetos Instalados" },
  { src: "/images/assinestore/highlight2.svg", number: "+ 1.500 kWp", label: "Potência Instalada" },
  { src: "/images/assinestore/highlight3.svg", number: "95%", label: "Economia Média" },
  { src: "/images/assinestore/highlight4.svg", number: "+ 5 anos", label: "de Experiência" },
];

export function SobreHighlights() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ backgroundColor: "rgba(0, 0, 0, 0)", padding: "0" }}>
      <div
        ref={ref}
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "32px 40px",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        {highlights.map(({ src, number, label }, i) => (
          <div
            key={label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s`,
            }}
          >
            <Image src={src} alt={label} width={78} height={78} />
            <div
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: 30,
                fontWeight: 800,
                color: "rgb(0, 123, 204)",
              }}
            >
              {number}
            </div>
            <div
              style={{
                fontFamily: "var(--font-open-sans)",
                fontSize: 16,
                color: "rgb(33, 37, 41)",
                textAlign: "center",
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
