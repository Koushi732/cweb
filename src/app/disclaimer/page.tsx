import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | SimpleIn Solutions",
  description: "General disclaimer for SimpleIn Solutions website and services.",
  alternates: {
    canonical: "https://simpleinsolutions.com/disclaimer",
  },
  openGraph: {
    title: "Disclaimer | SimpleIn Solutions",
    description: "General disclaimer for SimpleIn Solutions website and services.",
    url: "https://simpleinsolutions.com/disclaimer",
    type: "website",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground mb-6">
            Disclaimer
          </h1>
          <p className="text-lg text-muted-foreground font-light">
            Last Updated: {/* [TODO: Add Date] */}
          </p>
        </div>

        <div className="space-y-12 text-foreground font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">1. General Information</h2>
            <p className="mb-4 text-muted-foreground">
              The information provided by SimpleIn Solutions on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">2. No Professional Advice</h2>
            <p className="mb-4 text-muted-foreground">
              The website cannot and does not contain legal, financial, or specific professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">3. Accuracy of Information</h2>
            <p className="mb-4 text-muted-foreground">
              {/* [TODO: Add disclaimer about potential errors, omissions, or outdated information] */}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">4. Third-Party Links</h2>
            <p className="mb-4 text-muted-foreground">
              The site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">5. Limitation of Liability</h2>
            <p className="mb-4 text-muted-foreground">
              {/* [TODO: Add specific limitations of liability concerning website usage and information reliance] */}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">6. Contact</h2>
            <p className="mb-4 text-muted-foreground">
              If you have any feedback, comments, requests for technical support or other inquiries, please contact us by email: info@simpleinsolutions.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
