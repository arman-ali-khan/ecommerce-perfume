import Link from "next/link"
import Image from "next/image"
import { Shirt, Watch, Laptop, Home as HomeIcon, ChevronRight, Gem, Wallet } from "lucide-react"

import { ProductCard } from "@/components/shop/product-card"
import { getFeaturedProducts } from "@/lib/products"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const categories = [
  {
    title: "Featured",
    icon: Gem,
    href: "/shop?category=featured",
    description: "Exclusive and limited edition Web3 products",
    featured: true,
    image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Clothing",
    icon: Shirt,
    href: "/shop?category=clothing",
    description: "Blockchain-inspired apparel and fashion items",
    image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Accessories",
    icon: Watch,
    href: "/shop?category=accessories",
    description: "Crypto-themed jewelry and accessories",
    image: "https://images.pexels.com/photos/5370706/pexels-photo-5370706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Electronics",
    icon: Laptop,
    href: "/shop?category=electronics",
    description: "Hardware wallets and digital devices",
    image: "https://images.pexels.com/photos/8937661/pexels-photo-8937661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Home",
    icon: HomeIcon,
    href: "/shop?category=home",
    description: "NFT displays and home decor",
    image: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Wallets",
    icon: Wallet,
    href: "/shop?category=wallets",
    description: "Secure cryptocurrency hardware wallets",
    image: "https://images.pexels.com/photos/8370784/pexels-photo-8370784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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

        <div className="grid gap-8 lg:grid-cols-[300px,1fr]">
          <div className="rounded-lg border bg-card">
            {/* Featured Category */}
            <div className="relative overflow-hidden">
              <div className="aspect-[21/9] relative">
                <Image
                  src={categories[0].image}
                  alt={categories[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <categories[0].icon className="mx-auto h-8 w-8 mb-2" />
                    <h3 className="text-xl font-bold">{categories[0].title}</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Category List */}
            <div className="p-4">
              <Accordion type="single" collapsible className="w-full">
                {categories.slice(1).map((category) => {
                  const Icon = category.icon
                  return (
                    <AccordionItem value={category.title} key={category.title}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-2">
                          <Icon className="h-5 w-5" />
                          <span>{category.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="relative aspect-video mb-4 overflow-hidden rounded-md">
                          <Image
                            src={category.image}
                            alt={category.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="mb-4 text-sm text-muted-foreground">
                          {category.description}
                        </p>
                        <Link
                          href={category.href}
                          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                        >
                          Browse {category.title}
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
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