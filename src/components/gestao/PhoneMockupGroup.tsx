import Image from "next/image";

export function PhoneMockupGroup() {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full max-w-sm h-[280px] lg:h-[340px]">
        <Image
          src="/images/app03.png"
          alt="App Frenergy"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
