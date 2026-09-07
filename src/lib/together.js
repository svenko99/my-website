/**
 * How long we have been together. One source of truth: the page renders this
 * at build time so it works without JavaScript, then the same functions keep
 * it current in the browser.
 */

// Local midnight, not UTC — a date-only string would shift by a day west of Greenwich.
export const START = new Date(2021, 5, 12);

export function elapsed(now = new Date()) {
  let years = now.getFullYear() - START.getFullYear();
  let months = now.getMonth() - START.getMonth();
  let days = now.getDate() - START.getDate();

  if (days < 0) {
    months -= 1;
    // Day 0 of this month is the last day of the previous one.
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years += -1;
    months += 12;
  }

  const totalDays = Math.floor((now - START) / 86_400_000);
  return { years, months, days, totalDays };
}

const unit = (n, word) => `<span class="together__num">${n}</span> ${word}${n === 1 ? "" : "s"}`;

/** Markup for the phrase, e.g. "5 years, 2 months and 26 days". */
export function phraseHtml(now = new Date()) {
  const { years, months, days } = elapsed(now);
  const parts = [];
  if (years) parts.push(unit(years, "year"));
  if (months) parts.push(unit(months, "month"));
  if (days) parts.push(unit(days, "day"));

  if (parts.length === 0) return "since this morning";
  if (parts.length === 1) return parts[0];
  return `${parts.slice(0, -1).join(", ")} and ${parts.at(-1)}`;
}

export function daysLine(now = new Date()) {
  return `${elapsed(now).totalDays.toLocaleString("en-GB")} days`;
}
