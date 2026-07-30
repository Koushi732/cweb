"use client";

import React, { useState, useEffect, useCallback } from "react";
import { MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const ChatWindow = dynamic(() => import("./ChatWindow"), { ssr: false });

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("SIMPLEIN_chat_open");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored === "true") setIsOpen(true);
    setHasHydrated(true);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
    localStorage.setItem("SIMPLEIN_chat_open", "true");
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    localStorage.setItem("SIMPLEIN_chat_open", "false");
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      localStorage.setItem("SIMPLEIN_chat_open", String(next));
      return next;
    });
  }, []);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  if (!hasHydrated) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end gap-3" role="complementary" aria-label="Chat Assistant">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="w-[calc(100vw-2.5rem)] sm:w-[400px] h-[min(600px,calc(100vh-7rem))] origin-bottom-right"
          >
            <ChatWindow onClose={close} onMinimize={toggle} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={toggle}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 bg-foreground text-background rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-4 focus:ring-foreground/15 transition-shadow"
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="x"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="msg"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse ring when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full border-[1.5px] border-foreground/30 animate-[ping_12s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none" />
        )}
      </motion.button>
    </div>
  );
}
