import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import { Analytics } from "@vercel/analytics/next";

const BASE_URL = "https://veritas-sahilsatyams-projects.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Veritas — 100 Days of Responsible AI Engineering",
    template: "%s | Veritas",
  },
  description:
    "A definitive 100-day technical series on responsible AI engineering. Production-grade rigor covering reproducibility, safety, governance, and deployment patterns for senior practitioners.",
  keywords: [
    "Responsible AI",
    "AI Engineering",
    "MLOps",
    "Machine Learning",
    "AI Safety",
    "AI Governance",
    "AI Ethics",
    "Production ML",
    "LLM",
    "RAG",
    "Model Monitoring",
    "AI Deployment",
    "Reproducibility",
    "Explainable AI",
  ],
  authors: [{ name: "Sahil Satyam", url: "https://www.linkedin.com/in/sahilsatyam" }],
  creator: "Sahil Satyam",
  publisher: "Veritas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Veritas",
    title: "Veritas — 100 Days of Responsible AI Engineering",
    description:
      "A definitive 100-day technical series for high-intent practitioners. Production-grade rigor, zero hype.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Veritas — 100 Days of Responsible AI Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veritas — 100 Days of Responsible AI Engineering",
    description:
      "A definitive 100-day technical series for high-intent practitioners. Production-grade rigor, zero hype.",
    images: ["/api/og"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD structured data for the website
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Veritas",
  url: BASE_URL,
  description:
    "A definitive 100-day technical series on responsible AI engineering. Production-grade rigor covering reproducibility, safety, governance, and deployment patterns.",
  author: {
    "@type": "Person",
    name: "Sahil Satyam",
    url: "https://www.linkedin.com/in/sahilsatyam",
  },
  publisher: {
    "@type": "Person",
    name: "Sahil Satyam",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <NavBar />
        <main style={{ minHeight: 'calc(100vh - 160px)' }}>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
