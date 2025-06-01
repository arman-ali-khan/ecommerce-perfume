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
  const FeaturedIcon = categories[0].icon
  
  return (
    <section className="py-16 md:py-24">
      <div className="container space-y-12">
       

        
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
      </div>
    </section>
  )
}