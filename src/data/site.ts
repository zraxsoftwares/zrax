import { env } from "@/lib/env"

export const siteConfig = {
  name: env("NEXT_PUBLIC_COMPANY_NAME", "ZRAX SOFTWARES"),
  tagline: env(
    "NEXT_PUBLIC_COMPANY_TAGLINE",
    "Building Custom Websites, Applications, & Innovative Software Solutions"
  ),
  description: env(
    "NEXT_PUBLIC_COMPANY_DESCRIPTION",
    "We engineer high-performance digital products — from real-time transaction systems to AI-powered analytics — with security and scalability at the core."
  ),

  nav: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Process", href: "#process" },
  ],

  contact: {
    email: env("NEXT_PUBLIC_CONTACT_EMAIL", "zraxsoftwares@gmail.com"),
    phone: env("NEXT_PUBLIC_CONTACT_PHONE", "+254769673300"),
    whatsapp: env("NEXT_PUBLIC_CONTACT_WHATSAPP", "+254769673300"),
    linkedin: env(
      "NEXT_PUBLIC_SOCIAL_LINKEDIN",
      "https://www.linkedin.com/in/zrax-softwares-800023418"
    ),
    github: env(
      "NEXT_PUBLIC_SOCIAL_GITHUB",
      "https://github.com/zraxsoftwares"
    ),
    instagram: env(
      "NEXT_PUBLIC_SOCIAL_INSTAGRAM",
      "https://www.instagram.com/zrax_tech/"
    ),
    discord: env(
      "NEXT_PUBLIC_SOCIAL_DISCORD",
      "https://discord.gg/zraxsoftwares"
    ),
  },

  rating: {
    score: 4.9,
    max: 5,
    count: 128,
    label: "Client Satisfaction",
  },

  testimonials: [
    {
      quote:
        "ZRAX delivered a platform that scaled to 50k users on day one. The architecture is rock-solid.",
      author: "Alex M.",
      role: "CTO, FinServe Ltd",
      avatar: "/testimonials/alex.svg",
    },
    {
      quote:
        "Their engineering team integrated with our legacy systems seamlessly. True professionals.",
      author: "Sarah K.",
      role: "VP Engineering, Nexus Consulting",
      avatar: "/testimonials/sarah.svg",
    },
    {
      quote:
        "We needed an AI pipeline built from scratch. ZRAX delivered in 6 weeks what others quoted 4 months for.",
      author: "Michael O.",
      role: "Director of Data, Aether Analytics",
      avatar: "/testimonials/michael.svg",
    },
    {
      quote:
        "Exceptional security architecture. Our SOC 2 audit passed with zero findings thanks to their work.",
      author: "David W.",
      role: "CISO, Qualitas Research",
      avatar: "/testimonials/david.svg",
    },
  ],

  clients: [
    { name: "TechVault", logo: "/clients/techvault.svg", industry: "Security" },
    { name: "FinServe", logo: "/clients/finserve.svg", industry: "Finance" },
    { name: "Nexus", logo: "/clients/nexus.svg", industry: "Consulting" },
    { name: "Aether", logo: "/clients/aether.svg", industry: "Analytics" },
    { name: "Qualitas", logo: "/clients/qualitas.svg", industry: "Research" },
    { name: "Vertex", logo: "/clients/vertex.svg", industry: "Healthcare" },
  ],

  process: [
    {
      step: 1,
      title: "Discovery",
      subtitle: "Understanding Your Vision",
      description:
        "Deep-dive consultation to understand your goals, users, and technical requirements. We deliver a comprehensive strategy document.",
      icon: "Search",
      duration: "1-2 weeks",
    },
    {
      step: 2,
      title: "Design",
      subtitle: "Architecture & Blueprint",
      description:
        "System architecture, data models, API contracts, and UI/UX wireframes. Every detail is planned before a line of code is written.",
      icon: "PenTool",
      duration: "2-3 weeks",
    },
    {
      step: 3,
      title: "Build",
      subtitle: "Craftsmanship in Code",
      description:
        "Agile development with bi-weekly sprints, continuous integration, and regular demos. You see progress every step of the way.",
      icon: "Code2",
      duration: "4-12 weeks",
    },
    {
      step: 4,
      title: "Launch",
      subtitle: "Deploy & Scale",
      description:
        "CI/CD pipeline setup, infrastructure provisioning, load testing, monitoring, and post-launch support with guaranteed SLAs.",
      icon: "Rocket",
      duration: "1-2 weeks",
    },
  ],

  services: [
    {
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern frameworks — React, Next.js, and Node.js — optimized for speed and conversion.",
      icon: "Code2",
    },
    {
      title: "Mobile Applications",
      description:
        "Cross-platform and native mobile apps with seamless UX, offline support, and real-time synchronization across devices.",
      icon: "Smartphone",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Infrastructure automation, CI/CD pipelines, and cloud-native architectures on AWS, GCP, and Azure.",
      icon: "Cloud",
    },
    {
      title: "AI & Data Analytics",
      description:
        "Machine learning pipelines, real-time data processing, and interactive dashboards that turn raw data into decisions.",
      icon: "Brain",
    },
    {
      title: "Security & Compliance",
      description:
        "Zero-trust architectures, end-to-end encryption, penetration testing, and compliance with GDPR, SOC 2, and PCI-DSS.",
      icon: "Shield",
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design from wireframes to high-fidelity prototypes, with usability testing and accessibility compliance.",
      icon: "PenTool",
    },
  ],

  whyChooseUs: [
    {
      title: "Deep Expertise",
      description:
        "Full-stack engineers who have shipped production systems handling millions of requests daily.",
      icon: "Code2",
    },
    {
      title: "Security-First",
      description:
        "Zero-trust architecture, end-to-end encryption, and rigorous audit trails built into every product.",
      icon: "Shield",
    },
    {
      title: "Reliable Support",
      description:
        "Dedicated engineering support with guaranteed SLAs and direct access to your development team.",
      icon: "Headphones",
    },
    {
      title: "Cutting-Edge Innovation",
      description:
        "We leverage AI, real-time data pipelines, and edge computing to build what's next.",
      icon: "Zap",
    },
  ],

  portfolio: [
    {
      title: "PayFlow",
      description:
        "Real-time payment processing engine with biometric authentication, fraud detection, and 99.99% uptime.",
      tech: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
      gradient: "from-yellow-500/20 to-amber-600/20",
      image: "/portfolio/payflow.svg",
      url: "#",
    },
    {
      title: "SecureVault",
      description:
        "Zero-trust data platform with end-to-end encryption, granular RBAC, and immutable audit logging.",
      tech: ["Next.js", "Go", "MongoDB", "Hashicorp Vault", "Kubernetes"],
      gradient: "from-violet-500/20 to-purple-600/20",
      image: "/portfolio/securevault.svg",
      url: "#",
    },
    {
      title: "InsightEngine",
      description:
        "Advanced analytics platform with real-time data processing, ML pipelines, and interactive dashboards.",
      tech: ["Python", "FastAPI", "TimescaleDB", "Apache Kafka", "TensorFlow"],
      gradient: "from-purple-500/20 to-violet-600/20",
      image: "/portfolio/insightengine.svg",
      url: "#",
    },
  ],

  team: [
    {
      name: "James Z.",
      role: "Founder & Lead Engineer",
      bio: "15+ years building distributed systems. Former infrastructure lead at a fintech unicorn. Passionate about crafting software that lasts.",
      avatar: "/team/james.svg",
    },
    {
      name: "Grace A.",
      role: "Head of Design",
      bio: "Award-winning UI/UX designer with expertise in luxury brand experiences and enterprise SaaS platforms.",
      avatar: "/team/grace.svg",
    },
  ],

  faq: [
    {
      question: "How long does a typical project take?",
      answer:
        "Timelines vary by scope. A custom website typically takes 4-6 weeks, web applications 8-16 weeks, and enterprise platforms 12-24 weeks. We'll give you a precise timeline during the discovery phase.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "Our core stack is React/Next.js for frontend, Node.js/Go for backend, and PostgreSQL for data. We choose the best tools for each project and are agnostic to tech stack — we'll work with whatever you have.",
    },
    {
      question: "Do you offer post-launch support?",
      answer:
        "Yes. Every engagement includes a 30-day post-launch support period. We also offer ongoing maintenance retainer packages with guaranteed SLAs and priority response times.",
    },
    {
      question: "Can you sign an NDA?",
      answer:
        "Absolutely. We routinely sign NDAs and can have one ready within 24 hours. Your ideas and IP are protected from day one.",
    },
    {
      question: "What does a typical engagement cost?",
      answer:
        "Pricing is project-based and depends on scope and complexity. We offer three tiers — Starter, Growth, and Enterprise — with custom quotes available. Contact us for a free consultation and estimate.",
    },
    {
      question: "How do we get started working together?",
      answer:
        "Reach out via our contact form or book a consultation. We'll schedule a discovery call to understand your project, then provide a proposal with timeline and pricing. Once approved, we kick off with a strategy session and begin the design phase within the same week.",
    },
    {
      question: "What if I need changes after the project is delivered?",
      answer:
        "Every package includes revision cycles — Starter has 1 round, Growth has 3, and Enterprise includes unlimited revisions. We also offer post-launch maintenance retainers for ongoing updates, feature additions, and optimization.",
    },
    {
      question: "What if I have an idea but no technical background — can you still help?",
      answer:
        "Absolutely — that's exactly who we're here for. You don't need to know a single line of code or have any technical documentation ready. We start from your vision, not your specs. Our discovery process translates your ideas into requirements, wireframes flow into designs, and designs become working software — with you involved and informed at every step. Think of us as your technical co-pilot: you bring the destination, we navigate the route.",
    },
  ],

  pricing: [
    {
      tier: "Starter",
      price: "Custom Quote",
      description: "For startups and simple web projects",
      features: [
        "Up to 5 pages / screens",
        "Responsive design",
        "Basic SEO setup",
        "30-day support",
        "1 revision cycle",
      ],
      cta: "Get a Quote",
      featured: false,
    },
    {
      tier: "Growth",
      price: "Custom Quote",
      description: "For growing businesses and web applications",
      features: [
        "Up to 20 pages / screens",
        "Custom UI/UX design",
        "API integrations",
        "Database architecture",
        "CI/CD pipeline",
        "60-day support",
        "3 revision cycles",
      ],
      cta: "Start a Project",
      featured: true,
    },
    {
      tier: "Enterprise",
      price: "Custom Quote",
      description: "For large-scale platforms and systems",
      features: [
        "Unlimited pages / screens",
        "Full-stack architecture",
        "AI/ML integration",
        "Security audit & compliance",
        "Load testing & optimization",
        "Dedicated engineering team",
        "Ongoing support retainer",
        "Unlimited revisions",
      ],
      cta: "Book a Consultation",
      featured: false,
    },
  ],

  formEndpoint: env(
    "NEXT_PUBLIC_FORM_ENDPOINT",
    "https://formspree.io/f/example"
  ),

  legal: {
    privacyPolicy: env("NEXT_PUBLIC_PRIVACY_POLICY_URL", "#"),
    terms: env("NEXT_PUBLIC_TERMS_URL", "/terms"),
  },
}
