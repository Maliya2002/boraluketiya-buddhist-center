import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone, Users, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: "Temple Management",
  description: "Contact Boralukatiya Buddhist Center for committee and temple management enquiries.",
};

// Names and roles supplied by the temple representative.
const committees = [
  {
    name: "Dayaka Sabha",
    sinhala: "දායක සභාව",
    members: [
      { role: "President", sinhala: "සභාපති", name: "Mr. Hewavidana" },
      { role: "Secretary", sinhala: "ලේකම්", name: "Mr. Shantha" },
      { role: "Treasurer", sinhala: "භාණ්ඩාගාරික", name: "Mr. Sameera" },
    ],
  },
  {
    name: siteConfig.organizations.youthAssociation.name,
    sinhala: siteConfig.organizations.youthAssociation.nameSinhala,
    members: [
      { role: "President", sinhala: "සභාපති", name: "Mr. Thisara Jayasinghe" },
      { role: "Secretary", sinhala: "ලේකම්", name: "Mr. Janith Chamara" },
    ],
  },
];

export default function ManagementPage() {
  return (
    <main className="relative">
      <PageHeader
        subtitle="Serving Our Community"
        title="Temple Management"
        description="Get in touch with the temple for committee and management enquiries."
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Management" }]}
        variant="large"
      />
      <section className="py-16 md:py-20" aria-labelledby="committee-enquiries">
        <div className="container-custom max-w-6xl">
          <div className="mb-10 rounded-3xl border border-gold-500/25 bg-gradient-to-br from-gold-500/10 via-card to-card p-6 md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400">Temple contact</p>
                <h2 id="committee-enquiries" className="font-heading text-3xl text-foreground">Committee enquiries</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">For current committee member details or help reaching the right person, please contact the temple.</p>
                <p lang="si" className="sinhala mt-3 text-sm leading-relaxed text-muted-foreground">වත්මන් කමිටු සාමාජික තොරතුරු සහ විමසීම් සඳහා විහාරස්ථානය අමතන්න.</p>
              </div>
              <div className="flex shrink-0 flex-col gap-3">
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3 font-semibold text-gold-950 transition-colors hover:bg-gold-600">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.contact.phone}
                </a>
                <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gold-500/40 px-6 py-3 font-medium text-foreground transition-colors hover:bg-gold-500/10">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Contact temple on WhatsApp
                </a>
              </div>
            </div>
          </div>
          {committees.map((committee) => (
          <section key={committee.name} className="mt-12" aria-label={committee.name}>
            <h2 className="font-heading text-3xl text-foreground">{committee.name}</h2>
            <p lang="si" className="sinhala mb-6 mt-2 text-gold-600 dark:text-gold-400">{committee.sinhala}</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {committee.members.map((item, index) => (
              <RevealOnScroll key={item.role} direction="up" delay={index * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-gold-500/20 bg-card p-6 transition-colors hover:border-gold-500/50">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-500">
                    <Users className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-xl text-foreground">{item.name}</h3>
                  <p lang="si" className="sinhala mt-1 text-sm text-gold-600 dark:text-gold-400">{item.sinhala}</p>
                  <p className="mb-6 mt-4 text-sm text-muted-foreground">{item.role}</p>
                  <Link href={`/contact?subject=${encodeURIComponent(committee.name + " — " + item.role + " enquiry")}#contact-form`} className="mt-auto inline-flex min-h-11 items-center gap-2 border-t border-gold-500/15 pt-4 text-sm font-semibold text-gold-600 hover:text-gold-700 dark:text-gold-400" aria-label={`Enquire through the temple about the ${committee.name} ${item.role}`}>
                    Enquire through the temple <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          </section>
          ))}
        </div>
      </section>
    </main>
  );
}
