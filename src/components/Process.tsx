"use client";

import { siteConfig } from "@/data/site";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-[#00FF88]/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <FadeIn>
          <SectionHeading
            badge="Process"
            title="How I Build AI Systems"
            description="A structured approach from understanding the problem to production deployment."
          />
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          {siteConfig.process.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.08}>
              <div className="relative flex gap-6 sm:gap-8 pb-10 last:pb-0">
                {/* Timeline line */}
                {i < siteConfig.process.length - 1 && (
                  <div className="absolute left-6 sm:left-7 top-12 bottom-0 w-px bg-gradient-to-b from-[#00FF88]/30 to-[#00FF88]/5" />
                )}

                {/* Step number */}
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#00FF88]/10 border border-[#00FF88]/30 flex items-center justify-center text-[#00FF88] font-mono font-bold text-sm sm:text-base">
                  {step.step}
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
