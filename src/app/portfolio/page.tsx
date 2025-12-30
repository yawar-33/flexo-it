"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { ExternalLink, Github } from "lucide-react"
import { projects } from "@/lib/data"
import Link from "next/link"

const categories = ["All", "Web App", "Mobile", "AI"]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = React.useState("All")

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  )

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Work</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          A showcase of our best projects, demonstrating our expertise in creating digital experiences.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative ${
                activeCategory === category
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group rounded-2xl overflow-hidden border border-white/5 bg-card hover:border-primary/20 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5"
            >
              <Link href={`/portfolio/${project.slug}`} className="block">
                <div className="relative aspect-video overflow-hidden">
                    <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <span className="text-white font-medium bg-background/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                          View Details
                      </span>
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {project.category}
                    </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <span key={tech} className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                        {tech}
                        </span>
                    ))}
                    </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
