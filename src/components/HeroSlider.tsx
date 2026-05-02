export function HeroSlider() {
  return (
    <div className="relative h-[105vh] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/drone 01.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

    </div>
  );
}
