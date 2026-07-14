// src/app/faq/page.tsx
// ═══════════════════════════════════════════════════════════════
// FAQ PAGE
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What are the temple visiting hours?",
    answer: "The temple is open daily from 5:00 AM to 9:00 PM. On Poya days, we have extended hours with special ceremonies.",
  },
  {
    question: "How can I enroll my child in the Dhamma School?",
    answer: "You can enroll your child (ages 5-16) by visiting the temple on Sundays between 8 AM and 12 PM, or contacting our Dhamma School coordinator at school@boralukatiya.lk.",
  },
  {
    question: "Are there meditation classes for beginners?",
    answer: "Yes! We offer beginner meditation classes every Saturday morning from 6:30 AM to 8:00 AM. No prior experience required.",
  },
  {
    question: "How can I make a donation?",
    answer: "You can donate online through our secure donation page, via bank transfer, LANKAQR code, or in person at the temple. Tax-deductible receipts are provided.",
  },
  {
    question: "Can I volunteer at the temple?",
    answer: "Absolutely! We welcome volunteers for various programs including Dansal, blood donation drives, tree planting, and event organization. Contact our Youth Association.",
  },
  {
    question: "Do you offer online sermons?",
    answer: "Yes, we broadcast live sermons on YouTube and Facebook every Poya day and during special events. Recorded sermons are also available on our platforms.",
  },
  {
    question: "How can I organize a merit-making ceremony?",
    answer: "You can book almsgiving ceremonies, blessing ceremonies, or memorial services by contacting the temple office at least 2 weeks in advance.",
  },
  {
    question: "Is parking available?",
    answer: "Yes, we have ample parking space available for visitors. Additional parking is arranged for major events and Poya days.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <main className="relative">
      <PageHeader
        subtitle="Common Questions"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our temple, services, and community programs."
        breadcrumbs={[{ label: "FAQ" }]}
        variant="large"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <RevealOnScroll key={index} direction="up" delay={index * 0.05}>
                <div className="rounded-2xl bg-card border-2 border-gold-500/20 overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gold-500/5 transition-colors"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <HelpCircle className="h-5 w-5 text-gold-500 mt-0.5 flex-shrink-0" />
                      <span className="font-heading text-lg text-foreground">
                        {faq.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4"
                    >
                      <ChevronDown className="h-5 w-5 text-gold-500" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pl-16 text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Still have questions */}
          <RevealOnScroll direction="up" delay={0.5}>
            <div className="max-w-3xl mx-auto mt-12 p-8 rounded-3xl bg-gradient-to-br from-gold-500/10 to-temple-500/10 border-2 border-gold-500/20 text-center">
              <h3 className="font-heading text-2xl text-foreground mb-3">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                We&apos;re here to help. Reach out to us anytime.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-500 text-gold-950 font-semibold hover:bg-gold-600 hover:shadow-gold-md transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}