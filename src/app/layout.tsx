import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroLogoProvider from "@/components/ui/HeroLogoProvider";
import ChatWidgetWrapper from "@/components/chat/ChatWidgetWrapper";

import { generateBusinessSchema } from "@/utils/seo";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://simpleinsolutions.com"),
  title: {
    default: "SIMPLEIN Solutions — Every Service Made Simple",
    template: "%s | SIMPLEIN Solutions",
  },
  description:
    "SIMPLEIN Solutions builds scalable digital solutions using modern technologies. Custom software development, web & mobile apps, AI automation, IT hardware, and enterprise IT services worldwide.",
  keywords: [
    "IT Services",
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "IT Consulting",
    "AI Automation",
    "IT Hardware Sales",
    "Digital Transformation",
    "SIMPLEIN Solutions",
    "Global IT Services",
    "Worldwide Software Development",
  ],
  authors: [{ name: "SIMPLEIN Solutions" }],
  creator: "SIMPLEIN Solutions",
  publisher: "SIMPLEIN Solutions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "SIMPLEIN Solutions",
    title: "SIMPLEIN Solutions — Every Service Made Simple",
    description:
      "We build scalable digital solutions using modern technologies. Custom software, web & mobile apps, AI automation, and enterprise IT services.",
    images: [
      {
        url: "https://simpleinsolutions.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SIMPLEIN Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@simplein30",
    creator: "@simplein30",
    title: "SIMPLEIN Solutions — Every Service Made Simple",
    description:
      "We build scalable digital solutions using modern technologies. Custom software, web & mobile apps, AI automation, and enterprise IT services.",
    images: ["https://simpleinsolutions.com/og-image.jpg"],
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
    const jsonLd = generateBusinessSchema();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-632H1T4MHL"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-632H1T4MHL');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden" suppressHydrationWarning>
        <ThemeProvider>
          <HeroLogoProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-foreground text-background font-bold rounded-none"
            >
              Skip to main content
            </a>
            <Navbar />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
            <ChatWidgetWrapper />
            <Analytics />
            <SpeedInsights />
          </HeroLogoProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
