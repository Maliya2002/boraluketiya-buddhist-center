"use client";

import * as React from "react";
import { supabase } from "@/lib/supabase/client";

interface Donation {
  id: string;
  donor_name: string;
  donor_email: string;
  amount: number;
  currency: string;
  cause: string;
  status: string;
  created_at: string;
}

export default function DonationsPage() {
  const [donations, setDonations] = React.useState<Donation[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchDonations();
  }, []);

  async function fetchDonations() {
    const { data } = await supabase
      .from("donations")
      .select("*")
      .order("created_at", { ascending: false });
    setDonations(data || []);
    setLoading(false);
  }

  const total = donations.reduce((sum, d) => sum + Number(d.amount), 0);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-heading text-foreground mb-2">Donations</h1>
        <p className="text-muted-foreground">
          {donations.length} donations · Total: Rs. {total.toLocaleString()}
        </p>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : donations.length === 0 ? (
        <p className="text-center py-16 text-muted-foreground">No donations yet</p>
      ) : (
        <div className="rounded-2xl bg-card border border-gold-500/20 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gold-500/10">
              <tr>
                <th className="text-left p-4 text-sm font-semibold">Donor</th>
                <th className="text-left p-4 text-sm font-semibold">Amount</th>
                <th className="text-left p-4 text-sm font-semibold">Cause</th>
                <th className="text-left p-4 text-sm font-semibold">Status</th>
                <th className="text-left p-4 text-sm font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((d) => (
                <tr key={d.id} className="border-t border-gold-500/10">
                  <td className="p-4">
                    <p className="text-sm font-semibold text-foreground">{d.donor_name}</p>
                    <p className="text-xs text-muted-foreground">{d.donor_email}</p>
                  </td>
                  <td className="p-4 text-sm font-bold text-gold-500">
                    Rs. {Number(d.amount).toLocaleString()}
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">{d.cause || "-"}</td>
                  <td className="p-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      d.status === "completed" ? "bg-bodhi-500/20 text-bodhi-600" :
                      d.status === "pending" ? "bg-yellow-500/20 text-yellow-600" :
                      "bg-red-500/20 text-red-600"
                    }`}>
                      {d.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">
                    {new Date(d.created_at).toLocaleDateString()}
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