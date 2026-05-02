"use client";

import { useState } from "react";

const fieldClass =
  "w-full border border-gray-200 rounded-xl px-4 py-3.5 text-[#4D4D4D] text-sm outline-none focus:border-[#FF5900] transition-colors bg-white";

function Field({
  label,
  required,
  icon,
  children,
}: {
  label: string;
  required?: boolean;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-bold text-[#FF5900] uppercase tracking-wide">
        {label}{required && "*"}
      </label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          {icon}
        </span>
        <div className="pl-10">{children}</div>
      </div>
    </div>
  );
}

const IconPerson = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);
const IconPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);
const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const IconBuilding = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
  </svg>
);
const IconBolt = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

export function EsferaContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contato" className="py-16" style={{ background: "#F5F5F5" }}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left */}
          <div className="flex-1 flex flex-col justify-center lg:pt-4">
            <h2 className="text-2xl lg:text-3xl font-bold leading-snug text-[#4D4D4D] text-justify lg:text-left">
              Entre em contato para começar a economizar
            </h2>
          </div>

          {/* Right: form */}
          <div className="flex-1 w-full bg-white rounded-2xl shadow-sm p-8">
            {sent ? (
              <div className="text-center py-12">
                <p className="text-2xl font-bold text-[#F0416E]">Mensagem enviada!</p>
                <p className="text-[#787878] mt-2">Em breve entraremos em contato.</p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              >
                <Field label="Nome" required icon={<IconPerson />}>
                  <input type="text" placeholder="" required className={fieldClass} />
                </Field>

                <Field label="Telefone" required icon={<IconPhone />}>
                  <input type="tel" placeholder="" required className={fieldClass} />
                </Field>

                <Field label="E-mail" required icon={<IconMail />}>
                  <input type="email" placeholder="" required className={fieldClass} />
                </Field>

                <Field label="Nome da empresa" required icon={<IconBuilding />}>
                  <input type="text" placeholder="" required className={fieldClass} />
                </Field>

                <Field label="Valor médio da sua conta de energia" required icon={<IconBolt />}>
                  <select required className={fieldClass}>
                    <option value="">Selecione</option>
                    <option>Abaixo de R$ 1.000</option>
                    <option>Até R$ 5.000</option>
                    <option>De R$ 5.000 a R$ 8.000</option>
                    <option>De R$ 8.000 a R$ 15.000</option>
                    <option>Acima de R$ 15.000</option>
                  </select>
                </Field>

                <Field label="Segmento" required icon={<IconBuilding />}>
                  <select required className={fieldClass}>
                    <option value="">Selecione</option>
                    <option>Bares e Restaurantes</option>
                    <option>Postos de Combustíveis</option>
                    <option>Usinas em Fazendas</option>
                    <option>Escolas e Faculdades</option>
                    <option>Oficinas Mecânicas</option>
                    <option>Condomínios</option>
                    <option>Templos e Igrejas</option>
                    <option>Galpões</option>
                    <option>Outro</option>
                  </select>
                </Field>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full inline-flex items-center justify-center gap-2 text-white font-bold text-base transition-opacity hover:opacity-90 mt-1"
                  style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                >
                  Enviar
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                <p className="text-[#787878] text-xs text-center leading-relaxed">
                  Ao clicar em enviar você concorda que entraremos em contato com você, bem como com a nossa{" "}
                  <a href="#" className="text-[#F0416E] underline">Política de Privacidade</a>.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
