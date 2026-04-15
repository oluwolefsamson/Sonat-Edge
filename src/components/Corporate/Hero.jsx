import { ArrowRight, Building2, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { company, differentiators } from "../../data/companyProfile";
import { visuals } from "../../data/visuals";

const heroStats = [
  { label: "Core services", value: "5" },
  { label: "Office locations", value: "2" },
  { label: "Profile focus", value: "Integrated delivery" },
];

const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10 bg-slate-950"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${visuals.heroImage})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92)_0%,rgba(2,6,23,0.76)_42%,rgba(2,6,23,0.42)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(14,165,233,0.2),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.08),transparent_22%)]" />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-28 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-sky-100 backdrop-blur-md">
            <Sparkles size={14} />
            Corporate Profile
          </div>
          <h1 className="mt-6 text-5xl font-semibold leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Contracting, construction, printing, and management with a sharper edge.
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-8 text-slate-200 sm:text-base lg:text-[17px]">
            {company.name} delivers dependable execution across integrated services,
            combining quality, innovation, and professional delivery for projects
            that need more than a generic provider.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(14,165,233,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
            >
              Our Services
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-sky-300/30 hover:bg-white/15"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 * index }}
                className="rounded-[1.65rem] border border-white/10 bg-slate-950/55 p-5 backdrop-blur-md"
              >
                <p className="text-2xl font-semibold text-white sm:text-[1.75rem]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="relative z-10"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/65 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl lg:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.2),_transparent_30%)]" />
            <div className="relative grid gap-5">
              <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.32em] text-sky-300">
                    Corporate Identity
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold leading-none text-white">
                    {company.name}
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
                    {company.tagline}
                  </p>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-[1.35rem] border border-white/10 bg-white/5 text-sky-300">
                  <Building2 size={26} />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-white">Vision</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {company.vision}
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-white">Mission</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {company.mission}
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {differentiators.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1.25rem] border border-white/5 bg-white/[0.03] p-4"
                  >
                    <div className="mt-1 rounded-full bg-sky-500/10 p-2 text-sky-300">
                      {index % 2 === 0 ? <Building2 size={16} /> : <ShieldCheck size={16} />}
                    </div>
                    <p className="text-sm leading-6 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
