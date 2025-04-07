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
    "Londoño Ingeniería Civil SAS es un contratista en Colombia que ofrece ejecución de obras civiles, consultorías, interventorías y suministra estibas plásticas, estibas de madera, grama sintética y mallas de nailon para escenarios deportivos.",
  keywords: [
    "obras civiles",
    "contratista en Colombia",
    "consultoría en ingeniería",
    "interventorías",
    "estibas plásticas",
    "estibas de madera",
    "grama sintética",
    "mallas de nailon",
    "suministros para obras",
    "escenarios deportivos",
    "Londoño Ingeniería Civil SAS",
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
