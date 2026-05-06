import Image from "next/image";

export function PhoneMockupGroup() {
  return (
    <div className="w-full flex justify-center">
      <Image
        src="/images/app03.png"
        alt="App Frenergy"
        width={400}
        height={320}
        className="w-full max-w-sm h-auto object-contain"
      />
    </div>
  );
}
