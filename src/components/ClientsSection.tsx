"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clients = [
  { src: "/img/components/customers/grupocereal.png", alt: "Grupo Cereal" },
  { src: "/img/components/customers/igreja-luz.png", alt: "Igreja Luz" },
  { src: "/img/components/customers/lifebox.png", alt: "Lifebox" },
  { src: "/img/components/customers/limagrain-vector-logo.png", alt: "Limagrain" },
  { src: "/img/components/customers/luidoices.png", alt: "Lui Doces" },
  { src: "/img/components/customers/mega-moda-park.png", alt: "Mega Moda Park" },
  { src: "/img/components/customers/novomundo.png", alt: "Novo Mundo" },
  { src: "/img/components/customers/piquiras.png", alt: "Piquiras" },
  { src: "/img/components/customers/richesse.png", alt: "Richesse" },
  { src: "/img/components/customers/teashop.png", alt: "Tea Shop" },
  { src: "/img/components/customers/teuto.png", alt: "Teuto" },
  { src: "/img/components/customers/triunfoconcebra.png", alt: "Triunfo Concebra" },
  { src: "/img/components/customers/bandnewsfmgoiania.png", alt: "Band News FM Goiânia" },
  { src: "/img/components/customers/coco-bambu-restaurante.png", alt: "Coco Bambu" },
  { src: "/img/components/customers/coming.png", alt: "Coming" },
  { src: "/img/components/customers/curtidoratocantins.png", alt: "Curtidora Tocantins" },
  { src: "/img/components/customers/drogariasantamarta.png", alt: "Drogaria Santa Marta" },
  { src: "/img/components/customers/flamboyant.png", alt: "Flamboyant" },
  { src: "/img/components/customers/fujioka.png", alt: "Fujioka" },
  { src: "/img/components/customers/grupo-jorlan.png", alt: "Grupo Jorlan" },
  { src: "/img/components/customers/grupo-natureza-o-boticario.png", alt: "Grupo Natureza O Boticário" },
];

export function ClientsSection() {
  return (
    <section className="pb-20 pt-16 bg-white text-center text-teal-900">
      <div className="container mx-auto px-6">
        <p className="text-sm uppercase tracking-widest text-teal-900">PARCERIA E CONFIANÇA</p>
        <h3 className="text-4xl font-bold text-teal-900 mt-2 mb-10 uppercase">Nossos Clientes</h3>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={24}
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={800}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 5, spaceBetween: 32 },
          }}
        >
          {clients.map((client) => (
            <SwiperSlide key={client.alt} className="flex items-center justify-center">
              <img
                src={client.src}
                alt={client.alt}
                className="h-16 w-auto object-contain mx-auto grayscale hover:grayscale-0 transition-all"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
