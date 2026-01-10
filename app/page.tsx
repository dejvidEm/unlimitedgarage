import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { Statistics } from "@/components/statistics"
import { ServicesSection } from "@/components/services-section"
import { GallerySection } from "@/components/gallery-section"
import { ReviewsSection } from "@/components/reviews-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { TextReveal } from "@/components/ui/text/text-reveal"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Statistics />
      <ServicesSection />
      <GallerySection />
      <section className="py-0 bg-background">
        <TextReveal className="h-[200vh]">
          Precision meets passion. Every detail matters. Excellence in every finish.
        </TextReveal>
      </section>
      <ReviewsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
