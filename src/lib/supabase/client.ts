// src/lib/supabase/client.ts
// ═══════════════════════════════════════════════════════════════
// SUPABASE CLIENT
// FREE alternative to Firebase
// ═══════════════════════════════════════════════════════════════

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | undefined;

// Initialize only when submitting, so public pages can render without a backend.
export function getSupabaseClient(): SupabaseClient {
  if (client) return client;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Online submissions are currently unavailable. Please try again later.");
  }

  client = createClient(supabaseUrl, supabaseAnonKey);
  return client;
}
