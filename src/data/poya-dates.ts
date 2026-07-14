// src/data/poya-dates.ts
// ═══════════════════════════════════════════════════════════════
// POYA DAYS (Full Moon Days) - Buddhist Calendar
// Traditional Sri Lankan Buddhist observance days
// ═══════════════════════════════════════════════════════════════

export interface PoyaDay {
  date: string; // ISO date string
  name: {
    en: string;
    si: string;
  };
  significance: {
    en: string;
    si: string;
  };
}

// Poya dates for 2025 (approximate - actual dates depend on lunar calendar)
// TODO: Update with actual dates from Buddhist calendar authority
export const poyaDates2025: PoyaDay[] = [
  {
    date: "2025-01-13",
    name: { en: "Duruthu Poya", si: "දුරුතු පොහොය" },
    significance: {
      en: "Commemorates Buddha's first visit to Sri Lanka",
      si: "බුදුරජාණන් වහන්සේගේ ප්‍රථම ශ්‍රී ලංකා ගමනය",
    },
  },
  {
    date: "2025-02-12",
    name: { en: "Navam Poya", si: "නවම් පොහොය" },
    significance: {
      en: "Appointment of chief disciples",
      si: "ප්‍රධාන ශ්‍රාවකයන් පත් කිරීම",
    },
  },
  {
    date: "2025-03-13",
    name: { en: "Medin Poya", si: "මැදින් පොහොය" },
    significance: {
      en: "Buddha's first visit to father's home",
      si: "බුදුරජාණන් වහන්සේගේ පියරජු දකින්නට වැඩම කිරීම",
    },
  },
  {
    date: "2025-04-12",
    name: { en: "Bak Poya", si: "බක් පොහොය" },
    significance: {
      en: "Buddha's second visit to Sri Lanka",
      si: "බුදුරජාණන් වහන්සේගේ දෙවන ශ්‍රී ලංකා ගමනය",
    },
  },
  {
    date: "2025-05-11",
    name: { en: "Vesak Poya", si: "වෙසක් පොහොය" },
    significance: {
      en: "Buddha's birth, enlightenment, and passing away",
      si: "බුදුරජාණන් වහන්සේගේ ජාති, බෝධි, පරිනිර්වාණ",
    },
  },
  {
    date: "2025-06-10",
    name: { en: "Poson Poya", si: "පොසොන් පොහොය" },
    significance: {
      en: "Introduction of Buddhism to Sri Lanka",
      si: "ශ්‍රී ලංකාවට බුදුදහම හඳුන්වා දීම",
    },
  },
  {
    date: "2025-07-10",
    name: { en: "Esala Poya", si: "ඇසළ පොහොය" },
    significance: {
      en: "First sermon of the Buddha",
      si: "බුදුරජාණන් වහන්සේගේ ප්‍රථම ධර්ම දේශනය",
    },
  },
  {
    date: "2025-08-09",
    name: { en: "Nikini Poya", si: "නිකිණි පොහොය" },
    significance: {
      en: "First Buddhist Council",
      si: "ප්‍රථම ධර්ම සංගායනය",
    },
  },
  {
    date: "2025-09-07",
    name: { en: "Binara Poya", si: "බිනර පොහොය" },
    significance: {
      en: "Buddha's teaching in heaven",
      si: "බුදුරජාණන් වහන්සේගේ දිව්‍ය දේශනය",
    },
  },
  {
    date: "2025-10-06",
    name: { en: "Vap Poya", si: "වප් පොහොය" },
    significance: {
      en: "Buddha's return from heaven",
      si: "බුදුරජාණන් වහන්සේගේ දිව්‍ය ලෝකයෙන් නැවත වැඩම කිරීම",
    },
  },
  {
    date: "2025-11-05",
    name: { en: "Il Poya", si: "ඉල් පොහොය" },
    significance: {
      en: "Sending 60 arahants to spread Dhamma",
      si: "සැට අරහත් උතුමන්ව ධර්ම දේශනාවට යැවීම",
    },
  },
  {
    date: "2025-12-04",
    name: { en: "Unduvap Poya", si: "උඳුවප් පොහොය" },
    significance: {
      en: "Arrival of Sacred Bodhi Tree in Sri Lanka",
      si: "ශ්‍රී මහා බෝධීන් වහන්සේ ශ්‍රී ලංකාවට වැඩම කිරීම",
    },
  },
];

/**
 * Get the next upcoming Poya day
 * @returns Next Poya day or null if none found
 */
export function getNextPoyaDay(): PoyaDay | null {
  const now = new Date();

  const upcoming = poyaDates2025
    .filter((poya) => new Date(poya.date) > now)
    .sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

  return upcoming[0] || null;
}