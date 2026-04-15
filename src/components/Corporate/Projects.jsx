import { Building2, Printer, FileText } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "../../data/companyProfile";
import { visuals } from "../../data/visuals";

const iconMap = {
  Construction: Building2,
  Printing: Printer,
  Contracts: FileText,
};

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-sky-500/5 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <SectionHeading
              eyebrow="Projects"
              title="Image-led portfolio categories"
              description="The company profile does not list named project references, so this portfolio focuses on the delivery environments Sonate Edge is built to support."
            />
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300">
              Each card is designed as a visual showcase with a hover overlay, so
              the section reads more like a premium corporate portfolio than a flat
              list of services.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = iconMap[project.category];
              const imageMap = {
                projectOne: visuals.projectOne,
                projectTwo: visuals.projectTwo,
                projectThree: visuals.projectThree,
              };
              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_24px_60px_rgba(2,6,23,0.35)]"
                >
                  <img
                    src={imageMap[project.image]}
                    alt={project.title}
                    className="h-[560px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.1)_0%,rgba(2,6,23,0.92)_100%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(2,6,23,0.88)_100%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                      <Icon size={14} />
                      {project.category}
                    </div>
                    <h3 className="mt-4 max-w-[12rem] text-3xl font-semibold leading-none text-white opacity-0 translate-y-4 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-xs text-sm leading-7 text-slate-200 opacity-0 translate-y-4 transition duration-300 delay-75 group-hover:translate-y-0 group-hover:opacity-100">
                      {project.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
