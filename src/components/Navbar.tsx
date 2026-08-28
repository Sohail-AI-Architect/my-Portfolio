"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, Mail, Download, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { siteConfig } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";
import { generateCV } from "@/lib/generate-cv";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [cvLoading, setCvLoading] = useState(false);

  const handleDownloadCV = useCallback(async () => {
    if (cvLoading) return;
    setCvLoading(true);
    try {
      generateCV();
    } catch {
      // Silently fail — jsPDF errors are rare but handled
    } finally {
      // Small delay so the loader is visible
      setTimeout(() => setCvLoading(false), 600);
    }
  }, [cvLoading]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = siteConfig.nav.map((n) => n.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#020807]/90 backdrop-blur-md border-b border-[#00FF88]/10 shadow-lg shadow-[#00FF88]/5"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled ? "px-4 py-3" : "px-4 py-5"
        } lg:px-8`}
      >
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#home");
          }}
          className="flex items-center gap-2 text-lg font-bold font-mono"
        >
          <span className="text-white">{siteConfig.name}</span>
          <span className="text-[#00FF88]">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.href);
              }}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeSection === item.href.replace("#", "")
                  ? "text-[#00FF88] bg-[#00FF88]/10"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 text-gray-400 hover:text-[#00FF88] transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-gray-400 hover:text-[#00FF88] transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${siteConfig.social.email}`}
            aria-label="Email"
            className="p-2 text-gray-400 hover:text-[#00FF88] transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={handleDownloadCV}
            disabled={cvLoading}
            className="ml-2 flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#020807] bg-[#00FF88] rounded-lg hover:bg-[#18C979] transition-colors disabled:opacity-60"
          >
            {cvLoading ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Download className="w-3.5 h-3.5" />
            )}
            {cvLoading ? "Generating..." : "Download CV"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-400 hover:text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#020807]/95 backdrop-blur-md border-b border-[#00FF88]/10"
          >
            <div className="px-4 py-4 space-y-1">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.href);
                  }}
                  className={`block px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                    activeSection === item.href.replace("#", "")
                      ? "text-[#00FF88] bg-[#00FF88]/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex items-center gap-3">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 text-gray-400 hover:text-[#00FF88]"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 text-gray-400 hover:text-[#00FF88]"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${siteConfig.social.email}`}
                  aria-label="Email"
                  className="p-2 text-gray-400 hover:text-[#00FF88]"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <button
                  onClick={handleDownloadCV}
                  disabled={cvLoading}
                  className="ml-auto flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#020807] bg-[#00FF88] rounded-lg disabled:opacity-60"
                >
                  {cvLoading ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Download className="w-3.5 h-3.5" />
                  )}
                  {cvLoading ? "Generating..." : "Download CV"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
