import Link from "next/link"
import { getProductsByCategory } from "@/lib/products"
import { ProductCard } from "@/components/shop/product-card"
import { ProductCarousel } from "@/components/shop/product-carousel"

const categories = [
  {
    id: "floral",
    title: "Floral Fragrances",
    description: "Delicate and romantic scents featuring beautiful flowers"
  },
  {
    id: "woody",
    title: "Woody Fragrances",
    description: "Warm and sophisticated scents with precious woods"
  },
  {
    id: "oriental",
    title: "Oriental Fragrances",
    description: "Rich and exotic scents with spices and resins"
  },
  {
    id: "fresh",
    title: "Fresh Fragrances",
    description: "Clean and invigorating scents for everyday wear"
  },
  {
    id: "citrus",
    title: "Citrus Fragrances",
    description: "Bright and energetic scents with citrus notes"
  }
]

export function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24">
      <div className="container space-y-16">
        {categories.map(category => {
          const products = getProductsByCategory(category.id)
          
          if (products.length === 0) return null
          
          return (
            <div key={category.id} className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  {category.title}
                </h2>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </div>
              
              {/* Desktop Grid View */}
              <div className="hidden md:grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {products.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>

              {/* Mobile Carousel View */}
              <div className="md:hidden">
                <ProductCarousel products={products} />
              </div>
              
              <div className="text-center">
                <Link 
                  href={`/shop?category=${category.id}`}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  View all {category.title.toLowerCase()} →
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
