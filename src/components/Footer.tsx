const productLinks = [
  { text: "Mercado livre de energia", href: "/produtos/mercado-livre-de-energia" },
  { text: "Consórcio BC Energia", href: "/produtos/consorcio-bc-energia" },
  { text: "Gestão de Energia", href: "/produtos/gestao-de-energia" },
  { text: "Certificação Renovável - IREC", href: "/produtos/irec" },
  { text: "Arrendamento de usinas", href: "/produtos/arrendamento-de-usinas" },
  { text: "Consultoria Jurídica", href: "https://www.bced.com.br/" },
];

const segmentLinks = [
  { text: "Agronegócio", href: "/segmentos/agronegocio" },
  { text: "Bares e Restaurantes", href: "/segmentos/bares-e-restaurantes" },
  { text: "Condomínio", href: "/segmentos/condominio" },
  { text: "Educacional", href: "/segmentos/educacional" },
  { text: "Turismo", href: "/segmentos/turismo" },
  { text: "Lazer", href: "/segmentos/lazer" },
  { text: "Religioso", href: "/segmentos/religioso" },
  { text: "Residencial", href: "/segmentos/residencial" },
  { text: "Saúde", href: "/segmentos/saude" },
  { text: "Serviço", href: "/segmentos/servico" },
  { text: "Varejo", href: "/segmentos/varejo" },
];

const sobreLinks = [
  { text: "Quem Somos", href: "/sobre/quem-somos" },
  { text: "Nossas Usinas", href: "/sobre/nossas-usinas" },
  { text: "LGPD", href: "/sobre/lgpd" },
  { text: "Leilão", href: "/sobre/leilao" },
  { text: "Fator de Alavancagem", href: "/sobre/fator-de-alavancagem" },
  { text: "Sustentabilidade", href: "/sobre/sustentabilidade" },
  { text: "Social", href: "/sobre/social" },
  { text: "Condições Gerais Varejistas", href: "/sobre/condicoes-gerais-varejistas" },
];

const contatoLinks = [
  { text: "Entre em contato", href: "/contato" },
  { text: "Quero ser parceiro", href: "https://wa.me/5562981632741" },
  { text: "Trabalhe conosco", href: "https://grupobcenergia.vagas.solides.com.br/" },
  { text: "Sou fornecedor/Prestador de Serviços", href: "https://wa.me/5562981590131" },
];

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { text: string; href: string }[];
}) {
  return (
    <div>
      <h5 className="font-bold text-lg text-white mb-4">{title}</h5>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.text}>
            <a
              href={link.href}
              className="text-gray-300 text-sm hover:text-white transition-colors"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <>
      <footer
        className="bg-zinc-900 bg-cover px-8 py-24 relative text-white"
        style={{ backgroundImage: "url('/img/global/footer-bg.png')" }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 items-start">
            {/* Logo + Addresses */}
            <div className="lg:col-span-1">
              <img
                src="/Logo-BC-Energia-Vertical-Branco.svg"
                alt="BC Energia"
                className="w-40 mb-6"
              />
              <h2 className="font-bold text-lg text-white mb-2">Endereço em Goiânia:</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Av. Dep. Jamel Cecílio, c/ rua 56, nº 2929, Salas 2802/2803 - Ed. Brookfield
                Towers Torre B - Jardim Goiás, Goiânia - GO, 74810-240
              </p>
              <h2 className="font-bold text-lg text-white mt-6 mb-2">Endereço em São Paulo:</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Av. Pres. Juscelino Kubitschek, 360 - 7º andar cj71 - Edifício JK 360 -Vila Nova
                Conceição, São Paulo - SP, 04543-000
              </p>
            </div>

            <FooterCol title="Produtos" links={productLinks} />
            <FooterCol title="Segmentos" links={segmentLinks} />
            <FooterCol title="Sobre nós" links={sobreLinks} />
            <FooterCol
              title="Conteúdo"
              links={[{ text: "BC Cast", href: "https://www.youtube.com/@grupobcenergia/videos" }]}
            />
            <FooterCol title="Contato" links={contatoLinks} />
          </div>

          {/* Social */}
          <div className="border-t border-zinc-700 mt-8 pt-8 text-center">
            <h5 className="text-2xl font-bold text-white mb-6">SIGA NOSSAS REDES</h5>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/grupobcenergia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/img/icons/instagram.svg" alt="Instagram" className="w-8 h-8" />
              </a>
              <a
                href="https://www.facebook.com/GrupoBCEnergia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/img/icons/facebook.svg" alt="Facebook" className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/company/grupobcenergia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/img/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
              </a>
              <a
                href="https://www.youtube.com/@grupobcenergia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/img/icons/youtube.svg" alt="YouTube" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright bar */}
      <div className="bg-teal-600 py-4 text-center">
        <p className="text-white text-sm font-bold uppercase">
          © GRUPO BC ENERGIA - 2024 | TODOS OS DIREITOS RESERVADOS
        </p>
      </div>
    </>
  );
}
