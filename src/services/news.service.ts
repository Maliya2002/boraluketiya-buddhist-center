// src/services/news.service.ts
// ═══════════════════════════════════════════════════════════════
// NEWS SERVICE (Supabase)
// ═══════════════════════════════════════════════════════════════

import { supabase } from "@/lib/supabase/client";
import type { NewsArticle } from "@/data/news-data";

/**
 * Get all news articles from Supabase
 */
export async function getAllNews(): Promise<NewsArticle[]> {
  try {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .eq("status", "published")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching news:", error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error("Error in getAllNews:", error);
    return [];
  }
}

/**
 * Get latest news articles
 */
export async function getLatestNews(count: number = 4): Promise<NewsArticle[]> {
  try {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .eq("status", "published")
      .order("created_at", { ascending: false })
      .limit(count);

    if (error) {
      console.error("Error fetching latest news:", error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error("Error in getLatestNews:", error);
    return [];
  }
}

/**
 * Get featured news
 */
export async function getFeaturedNews(): Promise<NewsArticle[]> {
  try {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .eq("featured", true)
      .eq("status", "published")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching featured news:", error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error("Error in getFeaturedNews:", error);
    return [];
  }
}

/**
 * Get single news article by ID
 */
export async function getNewsById(id: string): Promise<NewsArticle | null> {
  try {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching news:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error in getNewsById:", error);
    return null;
  }
}

/**
 * Create news article (admin only)
 */
export async function createNews(
  article: Omit<NewsArticle, "id">
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase.from("news").insert([article]);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, error: message };
  }
}

/**
 * Update news article (admin only)
 */
export async function updateNews(
  id: string,
  data: Partial<NewsArticle>
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from("news")
      .update(data)
      .eq("id", id);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, error: message };
  }
}

/**
 * Delete news article (admin only)
 */
export async function deleteNews(
  id: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase.from("news").delete().eq("id", id);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, error: message };
  }
}