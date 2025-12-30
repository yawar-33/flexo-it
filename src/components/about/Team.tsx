"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Github } from "lucide-react"

const team = [
  {
    name: "Alex Morgan",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in tech innovation.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
  },
  {
    name: "Sarah Chen",
    role: "Lead Designer",
    bio: "Award-winning UI/UX designer obsessed with pixel perfection.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
  },
  {
    name: "David Kumar",
    role: "CTO",
    bio: "Full-stack architect specializing in scalable cloud systems.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  },
  {
    name: "Emily Davis",
    role: "Head of Marketing",
    bio: "Digital strategist helping brands find their voice.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
  }
]

export function Team() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Meet the Minds
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The passionate individuals behind every success story.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-white/5 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                 {/* Using external placeholder images for now, handled by next.config if needed or just standard img tag if remote patterns not set */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <div className="text-primary text-sm font-medium mb-3">{member.role}</div>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="flex gap-4">
                  <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  <Twitter className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  <Github className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
