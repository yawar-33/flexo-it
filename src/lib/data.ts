import { Monitor, Smartphone, Cloud, Bot, Code2, LineChart, CheckCircle, Users } from "lucide-react"
import React from "react"

export interface Service {
  slug: string
  title: string
  description: string
  icon: any
  fullDescription: string
  features: string[]
  benefits: string[]
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  image: string
  description: string
  tech: string[]
  challenge: string
  solution: string
  results: string
}

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    description: "Custom web applications built with Next.js, React, and robust backend technologies.",
    icon: Monitor,
    fullDescription: "We build high-performance, scalable web applications tailored to your business needs. Utilizing the latest technologies like Next.js and React, we ensure your digital presence is fast, secure, and SEO-friendly. Whether it's a complex SaaS platform or a high-converting landing page, our expert team delivers pixel-perfect interfaces and robust backends.",
    features: ["Single Page Applications (SPA)", "Progressive Web Apps (PWA)", "E-commerce Solutions", "Content Management Systems (CMS)", "API Integration"],
    benefits: ["Faster Load Times", "Improved SEO Rankings", "Seamless User Experience", "Scalable Architecture", "Secure Data Handling"]
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android using React Native.",
    icon: Smartphone,
    fullDescription: "Reach your customers on their favorite devices with our top-tier mobile application development services. We specialize in cross-platform development using React Native, allowing you to launch on both iOS and Android with a single codebase without compromising on native performance and feel.",
    features: ["Cross-Platform Compatibility", "Native Performance", "Offline Functionality", "Push Notifications", "App Store Optimization"],
    benefits: ["Reduced Development Cost", "Faster Time to Market", "Unified User Experience", "Easy Maintenance", "Wider Audience Reach"]
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure design, migration, and management (AWS/Azure).",
    icon: Cloud,
    fullDescription: "Transform your business operations with our comprehensive cloud solutions. We inspect, design, and manage scalable cloud infrastructures on major platforms like AWS and Azure. From serverless architectures to container orchestration with Kubernetes, we ensure your systems are reliable, secure, and cost-effective.",
    features: ["Cloud Migration", "Serverless Architecture", "DevOps & CI/CD", "Infrastructure as Code", "Security Audits"],
    benefits: ["High Availability", "Auto-scaling Capabilities", "Cost Optimization", "Enhanced Security", "Disaster Recovery"]
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    description: "Leveraging Large Language Models and Machine Learning to automate workflows.",
    icon: Bot,
    fullDescription: "Stay ahead of the competition by integrating cutting-edge Artificial Intelligence into your business. We help you leverage the power of LLMs and Machine Learning to automate complex workflows, enhance customer support with intelligent chatbots, and derive actionable insights from your data.",
    features: ["Custom Chatbots", "Predictive Analytics", "Natural Language Processing", "Process Automation", "Personalization Engines"],
    benefits: ["Increased Efficiency", "24/7 Customer Support", "Data-Driven Decisions", "Reduced Operational Costs", "Innovative User Experiences"]
  },
  {
    slug: "api-development",
    title: "API Development",
    description: "Secure and efficient RESTful and GraphQL APIs to power your applications.",
    icon: Code2,
    fullDescription: "Connect your systems and enable seamless data flow with our custom API development services. We design and build secure, documented, and high-performance RESTful and GraphQL APIs that serve as the backbone of your digital ecosystem, enabling easy integration with third-party services and mobile apps.",
    features: ["REST & GraphQL Design", "Secure Authentication (OAuth/JWT)", "Rate Limiting & Caching", "Comprehensive Documentation", "Microservices Architecture"],
    benefits: ["Seamless Integration", "Enhanced Security", "Better Performance", "Future-proof Scalability", "Easy Partner Collaboration"]
  },
  {
    slug: "digital-strategy",
    title: "Digital Strategy",
    description: "Consulting services to align your technology roadmap with business goals.",
    icon: LineChart,
    fullDescription: "Navigate the complex digital landscape with confidence. Our digital strategy consulting aligns your technology investments with your business objectives. We analyze your current state, identify opportunities for growth, and create a roadmap for digital transformation that drives real business value.",
    features: ["Tech Stack analysis", "Competitor Analysis", "Roadmap Planning", "Process Optimization", "ROI Assessment"],
    benefits: ["Clear Strategic Direction", "Optimized Resource Allocation", "Risk Mitigation", "Competitive Advantage", "Measurable Growth"]
  },
  {
    slug: "qa-testing",
    title: "QA & Testing Services",
    description: "Comprehensive quality assurance strategies to ensure flawless software performance.",
    icon: CheckCircle,
    fullDescription: "Deliver bug-free, high-performance software with our rigorous operational quality assurance services. From automated testing pipelines to manual user acceptance testing (UAT), we ensure your applications meet the highest standards of reliability, security, and user experience before they ever reach production.",
    features: ["Automated Testing", "Manual QA", "Performance Testing", "Security Analysis", "User Acceptance Testing (UAT)"],
    benefits: ["Bug-Free Releases", "Enhanced Security", "Improved User Satisfaction", "Reduced Maintenance Costs", "Faster Release Cycles"]
  },
  {
    slug: "team-outsourcing",
    title: "Dedicated Teams",
    description: "Scale your development capacity instantly with our expert engineering teams.",
    icon: Users,
    fullDescription: "Rapidly scale your development capabilities without the overhead of hiring. Our dedicated teams integrate seamlessly with your in-house staff, adopting your tools, culture, and workflows. Whether you need a full agile squad or specific domain experts, we provide the talent you need to accelerate your roadmap.",
    features: ["Staff Augmentation", "Dedicated Development Teams", "Project Management", "Agile Methodologies", "Time Zone Aligned"],
    benefits: ["Immediate Scalability", "Access to Top Talent", "Cost Efficiency", "Seamless Integration", "Focus on Core Business"]
  }
]

