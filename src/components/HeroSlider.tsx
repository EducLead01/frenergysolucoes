import Image from "next/image";

export function HeroSlider() {
  return (
    <div className="relative mt-20 h-[calc(100vh-80px)] overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Frenergy"
        fill
        className="object-cover"
        style={{ objectPosition: "65% center" }}
        priority
      />
    </div>
  );
}
