"use client";

import { techStack } from "@/data/skills";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function TechStack() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            badge="Stack"
            title="Technology Stack"
            description="The tools and technologies I use to build production-grade AI systems."
          />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {techStack.map((category, i) => (
            <FadeIn key={category.name} delay={i * 0.05}>
              <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#00FF88]/20 transition-all duration-300 h-full">
                <h3 className="text-xs font-mono font-semibold text-[#00FF88] uppercase tracking-wider mb-4">
                  {category.name}
                </h3>
                <div className="space-y-2">
                  {category.items.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#00FF88]/50" />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
