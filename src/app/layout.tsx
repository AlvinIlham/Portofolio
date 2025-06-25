import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalNavigation from "@/components/GlobalNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern Portfolio | ALBI • ALPHA • JARVIS",
  description:
    "Modern portfolio showcasing language learning projects (ALBI), technology projects (ALPHA), and achievements & certifications (JARVIS)",
  keywords: [
    "portfolio",
    "web development",
    "language learning",
    "technology",
    "certifications",
  ],
  authors: [{ name: "Portfolio Owner" }],
  openGraph: {
    title: "Modern Portfolio",
    description:
      "Showcasing projects across language learning, technology, and achievements",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GlobalNavigation />
        {children}
      </body>
    </html>
  );
}
