"use client";

import { motion } from "framer-motion";
import { Quote, Star, BadgeCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { visuals } from "../../data/visuals";

const testimonials = [
  {
    quote:
      "Sonat Edge handled the brief with structure and clear communication. The work stayed on track and the team was easy to work with.",
    name: "Amina Bello",
    role: "Project Sponsor",
    company: "Corporate client",
    badge: "Project delivery",
    image: visuals.testimonialOne,
  },
  {
    quote:
      "What stood out was the follow-through. We always knew what was next, and that made the process feel controlled.",
    name: "John Okafor",
    role: "Operations Lead",
    company: "Operations client",
    badge: "Delivery control",
    image: visuals.testimonialTwo,
  },
  {
    quote:
      "The delivery felt practical and professional. The final output matched the brief and the turnaround was reliable.",
    name: "Abayomi Oluwaseun",
    role: "Commercial Manager",
    company: "Commercial client",
    badge: "Reliable turnaround",
    image: visuals.testimonialThree,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Testimonials"
            title="Selected client feedback"
            description="Short notes from project sponsors and operators who worked with Sonat Edge."
            align="center"
            tone="dark"
          />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name + index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(2,6,23,0.18)] backdrop-blur-sm"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent" />

              <div className="flex items-start gap-4">
                <div className="relative shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-white/10"
                  />
                  <span className="absolute -right-1 -bottom-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-900 bg-emerald-400 text-[10px] text-slate-950">
                    <BadgeCheck size={10} />
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-white">{item.name}</p>
                    <span className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-200">
                      {item.badge}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="mt-1 text-sm text-slate-300">{item.role}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-400">
                      {item.company}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 text-amber-300">
                <Star size={15} fill="currentColor" />
                <Star size={15} fill="currentColor" />
                <Star size={15} fill="currentColor" />
                <Star size={15} fill="currentColor" />
                <Star size={15} fill="currentColor" />
              </div>

              <div className="mt-5 flex items-start gap-3">
                <Quote size={18} className="mt-1 shrink-0 text-slate-400" />
                <p className="text-[15px] leading-8 text-slate-200">
                  {item.quote}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">
                  Client feedback
                </span>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">
                  Profile card
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
