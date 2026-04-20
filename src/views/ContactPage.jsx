"use client";

import { useRef, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import PageHero from "../components/Corporate/PageHero";
import { contactSections, contacts, visuals } from "../data/siteContent";

const ContactPage = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    formRef.current?.reset();
    toast.success("Your message has been sent successfully.");
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white text-slate-900">
      <PageHero
        eyebrow="Contact"
        title="Speak to the office that fits your project needs."
        description="Reach our Abuja or Kaduna office to discuss contracting, construction, printing, training, or management support."
        image={visuals.contactImage}
        primaryCta={{ label: "View services", to: "/services" }}
        secondaryCta={{ label: "View projects", to: "/projects" }}
      />

      <section className="py-20 px-6">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactSections.map((office) => (
                <motion.article
                  key={office.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45 }}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="text-emerald-700" size={18} />
                    <h3 className="text-lg font-semibold text-slate-900">{office.label}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{office.address}</p>
                </motion.article>
              ))}
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">Direct contact</h3>
              <div className="mt-5 space-y-4 text-sm text-slate-600">
                <div className="flex gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-emerald-700" />
                  <p>{contacts.phones.join(" | ")}</p>
                </div>
                <div className="flex gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-emerald-700" />
                  <p>{contacts.email}</p>
                </div>
              </div>
            </div>
          </div>

          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Send a message
            </p>
            <h3 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
              Let us know how we can help.
            </h3>
            <p className="mt-4 text-[15px] leading-8 text-slate-600">
              Use the form below for enquiries, quotations, or general project
              discussions.
            </p>

            <div className="mt-8 grid gap-4">
              <label className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500/40"
                />
              </label>
              <label className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500/40"
                />
              </label>
              <label className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Message
                </span>
                <textarea
                  rows="7"
                  name="message"
                  required
                  placeholder="Tell us about your project"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500/40"
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
            <div className="border-b border-slate-200 px-6 py-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                Abuja Office Map
              </p>
            </div>
            <div className="h-[320px]">
              <iframe
                title="Sonat Edge Abuja office map"
                src="https://www.google.com/maps?q=Suite%20203%2C%20Anbeez%20Plaza%2C%20Wuse%20Zone%205%2C%20Ndola%20Crescent%2C%20Abuja&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
