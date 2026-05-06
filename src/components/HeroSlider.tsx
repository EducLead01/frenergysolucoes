import Image from "next/image";

export function HeroSlider() {
  return (
    <div className="relative h-[105vh] overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Frenergy"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
