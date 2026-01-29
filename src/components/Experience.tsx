"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/portfolio";
import { GitCommit, GitBranch, GitPullRequest } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2 mb-12 justify-center">
          <GitBranch className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-sans">
            Commit History
          </h2>
        </div>

        <div className="relative mx-auto max-w-3xl pl-4 sm:pl-0">
          {/* Main Branch Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-border sm:left-1/2 sm:-ml-0.5" />

          <div className="space-y-12">
            {RESUME_DATA.work.map((work, index) => (
              <motion.div
                key={work.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col sm:flex-row gap-8 ${
                  index % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Git Commit Dot */}
                <div className="absolute left-6 top-6 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-background ring-2 ring-primary sm:left-1/2 sm:-ml-2.5">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>

                {/* Content Card */}
                <div className="ml-12 sm:ml-0 sm:w-1/2">
                  <div className="group relative rounded-lg border border-border bg-card/50 p-6 hover:border-primary/50 transition-colors">
                    <div className="absolute -left-3 top-7 h-px w-3 bg-border sm:hidden" /> {/* Mobile connector */}
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-muted-foreground">
                          {work.start} - {work.end}
                        </span>
                        <div className="flex items-center gap-1 text-xs font-mono text-primary">
                          <GitCommit className="h-3 w-3" />
                          <span>{work.badges[0]}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground font-sans">
                        {work.title}
                      </h3>
                      <div className="text-lg font-medium text-primary">
                        @{work.company}
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {work.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-2">
                        {work.techStack?.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded border border-border bg-secondary/50 px-2 py-1 text-xs font-mono text-secondary-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Spacer */}
                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            ))}
          </div>
          
          {/* Merge Icon at bottom */}
          <div className="absolute bottom-0 left-6 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-background ring-2 ring-accent sm:left-1/2 sm:-ml-3">
            <GitPullRequest className="h-3 w-3 text-accent" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
