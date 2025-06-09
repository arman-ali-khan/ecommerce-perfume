import { HeroSectionV2 } from "@/components/home-v2/hero-section-v2"
import { FeaturedProductsV2 } from "@/components/home-v2/featured-products-v2"
import { CategoryGridV2 } from "@/components/home-v2/category-grid-v2"
import { StatsSection } from "@/components/home-v2/stats-section"
import { NewsletterSectionV2 } from "@/components/home-v2/newsletter-section-v2"

export default function HomeV2() {
  return (
    <>
      <HeroSectionV2 />
      <StatsSection />
      <CategoryGridV2 />
      <FeaturedProductsV2 />
      <NewsletterSectionV2 />
    </>
  )
}