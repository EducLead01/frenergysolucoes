const products = [
  {
    title: "Mercado Livre de Energia",
    description:
      "Para empresas com contas a partir de R$ 10 mil. Solução sem investimento para consumidores conectados em alta tensão e demanda contratada a partir de 30kW negociarem livremente a própria energia.",
    iconSrc: "/img/icons/icon-mercado-energia.svg",
    bgImage: "/img/components/products-card/mercado-livre-de-energia-thumb.png",
    btnHref: "/produtos/mercado-livre-de-energia",
  },
  {
    title: "Consórcio BC Energia",
    description:
      "Para contas a partir de R$ 300,00. Solução sem investimento para consumidores conectados em baixa tensão terem acesso a energia solar sem a necessidade de construir usina.",
    iconSrc: "/img/icons/icon-energia-assinatura.svg",
    bgImage: "/img/components/products-card/energia-por-assinatura-thumb.png",
    btnHref: "/produtos/consorcio-bc-energia",
  },
  {
    title: "Gestão de Energia",
    description:
      "Performance no Mercado Livre. Fundamental para reduzir os custos com energia elétrica, trazendo sustentabilidade, eficiência e aumento de competitividade para o negócio.",
    iconSrc: "/img/icons/icon-gestao-de-energia.svg",
    bgImage: "/img/components/products-card/gestao-de-energia-thumb.png",
    btnHref: "/produtos/gestao-de-energia",
  },
  {
    title: "Certificação Renovável - IREC",
    description:
      "Comprovação de consumo renovável. Certificação internacional que permite a rastreabilidade do consumo através das fontes renováveis, como solar, eólica, hídrica e biomassa.",
    iconSrc: "/img/icons/irec.svg",
    bgImage: "/img/components/products-card/certificacao-renovavel-thumb.png",
    btnHref: "/produtos/irec",
  },
  {
    title: "Arrendamento de Usinas",
    description:
      "Parceria que entrega resultado. Oportunidade para donos de usinas arrendarem seus ativos e, assim, não se preocuparem com conversão e gestão de clientes.",
    iconSrc: "/img/icons/icon-arrendamento-de-usinas.svg",
    bgImage: "/img/components/products-card/arrendamento-de-usinas-thumb.png",
    btnHref: "/produtos/arrendamento-de-usinas",
  },
  {
    title: "Gestão e Consultoria Jurídica",
    description:
      "Expertise em Direito Energético e Empresarial. Atuação multidisciplinar para oferecer uma atuação mais estratégica alinhada com os seus objetivos empresariais de forma contenciosa e consultiva.",
    iconSrc: "/img/icons/icon-consultoria-juridica.svg",
    bgImage: "/img/components/products-card/consultoria-juridica-thumb.png",
    btnHref: "https://www.bced.com.br/",
  },
];

export function ProductsSection() {
  return (
    <>
      <section className="bg-white px-6 pt-10 pb-24 relative">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-light tracking-widest uppercase text-teal-900 mb-4">
            PRODUTOS
          </h2>
          <h3 className="text-center text-4xl font-bold text-teal-900 mb-12 max-w-4xl mx-auto uppercase">
            Conheça aqui algumas das soluções que oferecemos para redução na conta de energia
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.title}
                className="group flex flex-col overflow-hidden rounded-lg bg-teal-600/95 text-center"
              >
                {/* Top image with hover zoom */}
                <div
                  className="flex h-60 justify-center items-center bg-center transition-all duration-1000 ease-in-out group-hover:bg-[length:120%_120%]"
                  style={{
                    backgroundImage: `url('${product.bgImage}')`,
                    backgroundSize: "100% 100%",
                  }}
                >
                  <img
                    src={product.iconSrc}
                    alt="Icone"
                    className="w-12 h-12 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 items-center">
                  <h4 className="text-[30px] font-bold text-white text-center leading-tight">
                    {product.title}
                  </h4>
                  <p className="text-white text-center text-sm mt-3 flex-1">
                    {product.description}
                  </p>
                  <a
                    href={product.btnHref}
                    className="mt-6 bg-amber-400 text-teal-900 font-bold uppercase px-6 py-3 text-sm hover:bg-amber-300 transition-colors"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arrow divider */}
      <div
        className="relative h-20 z-10 -mt-1 bg-white"
        style={{
          backgroundImage: "url('/img/global/section-arrow-down-white.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "contain",
        }}
      />
    </>
  );
}
