"use client";

import { ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 sm:mb-16 ${
        align === "center" ? "text-center mx-auto max-w-2xl" : "text-left"
      }`}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono font-medium text-[#00FF88] bg-[#00FF88]/10 border border-[#00FF88]/20 rounded-full mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] animate-pulse" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
