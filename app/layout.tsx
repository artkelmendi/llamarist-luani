import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auto Llamarist Luani — Atelier i Llamarinës & Karocerisë",
  description:
    "Auto Llamarist Luani — mjeshtëri e rrallë në llamarinë dhe karoceri për BMW, Audi, VW, Mercedes dhe çdo markë. Riparim pas aksidenti, heqje gungash, saldim dhe drejtim shasie. Vetura juaj, e ringjallur.",
  keywords: [
    "llamarist",
    "auto llamarist",
    "riparim llamarine",
    "karoceri",
    "riparim pas aksidenti",
    "BMW",
    "Audi",
    "Volkswagen",
    "Mercedes",
    "Luani",
  ],
  openGraph: {
    title: "Auto Llamarist Luani",
    description: "Atelier i llamarinës & karocerisë — vetura juaj, e ringjallur.",
    type: "website",
    locale: "sq_AL",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0908",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sq">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
