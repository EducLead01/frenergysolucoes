const solucoes = [
  {
    titulo: "Residencial",
    descricao: "Sistemas de 3 a 20 kWp para casas e apartamentos. Retorno em até 4 anos.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    titulo: "Comercial",
    descricao: "Sistemas de 20 a 75 kWp para empresas. Projeto elétrico completo e homologação ANEEL.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    titulo: "Industrial",
    descricao: "Acima de 75 kWp para indústrias e grandes consumidores. Consultoria energética dedicada.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    titulo: "Agro",
    descricao: "Energia solar para o agronegócio. Irrigação, refrigeração e operações agrícolas com energia limpa.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12c0-2.76 1.12-5.26 2.93-7.07"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    titulo: "Gestão de Energia",
    descricao: "Monitoramento em tempo real, relatórios e suporte de engenheiros certificados.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M7 16l3-4 3 3 3-5"/>
      </svg>
    ),
  },
  {
    titulo: "Mercado Livre de Energia",
    descricao: "Migre para o Mercado Livre e negocie sua energia com liberdade, reduzindo custos operacionais.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
];

export function ProductsSection() {
  return (
    <section id="servicos" className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-5xl">

        <div className="mb-12 text-center">
          <span
            className="inline-block text-white text-xs font-bold uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
          >
            Soluções
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D]">
            O que a <span style={{ color: "#F0416E" }}>Frenergy</span> oferece
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solucoes.map((s) => (
            <div key={s.titulo} className="flex flex-col gap-3 p-6 rounded-2xl border border-[#f0f0f0] hover:border-[#FF5900]/30 hover:shadow-md transition-all duration-200">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0"
                style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)" }}
              >
                {s.icon}
              </div>
              <h3 className="font-bold text-[#4D4D4D] text-base">{s.titulo}</h3>
              <p className="text-[#787878] text-sm leading-relaxed">{s.descricao}</p>
              <a
                href="#contato"
                className="text-sm font-bold mt-auto"
                style={{ color: "#FF5900" }}
              >
                Saiba mais →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
