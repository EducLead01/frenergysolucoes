import Image from "next/image";

const stats = [
  {
    icon: "/images/esfera/icon-empresas.png",
    number: "+ de 540",
    label: "empresas atendidas",
    color: "#FF5900",
  },
  {
    icon: "/images/esfera/icon-unidades.png",
    number: "+ de 1.600",
    label: "unidades consumidoras",
    color: "#4D4D4D",
  },
  {
    icon: "/images/esfera/icon-economia.png",
    number: "R$ 120 milhões+",
    label: "em economia para nossos clientes até início de 2025",
    color: "#FF5900",
  },
  {
    icon: "/images/esfera/icon-residencia.png",
    number: "+ de 3.900",
    label: "Empresas e residências pelo Centro-Oeste",
    color: "#4D4D4D",
  },
];

export function EsferaStats() {
  return (
    <section className="py-16 bg-[#F7F7F7]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 flex items-center justify-center">
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  width={72}
                  height={72}
                  className="object-contain animate-pulse"
                />
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-bold" style={{ color: stat.color }}>{stat.number}</p>
                <p className="text-[#787878] text-sm mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
