// src/services/contact.service.ts
// ═══════════════════════════════════════════════════════════════
// CONTACT SERVICE (Supabase)
// ═══════════════════════════════════════════════════════════════

import { supabase } from "@/lib/supabase/client";

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status?: "new" | "read" | "replied";
  created_at?: string;
}

/**
 * Submit contact form
 */
export async function submitContactForm(
  data: Omit<ContactMessage, "id" | "status" | "created_at">
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase.from("contact_messages").insert([
      {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        subject: data.subject,
        message: data.message,
      },
    ]);

    if (error) {
      console.error("Supabase error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, error: message };
  }
}