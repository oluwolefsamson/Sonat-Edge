"use client";

const BrandLoader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center gap-6">
        <div
          className="h-16 w-16 animate-spin rounded-full border-4 border-emerald-500/20 border-t-emerald-400"
          aria-hidden="true"
        />
        <div className="h-1.5 w-56 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-emerald-400" />
        </div>
      </div>
    </div>
  );
};

export default BrandLoader;
