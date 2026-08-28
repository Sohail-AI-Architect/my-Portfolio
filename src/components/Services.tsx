"use client";

import {
  Brain,
  Bot,
  Layers,
  Zap,
  Server,
  Cloud,
} from "lucide-react";
import { services } from "@/data/services";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-6 h-6" />,
  Bot: <Bot className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Server: <Server className="w-6 h-6" />,
  Cloud: <Cloud className="w-6 h-6" />,
};

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            badge="Services"
            title="Capabilities"
            description="End-to-end AI system design, development, and deployment services."
          />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.05}>
              <div className="group h-full p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#00FF88]/30 hover:bg-[#00FF88]/[0.03] transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF88]/5 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-[#00FF88]/10 border border-[#00FF88]/20 flex items-center justify-center text-[#00FF88] mb-4 group-hover:bg-[#00FF88]/20 transition-colors">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono text-[#00FF88]/70 bg-[#00FF88]/10 rounded"
                    >
                      {tag}
                    </span>
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
