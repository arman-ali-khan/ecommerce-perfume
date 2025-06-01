import Link from "next/link"
import Image from "next/image"

import { ProductCard } from "@/components/shop/product-card"
import { getFeaturedProducts } from "@/lib/products"

const categories = [
  {
    title: "Clothing",
    image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    href: "/shop?category=clothing"
  },
  {
    title: "Electronics",
    image: "https://images.pexels.com/photos/8937661/pexels-photo-8937661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    href: "/shop?category=electronics"
  },
  {
    title: "Accessories",
    image: "https://images.pexels.com/photos/5370706/pexels-photo-5370706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    href: "/shop?category=accessories"
  },
  {
    title: "Home",
    image: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    href: "/shop?category=home"
  }
]

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts()
  
  return (
    <section className="py-16 md:py-24">
      <div className="container space-y-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Shop by Category
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Explore our curated collection of Web3-enabled products across different categories
          </p>
        </div>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative aspect-square">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center text-center pt-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Featured Products
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Discover our handpicked selection of premium Web3-enabled products
          </p>
        </div>
        
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        <div className="flex justify-center">
          <Link 
            href="/shop"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}