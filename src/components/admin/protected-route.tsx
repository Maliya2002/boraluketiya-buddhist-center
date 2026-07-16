// src/components/admin/protected-route.tsx
// ═══════════════════════════════════════════════════════════════
// PROTECTED ROUTE
// Redirects to login if not authenticated
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/admin/login");
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 text-gold-500 animate-spin" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}