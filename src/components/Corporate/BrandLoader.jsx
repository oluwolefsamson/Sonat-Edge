"use client";

 "use client";

const BrandLoader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center gap-6">
        <div className="rounded-3xl bg-white px-6 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <img
            src="/brand-logo.png"
            alt="Sonat Edge International Limited"
            className="h-20 w-auto sm:h-24"
          />
        </div>
        <div className="h-1.5 w-56 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-emerald-400" />
        </div>
      </div>
    </div>
  );
};

export default BrandLoader;
