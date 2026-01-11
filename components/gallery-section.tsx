"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Shield, Clock, Award, Star } from "lucide-react"

const galleryItems = [
  {
    image: "/ambient2.png",
    title: "Ambientné osvetlenie",
    badge: "Najpopulárnejšie",
    badgeIcon: Award,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    image: "/strop.png",
    title: "Hviezdny strop",
    badge: "Inštalácia",
    badgeIcon: Sparkles,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    image: "/svetlo.png",
    title: "Repas svetlometov",
    badge: "Záruka 1 rok",
    badgeIcon: Shield,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    image: "/svetlo2.png",
    title: "Výmena žiaroviek za LED",
    badge: "Expresná služba",
    badgeIcon: Clock,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    image: "/svetlo3.png",
    title: "Repas svetlometov",
    badge: "Prémiové ošetrenie",
    badgeIcon: Sparkles,
    className: "md:col-span-2 md:row-span-1",
  },
  {
    image: "/volant.png",
    title: "Ambientné osvetlenie",
    badge: "Profesionálna práca",
    badgeIcon: Award,
    className: "md:col-span-1 md:row-span-1",
  },
]

function GalleryCard({ item, index }: { item: (typeof galleryItems)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const BadgeIcon = item.badgeIcon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${item.className}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        className="absolute top-4 right-4 z-10"
      >
        <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5">
          <BadgeIcon className="w-3.5 h-3.5 text-white" />
          <span className="text-xs font-medium text-white">{item.badge}</span>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className="text-xl md:text-2xl font-semibold text-white mb-2"
        >
          {item.title}
        </motion.h3>

        <motion.div
          className="h-0.5 bg-white/60"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
          style={{ width: "60px" }}
        />
      </div>

      <motion.div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative pt-[100%] md:pt-0 md:min-h-[250px]" />
    </motion.div>
  )
}

export function GallerySection() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" })

  return (
    <section id="gallery" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Naša práca</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Galéria našich <span className="text-primary">realizácií</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Prezrite si ukážky našej práce a presvedčte sa o kvalite, ktorú vášmu vozidlu poskytneme.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {galleryItems.map((item, index) => (
            <GalleryCard key={item.image} item={item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Chcete vidieť viac? Sledujte nás na sociálnych sieťach.</p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
            >
              Instagram
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
            >
              Facebook
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
