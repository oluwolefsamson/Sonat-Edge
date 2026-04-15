import { motion } from "framer-motion";
import PageHero from "../components/Corporate/PageHero";
import { projectItems, visuals } from "../data/siteContent";

const ProjectsPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <PageHero
        eyebrow="Projects"
        title="A visual portfolio that reflects the standard of our delivery."
        description="These project examples show the kind of premium outcomes Sonat Edge aims for across construction, print, business support, and capacity-building work."
        image={visuals.projectOne}
        primaryCta={{ label: "Start a project", to: "/contact" }}
        secondaryCta={{ label: "View services", to: "/services" }}
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projectItems.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(15,23,42,0.14)]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[480px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.92)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                    {project.category}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
