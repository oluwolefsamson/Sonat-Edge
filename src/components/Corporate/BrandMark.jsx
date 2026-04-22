"use client";

const BrandMark = ({ compact = false, className = "" }) => {
  const wrapperClass = compact
    ? "flex items-center gap-3"
    : "flex items-center gap-4";

  const imageClass = compact
    ? "h-10 w-auto sm:h-12"
    : "h-10 w-auto sm:h-12";

  return (
    <div className={`${wrapperClass} ${className}`.trim()}>
      <img
        src="/brand-logo.png"
        alt="Sonat Edge International Limited"
        className={imageClass}
      />
    </div>
  );
};

export default BrandMark;
