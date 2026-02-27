import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "7 Cielos Roof Top Gastrobar",
  description: "Mejor rooftop de la ciudad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${gotham.variable} ${theSeasons.variable} ${gothamItalic.variable} ${theSeasonsItalic.variable} antialiased text-background z-0 w-full`}
      >
        {children}
      </body>
    </html>
  );
}
