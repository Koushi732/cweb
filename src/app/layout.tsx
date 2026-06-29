import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { generateBusinessSchema } from "@/utils/seo";

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
    default: "SimpleIn Solutions — Every Service Made Simple",
    template: "%s | SimpleIn Solutions",
  },
  description:
    "SimpleIn Solutions builds scalable digital solutions using modern technologies. Custom software development, web & mobile apps, AI automation, IT hardware, and enterprise IT services worldwide.",
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
    "SimpleIn Solutions",
    "Global IT Services",
    "Worldwide Software Development",
  ],
  authors: [{ name: "SimpleIn Solutions" }],
  creator: "SimpleIn Solutions",
  publisher: "SimpleIn Solutions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "SimpleIn Solutions",
    title: "SimpleIn Solutions — Every Service Made Simple",
    description:
      "We build scalable digital solutions using modern technologies. Custom software, web & mobile apps, AI automation, and enterprise IT services.",
    images: [
      {
        url: "https://simpleinsolutions.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SimpleIn Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SimpleIn Solutions — Every Service Made Simple",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden" suppressHydrationWarning>
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-foreground text-background font-bold rounded-none"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
