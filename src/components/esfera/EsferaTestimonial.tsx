interface Props {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export function EsferaTestimonial({ quote, name, role, company }: Props) {
  return (
    <section className="py-16" style={{ background: "linear-gradient(135deg, #F0416E 0%, #FF5900 100%)" }}>
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <svg className="mx-auto mb-6 opacity-40" width="56" height="40" viewBox="0 0 56 40" fill="white">
          <path d="M0 40V24.667C0 10.444 7.111 2.556 21.333 0L24 4.667C17.778 6 13.556 9.111 11.333 14c-1.111 2.444-1.556 4.889-1.333 7.333H16V40H0zm32 0V24.667C32 10.444 39.111 2.556 53.333 0L56 4.667C49.778 6 45.556 9.111 43.333 14c-1.111 2.444-1.556 4.889-1.333 7.333H48V40H32z" />
        </svg>
        <p className="text-white text-xl lg:text-2xl font-medium leading-relaxed mb-8 italic">
          "{quote}"
        </p>
        <div className="text-white">
          <p className="font-bold text-lg">{name}</p>
          <p className="opacity-80 text-sm">{role} — {company}</p>
        </div>
      </div>
    </section>
  );
}
