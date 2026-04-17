"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { contacts, company } from "../../data/companyProfile";
import { navItems } from "../../data/siteContent";
import BrandMark from "./BrandMark";

const SiteFooter = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.9fr_0.9fr]">
          <div>
            <BrandMark className="mb-5 inline-flex" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Sonat Edge International Limited
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
              {company.edge}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
              Quick Links
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  href={item.to}
                  className="block transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="space-y-3 pt-4 text-sm text-slate-300">
              <div className="flex gap-3">
                <MapPin size={16} className="mt-1 shrink-0 text-emerald-300" />
                <p>{contacts.abuja.address}</p>
              </div>
              <div className="flex gap-3">
                <MapPin size={16} className="mt-1 shrink-0 text-emerald-300" />
                <p>{contacts.kaduna.address}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex gap-3">
                <Phone size={16} className="mt-1 shrink-0 text-emerald-300" />
                <p>{contacts.phones.join(" | ")}</p>
              </div>
              <div className="flex gap-3">
                <Mail size={16} className="mt-1 shrink-0 text-emerald-300" />
                <p>{contacts.email}</p>
              </div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-white"
              >
                Back to home
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex sm:items-center sm:justify-between">
          <p>(c) {new Date().getFullYear()} Sonat Edge International Limited.</p>
          <p>Abuja and Kaduna offices serving clients across Nigeria.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
