// src/hooks/use-auth.ts
// ═══════════════════════════════════════════════════════════════
// USE AUTH HOOK
// Manage authentication state
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

interface AuthState {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
}

export function useAuth() {
  const [authState, setAuthState] = React.useState<AuthState>({
    user: null,
    loading: true,
    isAuthenticated: false,
  });
  const router = useRouter();

  React.useEffect(() => {
    // Get initial session
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      setAuthState({
        user: session?.user ?? null,
        loading: false,
        isAuthenticated: !!session,
      });
    };

    getSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setAuthState({
          user: session?.user ?? null,
          loading: false,
          isAuthenticated: !!session,
        });
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, user: data.user };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  return {
    ...authState,
    signIn,
    signOut,
  };
}