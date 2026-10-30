import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/common/page-header";
import { upcomingEvents } from "@/data/events-data";

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return upcomingEvents.map(({ id }) => ({ id }));
}

async function getEvent(params: Props["params"]) {
  const { id } = await params;
  const event = upcomingEvents.find((item) => item.id === id);
  if (!event) notFound();
  return event;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const event = await getEvent(params);
  return { title: event.title.en, description: event.description.en };
}

export default async function EventDetailPage({ params }: Props) {
  const event = await getEvent(params);
  return (
    <main>
      <PageHeader title={event.title.en} subtitle="Event Details"
        breadcrumbs={[{ label: "Events", href: "/events" }, { label: event.title.en }]} />
      <article className="container-narrow py-16 space-y-6">
        <div className="relative aspect-video overflow-hidden rounded-3xl border border-gold-500/20">
          <Image src={event.image} alt="" fill sizes="(max-width: 768px) 100vw, 800px" className="object-cover" />
        </div>
        <dl className="grid sm:grid-cols-3 gap-6 rounded-2xl border border-gold-500/20 p-6">
          <div><dt className="font-semibold">Date</dt><dd><time dateTime={event.date}>{event.date}</time></dd></div>
          <div><dt className="font-semibold">Time (Sri Lanka)</dt><dd>{event.time}</dd></div>
          <div><dt className="font-semibold">Location</dt><dd>{event.location.en}</dd></div>
        </dl>
        <p className="text-body leading-relaxed">{event.description.en}</p>
        <div lang="si" className="sinhala space-y-4 rounded-2xl bg-gold-500/5 border border-gold-500/20 p-6 md:p-8">
          <h2 className="text-xl">{event.title.si}</h2>
          <p className="leading-relaxed">{event.description.si}</p>
        </div>
        <p className="text-sm text-muted-foreground">This listing refers to the date shown above. Contact the temple for current arrangements.</p>
        <div className="flex flex-wrap gap-6">
          <Link href="/events" className="text-gold-600 underline">Back to Events</Link>
          <Link href="/contact" className="text-gold-600 underline">Contact Us</Link>
        </div>
      </article>
    </main>
  );
}
