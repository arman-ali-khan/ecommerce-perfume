import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronRight, Shirt, Watch, Laptop, Home as HomeIcon, Gem, Wallet } from "lucide-react"
import Link from "next/link"

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
    subcategories: ["Cold Storage", "Hardware Wallets", "Accessories","Cold Storage", "Hardware Wallets", "Accessories","Cold Storage", "Hardware Wallets", "Accessories","Cold Storage", "Hardware Wallets", "Accessories","Cold Storage", "Hardware Wallets", "Accessories","Cold Storage", "Hardware Wallets", "Accessories","Cold Storage", "Hardware Wallets", "Accessories","Cold Storage", "Hardware Wallets", "Accessories"]
  }
]

interface CategoriesDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CategoriesDrawer({ open, onOpenChange }: CategoriesDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-9/12 sm:max-w-lg">
        <SheetHeader className="space-y-4">
          <SheetTitle>Categories</SheetTitle>
        </SheetHeader>
        <Accordion type="single" collapsible className="w-full pb-12 overflow-y-auto h-full mt-6">
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
                        onClick={() => onOpenChange(false)}
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
      </SheetContent>
    </Sheet>
  )
}