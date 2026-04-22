import ContactPage from "@/views/ContactPage";
import { buildPageMetadata, pageSeo } from "@/data/seo";

export const metadata = buildPageMetadata(pageSeo.contact);

export default function Page() {
  return <ContactPage />;
}
