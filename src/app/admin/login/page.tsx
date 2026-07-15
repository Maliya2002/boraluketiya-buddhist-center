// src/app/admin/login/page.tsx
// ═══════════════════════════════════════════════════════════════
// ADMIN LOGIN PAGE
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, ArrowRight, AlertCircle, Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";

export default function AdminLoginPage() {
  const router = useRouter();
  const { signIn, isAuthenticated } = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // Redirect if already logged in
  React.useEffect(() => {
    if (isAuthenticated) {
      router.push("/admin");
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const result = await signIn(email, password);

    if (result.success) {
      router.push("/admin");
    } else {
      setError(result.error || "Login failed");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gold-500/10 via-background to-temple-500/10">
      <div className="w-full max-w-md">
        {/* Logo/Title */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mx-auto shadow-gold-lg">
              <span className="text-3xl">🏛️</span>
            </div>
          </Link>
          <h1 className="text-3xl font-heading font-light text-foreground mb-2">
            Admin <span className="text-gradient-gold">Portal</span>
          </h1>
          <p className="text-sm text-muted-foreground">
            Boralukatiya Buddhist Center
          </p>
        </div>

        {/* Login Card */}
        <div className="p-8 rounded-3xl bg-card border-2 border-gold-500/30 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-500">{error}</p>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@boralukatiya.lk"
                  disabled={loading}
                  className={cn(
                    "w-full pl-11 pr-4 py-3 rounded-xl",
                    "border-2 border-gold-500/20",
                    "bg-background",
                    "focus:outline-none focus:border-gold-500",
                    "text-foreground placeholder:text-muted-foreground",
                    "transition-all duration-200",
                    "disabled:opacity-50"
                  )}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  disabled={loading}
                  className={cn(
                    "w-full pl-11 pr-4 py-3 rounded-xl",
                    "border-2 border-gold-500/20",
                    "bg-background",
                    "focus:outline-none focus:border-gold-500",
                    "text-foreground placeholder:text-muted-foreground",
                    "transition-all duration-200",
                    "disabled:opacity-50"
                  )}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={cn(
                "w-full inline-flex items-center justify-center gap-2",
                "px-6 py-3 rounded-full",
                "bg-gradient-to-r from-gold-500 to-gold-600 text-gold-950",
                "font-semibold",
                "hover:shadow-gold-lg active:scale-95",
                "transition-all duration-200",
                "disabled:opacity-50 disabled:cursor-not-allowed"
              )}
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Back to site */}
          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-gold-500 transition-colors"
            >
              ← Back to Website
            </Link>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          🔒 Secure admin access
        </p>
      </div>
    </div>
  );
}