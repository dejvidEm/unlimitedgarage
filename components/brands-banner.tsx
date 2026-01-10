"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const brands = [
  { name: "Gtechniq", logo: "/gtechniq-logo-detailing-brand.jpg" },
  { name: "Gyeon", logo: "/gyeon-logo-car-care-brand.jpg" },
  { name: "Koch Chemie", logo: "/koch-chemie-logo-detailing.jpg" },
  { name: "Sonax", logo: "/sonax-logo-car-care-products.jpg" },
  { name: "Meguiar's", logo: "/meguiars-logo-car-detailing.jpg" },
  { name: "Auto Finesse", logo: "/auto-finesse-logo-premium-detailing.jpg" },
  { name: "CarPro", logo: "/carpro-logo-ceramic-coating.jpg" },
  { name: "Rupes", logo: "/rupes-logo-polishing-tools.jpg" },
]

export function BrandsBanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="relative py-16 overflow-hidden">
      {/* Asymmetrical background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-foreground" />
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          fill="none"
        >
          <path d="M0,0 L1440,0 L1440,200 L0,200 Z" fill="currentColor" className="text-foreground" />
          <path d="M0,0 Q400,80 800,40 T1440,60 L1440,0 Z" fill="currentColor" className="text-muted/10" />
          <path d="M0,200 Q600,140 1000,180 T1440,150 L1440,200 Z" fill="currentColor" className="text-muted/10" />
        </svg>
        {/* Diagonal accent line */}
        <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent transform -skew-x-12" />
        <div className="absolute top-0 right-[30%] w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent transform skew-x-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-widest">
            Používame prémiové produkty
          </span>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="relative grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
