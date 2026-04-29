"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    bgImage: "/bg-home.jpg",
    titleHtml:
      'Invista em energia solar e gere <span class="text-amber-400">renda passiva</span> com alta rentabilidade',
    subtitle:
      "Seja sócio de usinas solares sem precisar instalar nada. Retorno previsível, contrato seguro e impacto positivo para o planeta.",
    btnText: "QUERO INVESTIR",
    btnHref: "#contato",
    btnClass: "border border-white bg-white text-teal-900 hover:bg-white/80",
  },
  {
    bgImage: "/img/pages/banner2.webp",
    titleHtml:
      'Faça sua adesão sem custos e economize até <span class="text-amber-400">26% na energia</span>',
    subtitle:
      "Por meio do consórcio BC Energia, consumidores com contas de energia a partir de R$250,00 economizam na conta de energia sem precisar fazer investimentos em placas solares.",
    btnText: "ADESÃO GRATUITA",
    btnHref: "http://www.appenergia.com.br/Grupo_BC_Energia",
    btnClass: "bg-amber-400 text-teal-900 hover:bg-amber-300",
  },
  {
    bgImage: "/img/pages/nossas-usinas2.webp",
    titleHtml:
      'Mais de <span class="text-amber-400">R$ 400 milhões de economia</span> aos nossos clientes',
    subtitle:
      "Soluções sustentáveis e inteligentes que reduzem os custos com energia e aumentam a competitividade de mercado.",
    btnText: "SAIBA MAIS",
    btnHref: "/sobre/quem-somos",
    btnClass: "border border-white bg-white text-teal-900 hover:bg-white/80",
  },
];

export function HeroSlider() {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, pauseOnMouseEnter: true, disableOnInteraction: false }}
        loop
        speed={600}
        className="hero-swiper"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-[105vh] bg-cover bg-center relative flex flex-col justify-center py-24"
              style={{ backgroundImage: `url('${slide.bgImage}')` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-teal-950 opacity-40 z-10" />

              {/* Content */}
              <div className="container mx-auto px-6 relative z-20">
                <div className="flex flex-col gap-4 lg:w-4/5">
                  <h1
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white leading-snug lg:leading-[3.7rem]"
                    dangerouslySetInnerHTML={{ __html: slide.titleHtml }}
                  />
                  <p className="text-xl text-white mb-6 mt-2 max-w-2xl">{slide.subtitle}</p>
                  <div>
                    <a
                      href={slide.btnHref}
                      className={`inline-block font-bold uppercase px-4 py-2 transition-all ${slide.btnClass}`}
                    >
                      {slide.btnText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
