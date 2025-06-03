"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Shirt, Watch, Laptop, Home as HomeIcon, ChevronRight, Gem, Wallet } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const categories = [
  {
    title: "Featured",
    icon: Gem,
    href: "/shop?category=featured",
    description: "Our most popular and exclusive fragrances",
    featured: true,
    subcategories: ["New Arrivals", "Best Sellers", "Limited Editions"]
  },
  {
    title: "Floral",
    icon: Watch,
    href: "/shop?category=floral",
    description: "Delicate and romantic scents featuring beautiful flowers",
    subcategories: ["Rose", "Jasmine", "Lily", "Mixed Florals"]
  },
  {
    title: "Woody",
    icon: Laptop,
    href: "/shop?category=woody",
    description: "Warm and sophisticated scents with precious woods",
    subcategories: ["Sandalwood", "Cedar", "Oud", "Pine"]
  },
  {
    title: "Oriental",
    icon: HomeIcon,
    href: "/shop?category=oriental",
    description: "Rich and exotic scents with spices and resins",
    subcategories: ["Spicy", "Amber", "Vanilla", "Incense"]
  },
  {
    title: "Fresh",
    icon: Shirt,
    href: "/shop?category=fresh",
    description: "Clean and invigorating scents for everyday wear",
    subcategories: ["Citrus", "Aquatic", "Green", "Aromatic"]
  },
  {
    title: "Citrus",
    icon: Wallet,
    href: "/shop?category=citrus",
    description: "Bright and energetic scents with citrus notes",
    subcategories: ["Bergamot", "Lemon", "Orange", "Grapefruit"]
  }
]

const heroSlides = [
  {
    image: "https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg",
    title: "Summer Collection",
    description: "Fresh and vibrant fragrances for the season",
    badge: "New Arrival",
    link: "/shop?category=fresh"
  },
  {
    image: "https://images.pexels.com/photos/3059398/pexels-photo-3059398.jpeg",
    title: "Luxury Perfumes",
    description: "Exclusive scents for special moments",
    badge: "Premium",
    link: "/shop?category=featured"
  },
  {
    image: "https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg",
    title: "Special Offer",
    description: "Up to 30% off on selected items",
    badge: "Limited Time",
    link: "/shop"
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
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="w-full"
          >
            {heroSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative flex overflow-hidden bg-black text-white">
                  <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/80 via-black/50 to-transparent" />
                  <div 
                    className="absolute inset-0 opacity-70" 
                    style={{
                      backgroundImage: `url('${slide.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  />
                  
                  <div className="container relative z-20 py-20 md:py-32">
                    <div className="mx-auto max-w-3xl text-center">
                      <Badge variant="web3" className="mb-5 px-3 py-1.5 text-sm font-medium">
                        {slide.badge}
                      </Badge>
                      
                      <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        {slide.title}
                      </h1>
                      
                      <p className="mx-auto mb-10 max-w-2xl text-xl text-zinc-400">
                        {slide.description}
                      </p>
                      
                      <div className="flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg" className="rounded-full px-8">
                          <Link href={slide.link}>Shop Now</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}