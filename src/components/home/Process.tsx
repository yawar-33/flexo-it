"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, Code, Rocket } from "lucide-react"

const steps = [
  {
    icon: <Search className="h-6 w-6 text-primary" />,
    title: "Discovery",
    description: "We dive deep into your business goals, target audience, and competitive landscape to build a solid foundation."
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
    title: "Strategy",
    description: "Our team crafts a tailored roadmap and design system that aligns with your vision and market needs."
  },
  {
    icon: <Code className="h-6 w-6 text-blue-500" />,
    title: "Development",
    description: "We build your solution using cutting-edge technologies, ensuring performance, security, and scalability."
  },
  {
    icon: <Rocket className="h-6 w-6 text-purple-500" />,
    title: "Launch & Scale",
    description: "We handle the deployment and provide ongoing support to help your digital product grow and evolve."
  }
]

export function Process() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            How We Work
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven workflow that delivers results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary border border-border">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">0{index + 1}. {step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
