const productLinks = [
  { text: "Energia Solar Residencial", href: "#" },
  { text: "Energia Solar Comercial", href: "#" },
  { text: "Energia Solar Rural", href: "#" },
  { text: "Energia Solar Industrial", href: "#" },
  { text: "Manutenção e Monitoramento", href: "#" },
];

const servicosLinks = [
  { text: "Instalação", href: "#" },
  { text: "Consultoria", href: "#" },
  { text: "Financiamento Solar", href: "#" },
  { text: "Projeto Elétrico", href: "#" },
];

const sobreLinks = [
  { text: "Quem Somos", href: "#" },
  { text: "Nossa Equipe", href: "#" },
  { text: "Certificações", href: "#" },
  { text: "Sustentabilidade", href: "#" },
];

const contatoLinks = [
  { text: "Entre em contato", href: "#" },
  { text: "Solicitar orçamento", href: "#" },
  { text: "Trabalhe conosco", href: "#" },
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
      <footer className="bg-zinc-900 px-8 py-24 relative text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Logo + Address */}
            <div className="lg:col-span-1">
              <img
                src="/frenergy-logo-white.svg"
                alt="Frenergy Soluções"
                className="w-40 mb-6"
              />
              <h2 className="font-bold text-lg text-white mb-2">Endereço:</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Al. Ricardo Paranhos, 52 — Qd. 224, Lt. 3E, Apto 101A,
                Setor Marista, Goiânia/GO
              </p>
            </div>

            <FooterCol title="Produtos" links={productLinks} />
            <FooterCol title="Serviços" links={servicosLinks} />
            <FooterCol title="Sobre nós" links={sobreLinks} />
            <FooterCol title="Contato" links={contatoLinks} />
          </div>

          {/* Social */}
          <div className="border-t border-zinc-700 mt-8 pt-8 text-center">
            <h5 className="text-2xl font-bold text-white mb-6">SIGA NOSSAS REDES</h5>
            <div className="flex justify-center gap-6">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/img/icons/instagram.svg" alt="Instagram" className="w-8 h-8" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/img/icons/facebook.svg" alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/img/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/img/icons/youtube.svg" alt="YouTube" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright bar */}
      <div className="bg-teal-800 py-4 text-center">
        <p className="text-white text-sm font-bold uppercase">
          © FRENERGY SOLUÇÕES - 2025 | TODOS OS DIREITOS RESERVADOS
        </p>
      </div>
    </>
  );
}
