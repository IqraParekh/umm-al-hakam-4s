import type { MetadataRoute } from "next"
import { routeMetadata } from "@/lib/site-data"

const siteOrigin = (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").replace(/\/$/, "")

export default function sitemap(): MetadataRoute.Sitemap {
  return routeMetadata.map((route) => ({
    url: `${siteOrigin}${route.path}`,
    changeFrequency: route.path === "/" || route.path === "/nabat" ? "weekly" : "monthly",
    priority: route.path === "/" || route.path === "/nabat" ? 1 : 0.7,
  }))
}
