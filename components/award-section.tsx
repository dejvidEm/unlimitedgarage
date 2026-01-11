"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"

export function AwardSection() {
  return (
    <section className="w-full py-12 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Heading and Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-lg md:text-xl font-semibold text-primary uppercase tracking-wide">Ocenenie Zlata firma za rok 2025</h3>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Ďakujem veľmi pekne za dôveru a pozitívne komentáre a reakcie od všetkých, ktorí mi pomohli získať toto prestížne hodnotenie
            </p>
          </motion.div>

          {/* Right Side - Image with Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
            style={{
              cursor: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23d4af37'/%3E%3C/svg%3E") 12 12, auto`
            }}
          >
            <div className="relative overflow-hidden rounded-2xl aspect-video">
              <img
                src="/zlata_firma.png"
                alt="Zlatá firma 2025"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center"
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                    Zlatá firma 2025
                  </h2>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

