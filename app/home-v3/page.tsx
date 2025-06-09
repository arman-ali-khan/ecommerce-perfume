import { HeroSectionV3 } from "@/components/home-v3/hero-section-v3"
import { FeaturedProductsV3 } from "@/components/home-v3/featured-products-v3"
import { CategoryShowcaseV3 } from "@/components/home-v3/category-showcase-v3"
import { BrandPartnersV3 } from "@/components/home-v3/brand-partners-v3"
import { ExperienceSection } from "@/components/home-v3/experience-section"
import { NewsletterV3 } from "@/components/home-v3/newsletter-v3"

export default function HomeV3() {
  return (
    <>
      <HeroSectionV3 />
      <BrandPartnersV3 />
      <CategoryShowcaseV3 />
      <FeaturedProductsV3 />
      <ExperienceSection />
      <NewsletterV3 />
    </>
  )
}