const cards = [
  {
    title: "Economia",
    desc: "Para quem busca economia na conta de luz, a Esfera é o lugar certo. Oferecemos as melhores condições de contratação de energia para garantir os melhores preços.",
    bg: "/images/esfera/card-economia.jpg",
  },
  {
    title: "Controle",
    desc: "Tenha previsibilidade e saiba exatamente o preço que vai pagar, sem bandeiras tarifárias ou surpresas.",
    bg: "/images/esfera/card-controle.jpg",
  },
  {
    title: "Praticidade",
    desc: "Pode se despreocupar! Nós cuidamos de todo o processo de migração para você, sem custos adicionais. É só aproveitar os benefícios do Mercado Livre de Energia.",
    bg: "/images/esfera/card-praticidade.jpg",
  },
  {
    title: "Sustentabilidade",
    desc: "Consuma energia limpa na sua empresa e amplie as práticas ESG. Além de economizar, você cuida do Planeta consumindo energia renovável.",
    bg: "/images/esfera/card-sustentabilidade.jpg",
  },
  {
    title: "Simplicidade",
    desc: "O Mercado Livre de Energia tem burocracias? Não no Esfera Simplifica. Experiência simplificada para você que quer economizar sem complicações.",
    bg: "/images/esfera/card-simplicidade.jpg",
  },
  {
    title: "Transparência",
    desc: "Garantimos uma experiência transparente, pensada de pessoa para pessoa. Somos referência no Mercado Livre de Energia e oferecemos todo o suporte necessário.",
    bg: "/images/esfera/card-transparencia.jpg",
  },
];

export function EsferaBenefitsCards() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl lg:text-4xl font-bold text-[#4D4D4D] mb-12">
          O Esfera Simplifica é para você que busca
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative rounded-2xl overflow-hidden min-h-[280px] flex flex-col justify-end group"
              style={{ backgroundImage: `url('${card.bg}')`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/55 group-hover:bg-black/65 transition-all" />
              <div className="relative z-10 p-6">
                <h3 className="text-white text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-white/85 text-sm leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
