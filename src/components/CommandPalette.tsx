"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, X, ArrowRight } from "lucide-react";

const commands = [
  { id: "home", label: "Go to Home", href: "#home", icon: ArrowRight },
  { id: "about", label: "Go to About", href: "#about", icon: ArrowRight },
  { id: "skills", label: "View Skills", href: "#skills", icon: ArrowRight },
  { id: "projects", label: "View Projects", href: "#projects", icon: ArrowRight },
  { id: "contact", label: "Contact Me", href: "#contact", icon: ArrowRight },
];

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Toggle with Cmd+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const filteredCommands = commands.filter((command) =>
    command.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Floating Trigger Button for Mobile */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-background shadow-lg shadow-primary/20 hover:scale-110 transition-transform md:hidden"
      >
        <Command className="h-6 w-6" />
      </button>

      {/* Desktop Trigger Hint */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-2 rounded-lg border border-border bg-card/80 px-4 py-2 text-sm text-muted-foreground backdrop-blur-md">
        <span>Press</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
        <span>to open command palette</span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-primary/10"
            >
              <div className="flex items-center border-b border-border px-4">
                <Search className="mr-2 h-5 w-5 text-muted-foreground" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command or search..."
                  className="flex h-14 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground text-foreground"
                />
                <button onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                </button>
              </div>
              <div className="max-h-[300px] overflow-y-auto p-2">
                {filteredCommands.length === 0 ? (
                  <div className="py-6 text-center text-sm text-muted-foreground">
                    No results found.
                  </div>
                ) : (
                  <div className="space-y-1">
                    {filteredCommands.map((command) => (
                      <a
                        key={command.id}
                        href={command.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer group"
                      >
                        <command.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                        {command.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <div className="border-t border-border bg-muted/50 px-4 py-2 text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <span>Navigation</span>
                  <span className="font-mono">ESC to close</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
