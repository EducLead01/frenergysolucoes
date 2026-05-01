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

      {/* Teal gradient overlay — left strong, fades to transparent right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(17,94,89,0.92) 0%, rgba(17,94,89,0.6) 35%, rgba(17,94,89,0.15) 65%, rgba(17,94,89,0) 100%)",
        }}
      />
    </div>
  );
}
