import { company, contacts } from "./companyProfile";
import { serviceItems } from "./siteContent";

export const siteUrl = "https://www.sonatedge.com";

export const pageSeo = {
  home: {
    title: company.name,
    description: company.tagline,
    h1: "A dependable delivery partner for serious business work.",
    slug: "/",
    intent: "Brand awareness + lead generation",
    internalLinks: ["/about", "/services", "/projects", "/contact"],
  },
  about: {
    title: `About ${company.name}`,
    description:
      "Learn how Sonat Edge is structured, what it believes, and how it approaches delivery, accountability, and client partnership.",
    h1: "Built to deliver with structure, clarity, and accountability.",
    slug: "/about",
    intent: "Trust building",
    internalLinks: ["/services", "/projects", "/contact"],
  },
  services: {
    title: `Services | ${company.name}`,
    description:
      "Explore the core service lines Sonat Edge uses to support contracts, construction, print production, training, and management work.",
    h1: "Services designed around execution, not noise.",
    slug: "/services",
    intent: "Service discovery",
    internalLinks: ["/projects", "/about", "/contact"],
  },
  projects: {
    title: `Projects & Case Studies | ${company.name}`,
    description:
      "Review the project framework Sonat Edge uses to present challenge, solution, and outcome clearly for serious buyers.",
    h1: "A clear framework for proving real delivery.",
    slug: "/projects",
    intent: "Conversion support",
    internalLinks: ["/services", "/about", "/contact"],
  },
  contact: {
    title: `Contact | ${company.name}`,
    description:
      "Reach Sonat Edge by phone, email, WhatsApp, or the contact form to start a serious business conversation.",
    h1: "Start a serious conversation with the right team.",
    slug: "/contact",
    intent: "Lead capture",
    internalLinks: ["/services", "/projects", "/about"],
  },
  brochure: {
    title: `Brochure | ${company.name}`,
    description:
      "Download or review the Sonat Edge brochure to understand services, coverage, and the company profile at a glance.",
    h1: "A concise company overview you can share internally.",
    slug: "/brochure",
    intent: "Quick company overview",
    internalLinks: ["/services", "/about", "/contact"],
  },
};

export function buildPageMetadata(page) {
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.slug,
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}${page.slug}`,
      siteName: company.name,
      title: page.title,
      description: page.description,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export function getServiceSeo(service) {
  if (!service) {
    return {
      title: `Services | ${company.name}`,
      description: company.overview,
      h1: "Services designed around execution, not noise.",
      slug: "/services",
      intent: "Service discovery",
      internalLinks: ["/services", "/projects", "/contact"],
    };
  }

  return {
    title: `${service.title} | ${company.name}`,
    description: service.description,
    h1: service.title,
    slug: `/services/${service.slug}`,
    intent: "Service detail intent",
    internalLinks: ["/services", "/projects", "/contact"],
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: siteUrl,
  description: company.overview,
  email: contacts.email,
  telephone: contacts.phones,
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: contacts.abuja.address,
      addressLocality: "Abuja",
      addressCountry: "NG",
    },
    {
      "@type": "PostalAddress",
      streetAddress: contacts.kaduna.address,
      addressLocality: "Kaduna",
      addressCountry: "NG",
    },
  ],
  areaServed: "Nigeria",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: company.name,
  url: siteUrl,
  description: company.tagline,
};

export const servicesSchemas = serviceItems.map((service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.description,
  provider: {
    "@type": "Organization",
    name: company.name,
    url: siteUrl,
  },
  areaServed: "Nigeria",
  serviceType: service.title,
}));
