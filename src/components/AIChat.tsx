"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Trash2, Bot, User } from "lucide-react";
import { siteConfig } from "@/data/site";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "What can you build?",
  "What AI technologies do you use?",
  "Tell me about your projects",
  "How can we work together?",
];

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content: siteConfig.assistant?.greeting ||
    "Hi, I'm the AI Portfolio Assistant. Ask me about AI agents, SaaS development, automation, projects, technologies, or working together.",
};

// Simple markdown-like renderer (safe subset)
function renderMessage(content: string) {
  const paragraphs = content.split(/\n\n+/);

  return paragraphs.map((para, pi) => {
    if (para.match(/^- /m)) {
      const items = para.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={pi} className="list-disc list-inside space-y-1 my-2">
          {items.map((item, ii) => (
            <li key={ii} className="text-sm">
              {formatInline(item.replace(/^- /, ""))}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={pi} className="text-sm leading-relaxed my-1.5">
        {formatInline(para)}
      </p>
    );
  });
}

function formatInline(text: string): React.ReactNode {
  // Bold: **text**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  const elements: React.ReactNode[] = [];
  parts.forEach((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      elements.push(
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
      return;
    }
    // Inline code: `text`
    const codeParts = part.split(/(`[^`]+`)/g);
    codeParts.forEach((cp, j) => {
      if (cp.startsWith("`") && cp.endsWith("`")) {
        elements.push(
          <code
            key={`${i}-${j}`}
            className="px-1 py-0.5 text-xs bg-white/10 rounded text-[#00FF88] font-mono"
          >
            {cp.slice(1, -1)}
          </code>
        );
      } else {
        elements.push(<span key={`${i}-${j}`}>{cp}</span>);
      }
    });
  });
  return elements;
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    setError(null);
    const userMessage: Message = { role: "user", content: trimmed };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong.");
        setIsLoading(false);
        return;
      }

      if (data.content) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.content },
        ]);
      }
    } catch {
      setError(
        "Unable to connect to the AI assistant. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const clearChat = () => {
    setMessages([WELCOME_MESSAGE]);
    setError(null);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-white/10 border border-white/20 text-white hover:bg-white/15"
            : "bg-[#00FF88] text-[#020807] hover:bg-[#18C979] shadow-[#00FF88]/20 hover:shadow-[#00FF88]/40 hover:-translate-y-0.5"
        }`}
        aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] max-h-[calc(100vh-8rem)] sm:max-h-[600px] flex flex-col rounded-xl border border-[#00FF88]/20 bg-[#06130F] shadow-2xl shadow-[#00FF88]/10 overflow-hidden"
            role="dialog"
            aria-label="AI Portfolio Assistant"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#0a0f0d]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#00FF88]/15 border border-[#00FF88]/30 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-[#00FF88]" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-white">
                    {siteConfig.assistant?.name || "AI Portfolio Assistant"}
                  </h2>
                  <p className="text-[10px] text-gray-500 font-mono">
                    Powered by Grok
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={clearChat}
                  className="p-1.5 text-gray-500 hover:text-white rounded-md hover:bg-white/10 transition-colors"
                  aria-label="Clear chat"
                  title="Clear chat"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-gray-500 hover:text-white rounded-md hover:bg-white/10 transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="flex-shrink-0 w-7 h-7 rounded-md bg-[#00FF88]/10 border border-[#00FF88]/20 flex items-center justify-center mt-0.5">
                      <Bot className="w-3.5 h-3.5 text-[#00FF88]" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#00FF88]/15 text-white border border-[#00FF88]/20 rounded-br-sm"
                        : "bg-white/5 text-gray-300 border border-white/10 rounded-bl-sm"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <div>{renderMessage(msg.content)}</div>
                    ) : (
                      <p>{msg.content}</p>
                    )}
                  </div>
                  {msg.role === "user" && (
                    <div className="flex-shrink-0 w-7 h-7 rounded-md bg-white/10 border border-white/15 flex items-center justify-center mt-0.5">
                      <User className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex gap-2.5">
                  <div className="flex-shrink-0 w-7 h-7 rounded-md bg-[#00FF88]/10 border border-[#00FF88]/20 flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5 text-[#00FF88]" />
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl rounded-bl-sm px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88]/60 animate-bounce [animation-delay:0ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88]/60 animate-bounce [animation-delay:150ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88]/60 animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}

              {/* Error message */}
              {error && (
                <div className="flex gap-2.5">
                  <div className="flex-shrink-0 w-7 h-7 rounded-md bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl rounded-bl-sm px-3.5 py-2.5 max-w-[80%]">
                    <p className="text-sm text-red-300">{error}</p>
                    <button
                      onClick={() => {
                        setError(null);
                        // Retry last user message
                        const lastUserMsg = [...messages]
                          .reverse()
                          .find((m) => m.role === "user");
                        if (lastUserMsg) {
                          sendMessage(lastUserMsg.content);
                        }
                      }}
                      className="mt-2 text-xs text-red-400 hover:text-red-300 underline"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested questions (show only when few messages) */}
            {messages.length <= 2 && !isLoading && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="px-3 py-1.5 text-[11px] font-medium text-[#00FF88] bg-[#00FF88]/10 border border-[#00FF88]/20 rounded-full hover:bg-[#00FF88]/20 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="px-4 py-3 border-t border-white/10 bg-[#0a0f0d]"
            >
              <div className="flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about AI, projects, services..."
                  rows={1}
                  className="flex-1 resize-none bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF88]/40 focus:ring-1 focus:ring-[#00FF88]/20 transition-colors max-h-24 overflow-y-auto"
                  disabled={isLoading}
                  aria-label="Type your message"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#00FF88] text-[#020807] flex items-center justify-center hover:bg-[#18C979] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
