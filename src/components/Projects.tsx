"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESUME_DATA } from "@/data/portfolio";
import { Button } from "./ui/Button";
import { Dialog } from "./ui/Dialog";
import { Tooltip } from "./ui/Tooltip";
import { Box, Star, Download, ExternalLink } from "lucide-react";

const categories = ["All", ...Array.from(new Set(RESUME_DATA.projects.map((p) => p.category)))];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<(typeof RESUME_DATA.projects)[number] | null>(null);

  const filteredProjects = RESUME_DATA.projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  const handleInstallClick = (project: (typeof RESUME_DATA.projects)[number]) => {
    if (project.link && project.link.href && project.link.href !== "#") {
      window.open(project.link.href, "_blank");
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <section id="projects" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2 mb-12 justify-center">
          <Box className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-sans">
            Extensions Market
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded px-3 py-1 text-xs font-mono transition-colors border ${
                activeCategory === category
                  ? "bg-primary/10 border-primary text-primary"
                  : "bg-transparent border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project) => {
              // Logic to show max items but fit in roughly 2 rows. 
              // We'll show first 5 normally, or if there are more, first 4 + chip
              const MAX_VISIBLE_TAGS = 5; 
              const showMore = project.techStack.length > MAX_VISIBLE_TAGS;
              const visibleTags = showMore ? project.techStack.slice(0, MAX_VISIBLE_TAGS - 1) : project.techStack;
              const remainingTags = showMore ? project.techStack.slice(MAX_VISIBLE_TAGS - 1) : [];

              return (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="group flex h-full flex-col gap-4 rounded-lg border border-border bg-card p-4 hover:border-primary/50 hover:bg-secondary/30 transition-all">
                    <div className="flex items-start gap-4">
                      {/* Icon Placeholder */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-primary/10 text-primary">
                        <Box className="h-6 w-6" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="truncate text-base font-bold text-foreground">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="truncate">{project.category}</span>
                          <span>•</span>
                          <div className="flex items-center gap-0.5">
                            <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                            <span>5.0</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 min-h-[50px] content-start">
                      {visibleTags.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded bg-secondary px-1.5 py-0.5 text-[10px] font-mono text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {showMore && (
                        <Tooltip content={
                          <div className="flex flex-col gap-1">
                            {remainingTags.map(t => <span key={t}>{t}</span>)}
                          </div>
                        }>
                          <span className="inline-flex items-center rounded bg-secondary px-1.5 py-0.5 text-[10px] font-mono text-secondary-foreground hover:bg-primary hover:text-primary-foreground cursor-help transition-colors">
                            +{remainingTags.length}
                          </span>
                        </Tooltip>
                      )}
                    </div>

                    <div className="mt-auto flex gap-2 pt-2">
                       <Button 
                        size="sm" 
                        className="w-full bg-primary text-background hover:bg-primary/90 font-bold text-xs h-8"
                        onClick={() => handleInstallClick(project)}
                      >
                        Install
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full border-border hover:bg-muted text-xs h-8 gap-1"
                        onClick={() => setSelectedProject(project)}
                      >
                        Details <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal */}
        <Dialog
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject?.title || ""}
          description={selectedProject?.category}
        >
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              {selectedProject?.description}
            </p>
            
            <div>
              <h4 className="mb-2 text-sm font-bold text-foreground">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-md border border-border bg-secondary/50 px-2 py-1 text-xs font-mono text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button className="flex-1 gap-2" onClick={() => {
                 if (selectedProject?.link && selectedProject.link.href && selectedProject.link.href !== "#") {
                    window.open(selectedProject.link.href, "_blank");
                 }
              }}>
                Install Extension
              </Button>
              {selectedProject?.link && (
                <Button variant="outline" className="flex-1 gap-2" onClick={() => window.open(selectedProject.link.href, "_blank")}>
                  View Source <ExternalLink className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </Dialog>
      </motion.div>
    </section>
  );
};
