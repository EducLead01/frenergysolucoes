"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Jhonatan Pinheiro",
    role: "Supervisor de ESG da Novo Mundo",
    logoSrc: "/img/components/customers/novomundo.png",
    quote:
      "Deixamos de gastar com uma energia, que talvez não viesse de uma fonte renovável, convertemos para a energia solar e reduzimos os nossos custos operacionais. Dessa forma conseguimos fazer investimento em outras áreas da empresa e contribuir para que a empresa continue a evoluir e a se desenvolver cada vez mais",
  },
  {
    name: "Taissa Machado",
    role: "Gestora de Meio Ambiente da Triunfo Concebra",
    logoSrc: "/img/components/customers/triunfoconcebra.png",
    quote:
      "Um dos pilares do sistema de gestão da Triunfo Concebra é justamente a conservação ambiental. E a premiação que recebemos traz a importância para o nosso sistema de gestão ambiental e o uso da energia renovável. E a parceria com a BC Energia trouxe o alcance desses pilares de conservação ambiental, controle e redução dos impactos ambientais.",
  },
  {
    name: "Heder Dias",
    role: "Supervisor do Grupo Cereal",
    logoSrc: "/img/components/customers/grupocereal.png",
    quote:
      "A nossa parceria destaca a relevância da economia proporcionada pelo Grupo BC, que oferece soluções energéticas sustentáveis e eficientes. Juntos, reforçamos o compromisso em contribuir para um futuro mais sustentável e responsável. Queremos demonstrar o compromisso das empresas com a sustentabilidade",
  },
];

export function TestimonialsSection() {
  return (
    <section className="px-6 pb-8 pt-12 lg:pt-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-light tracking-widest uppercase text-teal-900">
          DEPOIMENTOS
        </h2>
        <h3 className="text-center text-4xl font-bold text-teal-900 mt-2 mb-12 uppercase">
          Veja o que nossos clientes dizem sobre nós
        </h3>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name} className="h-auto">
              <div className="bg-gray-200/60 rounded-lg p-6 relative overflow-hidden h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.logoSrc}
                    alt="Cliente"
                    className="w-24 h-16 object-contain flex-shrink-0"
                  />
                  <div>
                    <h5 className="font-bold text-lg text-black uppercase">{t.name}</h5>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic leading-relaxed flex-1">{t.quote}</p>
                <img
                  src="/img/global/testimony-icon.svg"
                  alt="Icone"
                  className="absolute bottom-4 right-4 w-10 opacity-30"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
