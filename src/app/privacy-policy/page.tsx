// src/app/privacy-policy/page.tsx
// ═══════════════════════════════════════════════════════════════
// PRIVACY POLICY PAGE
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Boralukatiya Buddhist Center website.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative">
      <PageHeader
        subtitle="Legal"
        title="Privacy Policy"
        description="Your privacy is sacred to us. Learn how we protect your information."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="py-20">
        <div className="container-narrow">
          <RevealOnScroll direction="up">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                <strong>Last Updated:</strong> January 2025
              </p>

              <h2 className="font-heading text-2xl text-foreground mt-8 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We collect information you provide directly to us, such as when you subscribe to our newsletter, register for events, or make a donation. This may include your name, email address, phone number, and payment information.
              </p>

              <h2 className="font-heading text-2xl text-foreground mt-8 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Send you newsletters and event updates</li>
                <li>Process donations and event registrations</li>
                <li>Respond to your inquiries and provide support</li>
                <li>Improve our website and services</li>
              </ul>

              <h2 className="font-heading text-2xl text-foreground mt-8 mb-4">
                3. Information Sharing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We do not sell, trade, or rent your personal information to third parties. We may share information only when required by law or to protect our rights.
              </p>

              <h2 className="font-heading text-2xl text-foreground mt-8 mb-4">
                4. Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our website uses cookies to enhance your experience. You can control cookie preferences through your browser settings.
              </p>

              <h2 className="font-heading text-2xl text-foreground mt-8 mb-4">
                5. Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
              </p>

              <h2 className="font-heading text-2xl text-foreground mt-8 mb-4">
                6. Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                You have the right to access, correct, or delete your personal information. Contact us at info@boralukatiya.lk to exercise these rights.
              </p>

              <h2 className="font-heading text-2xl text-foreground mt-8 mb-4">
                7. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at info@boralukatiya.lk or visit our contact page.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}