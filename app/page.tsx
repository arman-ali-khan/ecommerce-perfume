import { HeroSection } from "@/components/home/hero-section"
import { FeaturedProducts } from "@/components/home/featured-products"
import { CategoryList } from "@/components/home/category-list"

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryList />
      <FeaturedProducts />
    </>
  )
}