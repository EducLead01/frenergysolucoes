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

      {/* Cinematic gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
