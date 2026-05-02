"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const clients = [
  { src: "/images/esfera/logo-clube.png", alt: "Clube Jundiaiense" },
  { src: "/images/esfera/logo-petropol.png", alt: "Petropol" },
  { src: "/images/esfera/logo-portal.png", alt: "Portal" },
  { src: "/images/esfera/logo-clara.png", alt: "Clara Resortes" },
  { src: "/images/esfera/logo-sociedade.png", alt: "Sociedade" },
];

export function EsferaClientLogos() {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-2xl lg:text-3xl font-bold text-[#4D4D4D] mb-10">
          A Frenergy tem a confiança de marcas como:
        </h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop
          slidesPerView={2}
          spaceBetween={32}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="items-center"
        >
          {clients.map((client) => (
            <SwiperSlide key={client.alt} className="flex items-center justify-center">
              <div className="flex items-center justify-center h-20 px-4">
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={160}
                  height={80}
                  className="object-contain max-h-16 grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
