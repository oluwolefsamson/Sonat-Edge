import { MapPin, Phone, Mail, Globe, Send } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { contacts } from "../../data/companyProfile";
import { visuals } from "../../data/visuals";

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_24px_70px_rgba(2,6,23,0.35)]"
          >
            <img
              src={visuals.contactImage}
              alt="Contact and office visual"
              className="h-[920px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.2)_0%,rgba(2,6,23,0.94)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-sky-300">
                Reach the team
              </p>
              <h2 className="mt-3 max-w-md text-4xl font-semibold leading-none text-white">
                Connect with the office that matches your project.
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
                <div className="flex gap-3">
                  <MapPin size={18} className="mt-1 shrink-0 text-sky-300" />
                  <p>{contacts.abuja.address}</p>
                </div>
                <div className="flex gap-3">
                  <MapPin size={18} className="mt-1 shrink-0 text-sky-300" />
                  <p>{contacts.kaduna.address}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Reach the Abuja or Kaduna office"
              description="Use the details below to connect with Sonate Edge International Limited. A contact form and map placeholder are included for a polished website experience."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.65rem] border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3 text-sky-300">
                  <MapPin size={18} />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
                    {contacts.abuja.label}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-200">
                  {contacts.abuja.address}
                </p>
              </div>

              <div className="rounded-[1.65rem] border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3 text-sky-300">
                  <MapPin size={18} />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
                    {contacts.kaduna.label}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-200">
                  {contacts.kaduna.address}
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-[1.65rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-semibold text-white">Direct contact</h3>
              <div className="mt-4 space-y-4 text-sm text-slate-200">
                <div className="flex gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-sky-300" />
                  <p>{contacts.phones.join(" | ")}</p>
                </div>
                <div className="flex gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-sky-300" />
                  <p>{contacts.email}</p>
                </div>
                <div className="flex gap-3">
                  <Globe size={18} className="mt-0.5 shrink-0 text-sky-300" />
                  <p>{contacts.website}</p>
                </div>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65 }}
              className="mt-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_70px_rgba(2,6,23,0.28)] backdrop-blur-xl sm:p-8"
            >
              <h3 className="text-3xl font-semibold leading-none text-white">
                Send a message
              </h3>
              <p className="mt-4 max-w-xl text-[15px] leading-8 text-slate-300">
                Tell us about your project, procurement need, print job, or
                management support request.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                    Full name
                  </span>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/40"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                    Email
                  </span>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/40"
                  />
                </label>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                    Phone
                  </span>
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/40"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                    Service
                  </span>
                  <select className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition focus:border-sky-400/40">
                    <option>General Contracts</option>
                    <option>Construction Services</option>
                    <option>Printing Services</option>
                    <option>Training & Capacity Building</option>
                    <option>Management Services</option>
                  </select>
                </label>
              </div>

              <label className="mt-4 block space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                  Message
                </span>
                <textarea
                  rows="6"
                  placeholder="Share your requirements"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/40"
                />
              </label>

              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(14,165,233,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
              >
                Send Message
                <Send size={16} />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
