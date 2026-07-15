// src/services/newsletter.service.ts
// ═══════════════════════════════════════════════════════════════
// NEWSLETTER SERVICE (Supabase)
// ═══════════════════════════════════════════════════════════════

import { supabase } from "@/lib/supabase/client";

/**
 * Subscribe to newsletter
 */
export async function subscribeToNewsletter(
  email: string,
  language: "en" | "si" = "en"
): Promise<{ success: boolean; error?: string }> {
  try {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, error: "Invalid email address" };
    }

    const { error } = await supabase.from("newsletter_subscribers").insert([
      {
        email: email.toLowerCase().trim(),
        language,
      },
    ]);

    if (error) {
      // Check if already subscribed
      if (error.code === "23505") {
        return { success: false, error: "You are already subscribed!" };
      }
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, error: message };
  }
}