// src/app/admin/messages/page.tsx
// ═══════════════════════════════════════════════════════════════
// CONTACT MESSAGES VIEWER
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import { Mail, Phone, User, Calendar, Search, Trash2 } from "lucide-react";
import { supabase } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  status: string;
  created_at: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [search, setSearch] = React.useState("");
  const [selectedMessage, setSelectedMessage] = React.useState<Message | null>(null);

  React.useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    try {
      const { data } = await supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });

      setMessages(data || []);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteMessage(id: string) {
    if (!confirm("Are you sure you want to delete this message?")) return;

    await supabase.from("contact_messages").delete().eq("id", id);
    fetchMessages();
    setSelectedMessage(null);
  }

  const filteredMessages = messages.filter(
    (msg) =>
      msg.name.toLowerCase().includes(search.toLowerCase()) ||
      msg.email.toLowerCase().includes(search.toLowerCase()) ||
      msg.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-light text-foreground mb-2">
          Contact Messages
        </h1>
        <p className="text-muted-foreground">
          {messages.length} total messages
        </p>
      </div>

      {/* Search */}
      <div className="mb-6 relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search messages..."
          className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gold-500/20 bg-card focus:outline-none focus:border-gold-500"
        />
      </div>

      {/* Messages List */}
      {loading ? (
        <p className="text-center py-8 text-muted-foreground">Loading...</p>
      ) : filteredMessages.length === 0 ? (
        <div className="text-center py-16">
          <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">No messages found</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredMessages.map((message) => (
            <div
              key={message.id}
              className="p-6 rounded-2xl bg-card border border-gold-500/20 hover:border-gold-500/50 transition-all cursor-pointer"
              onClick={() => setSelectedMessage(message)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-temple-500 flex items-center justify-center text-white font-bold">
                      {message.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {message.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {new Date(message.created_at).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-foreground mb-1">
                    {message.subject}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {message.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal for detail view */}
      {selectedMessage && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMessage(null)}
        >
          <div
            className="bg-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-heading text-foreground mb-1">
                  {selectedMessage.subject}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {new Date(selectedMessage.created_at).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => deleteMessage(selectedMessage.id)}
                className="p-2 rounded-lg hover:bg-red-500/10 text-red-500"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6 pb-6 border-b border-gold-500/20">
              <div className="flex items-center gap-2 text-sm">
                <User className="h-4 w-4 text-gold-500" />
                <span className="text-foreground">{selectedMessage.name}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-gold-500" />
                <a
                  href={`mailto:${selectedMessage.email}`}
                  className="text-gold-500 hover:underline"
                >
                  {selectedMessage.email}
                </a>
              </div>
              {selectedMessage.phone && (
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-gold-500" />
                  <a
                    href={`tel:${selectedMessage.phone}`}
                    className="text-gold-500 hover:underline"
                  >
                    {selectedMessage.phone}
                  </a>
                </div>
              )}
            </div>

            <div className="prose max-w-none">
              <p className="text-foreground whitespace-pre-wrap leading-relaxed">
                {selectedMessage.message}
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                className="flex-1 px-6 py-3 bg-gold-500 text-gold-950 rounded-full font-semibold text-center hover:bg-gold-600 transition-colors"
              >
                Reply via Email
              </a>
              <button
                onClick={() => setSelectedMessage(null)}
                className="px-6 py-3 border-2 border-gold-500/30 rounded-full font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}