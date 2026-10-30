import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/common/page-header";
import { newsArticles } from "@/data/news-data";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return newsArticles.map(({ slug }) => ({ slug }));
}

async function getArticle(params: Props["params"]) {
  const { slug } = await params;
  const article = newsArticles.find((item) => item.slug === slug);
  if (!article) notFound();
  return article;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticle(params);
  return { title: article.title.en, description: article.excerpt.en };
}

export default async function NewsDetailPage({ params }: Props) {
  const article = await getArticle(params);
  return (
    <main>
      <PageHeader title={article.title.en} subtitle="News Update"
        breadcrumbs={[{ label: "News", href: "/news" }, { label: article.title.en }]} />
      <article className="container-narrow py-16 space-y-6">
        <div className="relative aspect-video overflow-hidden rounded-3xl border border-gold-500/20">
          <Image src={article.image} alt="" fill sizes="(max-width: 768px) 100vw, 800px" className="object-cover" />
        </div>
        <p className="text-sm text-muted-foreground">
          {article.author} · <time dateTime={article.publishedAt}>{article.publishedAt}</time>
        </p>
        <p className="text-body leading-relaxed">{article.excerpt.en}</p>
        <div lang="si" className="sinhala space-y-4 rounded-2xl bg-gold-500/5 border border-gold-500/20 p-6 md:p-8">
          <h2 className="text-xl">{article.title.si}</h2>
          <p className="leading-relaxed">{article.excerpt.si}</p>
        </div>
        <Link href="/news" className="inline-block text-gold-600 underline">Back to News</Link>
      </article>
    </main>
  );
}
