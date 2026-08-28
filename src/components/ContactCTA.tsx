"use client";

import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { siteConfig } from "@/data/site";
import FadeIn from "./FadeIn";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] sm:w-[500px] sm:h-[300px] bg-[#00FF88]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono font-medium text-[#00FF88] bg-[#00FF88]/10 border border-[#00FF88]/20 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] animate-pulse" />
              Let&apos;s Connect
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {siteConfig.contact.headline}
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
              {siteConfig.contact.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={siteConfig.contact.buttons.primary.href}
                className="group flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#020807] bg-[#00FF88] rounded-lg hover:bg-[#18C979] transition-all duration-200 hover:shadow-lg hover:shadow-[#00FF88]/20 hover:-translate-y-0.5"
              >
                {siteConfig.contact.buttons.primary.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={siteConfig.contact.buttons.secondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-lg hover:border-[#00FF88]/50 hover:text-[#00FF88] transition-all duration-200 hover:-translate-y-0.5"
              >
                <GithubIcon className="w-4 h-4" />
                {siteConfig.contact.buttons.secondary.label}
              </a>
              <a
                href={siteConfig.contact.buttons.tertiary.href}
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-400 border border-white/10 rounded-lg hover:border-white/20 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.contact.buttons.tertiary.label}
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
