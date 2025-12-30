"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Smartphone, Cloud } from "lucide-react"

const features = [
  {
    icon: <Zap className="h-8 w-8 text-yellow-500" />,
    title: "High Performance",
    description: "Lightning fast loading speeds optimized for core web vitals and user experience."
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-500" />,
    title: "Secure by Design",
    description: "Enterprise-grade security implementation protecting your data and your users."
  },
  {
    icon: <Smartphone className="h-8 w-8 text-green-500" />,
    title: "Mobile First",
    description: "Responsive designs that look perfect on every device, from mobile to desktop."
  },
  {
    icon: <Cloud className="h-8 w-8 text-purple-500" />,
    title: "Cloud Native",
    description: "Scalable architecture built for the cloud, ensuring reliability and growth."
  }
]

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Why Choose Flexo IT?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We deliver excellence in every pixel and line of code.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-white/5 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 p-3 rounded-xl bg-background border border-border inline-block shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
