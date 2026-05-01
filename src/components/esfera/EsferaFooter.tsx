import Image from "next/image";

export function EsferaFooter() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-6 py-14">
        <div className="flex flex-col items-center gap-6 text-center">

          <Image
            src="/frenergy-logo-white.svg"
            alt="Frenergy"
            width={160}
            height={50}
            className="object-contain"
          />

          {/* Endereço */}
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <svg className="flex-shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <address className="not-italic">
              Al. Ricardo Paranhos, Nº 52 — Setor Marista, Goiânia/GO
            </address>
          </div>

          {/* Newsletter */}
          <div className="w-full max-w-sm flex flex-col gap-2">
            <p className="text-white/70 text-sm font-medium">Receba nosso contato por email:</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 bg-white/10 border border-white/20 rounded-l-full px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-[#F0416E] transition-colors"
              />
              <button
                className="px-4 py-3 rounded-r-full flex items-center justify-center"
                style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Redes sociais */}
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F0416E] flex items-center justify-center transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F0416E] flex items-center justify-center transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" stroke="none" />
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-4 text-center">
          <p className="text-white/40 text-xs">© 2026 Frenergy. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
