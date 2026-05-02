import Image from "next/image";

const logos = [
  { src: "/images/esfera/logo-clube.png",     alt: "Clube Jundiaiense" },
  { src: "/images/esfera/logo-petropol.png",  alt: "Petropol" },
  { src: "/images/esfera/logo-portal.png",    alt: "Portal" },
  { src: "/images/esfera/logo-clara.png",     alt: "Clara Resortes" },
  { src: "/images/esfera/logo-sociedade.png", alt: "Sociedade" },
];

const doubled = [...logos, ...logos];

export function EsferaLogoMarquee() {
  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-10">
        <h2 className="text-center text-2xl lg:text-3xl font-bold text-[#4D4D4D]">
          Marcas que confiam em nosso trabalho
        </h2>
      </div>

      <div className="relative overflow-hidden">
        {/* fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, white, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white, transparent)" }} />

        <div
          className="flex gap-16 w-max"
          style={{ animation: "marquee 22s linear infinite" }}
        >
          {doubled.map((logo, i) => (
            <div key={i} className="flex items-center justify-center h-20 w-40 flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={80}
                className="object-contain max-h-16 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
