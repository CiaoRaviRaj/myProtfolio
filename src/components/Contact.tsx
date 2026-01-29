"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/portfolio";
import { Button } from "./ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left Content - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between h-full"
        >
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              I&apos;m currently looking for new opportunities. Whether you have a question
              or just want to say hi, I&apos;ll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Email</div>
                  <a
                    href={`mailto:${RESUME_DATA.contact.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {RESUME_DATA.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Phone</div>
                  <a
                    href={`tel:${RESUME_DATA.contact.tel}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {RESUME_DATA.contact.tel}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Location</div>
                  <div className="text-muted-foreground">
                    {RESUME_DATA.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            {RESUME_DATA.contact.social.map((social) => (
              <Button
                key={social.name}
                variant="outline"
                size="lg"
                className="w-full gap-2"
                onClick={() => window.open(social.url, "_blank")}
              >
                <social.icon className="h-5 w-5" />
                {social.name}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-full"
        >
          <Card className="border-border bg-card/50 h-full">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Hello, I'd like to discuss..."
                  />
                </div>
                <Button className="w-full gap-2">
                  Send Message <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
