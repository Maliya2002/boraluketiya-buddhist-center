// src/app/about/management/page.tsx
// ═══════════════════════════════════════════════════════════════
// TEMPLE MANAGEMENT PAGE
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { User, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Temple Management",
  description: "Meet the dedicated committee members who manage Boralukatiya Buddhist Center.",
};

const committee = [
  {
    name: "Mr. John Silva",
    role: "President",
    email: "president@boralukatiya.lk",
    phone: "+94 77 XXX XXXX",
  },
  {
    name: "Mr. David Perera",
    role: "Vice President",
    email: "vp@boralukatiya.lk",
    phone: "+94 77 XXX XXXX",
  },
  {
    name: "Mrs. Anna Fernando",
    role: "Secretary",
    email: "secretary@boralukatiya.lk",
    phone: "+94 77 XXX XXXX",
  },
  {
    name: "Mr. Michael Bandara",
    role: "Treasurer",
    email: "treasurer@boralukatiya.lk",
    phone: "+94 77 XXX XXXX",
  },
  {
    name: "Mrs. Sarah Jayasinghe",
    role: "Cultural Coordinator",
    email: "cultural@boralukatiya.lk",
    phone: "+94 77 XXX XXXX",
  },
  {
    name: "Mr. Nimal Wickramasinghe",
    role: "Events Coordinator",
    email: "events@boralukatiya.lk",
    phone: "+94 77 XXX XXXX",
  },
];

export default function ManagementPage() {
  return (
    <main className="relative">
      <PageHeader
        subtitle="Our Leadership Team"
        title="Temple Management"
        description="Dedicated volunteers who selflessly serve to maintain and grow our temple community."
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Management" },
        ]}
        variant="large"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {committee.map((member, index) => (
              <RevealOnScroll key={member.email} direction="up" delay={index * 0.1}>
                <div className="p-6 rounded-2xl bg-card border border-gold-500/20 hover:border-gold-500/50 hover:shadow-gold-md transition-all duration-500 group">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-500 to-temple-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <User className="h-10 w-10 text-white" />
                  </div>

                  <h3 className="font-heading text-xl text-foreground text-center mb-1">
                    {member.name}
                  </h3>

                  <p className="text-gold-500 text-center text-sm mb-4">
                    {member.role}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-gold-500/20">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-xs text-muted-foreground hover:text-gold-500 transition-colors"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      <span className="truncate">{member.email}</span>
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-2 text-xs text-muted-foreground hover:text-gold-500 transition-colors"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      <span>{member.phone}</span>
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}