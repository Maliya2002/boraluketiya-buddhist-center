// src/app/admin/layout.tsx
// ═══════════════════════════════════════════════════════════════
// ADMIN LAYOUT
// Wraps all admin pages with sidebar
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { ProtectedRoute } from "@/components/admin/protected-route";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  // Login page doesn't need protection or sidebar
  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <AdminSidebar />
        <main className="lg:ml-64 min-h-screen">
          <div className="p-6 md:p-8 pt-20 lg:pt-8">{children}</div>
        </main>
      </div>
    </ProtectedRoute>
  );
}