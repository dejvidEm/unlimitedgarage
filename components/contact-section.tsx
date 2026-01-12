"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Loader2 } from "lucide-react"

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        // Show more detailed error message
        const errorMsg = data.error || "Nepodarilo sa odoslať požiadavku"
        const details = data.details ? ` (${JSON.stringify(data.details)})` : ""
        throw new Error(errorMsg + details)
      }

      setIsSubmitted(true)
      setFormData({ name: "", contact: "", message: "" })
    } catch (err) {
      console.error("Contact form error:", err)
      setError(err instanceof Error ? err.message : "Nastala chyba pri odosielaní")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">Kontaktujte nás</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-pretty">
            Ste pripravení dopriať svojmu autu starostlivosť, akú si zaslúži? Napíšte nám a čoskoro sa vám ozveme.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-muted/50 border border-border">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Požiadavka odoslaná!</h3>
                <p className="text-muted-foreground">Ozveme sa vám do 24 hodín na potvrdenie vášho termínu.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                    {error}
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="name">Meno</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Vaše meno"
                    required
                    className="rounded-xl h-12"
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact">Telefón alebo email</Label>
                  <Input
                    id="contact"
                    name="contact"
                    type="text"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="Ako vás môžeme kontaktovať?"
                    required
                    className="rounded-xl h-12"
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Správa</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Popíšte vaše vozidlo a preferovanú službu..."
                    rows={4}
                    className="rounded-xl resize-none"
                    required
                    disabled={isLoading}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Odosielanie...
                    </>
                  ) : (
                    "Odoslať požiadavku"
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-full"
          >
            <div className="rounded-2xl overflow-hidden border border-border h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps?q=29.Augusta+1646%2F6,+Galanta+92401&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px]"
                title="Unlimited garage location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
