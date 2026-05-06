const stats = [
  { numero: "+150", label: "Projetos instalados" },
  { numero: "R$2M+", label: "Economizados pelos clientes" },
  { numero: "8 anos", label: "De experiência no mercado" },
];

export function StatsBar() {
  return (
    <section className="bg-[#1a1a1a] py-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 text-center px-6">
              <span
                className="text-3xl lg:text-4xl font-bold"
                style={{ color: "#FF5900" }}
              >
                {s.numero}
              </span>
              <span className="text-white/70 text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
