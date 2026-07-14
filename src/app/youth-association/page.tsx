// src/app/youth-association/page.tsx
// ═══════════════════════════════════════════════════════════════
// YOUTH ASSOCIATION PAGE
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/common/page-header";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { Users, Heart, TreePine, Utensils, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Dahami Tharuna Bauddha Kamituwa",
  description: "Youth Buddhist Association - Community service, volunteer programs, and youth activities.",
};

const projects = [
  {
    icon: Heart,
    title: "Blood Donation Drives",
    description: "Regular blood donation campaigns to help save lives in our community.",
    stats: "500+ donors",
  },
  {
    icon: Utensils,
    title: "Dansal (Free Food)",
    description: "Traditional Vesak dansal serving free food to community members and travelers.",
    stats: "1000+ served",
  },
  {
    icon: TreePine,
    title: "Environmental Projects",
    description: "Tree planting, temple grounds maintenance, and environmental awareness programs.",
    stats: "200+ trees planted",
  },
  {
    icon: Users,
    title: "Community Service",
    description: "Helping elderly, cleaning public areas, and organizing charity programs.",
    stats: "1000+ hours",
  },
];

export default function YouthAssociationPage() {
  return (
    <main className="relative">
      <PageHeader
        subtitle="Youth in Service"
        title="Dahami Tharuna Bauddha Kamituwa"
        description="Empowering youth through Buddhist values and community service since 1975."
        breadcrumbs={[{ label: "Youth Association" }]}
        variant="large"
      />

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-bodhi-500/5 to-transparent">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <RevealOnScroll direction="up">
              <div>
                <div className="font-heading text-4xl text-gradient-gold mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Years of Service</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={0.1}>
              <div>
                <div className="font-heading text-4xl text-gradient-gold mb-2">150+</div>
                <p className="text-sm text-muted-foreground">Active Members</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={0.2}>
              <div>
                <div className="font-heading text-4xl text-gradient-gold mb-2">1000+</div>
                <p className="text-sm text-muted-foreground">Volunteer Hours</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={0.3}>
              <div>
                <div className="font-heading text-4xl text-gradient-gold mb-2">30+</div>
                <p className="text-sm text-muted-foreground">Annual Projects</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <RevealOnScroll direction="up">
              <h2 className="text-h2 text-foreground mb-6">
                Our <span className="text-gradient-gold">Community Projects</span>
              </h2>
            </RevealOnScroll>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <RevealOnScroll key={project.title} direction="up" delay={index * 0.1}>
                <div className="p-8 rounded-2xl bg-card border border-gold-500/20 hover:border-gold-500/50 hover:shadow-gold-md transition-all duration-500 group h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-bodhi-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <project.icon className="h-7 w-7 text-bodhi-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {project.description}
                      </p>
                      <p className="text-sm font-semibold text-bodhi-500">
                        {project.stats}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-gradient-to-br from-bodhi-500/10 to-gold-500/10">
        <div className="container-custom">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <Award className="h-16 w-16 text-gold-500 mx-auto mb-6" />
              <h2 className="text-h2 text-foreground mb-4">
                Join Our <span className="text-gradient-gold">Youth Community</span>
              </h2>
              <p className="text-body text-muted-foreground mb-8">
                Be part of something meaningful. Volunteer, learn, and grow with like-minded youth committed to Buddhist values and community service.
              </p>
              <Link
                href="/youth-association/volunteer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold-500 text-gold-950 font-semibold hover:bg-gold-600 hover:shadow-gold-md transition-all duration-300 group"
              >
                <span>Become a Volunteer</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}