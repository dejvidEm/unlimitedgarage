"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"

export function OrlySection() {
  return (
    <section className="w-full py-12 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image with Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group w-full"
            style={{
              cursor: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23d4af37'/%3E%3C/svg%3E") 12 12, auto`
            }}
          >
            <div className="relative overflow-hidden rounded-2xl aspect-video">
              <img
                src="/orly.png"
                alt="Orly motorizácie"
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
                    Orly motorizácie
                  </h2>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Heading and Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 w-full"
          >
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-lg md:text-xl font-semibold text-primary uppercase tracking-wide">Orly motorizácie</h3>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Ďakujem veľmi pekne za prejavenú dôveru, podporu a pozitívne hodnotenia.
            Veľmi si vážime všetky komentáre a reakcie od zákazníkov a partnerov, ktoré prispeli k získaniu tohto prestížneho ocenenia.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

