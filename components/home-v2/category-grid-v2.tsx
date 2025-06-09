"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Leaf, Crown, Zap, Sun, Sparkles } from "lucide-react"

const categories = [
  {
    id: "floral",
    name: "Floral",
    description: "Romantic & Feminine",
    image: "https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg",
    href: "/shop?category=floral",
    icon: Heart,
    gradient: "from-pink-500 via-rose-500 to-red-500",
    products: "25+ Products",
    featured: true
  },
  {
    id: "woody",
    name: "Woody",
    description: "Warm & Sophisticated",
    image: "https://images.pexels.com/photos/3059650/pexels-photo-3059650.jpeg",
    href: "/shop?category=woody",
    icon: Leaf,
    gradient: "from-amber-600 via-orange-600 to-red-600",
    products: "18+ Products"
  },
  {
    id: "oriental",
    name: "Oriental",
    description: "Rich & Exotic",
    image: "https://images.pexels.com/photos/3059625/pexels-photo-3059625.jpeg",
    href: "/shop?category=oriental",
    icon: Crown,
    gradient: "from-purple-600 via-indigo-600 to-blue-600",
    products: "12+ Products"
  },
  {
    id: "fresh",
    name: "Fresh",
    description: "Clean & Invigorating",
    image: "https://images.pexels.com/photos/3059398/pexels-photo-3059398.jpeg",
    href: "/shop?category=fresh",
    icon: Zap,
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    products: "22+ Products",
    featured: true
  },
  {
    id: "citrus",
    name: "Citrus",
    description: "Bright & Energetic",
    image: "https://images.pexels.com/photos/3059640/pexels-photo-3059640.jpeg",
    href: "/shop?category=citrus",
    icon: Sun,
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    products: "15+ Products"
  },
  {
    id: "featured",
    name: "Featured",
    description: "Editor's Choice",
    image: "https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg",
    href: "/shop?category=featured",
    icon: Sparkles,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    products: "8+ Products",
    featured: true
  }
]

export function CategoryGridV2() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Fragrance Categories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Our Collections
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover your perfect fragrance from our carefully curated categories, each with its own unique character
          </p>
        </motion.div>

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
                className={`group relative ${category.featured ? 'md:col-span-1 lg:col-span-1' : ''}`}
              >
                <Link href={category.href}>
                  <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3">
                    {/* Image Container */}
                    <div className={`relative ${category.featured ? 'h-80' : 'h-64'} overflow-hidden`}>
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-70 group-hover:opacity-80 transition-opacity`} />
                      
                      {/* Floating Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="absolute top-6 right-6"
                      >
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </motion.div>

                      {/* Product Count Badge */}
                      <div className="absolute bottom-6 left-6">
                        <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-3 py-1">
                          {category.products}
                        </Badge>
                      </div>

                      {/* Featured Badge */}
                      {category.featured && (
                        <div className="absolute top-6 left-6">
                          <Badge className="bg-yellow-500 text-black font-semibold px-3 py-1">
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                          <p className="text-muted-foreground">{category.description}</p>
                        </div>
                        <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-foreground group-hover:translate-x-2 transition-all" />
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      >
                        Explore Collection
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-4">
              Can't Decide? Let Us Help
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Take our fragrance quiz to discover scents that match your personality and preferences perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8">
                Take Fragrance Quiz
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8">
                View All Categories
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}