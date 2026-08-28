// Expertise data - Edit this file to update AI capabilities

export interface ExpertiseItem {
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export const expertise: ExpertiseItem[] = [
  {
    title: "Prompt Engineering",
    description: "Crafting effective prompts that guide AI models to produce accurate, structured outputs.",
    icon: "MessageSquare",
  },
  {
    title: "Agent Architecture",
    description: "Designing multi-step agent systems with reasoning, planning, and tool usage.",
    icon: "Workflow",
  },
  {
    title: "Tool Calling",
    description: "Connecting AI agents to external tools, APIs, and data sources for real-world actions.",
    icon: "Wrench",
  },
  {
    title: "MCP",
    description: "Building Model Context Protocol integrations for standardized AI tool connectivity.",
    icon: "Plug",
  },
  {
    title: "Skills & SKILL.md",
    description: "Creating reusable agent skills and instruction sets for consistent AI behavior.",
    icon: "FileCode",
  },
  {
    title: "Agent Workflows",
    description: "Orchestrating complex multi-agent workflows with defined inputs, outputs, and handoffs.",
    icon: "GitBranch",
  },
  {
    title: "Evaluations",
    description: "Testing and evaluating AI agent behavior against quality benchmarks and edge cases.",
    icon: "ClipboardCheck",
  },
  {
    title: "Human-in-the-Loop",
    description: "Designing systems where AI and humans collaborate for optimal outcomes.",
    icon: "Users",
  },
  {
    title: "AI Automation",
    description: "Automating business processes with intelligent agents and decision-making systems.",
    icon: "Zap",
  },
  {
    title: "Digital FTEs",
    description: "Building AI workers that handle repetitive tasks with consistency and scale.",
    icon: "Bot",
  },
  {
    title: "RAG",
    description: "Retrieval-Augmented Generation for context-aware AI responses from knowledge bases.",
    icon: "Database",
  },
  {
    title: "API Integration",
    description: "Connecting AI systems with third-party services, databases, and external tools.",
    icon: "Link",
  },
  {
    title: "Cloud Deployment",
    description: "Deploying AI systems to production with Docker, Kubernetes, and cloud platforms.",
    icon: "Cloud",
  },
];

// Technology categories for the tech stack section
export interface TechCategory {
  name: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  {
    name: "AI",
    items: ["OpenAI", "OpenRouter", "AI SDKs", "Agent Frameworks", "MCP"],
  },
  {
    name: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    items: ["Python", "FastAPI", "Node.js"],
  },
  {
    name: "Database",
    items: ["PostgreSQL", "SQL", "Redis"],
  },
  {
    name: "Infrastructure",
    items: ["Docker", "Kubernetes", "Vercel", "Cloud"],
  },
];
