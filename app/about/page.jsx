import AboutPage from "@/views/AboutPage";
import { buildPageMetadata, pageSeo } from "@/data/seo";

export const metadata = buildPageMetadata(pageSeo.about);

export default function Page() {
  return <AboutPage />;
}
