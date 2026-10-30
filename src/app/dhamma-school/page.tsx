// src/app/dhamma-school/page.tsx
// ═══════════════════════════════════════════════════════════════
// DHAMMA SCHOOL PAGE
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/common/page-header";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { BookOpen, Users, Award, Calendar, GraduationCap, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Dhamma School",
  description: "Siri Dhammasiddhi Dhamma School - Buddhist education for children and youth.",
};

const features = [
  {
    icon: BookOpen,
    title: "Buddhist Studies",
    description: "Comprehensive curriculum covering Dhamma, Pali, and Buddhist history",
  },
  {
    icon: Users,
    title: "Qualified Teachers",
    description: "Experienced educators dedicated to nurturing young Buddhist minds",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Government-recognized examinations and certifications",
  },
  {
    icon: Calendar,
    title: "Regular Classes",
    description: "Weekly classes on Sundays with special sessions on Poya days",
  },
];

const grades = [
  { grade: "1", name: "Grade 1", students: 45, ageRange: "5-6 years" },
  { grade: "2", name: "Grade 2", students: 42, ageRange: "6-7 years" },
  { grade: "3", name: "Grade 3", students: 40, ageRange: "7-8 years" },
  { grade: "4", name: "Grade 4", students: 38, ageRange: "8-9 years" },
  { grade: "5", name: "Grade 5", students: 35, ageRange: "9-10 years" },
  { grade: "6", name: "Grade 6", students: 32, ageRange: "10-11 years" },
  { grade: "7", name: "Grade 7", students: 30, ageRange: "11-12 years" },
  { grade: "8", name: "Grade 8", students: 28, ageRange: "12-13 years" },
  { grade: "9", name: "Grade 9", students: 25, ageRange: "13-14 years" },
  { grade: "10", name: "Grade 10", students: 22, ageRange: "14-15 years" },
  { grade: "11", name: "Grade 11", students: 20, ageRange: "15-16 years" },
];

export default function DhammaSchoolPage() {
  return (
    <main className="relative">
      <PageHeader
        subtitle="Buddhist Education"
        title="Siri Dhammasiddhi Dhamma School"
        description="Providing quality Buddhist education to nurture the next generation of enlightened minds."
        breadcrumbs={[{ label: "Dhamma School" }]}
        variant="large"
      />

      {/* Features */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <RevealOnScroll direction="up">
              <h2 className="text-h2 text-foreground mb-6">
                Why Choose <span className="text-gradient-gold">Our School</span>
              </h2>
            </RevealOnScroll>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <RevealOnScroll key={feature.title} direction="up" delay={index * 0.1}>
                <div className="p-6 rounded-2xl bg-card border border-gold-500/20 hover:border-gold-500/50 transition-all duration-500 text-center group h-full">
                  <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-7 w-7 text-gold-500" />
                  </div>
                  <h3 className="font-heading text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Grades */}
      <section id="classes" className="scroll-mt-24 py-20 bg-gradient-to-br from-gold-500/5 to-transparent">
        <div className="container-custom">
          <div className="text-center mb-16">
            <RevealOnScroll direction="up">
              <p className="text-subtitle text-gold-500 mb-4">Grade Structure</p>
              <h2 className="text-h2 text-foreground mb-6">
                Classes from <span className="text-gradient-gold">Grade 1 to 11</span>
              </h2>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {grades.map((grade, index) => (
              <RevealOnScroll key={grade.grade} direction="up" delay={index * 0.05}>
                <div className="p-4 rounded-xl bg-card border border-gold-500/20 hover:border-gold-500 hover:shadow-gold-md transition-all duration-300 text-center group cursor-pointer">
                  <div className="font-heading text-3xl text-gradient-gold mb-2 group-hover:scale-110 transition-transform">
                    {grade.grade}
                  </div>
                  <p className="text-xs font-semibold text-foreground mb-1">
                    {grade.name}
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">
                    {grade.ageRange}
                  </p>
                  <p className="text-xs text-gold-500 font-semibold">
                    {grade.students} students
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-10">
            <p className="text-subtitle text-gold-500 mb-3">Here to Help</p>
            <h2 className="text-h2">Support for Your <span className="text-gradient-gold">Learning Journey</span></h2>
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
            <Link href="/contact" className="group p-8 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 text-gold-950 hover:shadow-gold-xl transition-shadow">
              <BookOpen className="h-10 w-10 mb-6" />
              <h3 className="font-heading text-2xl mb-3">Study Resources</h3>
              <p className="mb-6 leading-relaxed">Ask the school about study materials, past papers and class timetables.</p>
              <span className="inline-flex items-center gap-2 font-semibold">Ask About Resources <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
            </Link>
            <Link href="/contact" className="group p-8 rounded-2xl bg-card border-2 border-gold-500/30 hover:border-gold-500 transition-colors">
              <GraduationCap className="h-10 w-10 mb-6 text-gold-500" />
              <h3 className="font-heading text-2xl mb-3">Exam Enquiries</h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">Contact the school for information about examinations and results.</p>
              <span className="inline-flex items-center gap-2 font-semibold text-gold-600 dark:text-gold-400">Contact the School <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
