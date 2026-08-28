"use client";

import { siteConfig } from "@/data/site";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            badge="About"
            title={siteConfig.about.headline}
          />
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="space-y-5 text-gray-400 text-base sm:text-lg leading-relaxed">
              {siteConfig.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
              {siteConfig.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#00FF88]/30 hover:bg-[#00FF88]/5 transition-all duration-300 text-center"
                >
                  <div className="text-xl sm:text-2xl font-bold font-mono text-[#00FF88] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
