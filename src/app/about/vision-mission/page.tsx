// src/app/about/vision-mission/page.tsx
// ═══════════════════════════════════════════════════════════════
// VISION & MISSION PAGE
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import { Eye, Target, Heart, Users } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";

export const metadata: Metadata = {
  title: "Vision & Mission",
  description: "Our vision and mission at Boralukatiya Buddhist Center - guiding principles for spiritual and community service.",
};

const visionMission = [
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be a leading spiritual center that preserves the pure teachings of the Buddha, nurtures compassionate individuals, and creates a peaceful community where wisdom flourishes.",
    color: "gold",
  },
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide authentic Buddhist education, meditation guidance, and community services that transform lives through the timeless wisdom of the Dhamma.",
    color: "temple",
  },
];

const coreValues = [
  {
    icon: Heart,
    title: "Compassion",
    description: "Extending loving-kindness to all beings, following the Buddha's teachings of universal compassion.",
  },
  {
    icon: Eye,
    title: "Wisdom",
    description: "Cultivating deep understanding through meditation, study, and mindful living.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a supportive spiritual family united in the pursuit of enlightenment.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Striving for excellence in all our services, teachings, and community programs.",
  },
];

export default function VisionMissionPage() {
  return (
    <main className="relative">
      <PageHeader
        subtitle="Guiding Principles"
        title="Vision & Mission"
        description="The sacred principles that guide our journey and shape our service to the Buddhist community."
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Vision & Mission" },
        ]}
        variant="large"
      />

      {/* Vision & Mission Cards */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {visionMission.map((item, index) => (
              <RevealOnScroll key={item.title} direction={index === 0 ? "right" : "left"}>
                <div className="p-8 md:p-10 rounded-3xl bg-card border-2 border-gold-500/20 hover:border-gold-500/50 transition-all duration-500 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center mb-6">
                    <item.icon className="h-8 w-8 text-gold-500" />
                  </div>

                  <h2 className="font-heading text-3xl text-foreground mb-4">
                    {item.title}
                  </h2>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-gold-500/5 to-temple-500/5">
        <div className="container-custom">
          <div className="text-center mb-16">
            <RevealOnScroll direction="up">
              <p className="text-subtitle text-gold-500 mb-4">Core Values</p>
              <h2 className="text-h2 text-foreground mb-6">
                The <span className="text-gradient-gold">Foundation</span> of Our Service
              </h2>
              <p className="text-body text-muted-foreground max-w-2xl mx-auto">
                Four pillars that guide every decision, teaching, and interaction at our temple.
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <RevealOnScroll key={value.title} direction="up" delay={index * 0.1}>
                <div className="p-6 rounded-2xl bg-card border border-gold-500/20 hover:border-gold-500/50 hover:shadow-gold-md transition-all duration-500 h-full text-center group">
                  <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="h-7 w-7 text-gold-500" />
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}