"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingTiers = [
  {
    name: "Interiér",
    price: "79",
    description: "Kompletné osvieženie interiéru",
    features: [
      "Kompletné vysávanie a utieranie",
      "Ošetrenie palubnej dosky a konzoly",
      "Čistenie okien",
      "Prahy a rámy dverí",
    ],
  },
  {
    name: "Exteriér",
    price: "59",
    description: "Výstavný lesk",
    features: [
      "Ručné umytie dvoma vedrami",
      "Čistenie kolies a pneumatík",
      "Ošetrenie pneumatík",
      "Leštenie vonkajších skiel",
    ],
  },
  {
    name: "Kompletný detailing",
    price: "129",
    description: "Kompletná starostlivosť",
    features: [
      "Všetko z balíka Interiér",
      "Všetko z balíka Exteriér",
      "Extrakcia čalúnenia",
      "Čistenie motorového priestoru",
    ],
    highlighted: true,
  },
]

export function PricingSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-muted/30">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">Jednoduchý cenník</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-pretty">
            Transparentné ceny bez skrytých poplatkov. Kvalitný detailing dostupný pre každého.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl bg-card border shadow-sm transition-all duration-300 hover:shadow-md ${
                tier.highlighted ? "border-primary ring-1 ring-primary" : "border-border"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                  Najobľúbenejší
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{tier.description}</p>
                <div className="mt-4">
                  <span className="text-sm text-muted-foreground">Od </span>
                  <span className="text-4xl font-semibold">{tier.price}€</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={scrollToContact}
                variant={tier.highlighted ? "default" : "outline"}
                className="w-full rounded-full"
              >
                Objednať
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          Konečná cena závisí od veľkosti a stavu vozidla.
        </motion.p>
      </div>
    </section>
  )
}
