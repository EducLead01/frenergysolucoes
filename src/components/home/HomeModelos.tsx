"use client";
import Image from "next/image";

const modelos = [
  {
    badge: "RESIDENCIAL",
    img: "/images/08.png",
  },
  {
    badge: "COMERCIAL",
    img: "/images/assinestore/admin_analytics2x.png",
  },
  {
    badge: "INDUSTRIAL",
    img: "/images/assinestore/tela_personalizado.png",
  },
  {
    badge: "AGRO",
    img: "/images/assinestore/tela_personalizado.png",
  },
];

export function HomeModelos() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {modelos.map((m) => (
            <div key={m.badge} className="flex flex-col gap-4">
              {/* Image with gradient offset border */}
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-2xl translate-x-2 translate-y-2"
                  style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)" }}
                />
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#f2f2f2]">
                  <Image
                    src={m.img}
                    alt={m.badge}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <a
                href="#contato"
                className="self-start inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-full transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
              >
                Conheça o case
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
