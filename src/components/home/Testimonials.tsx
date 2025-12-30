"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar" // We'll need a simple Avatar or just use divs

const testimonials = [
  {
    quote: "Flexo IT transformed our digital presence. Their attention to detail and technical expertise is unmatched.",
    author: "Sarah Johnson",
    role: "CTO, TechFlow",
    initials: "SJ"
  },
  {
    quote: "The animations and user experience they built for us increased our conversion rate by 40%. Incredible work.",
    author: "Michael Chen",
    role: "Founder, StartUp X",
    initials: "MC"
  },
  {
    quote: "Professional, timely, and innovative. They didn't just build a website; they built a growth engine for us.",
    author: "Emma Williams",
    role: "Director, Creative Agency",
    initials: "EW"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Client Success Stories
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-white/5 relative hover:border-primary/20 transition-colors"
            >
              <Quote className="absolute top-8 right-8 h-8 w-8 text-primary/20" />
              <p className="text-lg mb-8 italic text-muted-foreground relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
