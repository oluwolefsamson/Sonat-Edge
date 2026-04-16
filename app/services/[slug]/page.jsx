import ServiceDetailPage from "@/pages/ServiceDetailPage";
import { serviceItems } from "@/data/siteContent";
import { redirect } from "next/navigation";

export default function Page({ params }) {
  const service = serviceItems.find((item) => item.slug === params.slug);

  if (!service) {
    redirect("/services");
  }

  const relatedServices = serviceItems
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return <ServiceDetailPage service={service} relatedServices={relatedServices} />;
}
