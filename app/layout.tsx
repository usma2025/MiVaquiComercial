import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://mivaqui.com";
const TITLE = "MiVaqui — Tu asistente ganadero en WhatsApp";
const DESCRIPTION =
  "MiVaqui (también buscado como Mivaki) convierte tu WhatsApp en el asistente ganadero que nunca duerme. Registra partos, recibe alertas de celo y consulta el historial de tu hato en segundos.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "MiVaqui",
    "Mivaki",
    "Mi Vaqui",
    "asistente ganadero WhatsApp",
    "software ganadero Colombia",
    "gestión de hato bovino",
    "control de ganado por WhatsApp",
    "app para ganaderos",
    "trazabilidad ganadera",
  ],
  authors: [{ name: "MiVaqui" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    siteName: "MiVaqui",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/Logo-multiformato-09.png",
        width: 2946,
        height: 951,
        alt: "MiVaqui — asistente ganadero por WhatsApp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/Logo-multiformato-09.png"],
  },
};

// Organization + WebSite en JSON-LD: "alternateName" es la señal que le
// ayuda a Google a asociar "Mivaki" (como muchos escriben/escuchan el
// nombre) con la marca MiVaqui — no garantiza aparecer en autocompletado,
// pero es la forma correcta y honesta de reforzar esa asociación (junto con
// la mención explícita en la descripción y en el FAQ).
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MiVaqui",
  alternateName: ["Mivaki", "Mi Vaqui"],
  url: SITE_URL,
  logo: `${SITE_URL}/Logo-multiformato-09.png`,
  description: DESCRIPTION,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MiVaqui",
  alternateName: ["Mivaki", "Mi Vaqui"],
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
