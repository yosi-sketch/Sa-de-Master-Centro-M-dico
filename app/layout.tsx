import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const outfitFont = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#15803d",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://saudemasterce.com.br"),
  title:
    "Saúde Master Centro Médico | Envelhecer bem é viver com autonomia · Mateus Leme - MG",
  description:
    "🌿 Saúde Master Centro Médico em Mateus Leme - MG. Consultas médicas humanizadas em diversas especialidades, geriatria, exames e cuidado integral para a longevidade com autonomia. Rua Dr. Tomás de Andrade, 686 - Centro. WhatsApp: (31) 9 9619-6155 | (31) 9 9992-2456.",
  keywords: [
    "Saúde Master",
    "Saúde Master Centro Médico",
    "Saúde Master Mateus Leme",
    "Saúde Master Centro de Especialidades Médicas",
    "Clínica Médica Mateus Leme",
    "Geriatria Mateus Leme",
    "Envelhecer bem é viver com autonomia",
    "Consultas Médicas Mateus Leme",
    "Cardiologista Mateus Leme",
    "Ortopedista Mateus Leme",
    "Ginecologista Mateus Leme",
    "Pediatra Mateus Leme",
    "Dr Tomás de Andrade 686",
    "Exames Mateus Leme",
    "saudemasterce",
  ],
  authors: [
    { name: "Saúde Master Centro Médico" },
    { name: "Corpo Clínico Saúde Master" },
  ],
  creator: "Saúde Master Centro Médico",
  publisher: "Saúde Master Centro Médico",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=sm1", sizes: "any" },
      { url: "/favicon-32x32.png?v=sm1", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=sm1", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=sm1", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png?v=sm1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=sm1",
    apple: [{ url: "/apple-icon.png?v=sm1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://saudemasterce.com.br",
    title:
      "Saúde Master Centro Médico | Envelhecer bem é viver com autonomia · Mateus Leme - MG",
    description:
      "🌿 Envelhecer bem é viver com autonomia. Centro de especialidades médicas em Mateus Leme - MG. Cuidado com você e sua família. WhatsApp: (31) 9 9619-6155.",
    siteName: "Saúde Master Centro Médico",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saúde Master Centro Médico - Mateus Leme - MG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Saúde Master Centro Médico | Especialidades Médicas em Mateus Leme - MG",
    description:
      "🌿 Envelhecer bem é viver com autonomia. Consultas especializadas, geriatria, exames e acolhimento humano. WhatsApp: (31) 9 9619-6155.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Saúde Master Centro Médico",
    alternateName: "Saúde Master Centro de Especialidades Médicas",
    legalName: "Saúde Master Centro Médico Ltda",
    telephone: "+55-31-3535-2459",
    email: "contato@saudemasterce.com.br",
    url: "https://saudemasterce.com.br",
    logo: "https://saudemasterce.com.br/logo.png",
    image: "https://saudemasterce.com.br/idosos-autonomia.jpg",
    description:
      "Centro de especialidades médicas de referência em Mateus Leme - MG. Consultas médicas humanizadas, acompanhamento da longevidade, geriatria, cardiologia, exames diagnósticos e atendimento integral para todas as idades.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Dr. Tomás de Andrade, 686, Centro",
      addressLocality: "Mateus Leme",
      addressRegion: "MG",
      postalCode: "35670-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-19.9875",
      longitude: "-44.4268",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "162",
      bestRating: "5",
      worstRating: "1",
    },
    medicalSpecialty: [
      "Geriatric",
      "Cardiovascular",
      "PrimaryCare",
      "Orthopedic",
      "Gynecologic",
      "Pediatric",
      "Dermatology",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "12:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/saudemasterce/",
      "https://api.whatsapp.com/send?phone=5531996196155",
      "https://api.whatsapp.com/send?phone=5531999922456",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${outfitFont.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=sm1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=sm1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=sm1" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png?v=sm1" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png?v=sm1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=sm1" />
        <link rel="shortcut icon" href="/favicon.ico?v=sm1" />
        <meta name="theme-color" content="#15803d" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-white font-sans text-slate-800 antialiased selection:bg-[#15803d] selection:text-white">
        {children}
      </body>
    </html>
  );
}
