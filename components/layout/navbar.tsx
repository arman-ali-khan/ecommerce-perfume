"use client"

import { MoonIcon, SearchIcon, ShoppingCartIcon, SunIcon, UserIcon } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/providers/cart-provider"
import { InstallPWA } from "@/components/pwa/install-pwa"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const categories = [
  {
    title: "Floral",
    href: "/shop?category=floral",
    description: "Romantic and feminine fragrances featuring beautiful flowers"
  },
  {
    title: "Woody",
    href: "/shop?category=woody",
    description: "Warm and sophisticated scents with precious woods"
  },
  {
    title: "Oriental",
    href: "/shop?category=oriental",
    description: "Rich and exotic scents with spices and resins"
  },
  {
    title: "Fresh",
    href: "/shop?category=fresh",
    description: "Clean and invigorating scents for everyday wear"
  },
  {
    title: "Citrus",
    href: "/shop?category=citrus",
    description: "Bright and energetic scents with citrus notes"
  },
  {
    title: "Featured",
    href: "/shop?category=featured",
    description: "Our most popular and exclusive fragrances"
  }
]

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const { totalItems, toggleCart } = useCart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "Web3 View", path: "/product-web3/1" },
  ]

  const handleSearchClick = () => {
    router.push("/shop?search=true")
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur transition-all">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-hexagon"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
            <span className="hidden font-bold sm:inline-block">CryptoShop</span>
          </Link>
        </div>
        
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`transition-colors hover:text-foreground/80 ${
                pathname === item.path
                  ? "text-foreground font-semibold"
                  : "text-foreground/60"
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Categories Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Categories
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {categories.map((category) => (
                      <ListItem
                        key={category.title}
                        title={category.title}
                        href={category.href}
                      >
                        {category.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        
        <div className="ml-auto flex items-center gap-2">
          <InstallPWA />
          
          <Button
            variant="ghost"
            size="icon"
            className="hidden lg:flex"
            onClick={handleSearchClick}
          >
            <SearchIcon className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-2"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </Button>
          )}
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => router.push("/profile")}
          >
            <UserIcon className="h-5 w-5" />
            <span className="sr-only">Profile</span>
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="relative" 
            onClick={toggleCart}
            aria-label="Open cart"
            data-cart-button
          >
            <ShoppingCartIcon className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                {totalItems}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}

const ListItem = ({ className, title, children, ...props }: {
  className?: string
  title: string
  children: React.ReactNode
  href: string
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}