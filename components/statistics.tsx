"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "200+", label: "Spokojných klientov" },
  { value: "3", label: "Rokov skúseností" },
  { value: "500+", label: "Repasovaných svetiel" },
]

export function Statistics() {
  return (
    <section className="relative z-20 -mt-32 w-full px-6 lg:px-12 py-8 bg-zinc-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-muted/50 rounded-lg p-6 text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
            <div className="text-sm md:text-base text-white/80">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
