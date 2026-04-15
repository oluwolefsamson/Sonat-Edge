import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PageHero = ({
  eyebrow,
  title,
  description,
  image,
  primaryCta,
  secondaryCta,
  stats,
}) => {
  const renderCta = (cta, variant) => {
    if (!cta) return null;

    const isExternal = /^https?:\/\//.test(cta.to) || cta.to.endsWith(".pdf");
    const baseClass =
      variant === "primary"
        ? "inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
        : "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10";

    if (isExternal) {
      return (
        <a
          href={cta.to}
          download={cta.to.endsWith(".pdf")}
          target={cta.to.startsWith("http") ? "_blank" : undefined}
          rel={cta.to.startsWith("http") ? "noreferrer" : undefined}
          className={baseClass}
        >
          {cta.label}
        </a>
      );
    }

    return (
      <Link to={cta.to} className={baseClass}>
        {cta.label}
      </Link>
    );
  };

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.88)_0%,rgba(2,6,23,0.62)_50%,rgba(2,6,23,0.3)_100%)]" />

      <div className="mx-auto grid min-h-[72vh] max-w-7xl gap-10 px-6 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 max-w-3xl space-y-6"
        >
          {eyebrow ? (
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-100 backdrop-blur">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            {description}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col gap-4 sm:flex-row">
              {renderCta(primaryCta, "primary")}
              {renderCta(secondaryCta, "secondary")}
            </div>
          )}

          {stats?.length ? (
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          ) : null}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative z-10 hidden lg:block"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
            <div className="overflow-hidden rounded-[1.4rem]">
              <img
                src={image}
                alt={title}
                className="h-[460px] w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
