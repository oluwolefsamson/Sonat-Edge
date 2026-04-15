import { MapPin, Phone, Mail, Globe, Send } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { contacts } from "../../data/companyProfile";
import { visuals } from "../../data/visuals";

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm"
            >
              <img
                src={visuals.contactImage}
                alt="Contact and office visual"
                className="h-[420px] w-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.88)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-300">
                  Reach the team
                </p>
                <h2 className="mt-3 max-w-md text-4xl font-semibold leading-[1] text-white sm:text-5xl">
                  Connect with the office that matches your project.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
                  Speak to the Abuja or Kaduna office for contracting, project
                  support, print production, or management services.
                </p>
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin size={18} />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
                    {contacts.abuja.label}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {contacts.abuja.address}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin size={18} />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
                    {contacts.kaduna.label}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {contacts.kaduna.address}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-semibold text-white">Direct contact</h3>
              <div className="mt-4 space-y-4 text-sm text-slate-300">
                <div className="flex gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-slate-400" />
                  <p>{contacts.phones.join(" | ")}</p>
                </div>
                <div className="flex gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-slate-400" />
                  <p>{contacts.email}</p>
                </div>
                <div className="flex gap-3">
                  <Globe size={18} className="mt-0.5 shrink-0 text-slate-400" />
                  <p>{contacts.website}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Reach the Abuja or Kaduna office"
              description="Use the details below to connect with Sonate Edge International Limited."
            />

            <motion.form
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65 }}
              className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm sm:p-8"
            >
              <h3 className="text-3xl font-semibold leading-none text-white">
                Send a message
              </h3>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-300">
                Tell us about your project, procurement need, print job, or
                management support request.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                    Full name
                  </span>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-slate-300/40"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                    Email
                  </span>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-slate-300/40"
                  />
                </label>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                    Phone
                  </span>
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-slate-300/40"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                    Service
                  </span>
                  <select className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3.5 text-sm text-white outline-none transition focus:border-slate-300/40">
                    <option>General Contracts</option>
                    <option>Construction Services</option>
                    <option>Printing Services</option>
                    <option>Training & Capacity Building</option>
                    <option>Management Services</option>
                  </select>
                </label>
              </div>

              <label className="mt-4 block space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                  Message
                </span>
                <textarea
                  rows="6"
                  placeholder="Share your requirements"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-slate-300/40"
                />
              </label>

              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Send Message
                <Send size={16} />
              </button>
            </motion.form>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-sm">
              <div className="relative h-[220px] bg-[linear-gradient(135deg,rgba(15,23,42,0.98)_0%,rgba(2,6,23,0.95)_100%)]">
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white">
                  <MapPin size={16} className="text-white/80" />
                  Map placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
