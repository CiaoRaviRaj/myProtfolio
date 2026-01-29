"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/portfolio";
import { Package, FileJson, Layers } from "lucide-react";

export const Skills = () => {
  return (
    <section id="skills" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2 mb-12 justify-center">
          <FileJson className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-sans">
            package.json
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {RESUME_DATA.skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="rounded-lg border border-border bg-card/50 p-6 font-mono h-full">
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <Package className="h-4 w-4" />
                  <h3 className="text-lg font-bold">
                    &quot;{category.category.toLowerCase().replace(/\s+/g, "-")}&quot;
                  </h3>
                </div>
                
                <div className="space-y-2 pl-4 border-l border-border">
                  <div className="text-muted-foreground text-sm">{"{"}</div>
                  {category.items.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between group">
                      <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                        &quot;{skill.name.toLowerCase()}&quot;
                      </span>
                      <span className="text-xs text-muted-foreground">
                        : &quot;^{skill.progress}.0.0&quot;,
                      </span>
                    </div>
                  ))}
                  <div className="text-muted-foreground text-sm">{"}"}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
