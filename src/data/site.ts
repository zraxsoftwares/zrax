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
    testimonial: {
      quote:
        "ZRAX delivered a platform that scaled to 50k users on day one. The architecture is rock-solid.",
      author: "Alex M.",
      role: "CTO, FinServe Ltd",
    },
  },

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
      gradient: "from-cyan-500/20 to-blue-600/20",
    },
    {
      title: "SecureVault",
      description:
        "Zero-trust data platform with end-to-end encryption, granular RBAC, and immutable audit logging.",
      tech: ["Next.js", "Go", "MongoDB", "Hashicorp Vault", "Kubernetes"],
      gradient: "from-violet-500/20 to-purple-600/20",
    },
    {
      title: "InsightEngine",
      description:
        "Advanced analytics platform with real-time data processing, ML pipelines, and interactive dashboards.",
      tech: ["Python", "FastAPI", "TimescaleDB", "Apache Kafka", "TensorFlow"],
      gradient: "from-emerald-500/20 to-teal-600/20",
    },
  ],

  legal: {
    privacyPolicy: env("NEXT_PUBLIC_PRIVACY_POLICY_URL", "#"),
    terms: env("NEXT_PUBLIC_TERMS_URL", "#"),
  },

  copyright: `© ${new Date().getFullYear()} ${env("NEXT_PUBLIC_COMPANY_NAME", "ZRAX SOFTWARES")}. All rights reserved.`,
}
