import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | SimpleIn Solutions",
  description: "Cookie Policy explaining how we use cookies and tracking technologies.",
  alternates: {
    canonical: "https://simpleinsolutions.com/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy | SimpleIn Solutions",
    description: "Cookie Policy explaining how we use cookies and tracking technologies.",
    url: "https://simpleinsolutions.com/cookie-policy",
    type: "website",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground mb-6">
            Cookie Policy
          </h1>
          <p className="text-lg text-muted-foreground font-light">
            Last Updated: {/* [TODO: Add Date] */}
          </p>
        </div>

        <div className="space-y-12 text-foreground font-light leading-relaxed">
          <section>
            <p className="mb-4 text-muted-foreground">
              This Cookie Policy explains how SimpleIn Solutions uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">1. Essential Cookies</h2>
            <p className="mb-4 text-muted-foreground">
              {/* [TODO: Add description of essential/strictly necessary cookies required for the website to function] */}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">2. Analytics Cookies</h2>
            <p className="mb-4 text-muted-foreground">
              {/* [TODO: Add details about performance and analytics cookies used to understand user behavior] */}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">3. Preference Cookies</h2>
            <p className="mb-4 text-muted-foreground">
              {/* [TODO: Explain functionality cookies used to remember user preferences and settings] */}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">4. Managing Cookies</h2>
            <p className="mb-4 text-muted-foreground">
              {/* [TODO: Provide instructions on how users can control, manage, or disable cookies via their browser settings] */}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">5. Contact Us</h2>
            <p className="mb-4 text-muted-foreground">
              If you have any questions about our use of cookies, please contact us at: info@simpleinsolutions.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
