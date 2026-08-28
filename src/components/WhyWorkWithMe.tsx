"use client";

import { Target, Brain, Layers, Shield } from "lucide-react";
import { siteConfig } from "@/data/site";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

const icons = [Target, Brain, Layers, Shield];

export default function WhyWorkWithMe() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            badge="Why Me"
            title="Why Work With Me"
            description="What I bring to every project and collaboration."
          />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteConfig.whyWorkWithMe.map((item, i) => {
            const Icon = icons[i];
            return (
              <FadeIn key={item.title} delay={i * 0.05}>
                <div className="group h-full p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#00FF88]/30 hover:bg-[#00FF88]/[0.03] transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-lg bg-[#00FF88]/10 border border-[#00FF88]/20 flex items-center justify-center text-[#00FF88] mb-4 group-hover:bg-[#00FF88]/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
