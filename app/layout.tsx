import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CMP BIM – Agence BIM 3D",
  description:
    "CMP BIM est une agence spécialisée dans le BIM 3D. Nous réalisons de nombreux projets innovants en modélisation et coordination 3D.",
  // Tu peux aussi rajouter d’autres champs pour le SEO :
  keywords: ["BIM", "3D", "modélisation", "agence", "CMP BIM", "coordination 3D"],
  openGraph: {
    title: "CMP BIM – Agence BIM 3D",
    description:
      "Agence spécialisée dans le BIM 3D. CMP BIM réalise de nombreux projets de modélisation et de coordination 3D.",
    url: "https://ton-domaine.com", // ton URL
    siteName: "CMP BIM",
    images: [
      {
        url: "/images/og-image.jpg", // image OpenGraph
        width: 1200,
        height: 630,
        alt: "CMP BIM – Agence BIM 3D",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
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
        {children}
      </body>
    </html>
  );
}
