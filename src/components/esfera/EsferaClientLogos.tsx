import Image from "next/image";

const logos = [
  { src: "/frenergy-logo.svg",                alt: "Frenergy" },
  { src: "/images/esfera/logo-clube.png",     alt: "Clube Jundiaiense" },
  { src: "/images/esfera/logo-petropol.png",  alt: "Petropol" },
  { src: "/images/esfera/logo-portal.png",    alt: "Portal" },
  { src: "/images/esfera/logo-clara.png",     alt: "Clara Resortes" },
  { src: "/images/esfera/logo-sociedade.png", alt: "Sociedade" },
];

const doubled = [...logos, ...logos];

export function EsferaClientLogos() {
  return (
    <>
      {/* Gradient title band */}
      <section
        className="py-12 text-center"
        style={{ background: "linear-gradient(135deg, #F0416E 0%, #FF5900 100%)" }}
      >
        <h2 className="text-white text-2xl lg:text-3xl font-bold px-6">
          A Frenergy tem a confiança de marcas como:
        </h2>
      </section>

      {/* White marquee band */}
      <section className="py-10 bg-white overflow-hidden">
        <div className="relative overflow-hidden">
          {/* fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, white, transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, white, transparent)" }}
          />

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
    </>
  );
}
