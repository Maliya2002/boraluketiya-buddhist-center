// src/components/layout/footer/footer-social.tsx
// ═══════════════════════════════════════════════════════════════
// FOOTER SOCIAL LINKS
// Using react-icons for brand icons
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/constants/site-config";

interface FooterSocialProps {
  className?: string;
}

const socialLinks = [
  {
    name: "Facebook",
    href: siteConfig.social.facebook,
    icon: FaFacebookF,
    color: "hover:bg-[#1877F2]",
  },
  {
    name: "YouTube",
    href: siteConfig.social.youtube,
    icon: FaYoutube,
    color: "hover:bg-[#FF0000]",
  },
  {
    name: "Instagram",
    href: siteConfig.social.instagram,
    icon: FaInstagram,
    color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCB045]",
  },
  {
    name: "WhatsApp",
    href: siteConfig.social.whatsapp,
    icon: FaWhatsapp,
    color: "hover:bg-[#25D366]",
  },
];

export function FooterSocial({ className }: FooterSocialProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "h-10 w-10 rounded-full flex items-center justify-center",
            "bg-gold-500/10 border border-gold-500/20",
            "text-gold-500 hover:text-white",
            "hover:scale-110 hover:border-transparent",
            "transition-all duration-300",
            social.color
          )}
          aria-label={social.name}
        >
          <social.icon className="h-4 w-4" />
        </Link>
      ))}
    </div>
  );
}