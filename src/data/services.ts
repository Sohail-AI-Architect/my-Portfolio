// Service data - Edit this file to update services

export interface Service {
  title: string;
  description: string;
  icon: string; // Lucide icon name
  tags: string[];
}

export const services: Service[] = [
  {
    title: "AI Agent Development",
    description:
      "Build task-oriented AI agents that can reason, use tools, retrieve information, and complete workflows.",
    icon: "Brain",
    tags: ["OpenAI", "MCP", "Tool Calling", "RAG"],
  },
  {
    title: "Digital FTE Development",
    description:
      "Design AI workers for repetitive business operations — digital employees that scale.",
    icon: "Bot",
    tags: ["AI Automation", "Workflows", "APIs", "SaaS"],
  },
  {
    title: "AI SaaS Development",
    description:
      "Build complete AI-powered SaaS applications with modern architecture and scalable infrastructure.",
    icon: "Layers",
    tags: ["Next.js", "React", "TypeScript", "Vercel"],
  },
  {
    title: "AI Automation",
    description:
      "Automate repetitive workflows using AI agents, APIs, and intelligent decision-making systems.",
    icon: "Zap",
    tags: ["Python", "FastAPI", "Agents", "Workflows"],
  },
  {
    title: "Backend & API Development",
    description:
      "Build reliable APIs and backend services using modern technologies and best practices.",
    icon: "Server",
    tags: ["Node.js", "Python", "FastAPI", "REST"],
  },
  {
    title: "Cloud Deployment",
    description:
      "Deploy applications and AI systems to production-ready cloud environments with CI/CD.",
    icon: "Cloud",
    tags: ["Docker", "Kubernetes", "Vercel", "Cloud"],
  },
];
