const projetos = [
  { id: 1, label: "Residencial",    tall: true  },
  { id: 2, label: "Comercial",      tall: false },
  { id: 3, label: "Industrial",     tall: false },
  { id: 4, label: "Condomínio",     tall: false },
  { id: 5, label: "Posto de Combustível", tall: false },
  { id: 6, label: "Agronegócio",   tall: true  },
];

const SolarIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12 opacity-30" fill="white">
    <rect x="8" y="20" width="48" height="28" rx="3" />
    <line x1="8" y1="30" x2="56" y2="30" stroke="white" strokeWidth="2" />
    <line x1="8" y1="40" x2="56" y2="40" stroke="white" strokeWidth="2" />
    <line x1="22" y1="20" x2="22" y2="48" stroke="white" strokeWidth="2" />
    <line x1="42" y1="20" x2="42" y2="48" stroke="white" strokeWidth="2" />
    <line x1="32" y1="8"  x2="32" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="20" y1="11" x2="23" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="44" y1="11" x2="41" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export function ProjetosSection() {
  return (
    <section className="py-20 bg-[#F7F7F7]">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D]">
            Projetos em imagens
          </h2>
          <p className="text-[#787878] mt-3 text-base">
            Conheça alguns dos projetos que já entregamos em todo o Centro-Oeste.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {projetos.map((p) => (
            <div
              key={p.id}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{ gridRow: p.tall ? "span 2" : "span 1" }}
            >
              {/* Placeholder background */}
              <div
                className="w-full h-full min-h-[200px]"
                style={{
                  background: "linear-gradient(135deg, #0d4f4c 0%, #1a7a74 60%, #115e59 100%)",
                  minHeight: p.tall ? "420px" : "200px",
                }}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                  <SolarIcon />
                  <span className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                    Em breve
                  </span>
                </div>

                {/* Label on hover */}
                <div
                  className="absolute inset-0 flex flex-col items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }}
                >
                  <span className="text-white font-bold text-sm">{p.label}</span>
                  <span className="text-white/70 text-xs">Frenergy Soluções</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <a
            href="/cases"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-white font-bold text-base transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
          >
            Ver todos os projetos
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
