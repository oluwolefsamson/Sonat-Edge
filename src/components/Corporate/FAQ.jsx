"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { visuals } from "../../data/visuals";

const faqs = [
  {
    question: "What type of projects do you handle?",
    answer:
      "Sonat Edge supports contracting, construction, printing, training, and management work for organisations that want a dependable execution partner.",
  },
  {
    question: "How do I start a conversation?",
    answer:
      "Use the contact form, phone number, or email address on the contact section. Share the brief, timeline, and any constraints you already know.",
  },
  {
    question: "Can you work on one-off or ongoing assignments?",
    answer:
      "Yes. The scope can be tailored to a single assignment or a recurring support need depending on the project requirements.",
  },
  {
    question: "Do you handle both small and larger engagements?",
    answer:
      "Yes, as long as the scope is clear and the delivery expectations are properly defined at the start.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-gray-50 text-slate-900">
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
              src={visuals.faqImage}
              alt="Black professionals in a business meeting"
              className="h-[680px] w-full rounded-lg object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.04)_0%,rgba(15,23,42,0.82)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-emerald-300">
                Quick answers
              </p>
              <h2 className="mt-3 max-w-md text-4xl font-semibold leading-[1] text-white sm:text-5xl">
                Answers to the first questions people usually ask.
              </h2>
             
            </div>
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Answers to the first questions people usually ask"
              description="Use this section to reduce friction and make the next step easier for serious leads."
              tone="light"
            />
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-600 shadow-sm">
              <MessageCircleQuestion size={14} />
              Quick answers
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={item.question}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base font-semibold text-slate-900 sm:text-lg">
                        {item.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-slate-500 transition ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-0 text-sm leading-7 text-slate-600">
                            {item.answer}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
