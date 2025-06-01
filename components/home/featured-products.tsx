import Link from "next/link"

import { ProductCard } from "@/components/shop/product-card"
import { getFeaturedProducts } from "@/lib/products"

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts()
  
  return (
    <section className="py-16 md:py-24">
      <div className="container space-y-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Featured Products
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Discover our handpicked selection of premium Web3-enabled products
          </p>
        </div>
        
        <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        <div className="flex justify-center">
          <Link 
            href="/shop"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}