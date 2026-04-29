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
      '<span class="text-amber-400">Valorização do imóvel</span> e retorno ao investimento com energia solar',
    subtitle:
      "Instale painéis solares e veja seu imóvel valorizar até 8% enquanto economiza até 95% na conta de luz todos os meses.",
    btnText: "SOLICITAR ORÇAMENTO",
    btnHref: "#contato",
    btnClass: "border border-white bg-white text-teal-900 hover:bg-white/80",
  },
  {
    bgImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80",
    titleHtml:
      'Mais de <span class="text-amber-400">4.000 projetos entregues</span> em 8 anos de história no segmento solar',
    subtitle:
      "Experiência, confiança e resultado. A Frenergy é referência em energia solar com milhares de clientes satisfeitos em todo o Brasil.",
    btnText: "CONHEÇA NOSSA HISTÓRIA",
    btnHref: "#contato",
    btnClass: "bg-amber-400 text-teal-900 hover:bg-amber-300",
  },
  {
    bgImage: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=1600&q=80",
    titleHtml:
      'Economize até <span class="text-amber-400">95%</span> na sua Conta de Luz com Energia Solar para seu comércio ou indústria',
    subtitle:
      "Reduza seus custos operacionais, aumente a competitividade e aposte em uma fonte de energia limpa e sustentável para o seu negócio.",
    btnText: "FALAR COM ESPECIALISTA",
    btnHref: "#contato",
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
