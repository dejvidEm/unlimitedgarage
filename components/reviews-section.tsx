"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
  {
    name: "Martin Kováč",
    role: "Majiteľ BMW M4",
    content:
      "Absolútne profesionálny prístup. Moje auto vyzerá lepšie ako keď som ho kúpil. Keramická ochrana drží už 2 roky bez problémov.",
    rating: 5,
    image: "/professional-man-avatar-portrait.jpg",
  },
  {
    name: "Lucia Horváthová",
    role: "Mercedes-Benz GLE",
    content: "Interiér môjho auta bol v katastrofálnom stave. Po ich práci vyzerá ako nový. Odporúčam každému!",
    rating: 5,
    image: "/professional-woman-avatar-portrait.jpg",
  },
  {
    name: "Peter Novák",
    role: "Audi RS6",
    content: "Korekcia laku bola úžasná. Všetky vírivé škrabance zmizli. Výsledok prekonal moje očakávania.",
    rating: 5,
    image: "/businessman-avatar-portrait.jpg",
  },
  {
    name: "Jana Szabová",
    role: "Porsche Cayenne",
    content: "Najlepší detailing v okolí. Profesionálne vybavenie, skvelá komunikácia a perfektný výsledok.",
    rating: 5,
    image: "/professional-woman-business-avatar.jpg",
  },
  {
    name: "Tomáš Baláž",
    role: "Tesla Model S",
    content: "PPF fólia na celé auto vrátane prednej kapoty. Práca na jednotku, precízne a bez bublín.",
    rating: 5,
    image: "/young-professional-man-avatar.png",
  },
  {
    name: "Eva Mikušová",
    role: "Range Rover Sport",
    content: "Už tretíkrát som tu a vždy odchádzam nadšená. Starostlivosť o môj biely interiér je perfektná.",
    rating: 5,
    image: "/elegant-woman-avatar-portrait.jpg",
  },
]

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className="w-[350px] mx-4 bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start gap-4 mb-4">
        <img
          src={review.image || "/placeholder.svg"}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-foreground">{review.name}</h4>
          <p className="text-sm text-muted-foreground">{review.role}</p>
        </div>
        <Quote className="w-8 h-8 text-primary/20" />
      </div>

      <div className="flex gap-1 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>

      <p className="text-muted-foreground leading-relaxed">{review.content}</p>
    </div>
  )
}

export function ReviewsSection() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" })

  return (
    <section id="reviews" className="py-24 md:py-32 bg-muted/30 overflow-hidden">
      <div ref={headerRef} className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6"
          >
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Recenzie klientov</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Čo hovoria naši <span className="text-primary">klienti</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Prečítajte si skúsenosti spokojných zákazníkov, ktorí nám zverili svoje vozidlá.
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Marquee pauseOnHover className="[--duration:50s] mb-6">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </Marquee>

        <Marquee pauseOnHover reverse className="[--duration:50s]">
          <div className="w-20 shrink-0"></div>
          {[...reviews].reverse().map((review) => (
            <ReviewCard key={review.name + "-reverse"} review={review} />
          ))}
        </Marquee>
      </motion.div>
    </section>
  )
}
