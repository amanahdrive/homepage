import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amanah Drive — Kursus Mengemudi Mobil Palembang Gratis Antar Jemput",
  description:
    "Kursus mengemudi mobil Palembang dengan fasilitas gratis antar-jemput ke rumah (CV Amanah Drive). Instruktur sabar berpengalaman anti-bentak, armada nyaman ber-AC dingin terawat, dan jadwal fleksibel 09.00-22.00 WIB.",
  keywords: [
    "kursus mengemudi mobil palembang gratis antar jemput",
    "kursus mengemudi palembang gratis antar jemput",
    "les mobil palembang antar jemput",
    "kursus stir mobil palembang gratis antar jemput",
    "les mobil palembang",
    "belajar mobil palembang",
    "kursus stir mobil palembang",
    "kursus mengemudi mobil palembang",
    "les nyetir mobil palembang",
    "biaya les mobil palembang",
    "kursus mengemudi bukit lama",
    "kursus mobil malam palembang",
    "sim a palembang",
    "amanah drive palembang",
    "cv amanah drive",
    "kursus stir mobil terdekat palembang",
    "les mengemudi mobil matic palembang",
  ],
  authors: [{ name: "CV Amanah Drive" }],
  creator: "Amanah Drive",
  metadataBase: new URL("https://amanahdrive.my.id"),
  alternates: {
    canonical: "https://amanahdrive.my.id",
  },
  openGraph: {
    title: "Amanah Drive — Kursus Mengemudi Mobil Palembang Gratis Antar Jemput",
    description:
      "Kursus mengemudi mobil terbaik di Palembang dengan fasilitas gratis antar-jemput ke rumah. Didampingi instruktur sabar tanpa emosi, armada nyaman ber-AC dingin & terawat, serta jadwal fleksibel pagi s/d malam.",
    url: "https://amanahdrive.my.id",
    siteName: "Amanah Drive Palembang",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/assets/amdri-banner.webp",
        width: 1200,
        height: 630,
        alt: "Amanah Drive - Kursus Mengemudi Mobil Palembang Gratis Antar Jemput",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amanah Drive — Kursus Mengemudi Mobil Palembang Gratis Antar Jemput",
    description:
      "Kursus mengemudi mobil no. 1 di Palembang dengan fasilitas gratis antar-jemput. Instruktur sabar berpengalaman anti-emosi, armada terawat, & jadwal fleksibel.",
    images: ["/assets/amdri-banner.webp"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DrivingSchool",
        "@id": "https://amanahdrive.my.id/#organization",
        "name": "Amanah Drive Palembang",
        "legalName": "CV Amanah Drive",
        "url": "https://amanahdrive.my.id",
        "logo": "https://amanahdrive.my.id/assets/logo-amdri-symbol.webp",
        "image": "https://amanahdrive.my.id/assets/amdri-banner.webp",
        "description":
          "Kursus mengemudi mobil profesional di Palembang dengan fasilitas gratis antar jemput ke rumah, instruktur sabar berpengalaman tanpa emosi, armada nyaman ber-AC dingin terawat berkala, dan jadwal fleksibel 09.00 - 22.00 WIB.",
        "telephone": "+628137790961",
        "priceRange": "IDR 600.000 - IDR 2.350.000",
        "paymentAccepted": "Cash, Bank Transfer BRI",
        "currenciesAccepted": "IDR",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Palembang",
          "addressRegion": "Sumatera Selatan",
          "addressCountry": "ID",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -2.990934,
          "longitude": 104.756554,
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            "opens": "08:30",
            "closes": "22:00",
          },
        ],
        "areaServed": [
          "Bukit Lama",
          "Demang Lebar Daun",
          "Gandus",
          "Sudirman Palembang",
          "Sukarami",
          "Plaju",
          "Jakabaring",
          "Kota Palembang",
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "128",
        },
      },
    ],
  };

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P92C4W7Z');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#ffffff] text-[#121317]">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P92C4W7Z"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
