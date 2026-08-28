"use client";

import { ExternalLink, Folder } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { projects, futureProject } from "@/data/projects";
import type { Project } from "@/data/projects";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

function ProjectCard({ project }: { project: Project }) {
  const statusColors: Record<string, string> = {
    completed: "text-[#00FF88] bg-[#00FF88]/10",
    "in-progress": "text-yellow-400 bg-yellow-400/10",
    planned: "text-gray-400 bg-white/10",
  };

  return (
    <div className="group flex flex-col h-full p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#00FF88]/30 hover:bg-[#00FF88]/[0.03] transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF88]/5">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <Folder className="w-5 h-5 text-[#00FF88]" />
          <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
            {project.category}
          </span>
        </div>
        {project.featured && (
          <span className="px-2 py-0.5 text-[10px] font-mono text-[#00FF88] bg-[#00FF88]/10 border border-[#00FF88]/20 rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Title & Description */}
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00FF88] transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      {/* Features */}
      {project.features.length > 0 && (
        <ul className="mb-4 space-y-1.5">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-1 h-1 rounded-full bg-[#00FF88]/50" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-[10px] font-mono text-gray-400 bg-white/5 border border-white/10 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <span
          className={`px-2 py-0.5 text-[10px] font-mono rounded ${
            statusColors[project.status] || statusColors.planned
          }`}
        >
          {project.status.replace("-", " ")}
        </span>
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-gray-500 hover:text-[#00FF88] transition-colors"
              aria-label={`GitHub - ${project.title}`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-gray-500 hover:text-[#00FF88] transition-colors"
              aria-label={`Live demo - ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function FutureProjectCard() {
  return (
    <div className="group flex flex-col items-center justify-center h-full p-8 rounded-xl border-2 border-dashed border-white/15 bg-white/[0.01] hover:border-[#00FF88]/30 hover:bg-[#00FF88]/[0.02] transition-all duration-300 min-h-[300px]">
      <div className="w-16 h-16 rounded-2xl bg-[#00FF88]/10 border border-[#00FF88]/20 flex items-center justify-center text-[#00FF88] mb-6 group-hover:bg-[#00FF88]/20 transition-colors">
        <Folder className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2 text-center">
        {futureProject.title}
      </h3>
      <p className="text-sm text-gray-400 text-center mb-2 max-w-sm">
        {futureProject.description}
      </p>
      <p className="text-xs text-[#00FF88]/70 font-mono mb-6">
        {futureProject.cta}
      </p>
      <a
        href={futureProject.buttonLink}
        className="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-[#020807] bg-[#00FF88] rounded-lg hover:bg-[#18C979] transition-colors"
      >
        {futureProject.buttonText}
      </a>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            badge="Projects"
            title="Featured Work"
            description="AI agents, SaaS applications, and automation systems I'm building."
          />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.05}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
          <FadeIn delay={projects.length * 0.05}>
            <FutureProjectCard />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
