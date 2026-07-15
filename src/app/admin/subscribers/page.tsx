"use client";

import * as React from "react";
import { Users, Search, Trash2 } from "lucide-react";
import { supabase } from "@/lib/supabase/client";

interface Subscriber {
  id: string;
  email: string;
  language: string;
  status: string;
  created_at: string;
}

export default function SubscribersPage() {
  const [subscribers, setSubscribers] = React.useState<Subscriber[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    fetchSubscribers();
  }, []);

  async function fetchSubscribers() {
    const { data } = await supabase
      .from("newsletter_subscribers")
      .select("*")
      .order("created_at", { ascending: false });
    setSubscribers(data || []);
    setLoading(false);
  }

  async function deleteSubscriber(id: string) {
    if (!confirm("Delete this subscriber?")) return;
    await supabase.from("newsletter_subscribers").delete().eq("id", id);
    fetchSubscribers();
  }

  const filtered = subscribers.filter((s) =>
    s.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-heading text-foreground mb-2">Newsletter Subscribers</h1>
        <p className="text-muted-foreground">{subscribers.length} total subscribers</p>
      </div>

      <div className="mb-6 relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search subscribers..."
          className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gold-500/20 bg-card focus:outline-none focus:border-gold-500"
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="rounded-2xl bg-card border border-gold-500/20 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gold-500/10">
              <tr>
                <th className="text-left p-4 text-sm font-semibold text-foreground">Email</th>
                <th className="text-left p-4 text-sm font-semibold text-foreground">Language</th>
                <th className="text-left p-4 text-sm font-semibold text-foreground">Joined</th>
                <th className="text-right p-4 text-sm font-semibold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((sub) => (
                <tr key={sub.id} className="border-t border-gold-500/10 hover:bg-gold-500/5">
                  <td className="p-4 text-sm text-foreground">{sub.email}</td>
                  <td className="p-4 text-sm text-muted-foreground uppercase">{sub.language}</td>
                  <td className="p-4 text-sm text-muted-foreground">
                    {new Date(sub.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => deleteSubscriber(sub.id)}
                      className="p-2 rounded-lg hover:bg-red-500/10 text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}