"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { team } from "../../data/companyProfile";
import { visuals } from "../../data/visuals";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";

const TeamCard = ({ member, index, onViewProfile, featured = false }) => {
  const avatar = member.image ?? visuals.teamFallbackProfileImage;
  const avatarClass =
    member.image
      ? member.image === "/team/samson.png"
        ? "h-full w-full object-contain object-center"
        : "h-full w-full object-cover object-[center_15%]"
      : "h-full w-full object-contain object-top p-4";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className={`overflow-hidden border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${
        featured ? "rounded-[2rem]" : "rounded-2xl"
      }`}
    >
      <div className={featured ? "grid gap-0 lg:grid-cols-[0.92fr_1.08fr]" : "grid gap-0"}>
        <button
          type="button"
          onClick={() => onViewProfile(member, avatar)}
          className={`group block overflow-hidden bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 ${
            featured ? "aspect-[4/5] lg:aspect-auto lg:min-h-[340px]" : "aspect-[4/5]"
          }`}
          aria-label={`View profile for ${member.name}`}
        >
          <div className="relative h-full w-full">
            <img
              src={avatar}
              alt={member.name}
              className={avatarClass}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.04)_0%,rgba(15,23,42,0.2)_100%)]" />
          </div>
        </button>

        <div className="space-y-4 p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex rounded-full border border-emerald-600/15 bg-emerald-600/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-700">
              {member.role}
            </span>
            {featured ? (
              <span className="inline-flex rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-700">
                Featured leader
              </span>
            ) : null}
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold leading-snug text-slate-900 sm:text-[1.35rem]">
              {member.name}
            </h3>
            <p className="text-sm leading-6 text-slate-600">{member.position}</p>
          </div>
          <p className="text-sm leading-7 text-slate-600">
            {featured
              ? "This role anchors strategy, delivery, and company direction."
              : "Tap the card to view the full profile summary and role details."}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleViewProfile = (member, avatar) => {
    setSelectedMember({
      ...member,
      avatar,
    });
  };

  const getProfileSummary = (member) => {
    if (!member) return "";

    const role = member.role ?? "Team Member";
    const position = member.position ?? "the team";

    switch (role) {
      case "CEO":
        return `${member.name} provides overall leadership for ${position.toLowerCase()}. They guide strategy, align teams around business goals, and ensure execution stays focused, disciplined, and aligned with the company’s long-term objectives.`;
      case "Director": {
        const area = position.replace(/^Director,\s*/i, "");
        return `${member.name} leads the ${area} function, providing direction, oversight, and coordination across key activities. Their role supports consistent planning, informed decision-making, and strong delivery across the business.`;
      }
      case "HR":
        return `${member.name} oversees human resources operations, supporting staff welfare, workplace coordination, and people-focused processes. Their work helps maintain a structured, professional, and effective work environment.`;
      case "Finance":
        return `${member.name} manages finance operations with attention to accuracy, accountability, and control. The role supports proper record keeping, financial discipline, and informed business decisions.`;
      case "Admin":
        return `${member.name} handles administrative operations that keep the office organized and responsive. The role supports day-to-day coordination, internal efficiency, and smooth workflow across departments.`;
      case "IT":
        return `${member.name} supports the company’s technology operations, helping maintain reliable systems, digital tools, and technical coordination. The role is important for keeping work processes efficient and connected.`;
      default:
        return `${member.name} serves as ${position}. In this capacity, they contribute to the team’s coordination, execution, and operational effectiveness.`;
    }
  };

  return (
    <section id="team" className="relative overflow-hidden bg-gray-50 text-slate-900">
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-slate-300/30 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Team"
            title="Leadership and key officers"
            description="The team is organized as a clear leadership bench and a support group of officers who keep delivery, finance, administration, HR, and technology moving in step."
            tone="light"
          />
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.08fr_0.92fr] xl:items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
          >
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-emerald-700">
                  Leadership bench
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  People responsible for direction and execution.
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Leaders
                  </p>
                  <p className="mt-1 text-xl font-semibold text-slate-900">
                    {team.leadership.length}
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Officers
                  </p>
                  <p className="mt-1 text-xl font-semibold text-slate-900">
                    {team.officers.length}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-5">
              {team.leadership.map((member, index) => (
                <TeamCard
                  key={member.name}
                  member={member}
                  index={index}
                  onViewProfile={handleViewProfile}
                  featured={index === 0}
                />
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-5 shadow-sm sm:p-6"
          >
            <div className="flex items-end justify-between gap-4 border-b border-slate-200 pb-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-emerald-700">
                  Officers
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Support roles that keep the work moving.
                </h2>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {team.officers.map((member, index) => (
                <TeamCard
                  key={member.name}
                  member={member}
                  index={index + team.leadership.length}
                  onViewProfile={handleViewProfile}
                />
              ))}
            </div>
          </motion.aside>
        </div>
      </div>

      <Dialog open={Boolean(selectedMember)} onOpenChange={(open) => !open && setSelectedMember(null)}>
        <DialogContent className="w-[calc(100vw-2rem)] max-w-[34rem] overflow-hidden border-slate-200 bg-white p-0 shadow-2xl sm:w-[calc(100vw-3rem)] sm:max-w-4xl sm:rounded-3xl">
          {selectedMember && (
            <div className="flex max-h-[calc(100vh-5rem)] flex-col md:max-h-[calc(100vh-2rem)] md:grid md:grid-cols-[1fr_1.1fr]">
              <div className="relative bg-slate-950 md:min-h-full">
                <div className="relative aspect-[3/4] w-full overflow-hidden sm:aspect-[16/11] md:aspect-auto md:h-full">
                  <img
                    src={selectedMember.avatar}
                    alt={selectedMember.name}
                    className={`h-full w-full ${
                      selectedMember.image
                        ? "object-cover object-center"
                        : "bg-white object-contain object-top p-4"
                    }`}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.06)_0%,rgba(15,23,42,0.55)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-8">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-emerald-300">
                      Team profile
                    </p>
                    <h3 className="mt-2 text-xl font-semibold leading-tight sm:mt-3 sm:text-4xl">
                      {selectedMember.name}
                    </h3>
                    <p className="mt-2 max-w-sm text-xs leading-5 text-slate-200 sm:text-sm sm:leading-6">
                      {selectedMember.position}
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-y-auto bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-5 sm:p-8 md:p-10">
                <DialogHeader className="text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
                    Profile details
                  </p>
                  <DialogTitle className="mt-2 text-2xl font-semibold text-slate-900 sm:mt-3 sm:text-3xl">
                    {selectedMember.name}
                  </DialogTitle>
                  <DialogDescription className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
                    {selectedMember.position} with responsibility for {selectedMember.role.toLowerCase()} operations.
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Role
                    </p>
                    <p className="mt-2 text-base font-medium text-slate-900">
                      {selectedMember.role}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Position
                    </p>
                    <p className="mt-2 text-base font-medium text-slate-900">
                      {selectedMember.position}
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Summary
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {getProfileSummary(selectedMember)}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                    {selectedMember.role}
                  </span>
                  <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                    Team member
                  </span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Team;
