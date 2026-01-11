"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  { name: "Repas a oprava svetlometov", price: "na dopyt" },
  { name: "Vymena plexiskla svetlometov", price: "od 120€/ks" },
  { name: "Oprava denneho svietenia", price: "na dopyt" },
  { name: "Oprava ostatných porúch svetlometov", price: "na dopyt" },
  { name: "Polymerizácia/Leštenie svetlometov", price: "30€/ks" },
  { name: "UV Ochrana svetlometov", price: "od 10€/ks" },
  { name: "Inštalácia ambient osvetlenia", price: "od 300€" },
  { name: "Inštalácia hviezdneho stropu", price: "od 750€" },
  { name: "Výmena žiaroviek za LED", price: "20€ pár" },
  { name: "Dechrom svetlometov", price: "od 200€" },
  { name: "LED žiarovky pár", price: "50€" },
  { name: "Demontáž/Montáž nárazníka", price: "40€" },
]

export function PricingSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-muted/30">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">Cenník služieb</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-pretty">
            Transparentné ceny bez skrytých poplatkov. Kvalitná práca dostupná pre každého.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl bg-card border-2 border-primary/20 overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary/20 via-primary/15 to-primary/20 border-b-2 border-primary/30">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Služba</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Cena</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/10">
                  {services.map((service, index) => (
                    <motion.tr
                      key={service.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                      className={`transition-colors ${
                        index % 2 === 0
                          ? "bg-card hover:bg-primary/5"
                          : "bg-muted/30 hover:bg-primary/10"
                      }`}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-foreground">{service.name}</td>
                      <td className="px-6 py-4 text-right text-sm font-semibold text-primary">{service.price}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
