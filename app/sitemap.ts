import type { MetadataRoute } from "next";
import { daysRegistry } from "../lib/days-registry";

const BASE_URL = "https://veritas-one-theta.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/days`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/methodology`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/audit-log`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/license`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic day pages — only include unlocked (published) days
  const currentDayOfYear = getDayOfYear2026(now);
  const dayPages: MetadataRoute.Sitemap = daysRegistry
    .filter((day) => parseInt(day.id, 10) <= currentDayOfYear)
    .map((day) => {
      const dayNumber = parseInt(day.id, 10);
      // Approximate the publication date from the day-of-year
      const pubDate = new Date(2026, 0, dayNumber); // Jan 1 + dayNumber

      return {
        url: `${BASE_URL}/day/${day.id}`,
        lastModified: pubDate,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      };
    });

  return [...staticPages, ...dayPages];
}

/**
 * Helper: compute day-of-year for 2026. Mirrors the logic in days-registry.ts.
 */
function getDayOfYear2026(date: Date = new Date()): number {
  if (date.getFullYear() < 2026) return 0;
  if (date.getFullYear() > 2026) return 365;

  const startOf2026 = new Date(2026, 0, 1);
  const diffTime = date.getTime() - startOf2026.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays + 1;
}
