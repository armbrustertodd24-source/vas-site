import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // The learn product ships on its own domain; keep it and API
        // routes out of the VAS domain's index.
        disallow: ["/api/", "/learn"],
      },
    ],
    sitemap: "https://vectorautomationsystems.com/sitemap.xml",
  }
}
