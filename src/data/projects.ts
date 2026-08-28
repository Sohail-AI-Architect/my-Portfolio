// Project data - Edit this file to add or update projects
// New projects automatically appear in the portfolio grid

export interface Project {
  title: string;
  slug: string;
  category: string;
  description: string;
  longDescription?: string;
  status: "completed" | "in-progress" | "planned";
  featured: boolean;
  technologies: string[];
  features: string[];
  image?: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Support Agent — System of Record",
    slug: "ecommerce-agent-sor",
    category: "AI Governance / Digital FTE",
    description:
      "A governed support agent for an e-commerce store, built on the 'Trusting the Checker' principle — a deterministic policy engine (not the LLM) makes every refund decision. Includes a customer chat interface and a live Merchant Governance dashboard showing real-time audit trail, automated refunds, human escalations, and policy violations prevented. Enforces a 30-day return window, a $300+ human-approval gate, and non-refundable digital items — with zero irreversible actions taken without explicit approval.",
    status: "completed",
    featured: true,
    technologies: ["Next.js 14", "TypeScript", "Deterministic Policy Engine", "HITL Governance"],
    features: [],
    github: "https://github.com/Sohail-AI-Architect/ecommerce-agent-sor",
    demo: "https://ecommerce-agent-sor.vercel.app",
  },
  {
    title: "Meeting Action Extractor",
    slug: "meeting-action-extractor",
    category: "Digital FTE",
    description:
      "A Digital FTE that converts raw meeting notes into structured action items, decisions, and open questions — built on a governed SKILL.md and validated with a 5-case eval set. Never invents owners or deadlines that weren't actually stated.",
    status: "completed",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Groq API", "SKILL.md"],
    features: [],
    github: "https://github.com/Sohail-AI-Architect/meeting-action-extractor",
    demo: "https://meeting-action-extractor-omega.vercel.app",
  },
  {
    title: "Invoice Control Demo",
    slug: "invoice-control-demo",
    category: "AI SaaS",
    description:
      "A demo application for automated invoice control and tracking.",
    status: "completed",
    featured: false,
    technologies: ["TypeScript", "Next.js", "Vercel"],
    features: [
      "Automated invoice control",
      "Invoice tracking",
      "Demo-ready deployment",
    ],
    github: "https://github.com/Sohail-AI-Architect/invoice-control-demo",
    demo: "https://invoice-control-demo.vercel.app",
  },
  {
    title: "AI Customer Support Worker",
    slug: "ai-customer-support-worker",
    category: "AI Agent",
    description:
      "A Digital FTE prototype that handles customer support conversations autonomously, built while learning the Agent Factory methodology.",
    status: "completed",
    featured: false,
    technologies: ["Python"],
    features: [
      "Autonomous customer support conversations",
      "Digital FTE prototype",
      "Agent Factory methodology",
    ],
    github:
      "https://github.com/Sohail-AI-Architect/ai-customer-support-worker",
    demo: "https://ai-fde-lab.vercel.app",
  },
  {
    title: "AI FAQ Reply Drafter",
    slug: "ai-faq-reply-drafter",
    category: "AI Agent",
    description:
      "An AI Worker that drafts FAQ replies automatically to speed up support response time.",
    status: "completed",
    featured: false,
    technologies: ["TypeScript"],
    features: [
      "Automated FAQ reply drafting",
      "Speeds up support response time",
    ],
    github: "https://github.com/Sohail-AI-Architect/ai-faq-reply-drafter",
    demo: "https://ai-workers-demo.vercel.app",
  },
  {
    title: "LearnFlow Skills",
    slug: "learnflow-skills",
    category: "MCP / Agent Tooling",
    description:
      "Reusable MCP Code Execution Skills, built for Hackathon III.",
    status: "completed",
    featured: false,
    technologies: ["Python", "MCP"],
    features: [
      "Reusable MCP code execution skills",
      "Built for Hackathon III",
    ],
    github: "https://github.com/Sohail-AI-Architect/learnflow-skills",
  },
  {
    title: "Physical AI & Humanoid Robotics Textbook",
    slug: "physical-ai-humanoid-robotics-textbook",
    category: "AI-Native Content System",
    description:
      "An AI-native university textbook on Physical AI & Humanoid Robotics, built with Docusaurus v3 — a governed, agent-readable content system.",
    status: "completed",
    featured: false,
    technologies: ["TypeScript", "Docusaurus"],
    features: [
      "AI-native university textbook",
      "Agent-readable content system",
      "Docusaurus v3 governed publishing",
    ],
    github:
      "https://github.com/Sohail-AI-Architect/physical-ai-humanoid-robotics-textbook",
    demo: "https://physical-ai-humanoid-robotics-textb-two-zeta.vercel.app",
  },
  {
    title: "MCP Server (Agent Connector)",
    slug: "mcp-server-agent-connector",
    category: "MCP / Agent Tooling",
    description:
      "A custom Model Context Protocol server built to connect agents to external tools and data.",
    status: "completed",
    featured: false,
    technologies: ["Python", "MCP"],
    features: [
      "Custom MCP server",
      "Connects agents to external tools and data",
    ],
    github:
      "https://github.com/Sohail-AI-Architect/connect_agent_mcp_server",
  },
];

// Future project placeholder
export const futureProject = {
  title: "Your Project Could Be Here",
  description:
    "This space is reserved for the next AI-powered product, automation system, or client project.",
  cta: "Have a project in mind? Let's build it.",
  buttonText: "Start a Project",
  buttonLink: "#contact",
};
