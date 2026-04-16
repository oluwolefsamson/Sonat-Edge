"use client";

import {
  Sparkles,
  ShieldCheck,
  Lightbulb,
  Clock3,
  HeartHandshake,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { values } from "../../data/companyProfile";
import { visuals } from "../../data/visuals";

const iconMap = {
  sparkles: Sparkles,
  shield: ShieldCheck,
  lightbulb: Lightbulb,
  clock: Clock3,
  heart: HeartHandshake,
};

const Values = () => {
  return (
    <section id="values" className="relative overflow-hidden bg-gray-50 text-slate-900">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-slate-300/30 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <img
              src={visuals.valuesImage}
              alt="Corporate values visual"
              className="h-[680px] w-full rounded-lg object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02)_0%,rgba(15,23,42,0.82)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-sky-300">
                Our operating principles
              </p>
              <h2 className="mt-3 max-w-md text-4xl font-semibold leading-[1] text-white sm:text-5xl">
                Principles that keep the work disciplined and client-focused.
              </h2>
            </div>
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="Core Values"
              title="Why clients choose Sonat Edge"
              description="The company profile highlights a clear value system built around excellence, integrity, innovation, reliability, and customer focus. These principles shape how every project is approached and delivered."
              tone="light"
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {values.map((value, index) => {
                const Icon = iconMap[value.icon];
                return (
                  <motion.article
                    key={value.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-slate-900">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {value.description}
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

export default Values;
