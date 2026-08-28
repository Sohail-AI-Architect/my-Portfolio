"use client";

import {
  MessageSquare,
  Workflow,
  Wrench,
  Plug,
  FileCode,
  GitBranch,
  ClipboardCheck,
  Users,
  Zap,
  Bot,
  Database,
  Link,
  Cloud,
} from "lucide-react";
import { expertise } from "@/data/skills";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare className="w-5 h-5" />,
  Workflow: <Workflow className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
  Plug: <Plug className="w-5 h-5" />,
  FileCode: <FileCode className="w-5 h-5" />,
  GitBranch: <GitBranch className="w-5 h-5" />,
  ClipboardCheck: <ClipboardCheck className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Bot: <Bot className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Link: <Link className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
};

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 sm:py-28 relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#00FF88]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <FadeIn>
          <SectionHeading
            badge="Expertise"
            title="Agentic AI Capabilities"
            description="Core competencies in AI agent design, development, and production deployment."
          />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {expertise.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.03}>
              <div className="group flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#00FF88]/30 hover:bg-[#00FF88]/[0.03] transition-all duration-300 h-full">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#00FF88]/10 border border-[#00FF88]/20 flex items-center justify-center text-[#00FF88] group-hover:bg-[#00FF88]/20 transition-colors">
                  {iconMap[item.icon]}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.description}
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
