import Image from "next/image";

export function HeroSlider() {
  return (
    <div className="relative mt-0 h-screen lg:mt-28 lg:h-[calc(100vh-112px)] overflow-hidden">
      {/* Fundo — casa */}
      <Image
        src="/images/hero01.jpeg"
        alt="Frenergy"
        fill
        className="object-cover"
        priority
      />
      {/* Homem em cima */}
      <div className="absolute inset-0 flex items-end justify-end">
        <div className="relative h-full w-auto aspect-auto flex items-end">
          <Image
            src="/images/hero02.png"
            alt="Técnico Frenergy"
            width={600}
            height={800}
            className="h-full w-auto object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </div>
  );
}
