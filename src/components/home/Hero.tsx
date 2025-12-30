"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ArrowRight, CheckCircle2, Code2, Globe, Laptop, Layout, Server, Shield, Zap } from "lucide-react"

const headlines = [
  "Crafting Digital Masterpieces",
  "Building Scalable Solutions",
  "Designing Future Interfaces",
  "Engineering Robust Systems",
  "Accelerating Digital Transformation",
  "Innovating with Purpose & Precision",
  "Empowering Business with Technology",
  "Developing Next-Gen Applications"
]

const descriptions = [
  "We transform complex challenges into elegant, high-performance digital solutions.",
  "Specializing in Next.js web applications and comprehensive IT services.",
  "Delivering custom software that drives business growth and innovation.",
  "Partnering with you to navigate the digital landscape with confidence."
]

const techStack = [
  { name: "Next.js", icon: Globe },
  { name: "React", icon: Code2 },
  { name: "TypeScript", icon: Laptop },
  { name: "Tailwind", icon: Layout },
  { name: "Node.js", icon: Server },
  { name: "Security", icon: Shield },
]

export function Hero() {
  const [index, setIndex] = React.useState(0)
  const [descIndex, setDescIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDescIndex((prev) => (prev + 1) % descriptions.length)
    }, 4000) 
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.2]" />
      </div>

      {/* Radiant Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container px-4 mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-border text-sm font-medium mb-8 backdrop-blur-md transition-colors cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-muted-foreground">Accepting new projects for 2025</span>
          </motion.div>

          {/* Headline Slider */}
          <div className="h-[140px] md:h-[180px] w-full flex items-start justify-center lg:justify-start">
             <AnimatePresence mode="wait">
              <motion.h1
                key={headlines[index]}
                initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -20, opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-foreground"
              >
                {headlines[index]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Description Slider */}
          <div className="h-[80px] w-full flex items-start justify-center lg:justify-start mb-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={descriptions[descIndex]}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl"
              >
                {descriptions[descIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
            <Link href="/portfolio" className="w-full sm:w-auto">
              <Button size="xl" className="w-full sm:w-auto gap-2 text-base font-semibold h-12">
                View Our Work <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <Button size="xl" variant="outline" className="w-full sm:w-auto h-12 text-base">
                Explore Services
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Visual - Richer 3D Composition */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
           className="relative hidden lg:block h-[600px] w-full"
        >
          {/* Main Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] bg-card/80 backdrop-blur-xl rounded-2xl border border-border shadow-2xl overflow-hidden z-20"
          >
             {/* Header */}
             <div className="h-12 border-b border-border flex items-center px-4 gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
             </div>
             {/* Content */}
             <div className="p-6 space-y-4">
                <div className="h-32 rounded-lg bg-muted animate-pulse border border-border" />
                <div className="space-y-2">
                   <div className="h-4 w-3/4 rounded bg-muted" />
                   <div className="h-4 w-1/2 rounded bg-muted" />
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                   <div className="h-24 rounded-lg bg-muted border border-border" />
                   <div className="h-24 rounded-lg bg-muted border border-border" />
                </div>
             </div>
             {/* Gradient glow at bottom */}
             <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background/20 to-transparent" />
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
            className="absolute top-20 right-10 p-4 bg-card/90 backdrop-blur-md border border-border rounded-xl shadow-xl z-30 flex items-center gap-3"
          >
            <div className="p-2 bg-green-500/20 rounded-lg text-green-500">
               <Zap className="h-6 w-6" />
            </div>
            <div>
               <div className="text-xs text-muted-foreground">Performance</div>
               <div className="text-lg font-bold text-foreground">99.9%</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-40 left-0 p-4 bg-card/90 backdrop-blur-md border border-border rounded-xl shadow-xl z-30 flex items-center gap-3"
          >
             <div className="p-2 bg-blue-500/20 rounded-lg text-blue-500">
               <Shield className="h-6 w-6" />
            </div>
            <div>
               <div className="text-xs text-muted-foreground">Security</div>
               <div className="text-lg font-bold text-foreground">Enterprise</div>
            </div>
          </motion.div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border rounded-full z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-border rounded-full z-10 border-dashed animate-[spin_60s_linear_infinite]" />
        </motion.div>
      </div>
    </section>
  )
}
