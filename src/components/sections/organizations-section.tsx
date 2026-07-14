// src/components/sections/organizations-section.tsx
// ═══════════════════════════════════════════════════════════════
// ORGANIZATIONS SECTION
// Three organization cards with hover effects
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, GraduationCap, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  StaggerReveal,
  StaggerItem,
} from "@/components/animations/reveal-on-scroll";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { siteConfig } from "@/constants/site-config";

interface OrganizationsSectionProps {
  className?: string;
  language?: "en" | "si";
}

const organizationsData = [
  {
    key: "temple" as const,
    icon: Building2,
    href: "/about",
    gradient: "from-gold-500/20 via-gold-500/5 to-transparent",
    borderColor: "border-gold-500/30",
    hoverBorder: "hover:border-gold-500/60",
  },
  {
    key: "dhammaSchool" as const,
    icon: GraduationCap,
    href: "/dhamma-school",
    gradient: "from-temple-500/20 via-temple-500/5 to-transparent",
    borderColor: "border-temple-500/30",
    hoverBorder: "hover:border-temple-500/60",
  },
  {
    key: "youthAssociation" as const,
    icon: Users,
    href: "/youth-association",
    gradient: "from-bodhi-500/20 via-bodhi-500/5 to-transparent",
    borderColor: "border-bodhi-500/30",
    hoverBorder: "hover:border-bodhi-500/60",
  },
];

export function OrganizationsSection({
  className,
  language = "en",
}: OrganizationsSectionProps) {
  return (
    <section
      className={cn(
        "relative py-20 md:py-28 lg:py-32 overflow-hidden",
        className
      )}
      aria-label="Our organizations"
    >
      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16">
          <RevealOnScroll direction="up">
            <p className="text-subtitle text-gold-500 mb-4">
              United in Service
            </p>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="text-h2 text-foreground mb-6 text-balance">
              Three <span className="text-gradient-gold">Organizations</span>,
              One Mission
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.2}>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Working together to preserve, teach, and share the timeless
              wisdom of the Buddha with our community.
            </p>
          </RevealOnScroll>
        </div>

        {/* Cards */}
        <StaggerReveal className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {organizationsData.map((org) => {
            const orgInfo = siteConfig.organizations[org.key];
            const Icon = org.icon;

            return (
              <StaggerItem key={org.key}>
                <Link href={org.href}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "group relative p-8 h-full rounded-3xl overflow-hidden",
                      "border-2 bg-gradient-to-br",
                      org.gradient,
                      org.borderColor,
                      org.hoverBorder,
                      "transition-all duration-500 cursor-pointer",
                      "hover:shadow-2xl hover:shadow-gold-500/20"
                    )}
                  >
                    {/* Background pattern */}
                    <div
                      className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500"
                      style={{
                        backgroundImage: `radial-gradient(circle at 20% 20%, ${orgInfo.color} 1px, transparent 1px)`,
                        backgroundSize: "30px 30px",
                      }}
                    />

                    {/* Icon */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundColor: `${orgInfo.color}20`,
                        boxShadow: `0 0 40px ${orgInfo.color}30`,
                      }}
                    >
                      <Icon
                        className="h-8 w-8"
                        style={{ color: orgInfo.color }}
                      />
                    </div>

                    {/* Name */}
                    <h3 className="font-heading text-xl md:text-2xl font-medium text-foreground mb-2 group-hover:text-gold-500 transition-colors duration-300">
                      {orgInfo.name}
                    </h3>

                    {/* Sinhala name */}
                    <p className="sinhala text-sm text-muted-foreground mb-4">
                      {orgInfo.nameSinhala}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {orgInfo.description}
                    </p>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 text-sm font-medium text-gold-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>

                    {/* Corner accent */}
                    <div
                      className="absolute top-4 right-4 w-2 h-2 rounded-full transition-transform duration-500 group-hover:scale-150"
                      style={{ backgroundColor: orgInfo.color }}
                    />
                  </motion.div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}