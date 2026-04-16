"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { team } from "../../data/companyProfile";
import { visuals } from "../../data/visuals";

const TeamCard = ({ member, index }) => {
  const avatar = member.image ?? visuals.teamPortraits[index % visuals.teamPortraits.length];
  const avatarClass =
    member.image === "/team/Samson.jpeg"
      ? "aspect-[4/5] w-full rounded-lg object-cover object-center sm:h-[250px] sm:aspect-auto sm:scale-[1.16] sm:transform-gpu"
      : "aspect-[4/5] w-full rounded-lg object-cover object-[center_15%] sm:h-[250px] sm:aspect-auto sm:scale-[1.16] sm:transform-gpu";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative">
        <img
          src={avatar}
          alt={member.name}
          className={avatarClass}
        />
      </div>
      <div className="space-y-2 p-4">
        <span className="inline-flex rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-700">
          {member.role}
        </span>
        <h3 className="text-xl font-bold leading-snug text-slate-900">
          {member.name}
        </h3>
        <p className="text-sm leading-6 text-slate-600">{member.position}</p>
      </div>
    </motion.article>
  );
};

const Team = () => {
  return (
    <section id="team" className="relative overflow-hidden bg-gray-50 text-slate-900">
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-slate-300/30 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
        <img
          src={visuals.teamFeatureImage}
          alt="Leadership and management visual"
          className="relative z-0 block aspect-[4/5] w-full rounded-lg object-cover object-center sm:aspect-auto sm:h-[680px] lg:h-[640px]"
        />
            <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(15,23,42,0.88)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 z-20 p-8 text-white">
              <p className="text-[11px] uppercase tracking-[0.32em] text-sky-300">
                Management structure
              </p>
              <h2 className="mt-3 text-4xl font-semibold leading-[1] sm:text-5xl">
                Experienced leadership across delivery, finance, development, and operations.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
                The profile highlights a clear structure from CEO through key
                officers, each responsible for keeping execution disciplined and
                coordinated.
              </p>
            </div>
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="Team"
              title="Leadership and key officers"
              description="The company profile includes top management, directors, and key departmental officers who drive execution across finance, implementation, business development, HR, administration, and IT."
              tone="light"
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {team.leadership.map((member, index) => (
                <TeamCard key={member.name} member={member} index={index} />
              ))}
              {team.officers.map((member, index) => (
                <TeamCard
                  key={member.name}
                  member={member}
                  index={index + team.leadership.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
