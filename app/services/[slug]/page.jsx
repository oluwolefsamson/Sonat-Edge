import ServiceDetailPage from "@/components/ServiceDetailPage";
import { serviceItems } from "@/data/siteContent";
import { getServiceSeo } from "@/data/seo";
import { redirect } from "next/navigation";

export function generateStaticParams() {
  return serviceItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = serviceItems.find((item) => item.slug === slug);
  const seo = getServiceSeo(service);

  return {
    title: seo.title,
    description: seo.description,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const service = serviceItems.find((item) => item.slug === slug);

  if (!service) {
    redirect("/services");
  }

  const relatedServices = serviceItems
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return <ServiceDetailPage service={service} relatedServices={relatedServices} />;
}
