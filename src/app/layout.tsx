import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Londoño Ingeniería Civil SAS - Obras Civiles y Suministros Especializados",
  description:
    "Empresa contratista que presta servicios de obras civiles, consultorías, interventorías y suministra estibas, grama sintética y mallas deportivas en todo el país. Alta presencia en municipios como Puerto Salgar, La Dorada y zonas aledañas.",
  keywords: [
    "obras civiles en Colombia",
    "consultoría en ingeniería civil",
    "interventorías profesionales",
    "suministros para obras",
    "estibas plásticas y de madera",
    "grama sintética para escenarios deportivos",
    "mallas de nailon deportivas",
    "Puerto Salgar",
    "La Dorada",
    "Magdalena Medio",
    "Bogota",
    "zona centro de Colombia",
    "contratista de obras",
    "infraestructura deportiva",
    "suministros especializados Colombia",
  ],
  authors: [
    { name: "Daniel Castillo", url: "https://fullstack-colombia.netlify.app/" },
  ],
  creator: "Daniel Castillo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
