import Home from "@/views/LandingPage/Home";
import { buildPageMetadata, pageSeo } from "@/data/seo";

export const metadata = buildPageMetadata(pageSeo.home);

export default function Page() {
  return <Home />;
}
