"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "./Corporate/PageHero";

const ServiceDetailPage = ({ service, relatedServices }) => {
  return (
    <div className="bg-white text-slate-900">
      <PageHero
        eyebrow="Service detail"
        title={service.title}
        description={service.description}
        image={service.image}
        primaryCta={{ label: "Contact us", to: "/contact" }}
        secondaryCta={{ label: "Back to services", to: "/services" }}
      />

      <section className="py-20 px-6">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-3xl shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-[560px] w-full object-cover"
            />
          </motion.div>

          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                What we deliver
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                {service.title}
              </h2>
              <p className="text-[15px] leading-8 text-slate-600 sm:text-base">
                {service.longDescription}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-700" size={18} />
                  <p className="text-sm leading-7 text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 px-6">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Related services
            </p>
            <h3 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
              More ways we can support your project.
            </h3>
            <p className="mt-4 max-w-2xl text-[15px] leading-8 text-slate-600">
              Sonat Edge works across multiple service lines, so clients can
              engage one team for complementary delivery needs.
            </p>
          </div>

          <div className="grid gap-4">
            {relatedServices.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
                <ArrowRight
                  size={18}
                  className="shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-900"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
