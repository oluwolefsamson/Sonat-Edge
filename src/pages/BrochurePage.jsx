import { Download, ExternalLink, FileText, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "../components/Corporate/PageHero";
import { company, values, visuals } from "../data/siteContent";
import { services } from "../data/companyProfile";

const brochureUrl = "/brochure/sonat-edge-corporate-profile.pdf";

const brochureHighlights = [
  "Company overview with mission, vision, and service focus",
  "Management structure and key officers",
  "Core services and delivery capability",
  "Contact details for Abuja and Kaduna offices",
];

const BrochurePage = () => {
  return (
    <div className="bg-white text-slate-900">
      <PageHero
        eyebrow="Company brochure"
        title="Download and preview the Sonat Edge corporate profile."
        description="Use this brochure to review the company profile, services, values, leadership structure, and office contacts in one place."
        image={visuals.aboutImage}
        primaryCta={{ label: "Download PDF", to: brochureUrl }}
        secondaryCta={{ label: "View services", to: "/services" }}
      />

      <section className="py-20 px-6">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <FileText className="text-sky-700" size={20} />
                <h2 className="text-2xl font-bold text-slate-900">Brochure overview</h2>
              </div>
              <p className="mt-4 text-[15px] leading-8 text-slate-600">
                {company.overview}
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {brochureHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0 text-sky-700" size={18} />
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
                Download
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                The full PDF brochure is ready for download and can be shared with
                clients, partners, or procurement teams.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={brochureUrl}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  <Download size={16} />
                  Download PDF
                </a>
                <a
                  href={brochureUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <ExternalLink size={16} />
                  Open in new tab
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
            >
              <div className="border-b border-slate-200 px-6 py-4">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                  PDF Preview
                </p>
              </div>
              <iframe
                title="Sonat Edge company brochure"
                src={brochureUrl}
                className="h-[780px] w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
              Services
            </p>
            <div className="mt-4 space-y-3">
              {services.map((service) => (
                <p key={service.title} className="text-sm leading-7 text-slate-600">
                  {service.title}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
              Values
            </p>
            <div className="mt-4 space-y-3">
              {values.map((value) => (
                <p key={value.title} className="text-sm leading-7 text-slate-600">
                  {value.title}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
              Contact
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Abuja and Kaduna offices, with contact details included in the brochure PDF.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrochurePage;
