"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Sparkles, Shield, Clock, Award, Star, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

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

const additionalGalleryItems = [
  {
    image: "/new.png",
    title: "Repas svetlometov",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    image: "/new2.png",
    title: "Repas svetlometov",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    image: "/new3.png",
    title: "Renovácia svetiel",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    image: "/new4.png",
    title: "Repas svetlometov",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    image: "/before.png",
    title: "Výmena žiaroviek za LED",
    className: "md:col-span-1 md:row-span-1",
    textPosition: "top" as const,
  },
  {
    image: "/before2.png",
    title: "Výmena žiaroviek za LED",
    className: "md:col-span-2 md:row-span-2",
    textPosition: "top" as const,
  },
]

function GalleryCard({ item, index, showBadge = true }: { item: (typeof galleryItems)[0] | (typeof additionalGalleryItems)[0]; index: number; showBadge?: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const BadgeIcon = 'badgeIcon' in item ? item.badgeIcon : null
  const textPosition = 'textPosition' in item ? item.textPosition : 'bottom'

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

      <div className={`absolute inset-0 ${textPosition === 'top' ? 'bg-gradient-to-b from-black/80 via-black/20 to-transparent' : 'bg-gradient-to-t from-black/80 via-black/20 to-transparent'}`} />

      {showBadge && 'badge' in item && item.badge && BadgeIcon && (
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
      )}

      <div className={`absolute ${textPosition === 'top' ? 'top-0' : 'bottom-0'} left-0 right-0 p-6 z-10`}>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className={`text-xl md:text-2xl font-semibold text-white ${textPosition === 'top' ? 'mt-2' : 'mb-2'}`}
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
  const [showMore, setShowMore] = useState(false)

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
            <GalleryCard key={item.image} item={item} index={index} showBadge={true} />
          ))}
        </div>

        {/* Show More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-8"
        >
          <Button
            onClick={() => setShowMore(!showMore)}
            variant="outline"
            className="bg-background border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 rounded-lg px-8 h-12 text-base font-semibold flex items-center gap-2"
          >
            Zobraziť viac fotiek
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} />
          </Button>
        </motion.div>

        {/* Additional Gallery Items */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4 mt-4">
                {additionalGalleryItems.map((item, index) => (
                  <GalleryCard key={item.image} item={item} index={index + galleryItems.length} showBadge={false} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Chcete vidieť viac? Sledujte nás na sociálnych sieťach.</p>
          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/un_limited_garage/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
            >
              Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
