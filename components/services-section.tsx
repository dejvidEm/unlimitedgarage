"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Droplets, Sofa, Car, Sparkles, Wrench, Lightbulb } from "lucide-react"

const services = [
  {
    icon: Lightbulb,
    title: "Opravy a repasy svetiel",
    description:
      "Diagnostika, oprava a obnova predných aj zadných svetiel vrátane zlepšenia funkčnosti a vzhľadu.",
  },
  {
    icon: Wrench,
    title: "LED prestavby a výmeny",
    description:
      "Profesionálna výmena pôvodného osvetlenia za moderné LED riešenia s dôrazom na výkon, životnosť a dizajn.",
  },
  {
    icon: Sparkles,
    title: "Ambientné osvetlenie",
    description:
      "Inštalácia a úprava ambientného osvetlenia interiéru pre lepšiu atmosféru a individuálny štýl vozidla.",
  },
]

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 sm:py-32 bg-zinc-900">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">Čo ponúkame</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-pretty">
            Prémiové služby prispôsobené vášmu vozidlu, dodané v dokonalej kvalite a presnosti.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
