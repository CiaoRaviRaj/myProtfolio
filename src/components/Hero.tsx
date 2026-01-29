"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/portfolio";
import { Button } from "./ui/Button";
import { Terminal, ArrowRight, Download } from "lucide-react";

export const Hero = () => {
  const [text, setText] = useState("");
  const [isInitializing, setIsInitializing] = useState(false);
  const fullText = `> Initializing system...\n> Loading profile: ${RESUME_DATA.name}\n> Role: ${RESUME_DATA.developer.role}\n> Status: Available for hire\n> Ready.`;
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 30); // Typing speed
    return () => clearInterval(timer);
  }, [fullText]);

  const handleInitialize = async () => {
    if (isInitializing) return;
    setIsInitializing(true);
    
    const bootSequence = [
      "\n> Executing Initialize_Project()...",
      "> Accessing Extensions Market...",
      "> Redirecting..."
    ];

    for (const line of bootSequence) {
      setText(prev => prev + line);
      await new Promise(r => setTimeout(r, 600));
    }

    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
    
    setIsInitializing(false);
  };

  return (
    <section id="home" className="container flex min-h-screen flex-col items-center justify-center gap-12 py-24 md:flex-row md:py-32">
      {/* Left Content - Intro */}
      <motion.div
        className="flex flex-1 flex-col items-start gap-6"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          System Online
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-sans">
          <span className="text-muted-foreground">Hello, I&apos;m</span>{" "}
          <span className="text-foreground">{RESUME_DATA.name}</span>
        </h1>
        
        <p className="max-w-[600px] text-lg text-muted-foreground font-mono">
          {RESUME_DATA.summary}
        </p>

        <div className="flex flex-wrap gap-4">
          <Button 
            size="lg" 
            className="gap-2 bg-primary text-background hover:bg-primary/90 font-mono"
            onClick={handleInitialize}
            disabled={isInitializing}
          >
            {isInitializing ? "Processing..." : "Initialize_Project()"} <ArrowRight className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2 border-border hover:bg-muted font-mono"
            href="/resume.pdf"
            download="Resume_Ravi_Raj.pdf"
          >
            Download_CV <Download className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      {/* Right Content - The Console */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative flex-1 w-full max-w-lg"
      >
        <div className="relative overflow-hidden rounded-lg border border-border bg-card shadow-2xl shadow-primary/5">
          {/* Terminal Header */}
          <div className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-2">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-destructive/50" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
              <div className="h-3 w-3 rounded-full bg-green-500/50" />
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground font-mono">
              <Terminal className="h-3 w-3" />
              <span>bash — 80x24</span>
            </div>
            <div className="w-12" />
          </div>

          {/* Terminal Body */}
          <div className="min-h-[300px] p-4 font-mono text-sm text-primary">
            <div className="whitespace-pre-wrap leading-relaxed">
              {text}
              <span className="animate-cursor-blink inline-block h-4 w-2 bg-primary align-middle ml-1" />
            </div>
          </div>
          
          {/* Scanline Effect */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] opacity-20" />
        </div>
        
        {/* Glow */}
        <div className="absolute -inset-4 -z-10 rounded-xl bg-primary/10 blur-3xl opacity-50" />
      </motion.div>
    </section>
  );
};
