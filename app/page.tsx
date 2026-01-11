import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { Statistics } from "@/components/statistics"
import { ServicesSection } from "@/components/services-section"
import { GallerySection } from "@/components/gallery-section"
import { AwardSection } from "@/components/award-section"
import { OrlySection } from "@/components/orly-section"
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
      <AwardSection />
      <OrlySection />
      <section className="py-0 bg-background md:hidden">
        <TextReveal className="h-[120vh] md:h-[200vh]">
        Keď sa spojí technika, cit pre detail a kvalitná práca, vzniká rozdiel, ktorý vidíš na prvý pohľad
        </TextReveal>
      </section>
      <ReviewsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
