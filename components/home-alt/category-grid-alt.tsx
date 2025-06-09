"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Heart, Leaf, Crown, Zap, Sun } from "lucide-react"

const categories = [
  {
    id: "floral",
    name: "Floral",
    description: "Romantic & Feminine",
    image: "https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg",
    href: "/shop?category=floral",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
    products: "25+ Products"
  },
  {
    id: "woody",
    name: "Woody",
    description: "Warm & Sophisticated",
    image: "https://images.pexels.com/photos/3059650/pexels-photo-3059650.jpeg",
    href: "/shop?category=woody",
    icon: Leaf,
    color: "from-amber-600 to-orange-600",
    products: "18+ Products"
  },
  {
    id: "oriental",
    name: "Oriental",
    description: "Rich & Exotic",
    image: "https://images.pexels.com/photos/3059625/pexels-photo-3059625.jpeg",
    href: "/shop?category=oriental",
    icon: Crown,
    color: "from-purple-600 to-indigo-600",
    products: "12+ Products"
  },
  {
    id: "fresh",
    name: "Fresh",
    description: "Clean & Invigorating",
    image: "https://images.pexels.com/photos/3059398/pexels-photo-3059398.jpeg",
    href: "/shop?category=fresh",
    icon: Zap,
    color: "from-cyan-500 to-blue-500",
    products: "22+ Products"
  },
  {
    id: "citrus",
    name: "Citrus",
    description: "Bright & Energetic",
    image: "https://images.pexels.com/photos/3059640/pexels-photo-3059640.jpeg",
    href: "/shop?category=citrus",
    icon: Sun,
    color: "from-yellow-500 to-orange-500",
    products: "15+ Products"
  },
  {
    id: "featured",
    name: "Featured",
    description: "Editor's Choice",
    image: "https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg",
    href: "/shop?category=featured",
    icon: Sparkles,
    color: "from-emerald-500 to-teal-500",
    products: "8+ Products"
  }
]

export function CategoryGridAlt() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4">
              Fragrance Categories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Perfect Scent
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated fragrance families, each with its own unique character and charm
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={category.href}>
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                      
                      {/* Icon */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>

                      {/* Product Count */}
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                          {category.products}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold">{category.name}</h3>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      
                      <Button 
                        variant="ghost" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        Explore Collection
                      </Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/shop">
              View All Fragrances
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}