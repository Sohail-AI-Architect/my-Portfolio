import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Sohail Nawaz — Agentic AI Developer",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Sohail Nawaz",
    title: "Agentic AI Developer | AI Agents · SaaS · Cloud-Native Systems",
    description:
      "Agentic AI Developer building AI agents, Digital FTEs, SaaS applications, automation systems, and cloud-native software for real-world business problems.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic AI Developer | AI Agents · SaaS · Cloud-Native Systems",
    description:
      "Agentic AI Developer building AI agents, Digital FTEs, SaaS applications, automation systems, and cloud-native software for real-world business problems.",
    images: [OG_IMAGE.url],
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
      <body className="min-h-full flex flex-col bg-[#020807] text-gray-200">
        {children}
      </body>
    </html>
  );
}
