// src/components/sections/newsletter-section.tsx
// ═══════════════════════════════════════════════════════════════
// NEWSLETTER SECTION
// Email subscription for updates
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { subscribeToNewsletter } from "@/services/newsletter.service";
interface NewsletterSectionProps {
  className?: string;
  language?: "en" | "si";
}

export function NewsletterSection({
  className,
  language = "en",
}: NewsletterSectionProps) {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "loading" | "success">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const result = await subscribeToNewsletter(email);

      if (result.success) {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        alert(result.error || "Subscription failed");
        setStatus("idle");
      }
    } catch (error) {
      console.error("Newsletter error:", error);
      setStatus("idle");
    }
  };

  return (
    <section
      className={cn(
        "relative py-20 md:py-28 overflow-hidden",
        className
      )}
      aria-label="Newsletter signup"
    >
      <div className="container-custom relative">
        <RevealOnScroll direction="up">
          <div
            className={cn(
              "relative max-w-4xl mx-auto",
              "p-8 md:p-12 lg:p-16 rounded-3xl overflow-hidden",
              "bg-gradient-to-br from-gold-500/10 via-temple-500/5 to-gold-500/10",
              "border-2 border-gold-500/20"
            )}
          >
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />

            <div className="relative text-center">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gold-500 mb-6 shadow-gold-md"
              >
                <Mail className="h-8 w-8 text-gold-950" />
              </motion.div>

              {/* Heading */}
              <h2 className="text-h2 text-foreground mb-4 text-balance">
                Join Our{" "}
                <span className="text-gradient-gold">Sacred Community</span>
              </h2>

              <p className="text-body text-muted-foreground max-w-2xl mx-auto mb-8">
                Subscribe to receive updates on Poya days, events, Buddhist
                teachings, and community activities.
              </p>

              {/* Form */}
              {status !== "success" ? (
                <form
                  onSubmit={handleSubmit}
                  className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === "loading"}
                    placeholder="your.email@example.com"
                    className={cn(
                      "flex-1 px-6 py-4 rounded-full",
                      "bg-background border-2 border-gold-500/20",
                      "focus:outline-none focus:border-gold-500",
                      "text-foreground placeholder:text-muted-foreground",
                      "transition-all duration-300",
                      "disabled:opacity-50"
                    )}
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={cn(
                      "inline-flex items-center justify-center gap-2",
                      "px-8 py-4 rounded-full",
                      "bg-gold-500 text-gold-950 font-semibold",
                      "hover:bg-gold-600 hover:shadow-gold-md",
                      "transition-all duration-300",
                      "active:scale-95",
                      "disabled:opacity-50 disabled:cursor-not-allowed"
                    )}
                  >
                    {status === "loading" ? (
                      <>
                        <div className="h-4 w-4 border-2 border-gold-950 border-t-transparent rounded-full animate-spin" />
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-bodhi-500/20 border-2 border-bodhi-500 text-bodhi-600"
                >
                  <CheckCircle className="h-6 w-6" />
                  <span className="font-semibold">
                    Thank you for subscribing!
                  </span>
                </motion.div>
              )}

              <p className="text-xs text-muted-foreground mt-6">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}