"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "../components/Corporate/PageHero";
import { serviceItems, visuals } from "../data/siteContent";

const ServicesPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <PageHero
        eyebrow="Services"
        title="Integrated services designed for dependable delivery."
        description="From contracts and construction to printing, training, and management support, Sonat Edge delivers practical solutions with professional follow-through."
        image={visuals.servicesImage}
        primaryCta={{ label: "Talk to us", to: "/contact" }}
        secondaryCta={{ label: "View projects", to: "/projects" }}
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {serviceItems.map((service, index) => (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(2,6,23,0.62)_100%)]" />
                </div>
                <div className="space-y-4 p-6">
                  <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                  <p className="text-sm leading-7 text-slate-600">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition hover:text-emerald-700"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
