export const dynamic = "force-static";

export default function robots() {
  const base = "https://www.sonatedge.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
