"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020807]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 text-lg font-bold font-mono">
              <span className="text-white">{siteConfig.name}</span>
              <span className="text-[#00FF88]">.dev</span>
            </a>
            <p className="text-sm text-gray-500 mt-1">
              {siteConfig.footer.tagline}
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-gray-500 hover:text-[#00FF88] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-gray-500 hover:text-[#00FF88] transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${siteConfig.social.email}`}
              aria-label="Email"
              className="p-2 text-gray-500 hover:text-[#00FF88] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-600">
            {siteConfig.footer.copyright}
          </p>
          <p className="text-xs text-gray-600 font-mono">
            {siteConfig.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
