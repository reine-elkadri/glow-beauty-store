import React from "react";

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = false
}) {

  return (
    <div className={`section-title ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <span className="eyebrow">
          {eyebrow}
        </span>
      )}
      <h2>{title}</h2>

      {subtitle && (
        <p>{subtitle}</p>
      )}

    </div>
  );
}
