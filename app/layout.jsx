import "./globals.css";
import SiteLayout from "@/components/Corporate/SiteLayout";
import { company } from "@/data/companyProfile";
import { organizationSchema, siteUrl, websiteSchema } from "@/data/seo";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: company.name,
    template: `%s | ${company.name}`,
  },
  description: company.tagline,
  keywords: [
    "Sonat Edge International Limited",
    "contracting services",
    "construction services",
    "printing services",
    "training and capacity building",
    "management services",
    "Nigeria business services",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: company.name,
    title: company.name,
    description: company.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: company.name,
    description: company.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
