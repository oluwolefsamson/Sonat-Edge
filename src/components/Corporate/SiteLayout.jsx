"use client";

import { useEffect, useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import BrandLoader from "./BrandLoader";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const SiteLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <BrandLoader />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <a
        href="https://wa.me/2348037552910"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_18px_40px_rgba(16,185,129,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-white sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      >
        <SiWhatsapp size={28} />
      </a>
    </div>
  );
};

export default SiteLayout;
