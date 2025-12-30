"use client"

import { motion } from "framer-motion"
import { Heart, Target, Zap, Users } from "lucide-react"

const values = [
  {
    icon: <Heart className="h-8 w-8 text-red-500" />,
    title: "Passion First",
    description: "We love what we do, and that enthusiasm shines through in every project we undertake."
  },
  {
    icon: <Target className="h-8 w-8 text-blue-500" />,
    title: "Client Centric",
    description: "Your success is our success. We prioritize your goals and users above all else."
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-500" />,
    title: "Innovation",
    description: "We stay ahead of the curve, constantly exploring new technologies and methodologies."
  },
  {
    icon: <Users className="h-8 w-8 text-green-500" />,
    title: "Collaboration",
    description: "Great things are built together. We foster a culture of open communication and teamwork."
  }
]

export function Values() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground mb-8">
              These principles guide our decisions, shape our culture, and define how we interact with our clients and each other.
            </p>
            <div className="h-1 w-24 bg-primary rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
