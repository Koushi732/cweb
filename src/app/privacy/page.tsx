import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SimpleIn Solutions",
  description: "Privacy Policy of SimpleIn Solutions outlining how we collect, use, and protect your information.",
  alternates: {
    canonical: "https://simpleinsolutions.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | SimpleIn Solutions",
    description: "Privacy Policy of SimpleIn Solutions outlining how we collect, use, and protect your information.",
    url: "https://simpleinsolutions.com/privacy",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-base text-muted-foreground font-light">
            Last Updated: {/* [TODO: Add Date] */}
          </p>
        </div>

        <div className="space-y-10 text-foreground font-light leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-3 tracking-tight">1. Information We Collect</h2>
            <p className="mb-4 text-muted-foreground text-[15px]">
              {/* [TODO: Add specific details on data collected, e.g., personal data, usage data] */}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 tracking-tight">2. How We Use Information</h2>
            <p className="mb-4 text-muted-foreground text-[15px]">
              {/* [TODO: Add details on how the collected data is used] */}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 tracking-tight">3. Cookies</h2>
            <p className="mb-4 text-muted-foreground text-[15px]">
              {/* [TODO: Briefly explain cookie usage, linking to Cookie Policy] */}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 tracking-tight">4. Third-Party Services</h2>
            <p className="mb-4 text-muted-foreground text-[15px]">
              {/* [TODO: Describe data sharing with third-party vendors and integrations] */}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 tracking-tight">5. Data Security</h2>
            <p className="mb-4 text-muted-foreground text-[15px]">
              {/* [TODO: Outline security measures and protocols] */}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 tracking-tight">6. User Rights</h2>
            <p className="mb-4 text-muted-foreground text-[15px]">
              {/* [TODO: Explain rights to access, modify, or delete personal data] */}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 tracking-tight">7. Updates to the Policy</h2>
            <p className="mb-4 text-muted-foreground text-[15px]">
              We reserve the right to modify this privacy policy at any time. Changes will be posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 tracking-tight">8. Contact Information</h2>
            <p className="mb-4 text-muted-foreground text-[15px]">
              For any privacy-related inquiries, please contact us at:<br/>
              Email: info@simpleinsolutions.com<br/>
              {/* [TODO: Add Legal Address] */}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
