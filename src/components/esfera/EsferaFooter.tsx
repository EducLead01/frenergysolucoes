import Image from "next/image";

const columns = [
  {
    title: "",
    links: [],
  },
  {
    title: "",
    links: [],
  },
  {
    title: "",
    links: [],
  },
];

export function EsferaFooter() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-6 py-14">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Logo + newsletter */}
          <div className="flex flex-col gap-6 lg:w-72">
            <Image
              src="/frenergy-logo-white.svg"
              alt="Frenergy"
              width={160}
              height={50}
              className="object-contain"
            />
            <p className="text-white/60 text-sm leading-relaxed"></p>
            <div className="flex">
              <input
                type="email"
                placeholder=""
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

          {/* Columns (empty — ready for customization) */}
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-8">
            {columns.filter(col => col.title).map((col) => (
              <div key={col.title}>
                <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">{col.title}</h4>
                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/60 text-sm hover:text-[#F0416E] transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">© 2026 Frenergy. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
