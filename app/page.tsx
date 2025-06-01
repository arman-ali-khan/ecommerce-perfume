import { HeroSection } from "@/components/home/hero-section"
import { FeaturedProducts } from "@/components/home/featured-products"
import { FeaturesSection } from "@/components/home/features-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <FeaturesSection />
    </>
  )
}