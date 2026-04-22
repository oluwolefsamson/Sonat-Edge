import ProjectsPage from "@/views/ProjectsPage";
import { buildPageMetadata, pageSeo } from "@/data/seo";

export const metadata = buildPageMetadata(pageSeo.projects);

export default function Page() {
  return <ProjectsPage />;
}
