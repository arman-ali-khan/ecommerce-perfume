import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Shirt, Watch, Laptop, Home as HomeIcon, ChevronRight, Gem, Wallet } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const categories = [
  {
    title: "Featured",
    icon: Gem,
    href: "/shop?category=featured",
    description: "Exclusive and limited edition Web3 products",
    featured: true,
    subcategories: ["Limited Editions", "New Arrivals", "Best Sellers"]
  },
  {
    title: "Clothing",
    icon: Shirt,
    href: "/shop?category=clothing",
    description: "Blockchain-inspired apparel and fashion items",
    subcategories: ["T-Shirts", "Hoodies", "Jackets", "Accessories"]
  },
  {
    title: "Accessories",
    icon: Watch,
    href: "/shop?category=accessories",
    description: "Crypto-themed jewelry and accessories",
    subcategories: ["Watches", "Jewelry", "Bags", "Other"]
  },
  {
    title: "Electronics",
    icon: Laptop,
    href: "/shop?category=electronics",
    description: "Hardware wallets and digital devices",
    subcategories: ["Hardware Wallets", "Mining Equipment", "Displays"]
  },
  {
    title: "Home",
    icon: HomeIcon,
    href: "/shop?category=home",
    description: "NFT displays and home decor",
    subcategories: ["Wall Art", "Lighting", "Decorative Items"]
  },
  {
    title: "Wallets",
    icon: Wallet,
    href: "/shop?category=wallets",
    description: "Secure cryptocurrency hardware wallets",
    subcategories: ["Cold Storage", "Hardware Wallets", "Accessories"]
  }
]

export function HeroSection() {
  return (
    <section className="relative">
      <div className="grid lg:grid-cols-[300px,1fr]">
        {/* Categories Sidebar */}
        <div className="hidden lg:block border-r bg-muted/40 min-h-[calc(100vh-4rem)]">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <Accordion type="single" collapsible className="w-full">
              {categories.map((category, index) => {
                const Icon = category.icon
                return (
                  <AccordionItem key={category.title} value={`item-${index}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        <span>{category.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-6 py-2">
                        {category.subcategories.map((sub) => (
                          <Link 
                            key={sub}
                            href={`${category.href}/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                            className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground"
                          >
                            <ChevronRight className="h-3 w-3" />
                            {sub}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative">
          <div className="relative flex overflow-hidden bg-black py-20 text-white md:py-32">
            <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/80 via-black/50 to-transparent" />
            <div 
              className="absolute inset-0 opacity-30" 
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
            
            <div className="container relative z-20">
              <div className="mx-auto max-w-3xl text-center">
                <Badge variant="web3" className="mb-5 px-3 py-1.5 text-sm font-medium">
                  Web3 Shopping Experience
                </Badge>
                
                <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  The Future of <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Shopping</span> Is Here
                </h1>
                
                <p className="mx-auto mb-10 max-w-2xl text-xl text-zinc-400">
                  Shop with cryptocurrency, verify authenticity with blockchain, and own digital twins of your physical products.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="rounded-full px-8">
                    <Link href="/shop">Explore Products</Link>
                  </Button>
                  
                  <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-white/10 px-8 backdrop-blur hover:bg-white/20">
                    <Link href="/shop">Browse Categories</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}