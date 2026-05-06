import Image from "next/image";

export function PhoneMockupGroup() {
  return (
    <div className="flex-1 w-full relative">
      <div
        className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3"
        style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)" }}
      />
      <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
        <Image
          src="/images/app03.png"
          alt="App Frenergy"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
