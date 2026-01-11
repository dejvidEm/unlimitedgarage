"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram } from "lucide-react"

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: WhatsAppIcon, href: "#", label: "WhatsApp" },
]

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col bg-zinc-900 overflow-hidden">
      {/* Gold/Orange Shadow Blob - Behind Black Overlay */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-40 z-0"></div>
      
      {/* Background Image - Desktop: Right Edge, Mobile: Below Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden lg:flex absolute inset-0 items-start justify-end z-20 pt-20"
      >
        <div className="relative h-full flex items-start justify-end">
          {/* Award Card - Behind Car */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute right-[15%] top-[45%] z-0 bg-card/95 backdrop-blur-sm border-2 border-primary/30 rounded-xl p-4 shadow-lg flex items-center gap-3"
          >
            <img
              src="/zlata_firma.png"
              alt="Zlatá firma"
              className="w-12 h-12 object-contain flex-shrink-0"
            />
            <p className="text-sm font-semibold text-foreground whitespace-nowrap">
              Zlatá firma roka 2025
            </p>
          </motion.div>
          
          <img
            src="/main_pic.png"
            alt="Luxury car"
            className="h-full w-auto object-contain relative z-10"
            style={{ transform: "scale(0.55)", transformOrigin: "right center" }}
          />
        </div>
      </motion.div>

      <div className="flex-1 flex flex-col lg:flex-row relative z-10">
        {/* Left Content Panel - Dark Overlay Behind Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-3/5 flex items-center relative"
        >
          {/* Dark Overlay Block Behind Text */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          
          <div className="w-full max-w-2xl mx-auto px-6 lg:px-12 pt-32 pb-12 lg:pt-32 lg:pb-20 relative z-10">
            {/* Social Media Icons - Desktop: Left Side Vertical, Mobile: Top Horizontal */}
            <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 flex-col items-center gap-4 px-4 z-20">
              {/* Vertical line above */}
              <div className="w-0.5 h-12 bg-primary"></div>
              
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="w-10 h-10 flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
              
              {/* Vertical line below */}
              <div className="w-0.5 h-12 bg-primary"></div>
            </div>

            {/* Main Content */}
            <div className="lg:pl-16 lg:ml-4">
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-none"
              >
                Profesionálna starostlivosť o Vaše auto
              </motion.h1>

              {/* Descriptive Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg sm:text-xl text-white/90 mb-6 max-w-xl leading-relaxed"
              >
                Presná práca, ktorá mení viditeľnosť aj vzhľad vozidla. Detail, ktorý má zmysel na ceste aj na pohľad.
              </motion.p>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.9 }}
                className="mb-10"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-white italic font-serif font-light max-w-xl">
                  "Svetlá robia rozdiel"
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Button
                  onClick={() => scrollToSection("#services")}
                  size="lg"
                  className="bg-primary text-background hover:bg-primary/90 rounded-lg px-8 h-12 text-base font-semibold"
                >
                  Zobraziť služby
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Social Media Icons - Mobile: Between Text and Image */}
      <div className="flex lg:hidden justify-center py-6 gap-4 z-20 relative">
        {/* Horizontal line left */}
        <div className="h-0.5 w-12 bg-primary self-center"></div>
        
        {socialLinks.map((social, index) => {
          const Icon = social.icon
          return (
            <motion.a
              key={social.label}
              href={social.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="w-10 h-10 flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
              aria-label={social.label}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          )
        })}
        
        {/* Horizontal line right */}
        <div className="h-0.5 w-12 bg-primary self-center"></div>
      </div>

      {/* Mobile Image - Below Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="lg:hidden flex items-center justify-center py-8 relative z-[40]"
      >
        <div className="relative w-full flex items-center justify-center px-6">
          <img
            src="/main_pic.png"
            alt="Luxury car"
            className="h-64 w-auto object-contain"
            style={{ transform: "translateY(-8rem)" }}
          />
        </div>
      </motion.div>

    </section>
  )
}
