import { CheckCircle2, FileText, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { company } from "../../data/companyProfile";
import { visuals } from "../../data/visuals";

const aboutPoints = [
  { label: "Quality execution", icon: CheckCircle2 },
  { label: "Long-term partnerships", icon: Users },
  { label: "Tailored solutions", icon: Target },
  { label: "Efficient delivery", icon: FileText },
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-gray-50 text-slate-900">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
              <img
                src={visuals.aboutImage}
                alt="Sonate Edge operations and service delivery"
                className="h-[520px] w-full rounded-[1.5rem] object-cover object-center"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5 text-white shadow-2xl backdrop-blur-md">
                <p className="text-[11px] uppercase tracking-[0.32em] text-sky-300">
                  Company overview
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Built to deliver a competitive edge through efficient execution,
                  trusted relationships, and broad service capability.
                </p>
              </div>
            </div>
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="About"
              title="A versatile company focused on quality, efficiency, and client satisfaction."
              description={company.overview}
              tone="light"
            />
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-slate-600 sm:text-base lg:text-[17px]">
              {company.edge}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {aboutPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.label}
                    className="flex items-center gap-3 rounded-[1.35rem] border border-slate-200 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-700 ring-1 ring-sky-400/15">
                      <Icon size={18} />
                    </div>
                    <p className="text-sm font-semibold text-slate-900">
                      {point.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                View Services
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-sky-400/40"
              >
                Contact Office
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
