// src/app/admin/news/new/page.tsx
// ═══════════════════════════════════════════════════════════════
// CREATE NEW NEWS ARTICLE
// Admin page for creating news
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";

export default function NewNewsPage() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    titleEn: "",
    titleSi: "",
    excerptEn: "",
    excerptSi: "",
    contentEn: "",
    contentSi: "",
    category: "announcement",
    image: "",
    author: "",
    featured: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from("news").insert([
        {
          title: {
            en: formData.titleEn,
            si: formData.titleSi,
          },
          excerpt: {
            en: formData.excerptEn,
            si: formData.excerptSi,
          },
          content: {
            en: formData.contentEn,
            si: formData.contentSi,
          },
          category: formData.category,
          image: formData.image,
          author: formData.author,
          featured: formData.featured,
          status: "published",
        },
      ]);

      if (error) {
        alert("Error: " + error.message);
      } else {
        alert("News article created successfully!");
        router.push("/admin/news");
      }
    } catch (error) {
      alert("An error occurred");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/admin/news"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold-500 mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to News
        </Link>

        <h1 className="text-3xl font-heading font-light text-foreground mb-2">
          Create New Article
        </h1>
        <p className="text-muted-foreground">Add a new news article</p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 p-8 bg-card rounded-2xl border-2 border-gold-500/20"
      >
        {/* Title */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Title (English) *
            </label>
            <input
              type="text"
              required
              value={formData.titleEn}
              onChange={(e) =>
                setFormData({ ...formData, titleEn: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border-2 border-gold-500/20 bg-background focus:outline-none focus:border-gold-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Title (Sinhala) *
            </label>
            <input
              type="text"
              required
              value={formData.titleSi}
              onChange={(e) =>
                setFormData({ ...formData, titleSi: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border-2 border-gold-500/20 bg-background focus:outline-none focus:border-gold-500 sinhala"
            />
          </div>
        </div>

        {/* Excerpt */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Excerpt (English) *
            </label>
            <textarea
              required
              rows={3}
              value={formData.excerptEn}
              onChange={(e) =>
                setFormData({ ...formData, excerptEn: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border-2 border-gold-500/20 bg-background focus:outline-none focus:border-gold-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Excerpt (Sinhala) *
            </label>
            <textarea
              required
              rows={3}
              value={formData.excerptSi}
              onChange={(e) =>
                setFormData({ ...formData, excerptSi: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border-2 border-gold-500/20 bg-background focus:outline-none focus:border-gold-500 resize-none sinhala"
            />
          </div>
        </div>

        {/* Category & Author */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Category *
            </label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border-2 border-gold-500/20 bg-background focus:outline-none focus:border-gold-500"
            >
              <option value="announcement">Announcement</option>
              <option value="event">Event</option>
              <option value="dhamma">Dhamma</option>
              <option value="achievement">Achievement</option>
              <option value="notice">Notice</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Author *
            </label>
            <input
              type="text"
              required
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
              placeholder="Temple Committee"
              className="w-full px-4 py-3 rounded-xl border-2 border-gold-500/20 bg-background focus:outline-none focus:border-gold-500"
            />
          </div>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Image URL *
          </label>
          <input
            type="url"
            required
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
            placeholder="https://res.cloudinary.com/..."
            className="w-full px-4 py-3 rounded-xl border-2 border-gold-500/20 bg-background focus:outline-none focus:border-gold-500"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Upload image to Cloudinary and paste URL here
          </p>
        </div>

        {/* Featured */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="featured"
            checked={formData.featured}
            onChange={(e) =>
              setFormData({ ...formData, featured: e.target.checked })
            }
            className="h-4 w-4 rounded border-gold-500/30"
          />
          <label htmlFor="featured" className="text-sm text-foreground">
            Featured article
          </label>
        </div>

        {/* Submit */}
        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={loading}
            className={cn(
              "flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full",
              "bg-gradient-to-r from-gold-500 to-gold-600 text-gold-950",
              "font-semibold",
              "hover:shadow-gold-md active:scale-95",
              "transition-all duration-200",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Publishing...</span>
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                <span>Publish Article</span>
              </>
            )}
          </button>

          <Link
            href="/admin/news"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-gold-500/30 text-foreground font-semibold hover:bg-gold-500/10 transition-all"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}