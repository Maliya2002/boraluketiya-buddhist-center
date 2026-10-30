import { sriLankaDate } from "@/lib/event-dates";

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

// Verified 2026 holidays: https://www.cbsl.gov.lk/en/node/19362
// Checked 2026-10-29. Add the next official calendar before this one expires.
export const poyaDates2026: PoyaDay[] = [
  {
    date: "2026-01-03",
    name: { en: "Duruthu Poya", si: "දුරුතු පොහොය" },
    significance: {
      en: "Commemorates Buddha's first visit to Sri Lanka",
      si: "බුදුරජාණන් වහන්සේගේ ප්‍රථම ශ්‍රී ලංකා ගමනය",
    },
  },
  {
    date: "2026-02-01",
    name: { en: "Navam Poya", si: "නවම් පොහොය" },
    significance: {
      en: "Appointment of chief disciples",
      si: "ප්‍රධාන ශ්‍රාවකයන් පත් කිරීම",
    },
  },
  {
    date: "2026-03-02",
    name: { en: "Medin Poya", si: "මැදින් පොහොය" },
    significance: {
      en: "Buddha's first visit to father's home",
      si: "බුදුරජාණන් වහන්සේගේ පියරජු දකින්නට වැඩම කිරීම",
    },
  },
  {
    date: "2026-04-01",
    name: { en: "Bak Poya", si: "බක් පොහොය" },
    significance: {
      en: "Buddha's second visit to Sri Lanka",
      si: "බුදුරජාණන් වහන්සේගේ දෙවන ශ්‍රී ලංකා ගමනය",
    },
  },
  {
    date: "2026-05-01",
    name: { en: "Vesak Poya", si: "වෙසක් පොහොය" },
    significance: {
      en: "Buddha's birth, enlightenment, and passing away",
      si: "බුදුරජාණන් වහන්සේගේ ජාති, බෝධි, පරිනිර්වාණ",
    },
  },
  {
    date: "2026-05-30",
    name: { en: "Adhi Poson Poya", si: "අධි පොසොන් පොහොය" },
    significance: { en: "Additional full moon Poya observance", si: "අධි පුර පසළොස්වක පොහොය දිනය" },
  },
  {
    date: "2026-06-29",
    name: { en: "Poson Poya", si: "පොසොන් පොහොය" },
    significance: {
      en: "Introduction of Buddhism to Sri Lanka",
      si: "ශ්‍රී ලංකාවට බුදුදහම හඳුන්වා දීම",
    },
  },
  {
    date: "2026-07-29",
    name: { en: "Esala Poya", si: "ඇසළ පොහොය" },
    significance: {
      en: "First sermon of the Buddha",
      si: "බුදුරජාණන් වහන්සේගේ ප්‍රථම ධර්ම දේශනය",
    },
  },
  {
    date: "2026-08-27",
    name: { en: "Nikini Poya", si: "නිකිණි පොහොය" },
    significance: {
      en: "First Buddhist Council",
      si: "ප්‍රථම ධර්ම සංගායනය",
    },
  },
  {
    date: "2026-09-26",
    name: { en: "Binara Poya", si: "බිනර පොහොය" },
    significance: {
      en: "Buddha's teaching in heaven",
      si: "බුදුරජාණන් වහන්සේගේ දිව්‍ය දේශනය",
    },
  },
  {
    date: "2026-10-25",
    name: { en: "Vap Poya", si: "වප් පොහොය" },
    significance: {
      en: "Buddha's return from heaven",
      si: "බුදුරජාණන් වහන්සේගේ දිව්‍ය ලෝකයෙන් නැවත වැඩම කිරීම",
    },
  },
  {
    date: "2026-11-24",
    name: { en: "Il Poya", si: "ඉල් පොහොය" },
    significance: {
      en: "Sending 60 arahants to spread Dhamma",
      si: "සැට අරහත් උතුමන්ව ධර්ම දේශනාවට යැවීම",
    },
  },
  {
    date: "2026-12-23",
    name: { en: "Unduvap Poya", si: "උඳුවප් පොහොය" },
    significance: {
      en: "Arrival of Sacred Bodhi Tree in Sri Lanka",
      si: "ශ්‍රී මහා බෝධීන් වහන්සේ ශ්‍රී ලංකාවට වැඩම කිරීම",
    },
  },
];


export function getNextPoyaDay(now = new Date()): PoyaDay | null {
  const today = sriLankaDate(now);
  return poyaDates2026.find((poya) => poya.date >= today) ?? null;
}

export function getPoyaCountdown(now = new Date()) {
  const poya = getNextPoyaDay(now);
  const isToday = poya?.date === sriLankaDate(now);
  const remaining = poya ? Math.max(0, Math.floor((new Date(poya.date + "T00:00:00+05:30").getTime() - now.getTime()) / 1000)) : 0;
  return {
    poya, isToday,
    days: Math.floor(remaining / 86400),
    hours: Math.floor((remaining % 86400) / 3600),
    minutes: Math.floor((remaining % 3600) / 60),
    seconds: remaining % 60,
  };
}
