import Image from "next/image";

export function EsferaHero() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: logo + text */}
          <div className="flex-1 flex flex-col gap-6">
            <Image
              src="/images/esfera/logo-simplifica.png"
              alt="Esfera Simplifica"
              width={280}
              height={80}
              className="object-contain"
            />
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4D4D4D] leading-snug">
              A conta de luz da sua empresa é maior que{" "}
              <span className="text-[#F0416E]">3 mil reais por mês?</span>
            </h2>
            <h3 className="text-xl lg:text-2xl text-[#4D4D4D] leading-relaxed">
              Nós simplificamos para você economizar e investir no que realmente importa.
            </h3>
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
              alt="Esfera Energia"
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
