import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Sans untuk body & heading
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Mono untuk kode, badge, atau pre/code block
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Risaja Web - Jasa Pembuatan Website Profesional",
  description: "Risaja Web menyediakan layanan pembuatan website profesional, modern, dan SEO-friendly untuk bisnis dan personal.",
  keywords: "website, jasa pembuatan website, SEO, web development, profesional",
  authors: [{ name: "Risaja Web" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [
      { url: "/icons.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/icons.png",
  },
  openGraph: {
    title: "Risaja Web - Jasa Pembuatan Website Profesional",
    description: "Risaja Web menyediakan layanan pembuatan website profesional, modern, dan SEO-friendly.",
    url: "https://risajaweb.vercel.app/",
    siteName: "Risaja Web",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Risaja Web",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Risaja Web - Jasa Pembuatan Website Profesional",
    description: "Risaja Web menyediakan layanan pembuatan website profesional, modern, dan SEO-friendly.",
    images: ["/og-image.png"],
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-800 bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
