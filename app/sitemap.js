import { pageSeo } from "@/data/seo";
import { serviceItems } from "@/data/siteContent";

export const dynamic = "force-static";

export default function sitemap() {
  const base = "https://www.sonatedge.com";
  const staticPages = [
    pageSeo.home.slug,
    pageSeo.about.slug,
    pageSeo.services.slug,
    pageSeo.projects.slug,
    pageSeo.contact.slug,
    pageSeo.brochure.slug,
  ];

  const pages = [
    ...staticPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: path === "/" ? 1 : 0.8,
    })),
    ...serviceItems.map((service) => ({
      url: `${base}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];

  return pages;
}
