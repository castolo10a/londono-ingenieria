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
  title: "Londoño Ingeniería Civil SAS",
  description:
    "Londoño Ingeniería Civil SAS ofrece asesorías, interventorías y ejecución de obras civiles con calidad, compromiso y profesionalismo en Colombia.",
  keywords: [
    "Londoño Ingeniería Civil SAS",
    "obras civiles",
    "ingeniería civil",
    "asesorías en ingeniería",
    "interventorías",
    "Colombia,",
    "construcción",
    "infraestructura",
    "consultoría civil",
  ],
  authors: [
    { name: "Daniel Castillo", url: "https://fullstack-colombia.netlify.app/" },
  ],
  creator: "Daniel Castillo",
  robots: "index, follow",
  themeColor: "#1D4ED8",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
