// src/services/donation.service.ts
// ═══════════════════════════════════════════════════════════════
// DONATION SERVICE (Supabase)
// ═══════════════════════════════════════════════════════════════

import { supabase } from "@/lib/supabase/client";

export interface Donation {
  donor_name: string;
  donor_email: string;
  donor_phone?: string;
  amount: number;
  currency?: string;
  cause?: string;
  payment_method?: "card" | "bank" | "qr" | "cash";
  message?: string;
  is_anonymous?: boolean;
}

/**
 * Record donation
 */
export async function recordDonation(
  data: Donation
): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    const { data: result, error } = await supabase
      .from("donations")
      .insert([
        {
          donor_name: data.donor_name,
          donor_email: data.donor_email,
          donor_phone: data.donor_phone,
          amount: data.amount,
          currency: data.currency || "LKR",
          cause: data.cause,
          payment_method: data.payment_method,
          message: data.message,
          is_anonymous: data.is_anonymous || false,
        },
      ])
      .select()
      .single();

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, id: result.id };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, error: message };
  }
}