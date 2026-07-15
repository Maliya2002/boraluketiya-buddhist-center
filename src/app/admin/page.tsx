// src/app/admin/page.tsx
// ═══════════════════════════════════════════════════════════════
// ADMIN DASHBOARD - Main analytics page
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import {
  Mail,
  Users,
  DollarSign,
  Newspaper,
  Calendar,
  TrendingUp,
  Activity,
} from "lucide-react";
import { supabase } from "@/lib/supabase/client";
import { StatsCard } from "@/components/admin/stats-card";

interface DashboardStats {
  messages: number;
  subscribers: number;
  donations: number;
  totalAmount: number;
  recentActivities: Array<{
    id: string;
    type: string;
    description: string;
    time: string;
  }>;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = React.useState<DashboardStats>({
    messages: 0,
    subscribers: 0,
    donations: 0,
    totalAmount: 0,
    recentActivities: [],
  });
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchStats() {
      try {
        // Fetch counts
        const [messagesRes, subscribersRes, donationsRes] = await Promise.all([
          supabase.from("contact_messages").select("*", { count: "exact", head: true }),
          supabase.from("newsletter_subscribers").select("*", { count: "exact", head: true }),
          supabase.from("donations").select("amount", { count: "exact" }),
        ]);

        const totalAmount = donationsRes.data?.reduce(
          (sum, d) => sum + Number(d.amount),
          0
        ) || 0;

        // Fetch recent messages
        const { data: recentMessages } = await supabase
          .from("contact_messages")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(5);

        const recentActivities = (recentMessages || []).map((msg) => ({
          id: msg.id,
          type: "message",
          description: `New message from ${msg.name}`,
          time: new Date(msg.created_at).toLocaleString(),
        }));

        setStats({
          messages: messagesRes.count || 0,
          subscribers: subscribersRes.count || 0,
          donations: donationsRes.count || 0,
          totalAmount,
          recentActivities,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-light text-foreground mb-2">
          Welcome back! 👋
        </h1>
        <p className="text-muted-foreground">
          Here's what's happening at Boralukatiya Buddhist Center today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Messages"
          value={loading ? "..." : stats.messages}
          icon={Mail}
          color="gold"
          trend={{ value: 12, label: "vs last month" }}
        />
        <StatsCard
          title="Subscribers"
          value={loading ? "..." : stats.subscribers}
          icon={Users}
          color="temple"
          trend={{ value: 8, label: "vs last month" }}
        />
        <StatsCard
          title="Total Donations"
          value={loading ? "..." : stats.donations}
          icon={DollarSign}
          color="bodhi"
          trend={{ value: 24, label: "vs last month" }}
        />
        <StatsCard
          title="Amount Raised"
          value={loading ? "..." : `Rs. ${stats.totalAmount.toLocaleString()}`}
          icon={TrendingUp}
          color="lotus"
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="p-6 rounded-2xl bg-card border border-gold-500/20">
          <Newspaper className="h-8 w-8 text-gold-500 mb-3" />
          <h3 className="font-heading text-lg text-foreground mb-2">Manage News</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Create and edit news articles
          </p>
          <a
            href="/admin/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-500 hover:text-gold-600"
          >
            Go to News →
          </a>
        </div>

        <div className="p-6 rounded-2xl bg-card border border-gold-500/20">
          <Calendar className="h-8 w-8 text-temple-500 mb-3" />
          <h3 className="font-heading text-lg text-foreground mb-2">Manage Events</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Add upcoming events and ceremonies
          </p>
          <a
            href="/admin/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-500 hover:text-gold-600"
          >
            Go to Events →
          </a>
        </div>

        <div className="p-6 rounded-2xl bg-card border border-gold-500/20">
          <Activity className="h-8 w-8 text-bodhi-500 mb-3" />
          <h3 className="font-heading text-lg text-foreground mb-2">View Analytics</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Check site analytics and reports
          </p>
          <a
            href="https://vercel.com/analytics"
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-500 hover:text-gold-600"
          >
            View Analytics →
          </a>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="p-6 rounded-2xl bg-card border border-gold-500/20">
        <h2 className="font-heading text-xl text-foreground mb-4">
          Recent Activity
        </h2>

        {loading ? (
          <p className="text-muted-foreground">Loading...</p>
        ) : stats.recentActivities.length === 0 ? (
          <p className="text-muted-foreground">No recent activity</p>
        ) : (
          <div className="space-y-3">
            {stats.recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-gold-500/5 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-foreground">
                    {activity.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}