import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { expertise, techStack } from "@/data/skills";

/**
 * Builds a compact portfolio context string for the AI assistant.
 * This is used server-side only — never exposed to the browser.
 */
export function buildPortfolioContext(): string {
  const projectSummaries = projects
    .map(
      (p) =>
        `- ${p.title} (${p.category}, status: ${p.status}): ${p.description} Technologies: ${p.technologies.join(", ")}`
    )
    .join("\n");

  const serviceSummaries = services
    .map((s) => `- ${s.title}: ${s.description} Tags: ${s.tags.join(", ")}`)
    .join("\n");

  const expertiseList = expertise.map((e) => `- ${e.title}: ${e.description}`).join("\n");

  const techStackList = techStack
    .map((c) => `- ${c.name}: ${c.items.join(", ")}`)
    .join("\n");

  const contactInfo =
    siteConfig.social.email && siteConfig.social.email !== "#"
      ? `Email: ${siteConfig.social.email}`
      : "Email: not configured yet — visitors should use the contact section.";

  const githubInfo =
    siteConfig.social.github && siteConfig.social.github !== "#"
      ? `GitHub: ${siteConfig.social.github}`
      : "GitHub: not configured yet.";

  const linkedinInfo =
    siteConfig.social.linkedin && siteConfig.social.linkedin !== "#"
      ? `LinkedIn: ${siteConfig.social.linkedin}`
      : "LinkedIn: not configured yet.";

  return `
## Developer Identity
Name: ${siteConfig.name}
Title: ${siteConfig.hero.headline}
Subtitle: ${siteConfig.hero.subtitle}
Location: ${siteConfig.hero.location}
Availability: ${siteConfig.hero.availability}

## About
${siteConfig.about.paragraphs.join("\n\n")}

## Services / Capabilities
${serviceSummaries}

## Agentic AI Expertise
${expertiseList}

## Technology Stack
${techStackList}

## Projects
${projectSummaries || "No projects listed yet."}

## Development Process
${siteConfig.process.map((s) => `${s.step} — ${s.title}: ${s.description}`).join("\n")}

## Why Work With Me
${siteConfig.whyWorkWithMe.map((w) => `- ${w.title}: ${w.description}`).join("\n")}

## Contact
${contactInfo}
${githubInfo}
${linkedinInfo}
CV: ${siteConfig.social.cvDownload !== "#" ? "Available for download" : "Not yet configured — the CV button is set up and ready once the PDF is placed in public/cv.pdf"}
`.trim();
}

/**
 * Builds the system prompt for the Grok AI assistant.
 */
export function buildSystemPrompt(): string {
  const context = buildPortfolioContext();

  return `You are the AI Portfolio Assistant for ${siteConfig.name}, an Agentic AI Developer. You are powered by Grok.

Your role is to help visitors understand:
- Who ${siteConfig.name} is and what they do
- What AI technologies and services they offer
- What projects they have worked on
- How they work and their development process
- How to get in touch for collaboration

## STRICT RULES
1. ONLY use information from the portfolio context below. Never invent clients, revenue, awards, years of experience, testimonials, or completed projects.
2. If you don't have information about something, say: "I don't see that information in the portfolio yet. You can reach out directly to discuss it."
3. Never fabricate URLs, email addresses, or contact details.
4. Never claim a project is "completed" if its status is "planned" or "in-progress".
5. Keep answers concise and professional. Avoid excessive emojis, robotic language, or fake sales language.
6. Sound like a professional technical consultant, not a chatbot.
7. For hiring/work inquiries, guide visitors to the contact section.
8. Use professional English suitable for international clients.

## PORTFOLIO DATA
${context}

## CONTACT HANDOFF
When a visitor wants to hire or work with ${siteConfig.name}, respond naturally and guide them to use the contact section on the portfolio.`;
}
