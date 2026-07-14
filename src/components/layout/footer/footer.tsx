// src/components/layout/footer/footer.tsx
// ═══════════════════════════════════════════════════════════════
// PREMIUM FOOTER
// Complete footer with sitemap, contact, and social links
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/constants/site-config";
import { footerNavGroups } from "@/constants/navigation";
import { NavbarLogo } from "@/components/common/logo";
import { FooterSocial } from "./footer-social";

interface FooterProps {
  className?: string;
  language?: "en" | "si";
}

export function Footer({ className, language = "en" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "relative pt-20 pb-8 overflow-hidden",
        "bg-gradient-to-b from-background to-cream-100 dark:to-cream-900/10",
        "border-t border-gold-500/10",
        className
      )}
      aria-label="Site footer"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Top section */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-4 space-y-6">
            <NavbarLogo size="lg" linked={true} />

            <p className="text-body text-muted-foreground leading-relaxed">
              A sacred sanctuary of peace, wisdom, and compassion in the heart of Kamburupitiya, Sri Lanka. Home to three organizations serving the Buddhist community.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
             <a
  href={siteConfig.location.googleMapsUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-start gap-3 text-sm text-muted-foreground hover:text-gold-500 transition-colors group"
>
  <MapPin className="h-5 w-5 text-gold-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
  <span>{siteConfig.location.address}</span>
</a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-gold-500 flex-shrink-0" />
                <Link
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-gold-500 transition-colors"
                >
                  {siteConfig.contact.phone}
                </Link>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-gold-500 flex-shrink-0" />
                <Link
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-gold-500 transition-colors"
                >
                  {siteConfig.contact.email}
                </Link>
              </div>
            </div>

            {/* Social */}
            <FooterSocial />
          </div>

          {/* Nav groups */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerNavGroups.map((group) => (
              <div key={group.title.en}>
                <h3
                  className={cn(
                    "font-heading text-lg font-semibold text-foreground mb-4",
                    language === "si" && "sinhala"
                  )}
                >
                  {group.title[language]}
                </h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "text-sm text-muted-foreground",
                          "hover:text-gold-500 transition-colors duration-200",
                          "flex items-center gap-2 group",
                          language === "si" && "sinhala"
                        )}
                      >
                        <span className="h-1 w-1 rounded-full bg-gold-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.label[language]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Extra links */}
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                Get Involved
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/donate"
                    className="text-sm text-muted-foreground hover:text-gold-500 transition-colors flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Donate
                  </Link>
                </li>
                <li>
                  <Link
                    href="/youth-association/volunteer"
                    className="text-sm text-muted-foreground hover:text-gold-500 transition-colors flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-sm text-muted-foreground hover:text-gold-500 transition-colors flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Attend Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-gold-500 transition-colors flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
          <div className="text-gold-500 text-2xl">❖</div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold-500/30 to-transparent" />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gold-500/10">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-lotus-500 fill-current" />
            <span>for the Buddhist community</span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-muted-foreground hover:text-gold-500 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-gold-500 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}