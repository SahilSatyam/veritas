import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veritas",
  description: "Responsible AI Series",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=tanker@400&f[]=recia@400,500,600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <NavBar />
        <main style={{ minHeight: 'calc(100vh - 160px)' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
