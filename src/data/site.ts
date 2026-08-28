// Site configuration - Edit this file to update portfolio content
export const siteConfig = {
  name: "Sohail Nawaz",
  // TODO: Domain not yet purchased. Update canonicalUrl to your real domain once you have one.
  // For now, canonicalUrl points to the Vercel deployment URL.
  domain: "agentdev.io",
  title: "Agentic AI Developer | AI Agents · SaaS · Cloud-Native Systems",
  description:
    "Agentic AI Developer building AI agents, Digital FTEs, SaaS applications, automation systems, and cloud-native software for real-world business problems.",
  ogImage: "/og.png",
  canonicalUrl: "https://agentdev.io",

  // Professional positioning
  hero: {
    headline: "Agentic AI Developer",
    subtitle:
      "SaaS Architect · Cloud-Native Engineer · Building Production-Grade AI Systems",
    description:
      "Designing and building intelligent AI agents, Digital FTEs, SaaS applications, and cloud-native systems that solve real business problems.",
    availability: "Open to Freelance",
    location: "Pakistan · Remote",
  },

  // Navigation
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],

  // Social links — replace these with your real URLs
  social: {
    github: "https://github.com/Sohail-AI-Architect",
    linkedin: "https://www.linkedin.com/in/sohail-nawaz-96986a2aa",
    email: "sohailmahum8@gmail.com",
    cvDownload: "/cv.pdf",
  },

  // About section
  about: {
    title: "About Me",
    headline: "Building AI-Native Software Systems",
    paragraphs: [
      "I build AI-native software systems that combine intelligent agents, modern web applications, APIs, databases, and cloud infrastructure.",
      "My focus isn't simply writing code — it's understanding the problem, defining the desired outcome, and architecting a system that delivers real value.",
      "From designing AI agents that reason and use tools, to deploying production SaaS applications on the cloud, I work across the full stack to ship intelligent systems.",
      "I've also trained hands-on in the Agent Factory methodology — authoring SKILL.md files, building MCP tool integrations, and designing Systems of Record that let agents reason over real business data.",
    ],
  },

  // Stats
  stats: [
    { value: "8", label: "Projects Shipped" },
    { value: "3", label: "MCP / Agent Tools Built" },
    { value: "1", label: "AI-Native Content System" },
    { value: "Open", label: "To Freelance" },
  ],

  // Process steps
  process: [
    {
      step: "01",
      title: "Understand",
      description:
        "Understand the business problem and desired outcome.",
    },
    {
      step: "02",
      title: "Specify",
      description:
        "Define requirements, behavior, tools, constraints, and success criteria.",
    },
    {
      step: "03",
      title: "Build",
      description:
        "Build the AI agent, application, APIs, tools, and workflows.",
    },
    {
      step: "04",
      title: "Evaluate",
      description:
        "Test behavior, edge cases, reliability, and expected outcomes.",
    },
    {
      step: "05",
      title: "Deploy",
      description:
        "Deploy the system and prepare it for real users.",
    },
  ],

  // Why work with me
  whyWorkWithMe: [
    {
      title: "Outcome Focused",
      description:
        "I focus on solving the business problem, not just writing code.",
    },
    {
      title: "AI-Native",
      description:
        "I build systems around AI agents, automation, tools, and intelligent workflows.",
    },
    {
      title: "Full-Stack",
      description:
        "Frontend, backend, APIs, databases, AI integration, and deployment.",
    },
    {
      title: "Production Mindset",
      description:
        "Systems should be testable, maintainable, secure, and deployable.",
    },
  ],

  // AI Assistant
  assistant: {
    name: "AI Portfolio Assistant",
    greeting: "Hi, I'm the AI Portfolio Assistant. Ask me about AI agents, SaaS development, automation, projects, technologies, or working together.",
  },

  // Contact CTA
  contact: {
    headline: "Let's Build Something Intelligent Together",
    description:
      "Have an AI product, automation idea, or business workflow that could be improved with intelligent software?",
    buttons: {
      primary: { label: "Let's Work Together", href: "#contact" },
      secondary: { label: "View GitHub", href: "https://github.com/Sohail-AI-Architect" },
      tertiary: { label: "Email Me", href: "mailto:sohailmahum8@gmail.com" },
    },
  },

  // Footer
  footer: {
    tagline: "Building intelligent software for real-world problems.",
    copyright: "© 2026 Sohail Nawaz. All rights reserved.",
    builtWith: "Built with Next.js",
  },
};
