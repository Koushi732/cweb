"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send, X, Minus, Phone, Mail, MessageSquare,
  ArrowRight, Sparkles, ChevronDown, Download,
} from "lucide-react";
import { welcomeMessage, type ActionType } from "@/lib/chat/knowledgeBase";
import { ConversationEngine, type ChatResponse } from "@/lib/chat/engine/ConversationEngine";
import { ConversationContext, createFreshContext, ChatComponent } from "@/lib/chat/engine/Storage";
import { RenderComponent } from "./ChatComponents";
import Logo from "@/components/ui/Logo";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface Message {
  id: string;
  role: "assistant" | "user";
  text: string;
  components?: ChatComponent[];
  suggestions?: string[];
  actions?: string[];
  estimator?: ChatResponse["estimator"];
  timestamp: Date;
}

const STORAGE_KEY = "simplein_chat_v2";

function loadState(): { messages: Message[]; context: ConversationContext } | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    parsed.messages = parsed.messages.map((m: Message) => ({ ...m, timestamp: new Date(m.timestamp) }));
    return parsed;
  } catch { return null; }
}

function saveState(messages: Message[], context: ConversationContext) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ messages, context }));
  } catch { /* quota exceeded */ }
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function ChatWindow({
  onClose,
  onMinimize,
}: {
  onClose: () => void;
  onMinimize: () => void;
}) {
  const stored = useRef(loadState());
  const [messages, setMessages] = useState<Message[]>(
    stored.current?.messages ?? [
      {
        id: "welcome",
        role: "assistant",
        text: welcomeMessage.text,
        suggestions: welcomeMessage.suggestions,
        timestamp: new Date(),
      },
    ]
  );
  const [context, setContext] = useState<ConversationContext>(stored.current?.context ?? createFreshContext());
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  /** Ref placed right before the latest assistant message for scroll-to-top behaviour */
  const newMessageAnchorRef = useRef<HTMLDivElement>(null);

  // Persist
  useEffect(() => { saveState(messages, context); }, [messages, context]);

  // Scroll the NEW assistant message into view at its top
  const scrollToNewMessage = useCallback(() => {
    if (newMessageAnchorRef.current && messagesRef.current) {
      // Scroll so the anchor (top of new message) is near the top of the viewport
      const container = messagesRef.current;
      const anchor = newMessageAnchorRef.current;
      const offsetTop = anchor.offsetTop - container.offsetTop;
      container.scrollTo({ top: offsetTop - 12, behavior: "smooth" });
    }
  }, []);

  const scrollToBottom = useCallback(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTo({ top: messagesRef.current.scrollHeight, behavior: "smooth" });
    }
  }, []);

  // When messages change, determine what to scroll to
  const lastMessageRole = messages[messages.length - 1]?.role;
  useEffect(() => {
    if (lastMessageRole === "assistant") {
      // Scroll to the TOP of the new assistant message
      // Use a short delay so the DOM has rendered the new message
      const timer = setTimeout(scrollToNewMessage, 60);
      return () => clearTimeout(timer);
    } else {
      // User sent a message — scroll to bottom so they see the typing indicator
      scrollToBottom();
    }
  }, [messages.length, lastMessageRole, scrollToNewMessage, scrollToBottom]);

  // Also scroll down when typing starts
  useEffect(() => {
    if (isTyping) scrollToBottom();
  }, [isTyping, scrollToBottom]);

  // Scroll indicator
  const handleScroll = () => {
    if (!messagesRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = messagesRef.current;
    setShowScrollDown(scrollHeight - scrollTop - clientHeight > 100);
  };

  // Send message
  const handleSend = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const userMsg: Message = {
      id: `u_${Date.now()}`,
      role: "user",
      text: trimmed,
      timestamp: new Date(),
    };

    // Clear suggestions from last assistant message
    setMessages((prev) => {
      const updated = [...prev];
      for (let i = updated.length - 1; i >= 0; i--) {
        if (updated[i].role === "assistant") {
          updated[i] = { ...updated[i], suggestions: undefined, estimator: undefined };
          break;
        }
      }
      return [...updated, userMsg];
    });

    setInputValue("");
    setIsTyping(true);

    const { response, newContext } = await ConversationEngine.processMessage(trimmed, context);

    const assistantMsg: Message = {
      id: `a_${Date.now()}`,
      role: "assistant",
      text: response.text,
      components: response.components,
      suggestions: response.suggestions,
      actions: response.actions,
      estimator: response.estimator,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, assistantMsg]);
    setContext(newContext);
    setIsTyping(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(inputValue);
    }
  };

  const handleCloseAndClear = () => {
    setMessages([
      { id: "welcome", role: "assistant", text: welcomeMessage.text, suggestions: welcomeMessage.suggestions, timestamp: new Date() },
    ]);
    setContext(createFreshContext());
    setInputValue("");
    localStorage.removeItem(STORAGE_KEY);
    onClose();
  };

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = Math.min(inputRef.current.scrollHeight, 120) + "px";
    }
  }, [inputValue]);

  // ---------------------------------------------------------------------------
  // Render helpers
  // ---------------------------------------------------------------------------
  const renderActions = (actions?: string[]) => {
    if (!actions || actions.length === 0) return null;
    const configs: Record<string, { icon: React.ReactNode; label: string; href?: string; onClick?: () => void }> = {
      whatsapp: { icon: <MessageSquare className="w-3.5 h-3.5" />, label: "WhatsApp", href: "https://wa.me/919848334984" },
      email: { icon: <Mail className="w-3.5 h-3.5" />, label: "Email Us", href: "mailto:info@SimpleInsolutions.com" },
      call: { icon: <Phone className="w-3.5 h-3.5" />, label: "Call Us", href: "tel:+919848334984" },
      quote: { icon: <ArrowRight className="w-3.5 h-3.5" />, label: "Get a Quote", href: "/contact#contact-form", onClick: handleCloseAndClear },
      contact: { icon: <ArrowRight className="w-3.5 h-3.5" />, label: "Contact Us", href: "/contact#contact-form", onClick: handleCloseAndClear },
      consultation: { icon: <Sparkles className="w-3.5 h-3.5" />, label: "Book Consultation", href: "/contact#contact-form", onClick: handleCloseAndClear },
    };

    return (
      <div className="flex flex-wrap gap-2 mt-3">
        {actions.map((action) => {
          const cfg = configs[action];
          if (!cfg) return null;
          const isExternal = cfg.href?.startsWith("http") || cfg.href?.startsWith("mailto") || cfg.href?.startsWith("tel");
          return (
            <motion.a
              key={action}
              href={cfg.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              onClick={cfg.onClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-foreground/5 border border-[var(--border-color)] text-foreground text-[11px] font-semibold uppercase tracking-wider hover:border-foreground/40 transition-colors cursor-pointer rounded-md"
            >
              {cfg.icon} {cfg.label}
            </motion.a>
          );
        })}
      </div>
    );
  };

  const renderEstimator = (estimator?: ChatResponse["estimator"]) => {
    if (!estimator) return null;
    return (
      <div className="flex flex-col gap-2 mt-3">
        {estimator.options.map((opt: { label: string; value: string }) => (
          <motion.button
            key={opt.value}
            whileHover={{ scale: 1.02, x: 2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSend(opt.label)}
            className="w-full text-left px-4 py-2.5 bg-foreground/5 border border-[var(--border-color)] text-sm text-foreground hover:border-foreground/40 hover:bg-foreground/10 transition-all rounded-md"
          >
            {opt.label}
          </motion.button>
        ))}
      </div>
    );
  };

  const renderText = (text: string) => {
    return (
      <motion.div
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
        initial="hidden"
        animate="show"
      >
        {text.split("\n").map((line, i) => {
          if (line.trim() === "") return <div key={i} className="h-2" />;
          if (line.trim() === "---") return <motion.hr variants={{ hidden: { opacity: 0, y: 5 }, show: { opacity: 1, y: 0 } }} key={i} className="border-[var(--border-color)] my-3" />;
          
          // Simulation of "Thinking..." or "Understanding..."
          if (line.trim().startsWith("Thinking") || line.trim().startsWith("✓")) {
             return <motion.p variants={{ hidden: { opacity: 0, y: 5 }, show: { opacity: 1, y: 0 } }} key={i} className="text-muted-foreground/80 italic text-[11px] mb-1">{line}</motion.p>;
          }

          const parts = line.split(/(\*\*.*?\*\*)/g).map((part, j) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return <strong key={j} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
            }
            return <span key={j}>{part}</span>;
          });
          
          return (
            <motion.p variants={{ hidden: { opacity: 0, y: 5 }, show: { opacity: 1, y: 0 } }} key={i} className="mb-1.5 last:mb-0">
              {parts}
            </motion.p>
          );
        })}
      </motion.div>
    );
  };

  // ---------------------------------------------------------------------------
  // JSX
  // ---------------------------------------------------------------------------
  const lastAssistantIndex = (() => {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].role === "assistant") return i;
    }
    return -1;
  })();

  return (
    <div className="flex flex-col h-full bg-background/95 backdrop-blur-xl border border-[var(--border-color)] shadow-[0_8px_60px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden">
      <div className="relative flex items-center justify-between px-5 py-4 border-b border-[var(--border-color)] bg-[var(--surface)]/80 backdrop-blur-md shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-foreground border border-[var(--border-color)] shadow-sm px-1.5 overflow-hidden">
            {/* In Light Mode (page is white), show the Dark Logo (black bg, white text) */}
            <img src="/logo-dark.png" alt="Logo" className="w-full h-auto object-contain dark:hidden" />
            
            {/* In Dark Mode (page is black), show the Light Logo (white bg, black text) */}
            <img src="/logo-light.png" alt="Logo" className="w-full h-auto object-contain hidden dark:block" />
            
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[var(--surface)] rounded-full">
              <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-50" />
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-foreground leading-none mb-0.5">SIMPLEIN Assistant</h3>
            <p className="text-[10px] text-muted-foreground tracking-wide">Online · Replies instantly</p>
          </div>
        </div>

        <div className="flex items-center gap-0.5">
          <button 
            onClick={() => {
              if (typeof window !== "undefined") {
                const dataStr = JSON.stringify({ context, messages }, null, 2);
                const blob = new Blob([dataStr], { type: "application/json" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `chat_export_${Date.now()}.json`;
                a.click();
                URL.revokeObjectURL(url);
              }
            }} 
            className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5" 
            aria-label="Export Data"
            title="Export Conversation"
          >
            <Download className="w-4 h-4" />
          </button>
          <button onClick={onMinimize} className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5" aria-label="Minimize">
            <Minus className="w-4 h-4" />
          </button>
          <button onClick={handleCloseAndClear} className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5" aria-label="Close">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ───────── MESSAGES ───────── */}
      <div ref={messagesRef} onScroll={handleScroll} className="flex-1 overflow-y-auto px-4 py-4 space-y-5 scroll-smooth">
        {messages.map((msg, idx) => (
          <React.Fragment key={msg.id}>
            {/* Anchor ref right before the latest assistant message */}
            {idx === lastAssistantIndex && msg.role === "assistant" && (
              <div ref={newMessageAnchorRef} className="h-0 w-0" aria-hidden="true" />
            )}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
            >
              <div
                className={`max-w-[88%] px-4 py-3 text-[13px] leading-[1.65] ${
                  msg.role === "user"
                    ? "bg-foreground text-background rounded-2xl rounded-br-sm"
                    : "bg-[var(--surface)] text-foreground border border-[var(--border-color)] rounded-2xl rounded-bl-sm"
                }`}
              >
                {renderText(msg.text)}
                
                {msg.components?.map((comp, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                  >
                    <RenderComponent comp={comp} onAction={handleSend} />
                  </motion.div>
                ))}

                {msg.role === "assistant" && renderActions(msg.actions)}
                {msg.role === "assistant" && renderEstimator(msg.estimator)}
              </div>

              <span className="text-[10px] text-muted-foreground/60 mt-1 px-1 font-mono">
                {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>

              {/* Suggestion chips */}
              {msg.suggestions && msg.suggestions.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%]">
                  {msg.suggestions.map((s) => (
                    <motion.button
                      key={s}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => handleSend(s)}
                      className="px-3 py-1.5 text-[11px] font-medium bg-background border border-[var(--border-color)] text-foreground hover:border-foreground/40 transition-colors rounded-full"
                    >
                      {s}
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>
          </React.Fragment>
        ))}

        {/* Typing indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-start">
              <div className="px-4 py-3 bg-[var(--surface)] border border-[var(--border-color)] rounded-2xl rounded-bl-sm flex gap-1.5 items-center">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.15, ease: "easeInOut" }}
                    className="w-1.5 h-1.5 bg-muted-foreground/60 rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll-to-bottom */}
      <AnimatePresence>
        {showScrollDown && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToBottom}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 w-8 h-8 bg-foreground/10 backdrop-blur-sm border border-[var(--border-color)] rounded-full flex items-center justify-center hover:bg-foreground/20 transition-colors z-10"
            aria-label="Scroll to bottom"
          >
            <ChevronDown className="w-4 h-4 text-foreground" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ───────── INPUT ───────── */}
      <div className="px-4 py-3 border-t border-[var(--border-color)] bg-background shrink-0">
        <div className="relative flex items-end gap-2">
          <textarea
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            rows={1}
            className="flex-1 max-h-[120px] min-h-[42px] bg-[var(--surface)] border border-[var(--border-color)] focus:border-foreground/30 focus:ring-1 focus:ring-foreground/10 focus:outline-none px-4 py-2.5 text-sm resize-none rounded-xl text-foreground placeholder:text-muted-foreground/50 transition-all scrollbar-thin"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSend(inputValue)}
            disabled={!inputValue.trim() || isTyping}
            className="shrink-0 h-[42px] w-[42px] flex items-center justify-center bg-foreground text-background rounded-xl hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </motion.button>
        </div>
        <div className="flex items-center justify-between mt-1.5 px-1">
          <span className="text-[10px] text-muted-foreground/40">
            {inputValue.length > 0 ? `${inputValue.length} chars` : "Enter to send · Shift+Enter for new line"}
          </span>
        </div>
      </div>
    </div>
  );
}
