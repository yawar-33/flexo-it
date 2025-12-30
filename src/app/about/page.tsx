"use client"

import { motion } from "framer-motion"
import { Users, CheckCircle, Award, Coffee } from "lucide-react"
import { Team } from "@/components/about/Team"
import { Values } from "@/components/about/Values"

const stats = [
  { label: "Successful Projects", value: "150+", icon: <CheckCircle className="h-6 w-6 text-primary" /> },
  { label: "Happy Clients", value: "98%", icon: <Users className="h-6 w-6 text-purple-500" /> },
  { label: "Awards Won", value: "12", icon: <Award className="h-6 w-6 text-yellow-500" /> },
  { label: "Years Experience", value: "10+", icon: <Coffee className="h-6 w-6 text-green-500" /> },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
          About Flexo IT
        </h1>
        
        <div className="space-y-6 text-lg text-muted-foreground mb-16">
          <p>
            At Flexo IT, we believe in the power of technology to transform businesses. 
            Founded in 2024, our mission has always been to bridge the gap between complex technical challenges and elegant, user-centric solutions.
          </p>
          <p>
            We are a team of passionate developers, designers, and strategists dedicated to pushing the boundaries of what is possible on the web. 
            From high-performance web applications to cutting-edge AI integrations, we deliver quality that speaks for itself.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/50 transition-colors"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        <Team />
        <Values />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-primary/5 p-8 md:p-12 mt-24"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              "We don't just write code; we architect experiences. Every line we write is a step towards a more efficient, beautiful, and connected world."
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
