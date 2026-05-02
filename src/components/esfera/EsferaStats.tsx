const TEAL = "#115e59";
const ORANGE = "#FF5900";

function IconFactory() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* chimney — orange */}
      <rect x="44" y="10" width="8" height="22" rx="2" fill={ORANGE} />
      {/* building body */}
      <rect x="8" y="30" width="56" height="32" rx="3" fill={TEAL} />
      {/* window with "000" display */}
      <rect x="16" y="38" width="28" height="16" rx="2" fill="white" opacity="0.15" />
      <text x="30" y="50" textAnchor="middle" fontSize="9" fontWeight="700" fill="white" fontFamily="monospace">000</text>
      {/* door */}
      <rect x="46" y="46" width="10" height="16" rx="2" fill="white" opacity="0.25" />
    </svg>
  );
}

function IconUnidades() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* building 1 */}
      <rect x="6" y="26" width="22" height="36" rx="2" fill={TEAL} />
      <rect x="10" y="32" width="6" height="6" rx="1" fill="white" opacity="0.3" />
      <rect x="20" y="32" width="6" height="6" rx="1" fill="white" opacity="0.3" />
      <rect x="10" y="44" width="6" height="6" rx="1" fill="white" opacity="0.3" />
      <rect x="20" y="44" width="6" height="6" rx="1" fill="white" opacity="0.3" />
      {/* building 2 — taller, orange accent top */}
      <rect x="32" y="14" width="22" height="48" rx="2" fill={TEAL} opacity="0.85" />
      <rect x="32" y="14" width="22" height="6" rx="2" fill={ORANGE} />
      <rect x="36" y="24" width="6" height="6" rx="1" fill="white" opacity="0.3" />
      <rect x="46" y="24" width="6" height="6" rx="1" fill="white" opacity="0.3" />
      <rect x="36" y="36" width="6" height="6" rx="1" fill="white" opacity="0.3" />
      <rect x="46" y="36" width="6" height="6" rx="1" fill="white" opacity="0.3" />
      <rect x="36" y="48" width="6" height="6" rx="1" fill="white" opacity="0.3" />
      <rect x="46" y="48" width="6" height="6" rx="1" fill="white" opacity="0.3" />
      {/* ground */}
      <rect x="4" y="62" width="64" height="3" rx="1.5" fill={TEAL} opacity="0.4" />
    </svg>
  );
}

function IconEconomia() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* bolt */}
      <path d="M42 8 L24 38 H36 L30 64 L54 30 H40 Z" fill={ORANGE} />
      {/* coin stack behind */}
      <ellipse cx="18" cy="54" rx="10" ry="4" fill={TEAL} opacity="0.5" />
      <rect x="8" y="46" width="20" height="8" rx="2" fill={TEAL} opacity="0.5" />
      <ellipse cx="18" cy="46" rx="10" ry="4" fill={TEAL} />
      <ellipse cx="18" cy="42" rx="10" ry="4" fill={TEAL} opacity="0.8" />
    </svg>
  );
}

function IconResidencia() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* roof */}
      <path d="M10 34 L36 12 L62 34 Z" fill={TEAL} />
      {/* chimney — orange */}
      <rect x="46" y="16" width="8" height="14" rx="1.5" fill={ORANGE} />
      {/* walls */}
      <rect x="14" y="32" width="44" height="30" rx="2" fill={TEAL} opacity="0.85" />
      {/* door */}
      <rect x="30" y="46" width="12" height="16" rx="2" fill="white" opacity="0.25" />
      {/* windows */}
      <rect x="18" y="38" width="10" height="10" rx="1.5" fill="white" opacity="0.3" />
      <rect x="44" y="38" width="10" height="10" rx="1.5" fill="white" opacity="0.3" />
    </svg>
  );
}

const stats = [
  { icon: <IconFactory />,   number: "+ de 540",       label: "empresas atendidas" },
  { icon: <IconUnidades />,  number: "+ de 1.600",     label: "unidades consumidoras" },
  { icon: <IconEconomia />,  number: "R$ 480 milhões", label: "de economia em energia em 2022" },
  { icon: <IconResidencia />,number: "+ de 3.900",     label: "residências pelo Brasil" },
];

export function EsferaStats() {
  return (
    <section className="py-16 bg-[#F7F7F7]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 flex items-center justify-center animate-pulse">
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-[#F0416E]">{stat.number}</p>
                <p className="text-[#787878] text-sm mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
