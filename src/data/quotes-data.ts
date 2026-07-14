// src/data/quotes-data.ts
// ═══════════════════════════════════════════════════════════════
// BUDDHIST QUOTES
// Wisdom quotes from Dhammapada and other sources
// ═══════════════════════════════════════════════════════════════

export interface BuddhistQuote {
  id: string;
  quote: {
    en: string;
    si: string;
  };
  source: string;
  category: "dhammapada" | "sutta" | "teacher";
}

export const buddhistQuotes: BuddhistQuote[] = [
  {
    id: "q1",
    quote: {
      en: "Peace comes from within. Do not seek it without.",
      si: "සාමය පැමිණෙන්නේ ඇතුළතින්. පිටතින් සොයන්න එපා.",
    },
    source: "Buddha",
    category: "teacher",
  },
  {
    id: "q2",
    quote: {
      en: "The mind is everything. What you think you become.",
      si: "සිත සියල්ලයි. ඔබ සිතන දේ ඔබ බවට පත්වේ.",
    },
    source: "Dhammapada",
    category: "dhammapada",
  },
  {
    id: "q3",
    quote: {
      en: "Better than a thousand hollow words is one word that brings peace.",
      si: "සිත් ශාන්තිය ගෙන දෙන එක වචනයක් හිස් වචන දහසකට වඩා යහපත් ය.",
    },
    source: "Dhammapada 100",
    category: "dhammapada",
  },
  {
    id: "q4",
    quote: {
      en: "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
      si: "සෞඛ්‍යය ශ්‍රේෂ්ඨතම ත්‍යාගය, සන්තෝෂය ශ්‍රේෂ්ඨතම ධනය, විශ්වාසවන්තකම හොඳම සම්බන්ධතාව යි.",
    },
    source: "Dhammapada 204",
    category: "dhammapada",
  },
  {
    id: "q5",
    quote: {
      en: "Three things cannot be long hidden: the sun, the moon, and the truth.",
      si: "දේවල් තුනක් දිගු කලක් සැඟවී තිබිය නොහැක: හිරු, සඳ සහ සත්‍යය.",
    },
    source: "Buddha",
    category: "teacher",
  },
];

/**
 * Get quote of the day based on current date
 */
export function getDailyQuote(): BuddhistQuote {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
      1000 /
      60 /
      60 /
      24
  );
  return buddhistQuotes[dayOfYear % buddhistQuotes.length];
}