"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#services", label: "Služby" },
  { href: "#gallery", label: "Galéria" },
  { href: "#pricing", label: "Cenník" },
  { href: "#contact", label: "Kontakt" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 z-[999999999] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Book Now Button - Left (Desktop only) */}
          <Button
            onClick={() => scrollToSection("#contact")}
            variant="outline"
            size="sm"
            className="hidden md:flex rounded-full px-4 border-white/30 bg-transparent text-white hover:bg-white/10"
          >
            Objednať sa
          </Button>
          
          {/* Spacer for mobile to center logo */}
          <div className="md:hidden w-20"></div>

          {/* Logo - Center */}
          <button
            onClick={() => scrollToSection("#hero")}
            className="transition-opacity hover:opacity-80"
          >
            <img
              src="/logo.png"
              alt="Unlimited garage logo"
              className="h-14 w-auto"
            />
          </button>

          {/* Hamburger Menu - Right */}
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 text-white cursor-pointer"
            aria-label="Otvoriť menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-[100]"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-background z-[101] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-10">
                  <img
                    src="/logo.png"
                    alt="Unlimited garage logo"
                    className="h-8 w-auto"
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-muted rounded-full transition-colors"
                    aria-label="Zatvoriť menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className="text-left text-lg font-medium py-3 border-b border-border transition-colors hover:text-primary cursor-pointer"
                    >
                      {link.label}
                    </button>
                  ))}
                  <div className="pt-4 border-t border-border">
                    <a
                      href="tel:+421951300838"
                      className="text-lg font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
                    >
                      +421-951-300-838
                    </a>
                  </div>
                  <Button onClick={() => scrollToSection("#contact")} className="mt-6 rounded-full w-full" size="lg">
                    Objednať sa
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
