import { HeroSection } from "@/components/home/hero-section"
import { FeaturedProducts } from "@/components/home/featured-products"
import { CategoryList } from "@/components/home/category-list"
import { OfferCards } from "@/components/home/offer-cards"

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryList />
      <OfferCards />
      <FeaturedProducts />
    </>
  )
}