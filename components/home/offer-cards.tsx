"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Gift, Percent, Star } from "lucide-react"

const offers = [
  {
    id: "summer-sale",
    title: "Summer Collection",
    subtitle: "Fresh & Citrus Fragrances",
    discount: "30% OFF",
    description: "Beat the heat with our refreshing summer scents",
    image: "https://images.pexels.com/photos/3059640/pexels-photo-3059640.jpeg",
    link: "/shop?category=fresh",
    badge: "Limited Time",
    color: "from-blue-500 to-cyan-500",
    icon: Percent
  },
  {
    id: "luxury-bundle",
    title: "Luxury Bundle Deal",
    subtitle: "Premium Oriental Collection",
    discount: "Buy 2 Get 1 FREE",
    description: "Indulge in our most exclusive fragrances",
    image: "https://images.pexels.com/photos/3059625/pexels-photo-3059625.jpeg",
    link: "/shop?category=oriental",
    badge: "Best Value",
    color: "from-purple-500 to-pink-500",
    icon: Gift
  },
  {
    id: "flash-sale",
    title: "Flash Sale",
    subtitle: "Floral Favorites",
    discount: "50% OFF",
    description: "24-hour flash sale on selected floral perfumes",
    image: "https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg",
    link: "/shop?category=floral",
    badge: "Ends Soon",
    color: "from-rose-500 to-red-500",
    icon: Clock
  },
  {
    id: "new-arrivals",
    title: "New Arrivals",
    subtitle: "Woody & Masculine",
    discount: "20% OFF",
    description: "Discover our latest woody fragrances for men",
    image: "https://images.pexels.com/photos/3059650/pexels-photo-3059650.jpeg",
    link: "/shop?category=woody",
    badge: "Just Launched",
    color: "from-amber-500 to-orange-500",
    icon: Star
  }
]

export function OfferCards() {
  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Special Offers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on these exclusive deals and limited-time offers on our premium fragrances
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer, index) => {
            const Icon = offer.icon
            return (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Background Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${offer.color} opacity-80`} />
                  
                  {/* Badge */}
                  <Badge 
                    className="absolute top-3 left-3 bg-white/90 text-black hover:bg-white"
                  >
                    <Icon className="w-3 h-3 mr-1" />
                    {offer.badge}
                  </Badge>

                  {/* Discount */}
                  <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1">
                    <span className="text-sm font-bold text-black">
                      {offer.discount}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{offer.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {offer.subtitle}
                  </p>
                  <p className="text-sm mb-4 line-clamp-2">
                    {offer.description}
                  </p>
                  
                  <Button asChild className="w-full group-hover:shadow-md transition-shadow">
                    <Link href={offer.link}>
                      Shop Now
                    </Link>
                  </Button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Clock className="w-4 h-4" />
            <span>Limited time offers - Shop before they expire!</span>
          </div>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/shop">
              View All Deals
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}