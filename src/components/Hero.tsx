"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { siteConfig } from "@/data/site";
import Terminal from "./Terminal";

const techBadges = [
  "TypeScript",
  "Python",
  "Next.js",
  "FastAPI",
  "PostgreSQL",
  "OpenAI-SDK",
  "OpenRouter",
  "MCP",
  "Docker",
  "Kubernetes",
  "Vercel",
  "Cloud",
];

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[600px] lg:min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-[#00FF88]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-[#00FF88]/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-[#00FF88] bg-[#00FF88]/10 border border-[#00FF88]/20 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
                {siteConfig.hero.availability}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-gray-400 bg-white/5 border border-white/10 rounded-full">
                📍 {siteConfig.hero.location}
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="text-white">Agentic AI </span>
              <span className="text-[#00FF88]">Developer</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-400 font-mono mb-4">
              {siteConfig.hero.subtitle}
            </p>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              {siteConfig.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={() => scrollTo("#projects")}
                className="group flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#020807] bg-[#00FF88] rounded-lg hover:bg-[#18C979] transition-all duration-200 hover:shadow-lg hover:shadow-[#00FF88]/20 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-lg hover:border-[#00FF88]/50 hover:text-[#00FF88] transition-all duration-200 hover:-translate-y-0.5"
              >
                Let&apos;s Work Together
              </button>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-gray-400 border border-white/10 rounded-lg hover:border-white/20 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[11px] font-mono text-gray-400 bg-white/5 border border-white/10 rounded-md hover:border-[#00FF88]/30 hover:text-[#00FF88]/80 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column — Terminal */}
          <div className="hidden lg:block">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
