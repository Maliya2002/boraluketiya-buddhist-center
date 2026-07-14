// src/app/donate/page.tsx
// ═══════════════════════════════════════════════════════════════
// DONATE PAGE
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Heart, CreditCard, Building2, QrCode, Users, BookOpen, Home } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { cn } from "@/lib/utils";

const donationAmounts = [500, 1000, 2500, 5000, 10000];

const donationCauses = [
  {
    icon: BookOpen,
    title: "Dhamma School Education",
    description: "Support Buddhist education for children",
    color: "gold",
  },
  {
    icon: Building2,
    title: "Temple Maintenance",
    description: "Help preserve our sacred temple",
    color: "temple",
  },
  {
    icon: Users,
    title: "Community Programs",
    description: "Fund community service initiatives",
    color: "bodhi",
  },
  {
    icon: Home,
    title: "Building Fund",
    description: "Contribute to construction projects",
    color: "lotus",
  },
];

const paymentMethods = [
  { icon: CreditCard, name: "Credit/Debit Card", description: "Visa, MasterCard, Amex" },
  { icon: Building2, name: "Bank Transfer", description: "Direct to temple account" },
  { icon: QrCode, name: "QR Code / LANKAQR", description: "Scan and pay instantly" },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = React.useState<number | null>(null);
  const [customAmount, setCustomAmount] = React.useState("");
  const [selectedCause, setSelectedCause] = React.useState("Dhamma School Education");

  return (
    <main className="relative">
      <PageHeader
        subtitle="Support Our Mission"
        title="Make a Donation"
        description="Your generous contribution helps us preserve Buddhist teachings and serve our community."
        breadcrumbs={[{ label: "Donate" }]}
        variant="large"
      />

      {/* Donation form */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Amount Selection */}
            <RevealOnScroll direction="up">
              <div className="p-8 rounded-3xl bg-card border-2 border-gold-500/30 mb-8">
                <h2 className="font-heading text-2xl text-foreground mb-6">
                  Choose Amount (LKR)
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount("");
                      }}
                      className={cn(
                        "px-4 py-3 rounded-xl border-2 font-semibold transition-all duration-300",
                        selectedAmount === amount
                          ? "bg-gold-500 border-gold-500 text-gold-950 shadow-gold-md"
                          : "border-gold-500/30 text-foreground hover:border-gold-500 hover:bg-gold-500/10"
                      )}
                    >
                      Rs. {amount.toLocaleString()}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder="Or enter custom amount"
                    className="w-full px-6 py-4 rounded-xl border-2 border-gold-500/30 bg-background focus:outline-none focus:border-gold-500 text-foreground"
                  />
                </div>
              </div>
            </RevealOnScroll>

            {/* Donation Cause */}
            <RevealOnScroll direction="up" delay={0.1}>
              <div className="mb-8">
                <h2 className="font-heading text-2xl text-foreground mb-6">
                  Select Cause
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  {donationCauses.map((cause) => (
                    <button
                      key={cause.title}
                      onClick={() => setSelectedCause(cause.title)}
                      className={cn(
                        "p-6 rounded-2xl border-2 text-left transition-all duration-300",
                        selectedCause === cause.title
                          ? "border-gold-500 bg-gold-500/10 shadow-gold-md"
                          : "border-gold-500/20 hover:border-gold-500/50 hover:bg-gold-500/5"
                      )}
                    >
                      <cause.icon className="h-8 w-8 text-gold-500 mb-3" />
                      <h3 className="font-heading text-lg text-foreground mb-1">
                        {cause.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {cause.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Payment Methods */}
            <RevealOnScroll direction="up" delay={0.2}>
              <div className="mb-8">
                <h2 className="font-heading text-2xl text-foreground mb-6">
                  Payment Method
                </h2>

                <div className="grid sm:grid-cols-3 gap-4">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.name}
                      className="p-6 rounded-2xl border-2 border-gold-500/20 hover:border-gold-500/50 transition-all duration-300 text-center"
                    >
                      <method.icon className="h-10 w-10 text-gold-500 mx-auto mb-3" />
                      <h3 className="font-semibold text-foreground text-sm mb-1">
                        {method.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {method.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Submit Button */}
            <RevealOnScroll direction="up" delay={0.3}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-gold-950 font-bold text-lg shadow-gold-lg hover:shadow-gold-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Heart className="h-5 w-5 fill-current" />
                <span>
                  Donate {selectedAmount ? `Rs. ${selectedAmount.toLocaleString()}` : customAmount ? `Rs. ${customAmount}` : "Now"}
                </span>
              </motion.button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                🔒 Secure donation · Tax-deductible receipt provided
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </main>
  );
}