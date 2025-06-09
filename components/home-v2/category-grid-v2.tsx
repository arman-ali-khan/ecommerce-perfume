"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Leaf, Crown, Zap, Sun, Sparkles } from "lucide-react"
import { getProductsByCategory } from "@/lib/products"
import { ProductCard } from "@/components/shop/product-card"

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
  // Get floral products for the featured section
  const floralProducts = getProductsByCategory("floral").slice(0, 3)

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

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Side - Categories */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              {categories.map((category, index) => {
                const Icon = category.icon
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Link href={category.href}>
                      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                        {/* Image Container */}
                        <div className="relative h-32 overflow-hidden">
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
                            className="absolute top-4 right-4"
                          >
                            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2">
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                          </motion.div>

                          {/* Product Count Badge */}
                          <div className="absolute bottom-4 left-4">
                            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-2 py-1 text-xs">
                              {category.products}
                            </Badge>
                          </div>

                          {/* Featured Badge */}
                          {category.featured && (
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-yellow-500 text-black font-semibold px-2 py-1 text-xs">
                                Featured
                              </Badge>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-lg font-bold mb-1">{category.name}</h3>
                              <p className="text-sm text-muted-foreground">{category.description}</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                          </div>
                        </div>

                        {/* Hover Effect Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right Side - Featured Products */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Header with Explore Link */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Featured Products</h3>
                  <p className="text-muted-foreground">Discover our most popular fragrances</p>
                </div>
                <Button asChild variant="outline" className="rounded-full">
                  <Link href="/shop?category=floral">
                    Explore Floral Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Product Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {floralProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ProductCard product={product} index={index} />
                  </motion.div>
                ))}
              </div>

              {/* Additional Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-full p-3">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">Floral Collection</h4>
                    <p className="text-muted-foreground text-sm">
                      Romantic and feminine fragrances featuring the finest floral notes from around the world.
                    </p>
                  </div>
                  <Button asChild size="sm" className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600">
                    <Link href="/shop?category=floral">
                      View All
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
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