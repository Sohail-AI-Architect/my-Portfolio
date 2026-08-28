import { jsPDF } from "jspdf";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { techStack } from "@/data/skills";

// Layout constants
const PAGE_WIDTH = 210; // A4
const PAGE_HEIGHT = 297; // A4
const MARGIN_LEFT = 20;
const MARGIN_RIGHT = 20;
const MARGIN_TOP = 20;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_LEFT - MARGIN_RIGHT;
const LINE_HEIGHT = 5;
const SECTION_GAP = 8;

// Colors
const PRIMARY = [0, 200, 120] as const; // #00C878 green
const DARK = [30, 30, 30] as const;
const GRAY = [100, 100, 100] as const;
const LIGHT_GRAY = [160, 160, 160] as const;


export function generateCV(): void {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  let y = MARGIN_TOP;

  // Helper: check if we need a new page
  function ensureSpace(needed: number): void {
    if (y + needed > PAGE_HEIGHT - MARGIN_TOP) {
      doc.addPage();
      y = MARGIN_TOP;
    }
  }

  // Helper: draw a section title with green underline
  function sectionTitle(title: string): void {
    ensureSpace(16);
    y += SECTION_GAP;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...PRIMARY);
    doc.text(title.toUpperCase(), MARGIN_LEFT, y);
    y += 2;
    doc.setDrawColor(...PRIMARY);
    doc.setLineWidth(0.5);
    doc.line(MARGIN_LEFT, y, PAGE_WIDTH - MARGIN_RIGHT, y);
    y += 5;
  }

  // Helper: draw a bullet point
  function bullet(text: string, indent = 0): void {
    ensureSpace(LINE_HEIGHT);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...DARK);
    const x = MARGIN_LEFT + indent;
    doc.text("\u2022", x, y);
    doc.text(text, x + 4, y);
    y += LINE_HEIGHT;
  }

  // Helper: wrap text within content width
  function wrappedText(
    text: string,
    fontSize: number,
    color: readonly [number, number, number],
    style: "normal" | "bold" = "normal",
    indent = 0
  ): void {
    doc.setFont("helvetica", style);
    doc.setFontSize(fontSize);
    doc.setTextColor(...color);
    const maxWidth = CONTENT_WIDTH - indent;
    const lines = doc.splitTextToSize(text, maxWidth);
    for (const line of lines) {
      ensureSpace(fontSize * 0.4);
      doc.text(line, MARGIN_LEFT + indent, y);
      y += fontSize * 0.45;
    }
  }

  // ============================================
  // HEADER
  // ============================================
  // Green accent bar
  doc.setFillColor(...PRIMARY);
  doc.rect(0, 0, PAGE_WIDTH, 4, "F");

  y = MARGIN_TOP + 4;

  // Name
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(...DARK);
  doc.text("Sohail", MARGIN_LEFT, y);
  y += 8;

  // Title
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(...PRIMARY);
  doc.text(
    "Agentic AI Developer  |  Forward-Deployed Engineer",
    MARGIN_LEFT,
    y
  );
  y += 7;

  // Tagline
  doc.setFontSize(8.5);
  doc.setTextColor(...GRAY);
  const tagline =
    "Building intelligent AI agents, Digital FTEs, AI-native applications, and production-oriented cloud systems that solve real business problems.";
  const taglineLines = doc.splitTextToSize(tagline, CONTENT_WIDTH);
  for (const line of taglineLines) {
    doc.text(line, MARGIN_LEFT, y);
    y += 4;
  }
  y += 2;

  // Contact row
  const contactParts: string[] = [];
  if (siteConfig.social.email && siteConfig.social.email !== "#") {
    contactParts.push(`Email: ${siteConfig.social.email}`);
  }
  if (siteConfig.social.github && siteConfig.social.github !== "#") {
    contactParts.push(`GitHub: ${siteConfig.social.github}`);
  }
  if (siteConfig.social.linkedin && siteConfig.social.linkedin !== "#") {
    contactParts.push(`LinkedIn: ${siteConfig.social.linkedin}`);
  }
  contactParts.push(`Location: ${siteConfig.hero.location}`);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...GRAY);
  doc.text(contactParts.join("  |  "), MARGIN_LEFT, y);
  y += 6;

  // Separator line
  doc.setDrawColor(220, 220, 220);
  doc.setLineWidth(0.3);
  doc.line(MARGIN_LEFT, y, PAGE_WIDTH - MARGIN_RIGHT, y);
  y += 4;

  // ============================================
  // PROFESSIONAL SUMMARY
  // ============================================
  sectionTitle("Professional Summary");
  const summary = `Agentic AI Developer and Forward-Deployed Engineer with focused training in the Agent Factory / GIAIC program. Experienced in designing, building, evaluating, and deploying production-oriented AI agent systems. Skilled in AI agent development, Digital FTE design, multi-step agent workflows, tool calling, MCP integration, and AI-native software architecture. Combines full-stack engineering capability with deep understanding of agent factory methodology, loop engineering, harness engineering, and evaluation-driven development to deliver reliable AI systems for real business problems.`;
  wrappedText(summary, 9, DARK);

  // ============================================
  // CORE AI / FDE SKILLS
  // ============================================
  sectionTitle("Core AI / FDE Skills");

  const skillGroups = [
    {
      label: "Agent Engineering",
      items: [
        "AI Agent Development",
        "General Agents",
        "Agent Workflows",
        "Multi-Step Agent Loops",
        "Tool Use",
        "Agent Orchestration",
        "Digital FTE Design",
      ],
    },
    {
      label: "Agent Factory Concepts",
      items: [
        "Agent Factory Model",
        "FDE Methodology",
        "Domain-Specific AI Systems",
        "Business Workflow Automation",
        "AI-Native Software",
      ],
    },
    {
      label: "AI Integration",
      items: [
        "OpenAI Agents SDK",
        "LLM Integration",
        "AI Chatbots",
        "Tool Calling",
        "MCP",
        "Prompt Engineering",
      ],
    },
    {
      label: "Engineering",
      items: [
        "TypeScript",
        "Python",
        "JavaScript",
        "React",
        "Next.js",
        "FastAPI",
        "REST APIs",
        "PostgreSQL",
      ],
    },
  ];

  for (const group of skillGroups) {
    ensureSpace(12);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...DARK);
    doc.text(group.label + ":", MARGIN_LEFT, y);
    y += 5;
    for (const item of group.items) {
      bullet(item, 4);
    }
  }

  // ============================================
  // AGENT ENGINEERING KNOWLEDGE
  // ============================================
  sectionTitle("Agent Factory Learning Areas");

  const learningAreas = [
    {
      title: "Roles We Are Training For",
      desc: "Understanding the Forward-Deployed Engineer model and the professional roles emerging in the Agent Factory ecosystem, including AI engineers who deploy, operate, and maintain production AI systems.",
    },
    {
      title: "Agent Factory Ecosystem",
      desc: "Knowledge of how AI systems are developed for real business domains within the Agent Factory framework, from specification through deployment and monitoring.",
    },
    {
      title: "Local AI and Agentic Coding",
      desc: "Proficiency in local AI workflows, agentic coding with CLI-based development tools, and AI-assisted software engineering practices.",
    },
    {
      title: "Loop Engineering",
      desc: "Designing reliable agent loops with proper iteration, state management, stopping conditions, and controlled execution patterns.",
    },
    {
      title: "Harness Engineering",
      desc: "Building the environment, tools, context, constraints, and infrastructure that enable agents to work reliably in production.",
    },
    {
      title: "Trusting the Checker",
      desc: "Implementing evaluation, verification, testing, and feedback loops. Using checkers and evaluators rather than blindly trusting agent output.",
    },
    {
      title: "Leaving the Laptop",
      desc: "Designing long-running and autonomous workflows with scheduling, background execution, monitoring, and systems that operate without constant human interaction.",
    },
    {
      title: "General Agents on the Web",
      desc: "Understanding web-based agents, browser interaction, research capabilities, tool use, and appropriate human oversight for sensitive actions.",
    },
  ];

  for (const area of learningAreas) {
    ensureSpace(14);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...DARK);
    doc.text(area.title, MARGIN_LEFT + 4, y);
    y += 4.5;
    wrappedText(area.desc, 8, GRAY, "normal", 4);
    y += 1;
  }

  // ============================================
  // PROJECTS
  // ============================================
  sectionTitle("Projects");

  for (const project of projects) {
    ensureSpace(20);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...DARK);
    doc.text(project.title, MARGIN_LEFT, y);
    y += 1;

    // Status badge
    const statusColors: Record<string, [number, number, number]> = {
      completed: [0, 150, 80],
      "in-progress": [200, 150, 0],
      planned: [150, 150, 150],
    };
    const statusColor = statusColors[project.status] || GRAY;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(...statusColor);
    const titleWidth = doc.getTextWidth(project.title);
    doc.text(
      `  [${project.status}]`,
      MARGIN_LEFT + titleWidth,
      y
    );
    y += 5;

    // Description
    wrappedText(project.description, 8.5, GRAY, "normal", 4);
    y += 1;

    // Technologies
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(...DARK);
    doc.text("Technologies:", MARGIN_LEFT + 4, y);
    y += 4;
    wrappedText(project.technologies.join(", "), 8, GRAY, "normal", 4);
    y += 1;

    // Features
    if (project.features.length > 0) {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(...DARK);
      doc.text("Key Features:", MARGIN_LEFT + 4, y);
      y += 4;
      for (const feature of project.features) {
        bullet(feature, 8);
      }
    }
    y += 2;
  }

  // ============================================
  // PRODUCTION ENGINEERING
  // ============================================
  sectionTitle("Production Engineering");

  const prodSkills = [
    "API Integration & REST API Design",
    "Database Design & PostgreSQL",
    "Authentication & Authorization",
    "Error Handling & Graceful Degradation",
    "Environment Configuration & Secrets Management",
    "CI/CD & Deployment Pipelines",
    "Docker & Kubernetes Containerization",
    "Cloud Platform Deployment (Vercel, AWS)",
    "Monitoring, Logging & Observability",
    "Testing, Evaluation & Verification",
  ];
  for (const skill of prodSkills) {
    bullet(skill);
  }

  // ============================================
  // AI INTEGRATION
  // ============================================
  sectionTitle("AI Integration & Conversational Systems");

  const aiIntegration = [
    "Integrated AI-powered conversational interfaces into web applications with real-time response handling.",
    "Implemented LLM-powered responses using OpenAI and Groq APIs with server-side key management.",
    "Connected AI systems with application functionality, portfolio data, and external tools.",
    "Designed user-facing AI experiences focused on practical business use cases and professional interactions.",
    "Built rate-limited, validated API routes with secure error handling and graceful degradation.",
  ];
  for (const item of aiIntegration) {
    bullet(item);
  }

  // ============================================
  // DEVELOPMENT WORKFLOW
  // ============================================
  sectionTitle("Development Workflow");

  const workflow = [
    "Specification-driven development with clear requirements and success criteria",
    "AI-assisted coding and agentic development workflows",
    "Iterative implementation with continuous evaluation and verification",
    "Testing against quality benchmarks and edge cases",
    "Deployment with monitoring and continuous improvement",
  ];
  for (const item of workflow) {
    bullet(item);
  }

  // ============================================
  // TECHNOLOGY STACK
  // ============================================
  sectionTitle("Technology Stack");

  for (const category of techStack) {
    ensureSpace(10);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...DARK);
    doc.text(category.name + ":", MARGIN_LEFT, y);
    y += 5;
    // Draw tags in a row
    let xOff = MARGIN_LEFT;
    for (const item of category.items) {
      const tagWidth = doc.getTextWidth(item) + 6;
      if (xOff + tagWidth > PAGE_WIDTH - MARGIN_RIGHT) {
        xOff = MARGIN_LEFT;
        y += 6;
      }
      ensureSpace(8);
      doc.setFillColor(240, 240, 240);
      doc.roundedRect(xOff, y - 3.5, tagWidth, 5, 1, 1, "F");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(...GRAY);
      doc.text(item, xOff + 3, y);
      xOff += tagWidth + 3;
    }
    y += 7;
  }

  // ============================================
  // EDUCATION / TRAINING
  // ============================================
  sectionTitle("Education & Training");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(...DARK);
  doc.text("GIAIC Agent Factory Program", MARGIN_LEFT, y);
  y += 5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(...GRAY);
  doc.text(
    "Final Graduation Preparation  |  Agentic AI Engineering & Forward-Deployed Engineering",
    MARGIN_LEFT,
    y
  );
  y += 5;
  wrappedText(
    "Comprehensive training in AI agent development, agent factory methodology, loop engineering, harness engineering, evaluation systems, and production-oriented AI system deployment. Covers the full lifecycle from specification through deployment and monitoring of AI agent systems.",
    8,
    GRAY
  );
  y += 4;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(...DARK);
  doc.text("Panaversity Foundation", MARGIN_LEFT, y);
  y += 5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(...GRAY);
  doc.text(
    "AI & Cloud-Native Computing Curriculum",
    MARGIN_LEFT,
    y
  );
  y += 5;

  // ============================================
  // CAREER POSITIONING
  // ============================================
  sectionTitle("Career Positioning");

  wrappedText(
    "Seeking roles as a Forward-Deployed Engineer (FDE), Agentic AI Developer, or AI Engineer where I can design, build, evaluate, and deploy production-oriented AI agent systems for real business problems.",
    9,
    DARK
  );
  y += 3;

  const positions = [
    "Forward-Deployed Engineer (FDE)",
    "Agentic AI Developer",
    "AI Engineer",
    "AI Application Developer",
    "AI Automation Engineer",
  ];
  for (const pos of positions) {
    bullet(pos);
  }

  // ============================================
  // FOOTER
  // ============================================
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(...LIGHT_GRAY);
    doc.text(
      `Sohail  |  Agentic AI Developer  |  Page ${i} of ${totalPages}`,
      PAGE_WIDTH / 2,
      PAGE_HEIGHT - 10,
      { align: "center" }
    );
  }

  // Save
  doc.save("Sohail-Agentic-AI-Developer-CV.pdf");
}
