"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "../../data/siteContent";
import BrandMark from "./BrandMark";

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (itemPath) =>
    itemPath === "/"
      ? pathname === "/"
      : pathname === itemPath || pathname.startsWith(`${itemPath}/`);

  const linkClass = (itemPath) =>
    [
      "text-sm font-medium transition duration-200",
      isActive(itemPath) ? "text-white" : "text-slate-300 hover:text-white",
    ].join(" ");

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/5 transition-colors ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl"
          : "bg-slate-950/55 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <BrandMark />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={linkClass(item.to)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(14,165,233,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
          >
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-slate-950/95 px-6 py-4 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  href={item.to}
                  onClick={() => setOpen(false)}
                  className={[
                    "rounded-2xl border px-4 py-3 text-sm font-medium transition",
                    isActive(item.to)
                      ? "border-sky-400/30 bg-sky-500/10 text-white"
                      : "border-white/5 bg-white/5 text-slate-200",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-sky-500 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default SiteHeader;
