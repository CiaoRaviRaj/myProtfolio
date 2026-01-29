"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/portfolio";
import { Card, CardContent } from "./ui/Card";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <div className="prose prose-invert max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-4">
              {RESUME_DATA.about}
            </p>
            <p className="text-lg leading-relaxed">
              I specialize in building robust backend systems and integrating cutting-edge AI technologies. 
              My passion lies in creating efficient, scalable solutions that solve real-world problems.
            </p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {RESUME_DATA.stats.map((stat, index) => (
            <Card key={stat.label} className="border-border bg-card/50 hover:bg-card transition-colors">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <stat.icon className="mb-4 h-8 w-8 text-primary" />
                <div className="text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
