import type { Metadata } from "next";
import localFont from "next/font/local";
import { Bodoni_Moda, Cormorant_Garamond } from 'next/font/google'
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
  style: ['italic'], // Solo cargamos la itálica si es la que necesitas
  variable: '--font-bodoni', // Variable para Tailwind
  weight: '400', // Puedes añadir '700' si necesitas negrita itálica
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  style: ['italic'], // Solo cargamos la itálica si es la que necesitas
  variable: '--font-cormorant', // Variable para Tailwind
  weight: '400', // Puedes añadir '700' si necesitas negrita itálica
})

const gotham = localFont({
  src: [
    {
      path: "./fonts/Gotham-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Gotham-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Gotham-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Gotham-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Gotham-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Gotham-Ultra.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gotham",
});

const gothamItalic = localFont({
  src: [
    {
      path: "./fonts/Gotham-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/Gotham-ExtraLightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./fonts/Gotham-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Gotham-BookItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Gotham-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Gotham-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Gotham-UltraItalic.otf",
      weight: "900",
      style: "italic",
    }
  ],
  variable: "--font-gotham-italic",
});

const theSeasons = localFont({
  src: [
    {
      path: "./fonts/Fontspring-DEMO-theseasons-reg.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Fontspring-DEMO-theseasons-bd.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-theseason",
});

const theSeasonsItalic = localFont({
  src: [
    {
      path: "./fonts/Fontspring-DEMO-theseasons-it.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-theseason-italic",
});

export const metadata: Metadata = {
  title: "7 Cielos Rooftop Gastrobar | Cartagena",
  description: "Descubre el mejor rooftop en Bocagrande, Cartagena. Gastronomía fusión, coctelería de autor, atardeceres mágicos y el mejor ambiente.",
  keywords: ["rooftop cartagena", "restaurante bocagrande", "cocteles cartagena", "7 cielos rooftop", "restaurante vista cartagena"],
  openGraph: {
    title: "7 Cielos Rooftop Gastrobar | Cartagena",
    description: "Gastronomía fusión, coctelería de autor y atardeceres mágicos en Bocagrande.",
    url: "https://www.7cielos.com.co",
    siteName: "7 Cielos Rooftop",
    images: [
      {
        url: "/IMG_Principal.png",
        width: 1200,
        height: 630,
        alt: "Vista principal de 7 Cielos Rooftop en Cartagena",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO" className="scroll-smooth">
      <body
        className={`${gotham.variable} ${cormorant.variable} ${theSeasons.variable} ${gothamItalic.variable} ${theSeasonsItalic.variable} ${bodoni.variable} relativeantialiased md:subpixel-antialiased text-background z-0 w-full`}
      >
        {children}
      </body>
    </html>
  );
}
