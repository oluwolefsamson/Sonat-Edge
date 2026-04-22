import BrochurePage from "@/views/BrochurePage";
import { buildPageMetadata, pageSeo } from "@/data/seo";

export const metadata = buildPageMetadata(pageSeo.brochure);

export default function Page() {
  return <BrochurePage />;
}
