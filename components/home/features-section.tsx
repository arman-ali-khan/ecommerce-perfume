import Link from "next/link"
import Image from "next/image"
import { Shirt, Watch, Laptop, Home as HomeIcon, ChevronRight, Gem, Wallet } from "lucide-react"

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

export function FeaturesSection() {
  return (
    <section className="py-16 max-w-56 md:py-24">
      <div className="container">
        <div className=" mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <AccordionItem key={category.title} value={`item-${index}`}>
                  <AccordionTrigger className="flex items-center gap-3 text-lg">
                    <Icon className="h-5 w-5" />
                    <span>{category.title}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Link 
                      href={category.href}
                      className="group relative flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-muted"
                    >
                   
                      <div className="flex-1">
                        <h3 className="font-medium">{category.title}</h3>
                      
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}