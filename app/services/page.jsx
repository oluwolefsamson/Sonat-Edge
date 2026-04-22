import ServicesPage from "@/views/ServicesPage";
import { buildPageMetadata, pageSeo } from "@/data/seo";

export const metadata = buildPageMetadata(pageSeo.services);

export default function Page() {
  return <ServicesPage />;
}
