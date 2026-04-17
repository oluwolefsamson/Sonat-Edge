"use client";

import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}) => {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const titleClass = tone === "light" ? "text-slate-900" : "text-white";
  const descriptionClass = tone === "light" ? "text-slate-600" : "text-slate-300";
  const eyebrowClass =
    tone === "light"
      ? "border-emerald-600/15 bg-emerald-600/10 text-emerald-700"
      : "border-emerald-400/20 bg-emerald-400/10 text-emerald-200";

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`flex flex-col gap-5 ${alignClass}`}
    >
      {eyebrow ? (
        <span
          className={`inline-flex items-center rounded-full border px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] ${eyebrowClass}`}
        >
          {eyebrow}
        </span>
      ) : null}
      <div className="max-w-3xl">
        <h2
          className={`text-3xl font-semibold leading-[1] tracking-tight sm:text-4xl lg:text-5xl ${titleClass}`}
        >
          {title}
        </h2>
        <p
          className={`mt-4 max-w-2xl text-[15px] leading-7 sm:text-base ${descriptionClass}`}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default SectionHeading;
