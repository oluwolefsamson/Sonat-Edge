"use client";

import {
  BriefcaseBusiness,
  Building2,
  Printer,
  GraduationCap,
  ChartNoAxesCombined,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { services } from "../../data/companyProfile";
import { visuals } from "../../data/visuals";

const iconMap = {
  briefcase: BriefcaseBusiness,
  construction: Building2,
  printer: Printer,
  graduation: GraduationCap,
  management: ChartNoAxesCombined,
};

const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm"
          >
            <img
              src={visuals.servicesImage}
              alt="Service delivery visual"
              className="h-full min-h-[680px] w-full rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.88)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-emerald-300">
                Integrated services
              </p>
              <h2 className="mt-3 max-w-md text-4xl font-semibold leading-[1] text-white sm:text-5xl">
                Delivery capability that spans contracts, construction, print, and advisory work.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-200">
                Each service is built to support a clear outcome: dependable
                execution, better coordination, and a sharper client experience.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                Start a project
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="Services"
              title="Five core service lines built for execution, clarity, and speed."
              description="From contracting and construction to printing, training, and management support, Sonat Edge International Limited offers integrated solutions that combine execution quality with dependable client service."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {services.map((service, index) => {
                const Icon = iconMap[service.icon];
                return (
                  <motion.article
                    key={service.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white transition group-hover:bg-white group-hover:text-slate-950">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {service.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
