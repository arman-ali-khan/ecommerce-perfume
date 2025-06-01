"use client"

import { Home, ShoppingBag, Search, User, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useCart } from "@/providers/cart-provider"

const items = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Search", icon: Search, href: "/shop" },
  { label: "Cart", icon: ShoppingBag, href: "#", isCart: true },
  { label: "Account", icon: User, href: "#" },
  { label: "Menu", icon: Menu, href: "#" },
]

export function MobileNav() {
  const pathname = usePathname()
  const { toggleCart, totalItems } = useCart()
  
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 block sm:hidden">
      <div className="safe-area-inset-bottom" />
      <nav className="mx-2 mb-2 flex items-center justify-between rounded-2xl border bg-background/95 p-2 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          if (item.isCart) {
            return (
              <button
                key="cart"
                onClick={toggleCart}
                className="relative flex h-12 w-12 flex-col items-center justify-center gap-1"
              >
                <Icon
                  className={cn(
                    "h-6 w-6 transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}
                />
                {totalItems > 0 && (
                  <span className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                    {totalItems}
                  </span>
                )}
                <span className="text-xs text-muted-foreground">{item.label}</span>
              </button>
            )
          }
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex h-12 w-12 flex-col items-center justify-center gap-1"
            >
              <Icon
                className={cn(
                  "h-6 w-6 transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
              />
              <span className="text-xs text-muted-foreground">{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}