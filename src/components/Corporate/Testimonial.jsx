import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { visuals } from "../../data/visuals";

const testimonials = [
  {
    name: "Client Operations Lead",
    role: "Corporate delivery partner",
    quote:
      "The team is direct, organized, and consistent. They kept the project moving and communicated clearly at every stage.",
  },
  {
    name: "Project Manager",
    role: "Construction client",
    quote:
      "Their execution was disciplined from planning through delivery.",
  },
  {
    name: "Business Development Head",
    role: "Contracting client",
    quote:
      "They handled coordination professionally and delivered on time.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials" className="bg-gray-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_55px_rgba(15,23,42,0.08)]"
          >
            <img
              src={visuals.testimonialFeatureImage}
              alt="Team collaboration"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Client feedback
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Representative feedback that reflects calm, reliable delivery.
              </p>
            </div>
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="Testimonials"
              title="What clients say about the experience"
              description="Short, representative feedback presented in a static format for easier scanning."
              tone="light"
            />

            <div className="mt-10 grid gap-5">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex items-start gap-3">
                    <Quote size={16} className="mt-1 shrink-0 text-slate-400" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.quote}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
