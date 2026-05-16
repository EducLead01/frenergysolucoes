export function HeroSlider() {
  return (
    <div className="relative mt-0 h-screen lg:mt-28 lg:h-[calc(100vh-112px)] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://solaredge.widen.net/content/lg36c9iabl/mp4/seh_hero_banner_v2_wash.mp4-1080p.mp4?quality=hd&t.autoplay=true" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
