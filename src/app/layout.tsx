import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agentic AI Developer | AI Agents · SaaS · Cloud-Native Systems",
  description:
    "Agentic AI Developer building AI agents, Digital FTEs, SaaS applications, automation systems, and cloud-native software for real-world business problems.",
  keywords: [
    "AI Developer",
    "Agentic AI",
    "AI Agents",
    "SaaS",
    "Cloud-Native",
    "Machine Learning",
    "Python",
    "Next.js",
    "FastAPI",
    "OpenAI",
  ],
  authors: [{ name: "Sohail Nawaz" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Sohail Nawaz",
    title: "Agentic AI Developer | AI Agents · SaaS · Cloud-Native Systems",
    description:
      "Agentic AI Developer building AI agents, Digital FTEs, SaaS applications, automation systems, and cloud-native software for real-world business problems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic AI Developer | AI Agents · SaaS · Cloud-Native Systems",
    description:
      "Agentic AI Developer building AI agents, Digital FTEs, SaaS applications, automation systems, and cloud-native software for real-world business problems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* TODO: Replace canonical URL with your actual domain once purchased */}
        <link rel="canonical" href="https://agentdev.io" />
      </head>
      <body className="min-h-full flex flex-col bg-[#020807] text-gray-200">
        {children}
      </body>
    </html>
  );
}
