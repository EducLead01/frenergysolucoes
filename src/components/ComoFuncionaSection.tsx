import { Sun, Cpu, Zap, CreditCard } from "lucide-react";

const steps = [
  {
    num: 1,
    icon: Sun,
    title: "Painéis Solares",
    desc: "Realizam a captação da luz solar e convertem em energia de corrente contínua.",
  },
  {
    num: 2,
    icon: Cpu,
    title: "Inversor",
    desc: "Realiza a conversão da corrente contínua para corrente alternada.",
  },
  {
    num: 3,
    icon: Zap,
    title: "Abastecimento",
    desc: "A energia gerada vai para o quadro de luz e é distribuída para ser consumida na residência ou empresa.",
  },
  {
    num: 4,
    icon: CreditCard,
    title: "Gerando Crédito",
    desc: "O que não for consumido é distribuído na rede da concessionária e convertido em crédito a ser utilizado em até 5 anos.",
  },
];

export function ComoFuncionaSection() {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Badge */}
        <div className="flex justify-start mb-4">
          <span className="border border-gray-400 text-gray-600 text-xs font-semibold px-4 py-1 rounded-full">
            Como Funciona
          </span>
        </div>

        {/* Titles */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#F5A623] mb-3">
          Gerando Energia
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-teal-800 mb-12">
          Entenda como sua energia é gerada
        </h3>

        {/* Grid 2×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {steps.map(({ num, icon: Icon, title, desc }) => (
            <div key={num} className="flex gap-5 items-start">
              {/* Icon box */}
              <div className="flex-shrink-0 w-14 h-14 bg-teal-800 rounded-lg flex items-center justify-center">
                <Icon className="w-7 h-7 text-[#F5A623]" />
              </div>
              {/* Text */}
              <div>
                <h4 className="text-lg font-bold text-teal-800 mb-1">
                  {num}. {title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
