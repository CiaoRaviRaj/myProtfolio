import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Code2,
  Terminal,
  Cpu,
  Globe,
  Layout,
  Server,
  Database,
  Smartphone,
} from "lucide-react";

export const RESUME_DATA = {
  name: "Ravi Raj",
  initials: "RR",
  location: "Gandhinagar, Gujarat, India",
  locationLink: "https://www.google.com/maps/place/Gandhinagar,+Gujarat",
  about:
    "Backend-focused Full Stack Developer specializing in AI-driven SaaS platforms, workflow automation, LLM-integrated systems, and scalable backend architecture. Proven end-to-end ownership of complex projects.",
  summary:
    "Backend-focused Full Stack Developer specializing in AI-driven SaaS platforms, workflow automation, LLM-integrated systems, and scalable backend architecture. Strong expertise in Node.js, FastAPI, PostgreSQL, LangChain, MCP, and multi-model AI systems.",
  avatarUrl: "https://avatars.githubusercontent.com/u/114163925?v=4",
  personalWebsiteUrl: "https://ciaoraviraj.vercel.app",
  contact: {
    email: "ciaoraviraj@gmail.com",
    tel: "+919801329671",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/CiaoRaviRaj",
        icon: Github,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ciaoraviraj/?originalSubdomain=in",
        icon: Linkedin,
      },
      {
        name: "Email",
        url: "mailto:ciaoraviraj@gmail.com",
        icon: Mail,
      },
    ],
  },
  // Hero Section Code Block Data
  developer: {
    name: "Ravi Raj",
    role: "Full Stack Developer",
    location: "Gandhinagar, IN",
    experience: "2+ years",
    education: "B.Tech CSE",
    skills: ["Node.js", "FastAPI", "AI/LLM", "Next.js"],
    contact: "ciaoraviraj@gmail.com",
    passion: "Building scalable AI systems",
  },
  // About Section Stats
  stats: [
    {
      label: "Years Experience",
      value: "3+",
      icon: Terminal,
    },
    {
      label: "Projects Completed",
      value: "10+",
      icon: Code2,
    },
    {
      label: "Technologies",
      value: "20+",
      icon: Cpu,
    },
    {
      label: "Commits",
      value: "1000+",
      icon: Github,
    },
  ],
  education: [
    {
      school: "Parul University",
      degree: "B.Tech in Computer Science & Engineering",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Zignuts Technolab",
      link: "https://www.zignuts.com",
      badges: ["Full Time"],
      title: "Full Stack Web Developer",
      start: "Nov 2022",
      end: "Present",
      description:
        "Designed scalable backend systems for 5+ AI-powered SaaS platforms with workflow automation and LLM integrations. Built 10+ MCP automation modules, 20+ Trigger–Action pipelines, and 3+ RAG-enabled SaaS systems. Integrated Stripe billing, coupon engine, licensing, subscription limits, and TOKN credit system.",
      techStack: ["Node.js", "LangChain", "PostgreSQL", "AWS"],
    },
    {
      company: "PeopleMatic Labs",
      link: "",
      badges: ["Intern"],
      title: "Full Stack Developer Intern",
      start: "Aug 2022",
      end: "Nov 2022",
      description:
        "Contributed to client-facing applications with modular backend engineering. Improved sprint planning, testing, and release quality.",
      techStack: ["React", "Node.js", "MongoDB"],
    },
  ],
  skills: [
    {
      category: "AI & AI Tools",
      icon: Server,
      items: [
        { name: "AI Agents", progress: 95 },
        { name: "AI Workflow", progress: 94 },
        { name: "MCP", progress: 90 },
        { name: "LangChain", progress: 95 },
        { name: "LangGraph", progress: 95 },
        { name: "RAG-Vector Search", progress: 95 },
      ],
    },
    {
      category: "Backend",
      icon: Server,
      items: [
        { name: "Node.js", progress: 95 },
        { name: "express.js", progress: 95 },
        { name: "TRPC", progress: 93 },
        { name: "FastAPI", progress: 85 },
        { name: "PostgreSQL", progress: 95 },
        { name: "MongoDB", progress: 90 },
        { name: "Redis", progress: 90 },
        { name: "Microservices", progress: 90 },
        { name: "Python", progress: 80 },
      ],
    },
    {
      category: "Frontend",
      icon: Layout,
      items: [
        { name: "Next.js", progress: 95 },
        { name: "React.js", progress: 95 },
        { name: "Tailwind CSS", progress: 90 },
        { name: "TypeScript", progress: 98 },
        { name: "Shadcn UI", progress: 95},
        { name: "Material UI", progress: 90 },
        { name: "TanStack", progress: 93 },
      ],
    },
    {
      category: "Tools & DevOps",
      icon: Terminal,
      items: [
        { name: "Docker", progress: 90 },
        { name: "AWS", progress: 80 },
        { name: "Git", progress: 98 },        
        { name: "GitHub-Actions", progress: 98 },
        { name: "Stripe", progress: 95 },
      ],
    },
  ],
  projects: [
    {
      title: "PromptsX",
      category: "AI SaaS",
      techStack: ["Full Stack", "AI Workflow", "MCP", "RAG", "Stripe"],
      description:
        "AI & Prompt Engineering SaaS Platform. Built an AI Workflow Engine with 20+ Trigger–Action applications support, MCP nodes, LLM nodes, and RAG-enabled vector-search.",
      link: {
        label: "PromptsX",
        href: "#",
      },
    },
    {
      title: "AI-Based Hackathon 2024",
      category: "AI Agent",
      techStack: ["Backend Heavy", "Multi-modal AI", "Agentic System"],
      description:
        "Built pipeline for multi-modal generation (posts, images, videos, memes) and developed agentic prompt-analysis system.",
      link: {
        label: "Hackathon Project",
        href: "#",
      },
    },
    {
      title: "Auto Booking Agent",
      category: "Automation",
      techStack: ["FastAPI", "LangChain", "LangGraph"],
      description:
        "SaaS Chatbot for booking automation. Implemented chat-based booking orchestration.",
      link: {
        label: "Auto Booking Agent",
        href: "#",
      },
    },
    {
      title: "Learning-Hub",
      category: "EdTech",
      techStack: ["AI Video", "Vector Search", "Elai.io"],
      description:
        "AI Video Learning Platform. Engineered transcript generation, FAQs, tasks, and video rendering via Elai.io.",
      link: {
        label: "Learning-Hub",
        href: "#",
      },
    },
  ],
} as const;
