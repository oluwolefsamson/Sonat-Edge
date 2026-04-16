"use client";

import { Building2, Printer, FileText } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "../../data/companyProfile";
import { visuals } from "../../data/visuals";

const iconMap = {
  Construction: Building2,
  Branding: Printer,
  Contracts: FileText,
  Training: FileText,
  Operations: Building2,
};

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <SectionHeading
              eyebrow="Projects"
              title="A curated portfolio of delivery environments"
              description="The portfolio focuses on the kinds of work Sonat Edge is built to support, presented as a more visual and premium showcase."
            />
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300">
              Each card uses a full-bleed image, hover overlay, and concise copy so
              the section reads like a premium corporate portfolio.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = iconMap[project.category];
            const imageMap = {
              projectOne: visuals.projectOne,
              projectTwo: visuals.projectTwo,
              projectThree: visuals.projectThree,
              projectFour: visuals.projectFour,
              projectFive: visuals.projectFive,
            };

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-sm"
              >
                <img
                  src={imageMap[project.image]}
                  alt={project.title}
                  className="h-[520px] w-full rounded-lg object-cover transition duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.06)_0%,rgba(2,6,23,0.86)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(2,6,23,0.78)_100%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white opacity-0 transition duration-300 group-hover:opacity-100">
                    <Icon size={14} />
                    {project.category}
                  </div>
                  <h3 className="mt-4 max-w-[12rem] text-2xl font-semibold leading-tight text-white opacity-0 translate-y-4 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
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
    </section>
  );
};

export default Projects;
