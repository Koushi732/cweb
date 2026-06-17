import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | SimpleIn Solutions",
  description: "Terms and Conditions of SimpleIn Solutions.",
  alternates: {
    canonical: "https://simpleinsolutions.com/terms",
  },
  openGraph: {
    title: "Terms & Conditions | SimpleIn Solutions",
    description: "Terms and Conditions of SimpleIn Solutions.",
    url: "https://simpleinsolutions.com/terms",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground mb-6">
            Terms & Conditions
          </h1>
          <p className="text-lg text-muted-foreground font-light">
            Last Updated: {/* [TODO: Add Date] */}
          </p>
        </div>

        <div className="space-y-12 text-foreground font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">1. Acceptance of Terms</h2>
            <p className="mb-4 text-muted-foreground">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">2. Use of Website</h2>
            <p className="mb-4 text-muted-foreground">
              {/* [TODO: Add rules regarding acceptable use, user conduct, and prohibited activities] */}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">3. Intellectual Property</h2>
            <p className="mb-4 text-muted-foreground">
              {/* [TODO: Add intellectual property rights, copyright notices, and trademark information] */}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">4. Service Information</h2>
            <p className="mb-4 text-muted-foreground">
              {/* [TODO: Add details regarding service availability, modifications, and pricing terms if applicable] */}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">5. Limitation of Liability</h2>
            <p className="mb-4 text-muted-foreground">
              {/* [TODO: Add liability limitations, warranties, and indemnification clauses] */}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">6. Governing Law</h2>
            <p className="mb-4 text-muted-foreground">
              {/* [TODO: Specify governing jurisdiction and dispute resolution methods] */}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">7. Contact</h2>
            <p className="mb-4 text-muted-foreground">
              If you have any questions about these Terms, please contact us at:<br/>
              Email: info@simpleinsolutions.com<br/>
              {/* [TODO: Add Legal Business Name] */}<br/>
              {/* [TODO: Add Company Registration Number / GST Number if applicable] */}<br/>
              {/* [TODO: Add Legal Address] */}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
