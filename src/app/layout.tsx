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
    "Obras Civiles y Suministros en Colombia | Londoño Ingeniería Civil SAS",
  description:
    "Expertos en obras civiles, consultorías e interventorías. Suministramos estibas, grama sintética y mallas deportivas en Colombia. Alta presencia en Puerto Salgar, La Dorada y más.",
  keywords: [
    "obras civiles Colombia",
    "ingeniería civil Colombia",
    "empresa contratista",
    "consultoría en ingeniería civil",
    "interventorías profesionales",
    "suministros para construcción",
    "estibas plásticas y madera",
    "grama sintética deportiva",
    "mallas de nailon deportivas",
    "Puerto Salgar",
    "La Dorada",
    "Magdalena Medio",
    "Bogotá",
    "zona centro Colombia",
    "infraestructura deportiva",
    "suministros especializados",
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
        <meta
          property="og:title"
          content="Obras Civiles y Suministros en Colombia | Londoño Ingeniería Civil SAS"
        />
        <meta
          property="og:description"
          content="Expertos en obras civiles, consultorías e interventorías. Suministramos estibas, grama sintética y mallas deportivas en Colombia."
        />
        <meta property="og:url" content="https://londonoingenieria.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

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
