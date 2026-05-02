import Image from "next/image";

const cards = [
  {
    badge: "AGILIDADE",
    title: "Atendimento rápido e personalizado",
    desc: "Entre em contato pelo WhatsApp ou formulário. Nossa equipe responde rapidamente seu primeiro contato.",
    img: "/images/esfera/card-economia.jpg",
    reverse: false,
  },
  {
    badge: "CONTROLE",
    title: "Saber quanto vai pagar",
    desc: "Tenha previsibilidade e saiba exatamente o preço que vai pagar, sem bandeiras tarifárias ou surpresas.",
    img: "/images/esfera/card-controle.jpg",
    reverse: true,
  },
  {
    badge: "PRATICIDADE",
    title: "Experiência sem burocracia",
    desc: "Pode se despreocupar! Nós cuidamos de todo o processo de migração para você, sem custos adicionais. É só aproveitar os benefícios do Mercado Livre de Energia.",
    img: "/images/esfera/card-praticidade.jpg",
    reverse: false,
  },
  {
    badge: "SUSTENTABILIDADE",
    title: "Energia limpa de fontes renováveis",
    desc: "Consuma energia limpa na sua empresa e amplie as práticas ESG. Além de economizar, você cuida do Planeta consumindo energia renovável.",
    img: "/images/esfera/card-sustentabilidade.jpg",
    reverse: true,
  },
  {
    badge: "SIMPLICIDADE",
    title: "Simplicidade para economizar",
    desc: "O Mercado Livre de Energia tem burocracias? Não no Esfera Simplifica. Experiência simplificada para você que quer economizar sem complicações.",
    img: "/images/esfera/card-simplicidade.jpg",
    reverse: false,
  },
  {
    badge: "TRANSPARÊNCIA",
    title: "Segurança e transparência",
    desc: "Garantimos uma experiência transparente, pensada de pessoa para pessoa. Somos referência no Mercado Livre de Energia e oferecemos todo o suporte necessário.",
    img: "/images/esfera/card-transparencia.jpg",
    reverse: true,
  },
];

export function EsferaBenefitsCards() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D] mb-12">
          A Frenergy simplifica todo o processo pra você economizar
        </h2>

        <div className="flex flex-col gap-12">
          {cards.map((card) => (
            <div
              key={card.badge}
              className={`flex flex-col ${card.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8`}
            >
              {/* Text */}
              <div className="flex-1 flex flex-col gap-3">
                <span
                  className="inline-block self-start text-white text-xs font-bold uppercase px-3 py-1 rounded-full"
                  style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                >
                  {card.badge}
                </span>
                <h3 className="text-xl font-bold text-[#4D4D4D]">{card.title}</h3>
                <p className="text-[#787878] text-sm leading-relaxed">{card.desc}</p>
              </div>

              {/* Image with orange border accent */}
              <div className="flex-1 w-full relative">
                <div
                  className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3"
                  style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)" }}
                />
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