export const projects: Project[] = [
  {
    id: 1,
    slug: "nexus-analytics",
    title: "Nexus Analytics",
    category: "Web App",
    image: "/images/dashboard.png",
    description: "Enterprise-grade analytics dashboard with real-time data visualization.",
    tech: ["Next.js", "D3.js", "Tailwind", "Supabase"],
    challenge: "The client needed a way to visualize terabytes of real-time market data without UI lag. Existing solutions were too slow and expensive.",
    solution: "We built a custom dashboard using Next.js and D3.js, optimized with WebSockets for real-time updates and efficient data aggregation on the backend.",
    results: "Reduced data loading time by 80% and enabled the client to process 5x more data streams simultaneously."
  },
  {
    id: 2,
    slug: "nova-bank",
    title: "Nova Bank",
    category: "Mobile",
    image: "/images/mobile-app.png",
    description: "Secure mobile banking application with biometric authentication.",
    tech: ["React Native", "TypeScript", "Node.js", "Biometrics"],
    challenge: "Creating a secure yet user-friendly mobile banking experience that supports biometric login across a wide range of devices.",
    solution: "Developed a cross-platform React Native app with a custom native module for biometric security, ensuring compliance with banking regulations.",
    results: "Achieved a 4.9-star rating on App Store and processed over $1M in transactions within the first month."
  },
  {
    id: 3,
    slug: "aura-ai-chat",
    title: "Aura AI Chat",
    category: "AI",
    image: "/images/ai-chat.png",
    description: "Next-gen conversational AI interface with context awareness.",
    tech: ["OpenAI API", "Next.js", "Framer Motion", "Pinecone"],
    challenge: "Users needed an AI assistant that could remember context from past conversations and provide personalized responses, unlike generic chatbots.",
    solution: "Implemented a RAG (Retrieval-Augmented Generation) pipeline using Pinecone vector database to store and retrieve conversation history relevant to the current query.",
    results: "Increased user engagement time by 300% and reduced support ticket volume by 40%."
  },
  {
    id: 4,
    slug: "e-commerce-pro",
    title: "E-Commerce Pro",
    category: "Web App",
    image: "/images/dashboard.png",
    description: "Full-scale e-commerce platform with inventory management.",
    tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    challenge: "The client wanted to migrate from Shopify to a custom solution to avoid high transaction fees and implement custom inventory workflows.",
    solution: "Built a headless e-commerce platform with Next.js, integrating Stripe Connect for payments and a custom admin panel for inventory management.",
    results: "Saved the client 2% per transaction in fees and streamlined their warehouse operations."
  }
]
