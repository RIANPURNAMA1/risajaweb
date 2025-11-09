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
  title: "RianDev - Web Development Agency",
  description: "Website profesional, modern & SEO-friendly untuk bisnis dan personal.",
  icons: {
    icon: [
      { url: "/icons.png", type: "image/png" }, // default browser
    ],
    apple: "/icons.png", // untuk iOS
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
