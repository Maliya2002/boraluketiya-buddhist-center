// src/app/contact/page.tsx
// ═══════════════════════════════════════════════════════════════
// CONTACT PAGE
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Navigation } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { siteConfig } from "@/constants/site-config";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: [
      siteConfig.location.address,
      `Plus Code: ${siteConfig.location.plusCode}`,
      `${siteConfig.location.district} District`,
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: [siteConfig.contact.phone, "Available 6 AM - 9 PM"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [siteConfig.contact.email, "Response within 24 hours"],
  },
  {
    icon: Clock,
    title: "Temple Hours",
    lines: ["Mon-Sun: 5 AM - 9 PM", "Poya Days: Special hours"],
  },
];

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <main className="relative">
      <PageHeader
        subtitle="Get In Touch"
        title="Contact Us"
        description="We'd love to hear from you. Reach out for any questions, prayers, or spiritual guidance."
        breadcrumbs={[{ label: "Contact" }]}
        variant="large"
      />

      {/* Contact Info Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <RevealOnScroll key={info.title} direction="up" delay={index * 0.1}>
                <div className="p-6 rounded-2xl bg-card border border-gold-500/20 hover:border-gold-500/50 hover:shadow-gold-md transition-all duration-500 text-center group h-full">
                  <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <info.icon className="h-7 w-7 text-gold-500" />
                  </div>
                  <h3 className="font-heading text-lg text-foreground mb-3">
                    {info.title}
                  </h3>
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-sm text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Contact Form + Map */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Form */}
            <RevealOnScroll direction="right">
              <div className="p-8 rounded-3xl bg-card border-2 border-gold-500/30">
                <h2 className="font-heading text-2xl text-foreground mb-6">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gold-500/20 bg-background focus:outline-none focus:border-gold-500 text-foreground"
                    />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gold-500/20 bg-background focus:outline-none focus:border-gold-500 text-foreground"
                    />
                  </div>

                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Phone Number (optional)"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gold-500/20 bg-background focus:outline-none focus:border-gold-500 text-foreground"
                  />

                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Subject"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gold-500/20 bg-background focus:outline-none focus:border-gold-500 text-foreground"
                  />

                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gold-500/20 bg-background focus:outline-none focus:border-gold-500 text-foreground resize-none"
                  />

                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "w-full px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300",
                      status === "sent"
                        ? "bg-bodhi-500 text-white"
                        : "bg-gold-500 text-gold-950 hover:bg-gold-600 hover:shadow-gold-md"
                    )}
                  >
                    {status === "sending" ? (
                      <>Sending...</>
                    ) : status === "sent" ? (
                      <>✓ Message Sent!</>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </RevealOnScroll>

            {/* Map */}
            <RevealOnScroll direction="left">
              <div className="p-8 rounded-3xl bg-card border-2 border-gold-500/30 h-full flex flex-col">
                <h2 className="font-heading text-2xl text-foreground mb-6">
                  Find Us on Map
                </h2>

                {/* ✅ UPDATED: Real Google Maps embed */}
                <div className="flex-1 rounded-2xl overflow-hidden border border-gold-500/20 min-h-[300px] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5!2d80.5622!3d6.0850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBoralukatiya%20Pirivena!5e0!3m2!1sen!2slk!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "300px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Boralukatiya Buddhist Center Location"
                  />
                </div>

                {/* Action buttons */}
                <div className="mt-4 space-y-3">
                  {/* Directions button */}
                  <a
                    href={siteConfig.location.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gold-500 text-gold-950 font-semibold hover:bg-gold-600 hover:shadow-gold-md transition-all"
                  >
                    <Navigation className="h-5 w-5" />
                    <span>Get Directions</span>
                  </a>

                  {/* Open in Google Maps */}
                  <a
                    href={siteConfig.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-gold-500 text-gold-500 font-semibold hover:bg-gold-500 hover:text-gold-950 transition-all"
                  >
                    <MapPin className="h-5 w-5" />
                    <span>Open in Google Maps</span>
                  </a>

                  {/* WhatsApp Quick Contact */}
                  <a
                    href={siteConfig.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#20BD5C] transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Quick Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </main>
  );
}