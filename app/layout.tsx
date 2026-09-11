import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amanah Drive Palembang — Kursus Mengemudi Profesional & Bergaransi",
  description:
    "Kursus mengemudi mobil terpercaya di Palembang. Instruktur sabar bersertifikasi, armada AC berpedal ganda (Dual Pedal Safety), 6 pilihan slot jadwal (09.00 - 22.00 WIB), dan bimbingan pengurusan SIM A resmi sampai terbit.",
  keywords: [
    "kursus mengemudi palembang",
    "les mobil palembang",
    "belajar nyetir palembang",
    "kursus stir mobil palembang",
    "amanah drive",
    "sim a palembang",
    "kursus mengemudi bukit lama",
    "kursus mobil malam palembang",
  ],
  authors: [{ name: "Amanah Drive Palembang" }],
  creator: "Amanah Drive",
  metadataBase: new URL("https://amanahdrive.my.id"),
  alternates: {
    canonical: "https://amanahdrive.my.id",
  },
  openGraph: {
    title: "Amanah Drive Palembang — Kursus Mengemudi Profesional & Bergaransi",
    description:
      "Cepat Mahir, Tenang & Percaya Diri di Jalan Raya Palembang. Didampingi instruktur ramah anti-grogi & armada rem ganda.",
    url: "https://amanahdrive.my.id",
    siteName: "Amanah Drive",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/assets/amdri-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Amanah Drive Palembang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amanah Drive Palembang — Kursus Mengemudi Profesional",
    description:
      "Kursus mengemudi mobil no. 1 di Palembang. Dual Pedal Safety, instruktur bersertifikasi, dan pengurusan SIM A resmi.",
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
  return (
    <html lang="id" className="scroll-smooth dark">
      <body className="antialiased bg-[#071513] text-slate-200">
        {children}
      </body>
    </html>
  );
}
