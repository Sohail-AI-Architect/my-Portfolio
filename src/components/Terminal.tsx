"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  { text: "$ agent --spec-first", delay: 0 },
  { text: "", delay: 400 },
  { text: "Initializing Agentic AI Developer...", delay: 600 },
  { text: "Loading SKILL.md...", delay: 1000 },
  { text: "Connecting tools...", delay: 1400 },
  { text: "Running evaluations...", delay: 1800 },
  { text: "Building production system...", delay: 2200 },
  { text: "", delay: 2600 },
  { text: "✓ Agent ready", delay: 2800, success: true },
  { text: "✓ Tests passed", delay: 3100, success: true },
  { text: "✓ Deployment ready", delay: 3400, success: true },
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    lines.forEach((line, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines(i + 1);
        }, line.delay)
      );
    });

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative rounded-xl border border-[#00FF88]/20 bg-[#0a0f0d] overflow-hidden shadow-lg shadow-[#00FF88]/5"
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#06130F] border-b border-[#00FF88]/10">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs text-gray-500 font-mono">
          agent@dev:~ 
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed min-h-[220px] sm:min-h-[260px]">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="whitespace-pre">
            {line.text.startsWith("$") ? (
              <span className="text-[#00FF88]">{line.text}</span>
            ) : line.success ? (
              <span className="text-[#18C979]">{line.text}</span>
            ) : line.text === "" ? (
              <span>&nbsp;</span>
            ) : (
              <span className="text-gray-400">{line.text}</span>
            )}
          </div>
        ))}
        {visibleLines > 0 && visibleLines < lines.length && (
          <span
            className={`inline-block w-2 h-4 bg-[#00FF88] ml-0.5 align-middle ${
              showCursor ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
        {visibleLines >= lines.length && (
          <div className="mt-2 flex items-center gap-2">
            <span className="text-[#00FF88]">$</span>
            <span
              className={`inline-block w-2 h-4 bg-[#00FF88] ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
