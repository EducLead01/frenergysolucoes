import Image from "next/image";

export function PhoneMockupGroup() {
  return (
    <div className="flex-1 w-full flex justify-center">
      <div className="relative w-full max-w-sm aspect-[4/3]">
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
