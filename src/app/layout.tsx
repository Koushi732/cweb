import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://simpleinsolutions.com"),
  title: {
    default: "SimpleIn Solutions — Smart IT Solutions for a Digital Future",
    template: "%s | SimpleIn Solutions",
  },
  description:
    "SimpleIn Solutions offers premium IT services, custom software development, web & mobile app development, cloud solutions, cybersecurity, AI solutions, IT consulting, and enterprise hardware sales.",
  keywords: [
    "IT Services",
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "IT Consulting",
    "Cybersecurity",
    "AI Solutions",
    "IT Hardware Sales",
    "Digital Transformation",
    "SimpleIn Solutions",
  ],
  authors: [{ name: "SimpleIn Solutions" }],
  creator: "SimpleIn Solutions",
  publisher: "SimpleIn Solutions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "SimpleIn Solutions",
    title: "SimpleIn Solutions — Smart IT Solutions for a Digital Future",
    description:
      "Premium IT services, software development, and hardware solutions for businesses of all sizes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SimpleIn Solutions — Smart IT Solutions for a Digital Future",
    description:
      "Premium IT services, software development, and hardware solutions for businesses of all sizes.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SimpleIn Solutions",
    description: "Smart IT Solutions for a Digital Future",
    url: "https://simpleinsolutions.com",
    logo: "https://simpleinsolutions.com/logo.png",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-XXXX-XXXX-XX",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
