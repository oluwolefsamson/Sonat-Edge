import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import PageHero from "../components/Corporate/PageHero";
import SectionHeading from "../components/Corporate/SectionHeading";
import { aboutHighlights, company, values, visuals } from "../data/siteContent";

const iconMap = {
  Excellence: Sparkles,
  Integrity: ShieldCheck,
  Innovation: Target,
  Reliability: CheckCircle2,
  "Customer Focus": Users,
};

const AboutPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <PageHero
        eyebrow="About us"
        title="A disciplined corporate partner built on trust, quality, and delivery."
        description="Sonat Edge International Limited supports organisations that want execution they can rely on. We bring structure, responsiveness, and practical expertise across contracting and business support services."
        image={visuals.aboutImage}
        primaryCta={{ label: "Explore Services", to: "/services" }}
        secondaryCta={{ label: "Contact Us", to: "/contact" }}
        stats={[
          { label: "Core services", value: "5" },
          { label: "Office locations", value: "2" },
          { label: "Service focus", value: "Integrated delivery" },
        ]}
      />

      <section className="py-20 px-6">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="overflow-hidden rounded-3xl shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
          >
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1800&q=80"
              alt="Corporate team reviewing project plans"
              className="h-[560px] w-full object-cover"
            />
          </motion.div>

          <div className="space-y-8">
            <SectionHeading
              eyebrow="Company overview"
              title="We combine professional delivery with practical business insight."
              description={company.overview}
              tone="light"
            />
            <p className="max-w-3xl text-[15px] leading-8 text-slate-600 sm:text-base">
              {company.edge}
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {aboutHighlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Mission and vision"
            title="Clear direction for how we work and what we build toward."
            description="We are guided by practical service delivery today and a long-term position as a dependable partner for clients across Nigeria and beyond."
            tone="light"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
                Mission
              </p>
              <p className="mt-4 text-[15px] leading-8 text-slate-600">
                {company.mission}
              </p>
            </motion.article>
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
                Vision
              </p>
              <p className="mt-4 text-[15px] leading-8 text-slate-600">
                {company.vision}
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Core values"
            title="Principles that shape every client engagement."
            description="These values guide our leadership, our delivery teams, and our standard for client relationships."
            tone="light"
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {values.map((value, index) => {
              const Icon = iconMap[value.title];
              return (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{value.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
