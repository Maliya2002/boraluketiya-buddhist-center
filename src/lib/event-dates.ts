export function sriLankaDate(now = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Colombo", year: "numeric", month: "2-digit", day: "2-digit",
  }).formatToParts(now);
  const part = (type: string) => parts.find((item) => item.type === type)!.value;
  return `${part("year")}-${part("month")}-${part("day")}`;
}

export function eventPeriod(date: string, today: string): "past" | "today" | "upcoming" {
  return date < today ? "past" : date === today ? "today" : "upcoming";
}
