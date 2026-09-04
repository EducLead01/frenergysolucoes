import type { Metadata } from "next";
import { Montserrat, Open_Sans, Inter } from "next/font/google";
import "./globals.css";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { MetaPixel } from "@/components/MetaPixel";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frenergysolucoes.com.br"),
  title: "Frenergy Soluções | Energia Solar",
  description:
    "Frenergy Soluções em Energia Solar. Economize até 95% na conta de luz com instalação de painéis solares para residências, comércios e indústrias.",
  icons: {
    icon: "/frenergy-logo.svg",
  },
  openGraph: {
    title: "Frenergy Soluções | Energia Solar",
    description:
      "Frenergy Soluções em Energia Solar. Economize até 95% na conta de luz com instalação de painéis solares para residências, comércios e indústrias.",
    url: "https://frenergysolucoes.com.br",
    siteName: "Frenergy Soluções",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Frenergy Soluções - Energia Solar",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frenergy Soluções | Energia Solar",
    description:
      "Frenergy Soluções em Energia Solar. Economize até 95% na conta de luz com instalação de painéis solares para residências, comércios e indústrias.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${openSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-montserrat">
        <MetaPixel />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
