import { Metadata } from "next";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/utils/seo";

export const metadata: Metadata = {
  title: "Cookie Policy | SIMPLEIN Solutions",
  description: "Cookie Policy explaining how we use cookies and tracking technologies.",
  alternates: {
    canonical: "https://simpleinsolutions.com/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy | SIMPLEIN Solutions",
    description: "Cookie Policy explaining how we use cookies and tracking technologies.",
    url: "https://simpleinsolutions.com/cookie-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | SIMPLEIN Solutions",
    description: "Cookie Policy explaining how we use cookies and tracking technologies.",
  },
};

export default function CookiePolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://simpleinsolutions.com" },
    { name: "Cookie Policy", url: "https://simpleinsolutions.com/cookie-policy" }
  ]);
  const webPageSchema = generateWebPageSchema(
    "Cookie Policy",
    "Cookie Policy explaining how we use cookies and tracking technologies.",
    "https://simpleinsolutions.com/cookie-policy"
  );

  return (
    <div className="bg-background min-h-screen pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, webPageSchema]) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            Cookie Policy
          </h1>
          <p className="text-base text-muted-foreground font-light">
            Last Updated: {/* [TODO: Add Date] */}
          </p>
        </div>

        <div className="space-y-10 text-foreground font-light leading-relaxed">
          <section>
            <p className="mb-4 text-muted-foreground text-[15px]">
              This Cookie Policy explains how SIMPLEIN Solutions uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 tracking-tight">1. Essential Cookies</h2>
            <p className="mb-4 text-muted-foreground text-[15px]">
              {/* [TODO: Add description of essential/strictly necessary cookies required for the website to function] */}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 tracking-tight">2. Analytics Cookies</h2>
            <p className="mb-4 text-muted-foreground text-[15px]">
              {/* [TODO: Add details about performance and analytics cookies used to understand user behavior] */}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 tracking-tight">3. Preference Cookies</h2>
            <p className="mb-4 text-muted-foreground text-[15px]">
              {/* [TODO: Explain functionality cookies used to remember user preferences and settings] */}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 tracking-tight">4. Managing Cookies</h2>
            <p className="mb-4 text-muted-foreground text-[15px]">
              {/* [TODO: Provide instructions on how users can control, manage, or disable cookies via their browser settings] */}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 tracking-tight">5. Contact Us</h2>
            <p className="mb-4 text-muted-foreground text-[15px]">
              If you have any questions about our use of cookies, please contact us at: info@simpleinsolutions.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
