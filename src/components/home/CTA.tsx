"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10" />
      <div className="absolute -top-[50%] -left-[20%] w-[100%] h-[100%] bg-primary/20 rounded-full blur-[150px]" />
      
      <div className="container px-4 mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let's discuss your project and see how we can help you achieve your business goals with our premium IT services.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-8 text-lg gap-2">
              Start Your Project <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
