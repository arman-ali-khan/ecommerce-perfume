import { HeroSectionAlt } from "@/components/home-alt/hero-section-alt"
import { FeaturedProductsAlt } from "@/components/home-alt/featured-products-alt"
import { CategoryGridAlt } from "@/components/home-alt/category-grid-alt"
import { TestimonialsSection } from "@/components/home-alt/testimonials-section"
import { NewsletterSection } from "@/components/home-alt/newsletter-section"

export default function HomeAlt() {
  return (
    <>
      <HeroSectionAlt />
      <CategoryGridAlt />
      <FeaturedProductsAlt />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  )
}