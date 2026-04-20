"use client";

import { motion } from "framer-motion";

const BrandLoader = () => {
  return (
    <div className="fixed inset-0 z-[100] overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_28%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border border-emerald-300/20" />
          <motion.div
            className="absolute inset-[3px] rounded-full border border-white/10 border-t-emerald-300"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute inset-3 rounded-full bg-emerald-300/10"
            animate={{ opacity: [0.35, 0.7, 0.35] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandLoader;
