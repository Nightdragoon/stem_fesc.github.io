import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSProvider from "@/components/AOSProvider";
import LightfallWrapper from "@/components/LightfallWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stem Fesc",
  description:
    "Es un equipo de profesionistas en formación provenientes de diversas carreras de la Facultad de Estudios Superiores Cuautitlán, UNAM.",
  keywords:
    "Stem fesc, STEM FESC, STEMFESC, FESC STEM, fesc, stem, ciencia, astronomía, programación",
  authors: [{ name: "Stem FESC joaquin emmanuel" }],
  robots: { index: true, follow: true },
  icons: { icon: "/Imagenes/logo.png", apple: "/Imagenes/logo.png" },
  openGraph: {
    title: "Stem fesc astronomia programacion y mucho mas",
    description:
      "Es un equipo de profesionistas en formación provenientes de diversas carreras de la Facultad de Estudios Superiores Cuautitlán, UNAM.",
    images: ["https://www.stemfesc.com.mx/Imagenes/logo.png"],
    url: "https://www.stemfesc.com.mx/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stem fesc astronomia programacion y mucho mas",
    description:
      "Es un equipo de profesionistas en formación provenientes de diversas carreras de la Facultad de Estudios Superiores Cuautitlán, UNAM.",
    images: ["https://www.stemfesc.com.mx/Imagenes/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <LightfallWrapper />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
        <Navbar />
        <main className="flex-1 relative z-10 pt-16">{children}</main>
        <Footer />
        <AOSProvider />
      </body>
    </html>
  );
}
