export function AnimacaoSolar() {
  return (
    <section id="energia-solar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Texto */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D] mb-6 leading-tight">
              Energia solar gerando economia para você
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Os painéis solares captam a energia do sol e transformam em energia elétrica para sua empresa e casa reduzindo até 95% da sua conta de luz.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-base transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
            >
              Quero economizar
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Vídeo animado */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <video
              src="/videos/solar-animation.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
