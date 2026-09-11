import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amanah Drive Palembang — Kursus Mengemudi Mobil & SIM A Resmi",
  description:
    "Kursus mengemudi mobil terpercaya di Palembang (CV Amanah Drive Mandiri). Instruktur sabar berpengalaman anti-bentak, armada berpedal rem pengaman tambahan (Dual Safety Assist), jadwal fleksibel 09.00-22.00 WIB, layanan antar-jemput, & pendampingan pembuatan SIM A resmi sampai terbit.",
  keywords: [
    "kursus mengemudi palembang",
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
    "cv amanah drive mandiri",
    "kursus stir mobil terdekat palembang",
    "les mengemudi mobil matic palembang",
  ],
  authors: [{ name: "CV Amanah Drive Mandiri" }],
  creator: "Amanah Drive",
  metadataBase: new URL("https://amanahdrive.my.id"),
  alternates: {
    canonical: "https://amanahdrive.my.id",
  },
  openGraph: {
    title: "Amanah Drive Palembang — Kursus Mengemudi Mobil & SIM A Resmi",
    description:
      "Cepat mahir, tenang & percaya diri di jalan raya Palembang. Didampingi instruktur sabar tanpa emosi, armada aman berpedal rem pengaman tambahan (Dual Safety Assist), & bimbingan SIM A resmi tuntas.",
    url: "https://amanahdrive.my.id",
    siteName: "Amanah Drive Palembang",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/assets/amdri-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Amanah Drive Palembang - Kursus Mengemudi Mobil Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amanah Drive Palembang — Kursus Mengemudi Mobil & SIM A Resmi",
    description:
      "Kursus mengemudi mobil profesional di Palembang. Dual Safety Assist, instruktur sabar berpengalaman, & pendampingan SIM A resmi tuntas.",
    images: ["/assets/amdri-banner.jpg"],
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
        "legalName": "CV Amanah Drive Mandiri",
        "url": "https://amanahdrive.my.id",
        "logo": "https://amanahdrive.my.id/assets/logo-amdri-circle.png",
        "image": "https://amanahdrive.my.id/assets/amdri-banner.jpg",
        "description":
          "Kursus mengemudi mobil profesional di Palembang dengan instruktur sabar berpengalaman, armada berpedal rem pengaman tambahan (Dual Safety Assist), jadwal fleksibel 09.00 - 22.00 WIB, dan bimbingan SIM A resmi.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#ffffff] text-[#121317]">
        {children}
      </body>
    </html>
  );
}
