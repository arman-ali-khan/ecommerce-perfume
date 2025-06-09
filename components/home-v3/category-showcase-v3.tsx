"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Leaf, Crown, Zap, Sun, Sparkles } from "lucide-react"

const categories = [
  {
    id: "floral",
    name: "Floral",
    description: "Romantic & Feminine",
    longDescription: "Delicate petals and blooming gardens captured in exquisite fragrances that speak to the heart.",
    image: "https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg",
    href: "/shop?category=floral",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
    products: "25+ Products",
    featured: ["Rose Absolute", "Jasmine Night", "Peony Dreams"]
  },
  {
    id: "woody",
    name: "Woody",
    description: "Warm & Sophisticated",
    longDescription: "Rich woods and earthy notes that evoke strength, warmth, and timeless elegance.",
    image: "https://images.pexels.com/photos/3059650/pexels-photo-3059650.jpeg",
    href: "/shop?category=woody",
    icon: Leaf,
    color: "from-amber-600 to-orange-600",
    products: "18+ Products",
    featured: ["Cedar Essence", "Sandalwood Noir", "Oak & Amber"]
  },
  {
    id: "oriental",
    name: "Oriental",
    description: "Rich & Exotic",
    longDescription: "Mysterious spices and precious resins from ancient trade routes, creating captivating allure.",
    image: "https://images.pexels.com/photos/3059625/pexels-photo-3059625.jpeg",
    href: "/shop?category=oriental",
    icon: Crown,
    color: "from-purple-600 to-indigo-600",
    products: "12+ Products",
    featured: ["Oud Royal", "Spice Market", "Golden Amber"]
  },
  {
    id: "fresh",
    name: "Fresh",
    description: "Clean & Invigorating",
    longDescription: "Crisp air and morning dew, bringing vitality and energy to every moment of your day.",
    image: "https://images.pexels.com/photos/3059398/pexels-photo-3059398.jpeg",
    href: "/shop?category=fresh",
    icon: Zap,
    color: "from-cyan-500 to-blue-500",
    products: "22+ Products",
    featured: ["Ocean Breeze", "Morning Mist", "Citrus Burst"]
  },
  {
    id: "citrus",
    name: "Citrus",
    description: "Bright & Energetic",
    longDescription: "Zesty fruits and sunny disposition, perfect for those who embrace life with enthusiasm.",
    image: "https://images.pexels.com/photos/3059640/pexels-photo-3059640.jpeg",
    href: "/shop?category=citrus",
    icon: Sun,
    color: "from-yellow-500 to-orange-500",
    products: "15+ Products",
    featured: ["Lemon Verbena", "Grapefruit Fizz", "Bergamot Bliss"]
  },
  {
    id: "featured",
    name: "Featured",
    description: "Editor's Choice",
    longDescription: "Our most coveted selections, handpicked by fragrance experts for their exceptional quality.",
    image: "https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg",
    href: "/shop?category=featured",
    icon: Sparkles,
    color: "from-emerald-500 to-teal-500",
    products: "8+ Products",
    featured: ["Signature Blend", "Artisan Reserve", "Limited Edition"]
  }
]

export function CategoryShowcaseV3() {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-6 px-4 py-2">
            Fragrance Families
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Explore Our
            <span className="block bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Collections
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each fragrance family tells a unique story, crafted to complement different moods, occasions, and personalities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-4"
          >
            {categories.map((category, index) => {
              const Icon = category.icon
              const isActive = activeCategory.id === category.id
              const isHovered = hoveredCategory === category.id
              
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category)}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-white shadow-xl border-2 border-primary/20' 
                      : 'bg-white/50 hover:bg-white hover:shadow-lg border-2 border-transparent'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} ${
                      isActive || isHovered ? 'scale-110' : ''
                    } transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 ${
                        isActive ? 'text-primary' : 'text-gray-900'
                      }`}>
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {category.description}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {category.products}
                      </Badge>
                    </div>
                    <ArrowRight className={`h-5 w-5 text-muted-foreground transition-all duration-300 ${
                      isActive ? 'translate-x-1 text-primary' : ''
                    }`} />
                  </div>
                </motion.button>
              )
            })}
          </motion.div>

          {/* Active Category Display */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                {/* Hero Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={activeCategory.image}
                    alt={activeCategory.name}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${activeCategory.color} opacity-70`} />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">
                      {activeCategory.products}
                    </Badge>
                  </div>

                  {/* Category Icon */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                      <activeCategory.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-4xl font-bold mb-2">{activeCategory.name}</h3>
                    <p className="text-xl opacity-90">{activeCategory.description}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {activeCategory.longDescription}
                  </p>

                  {/* Featured Products */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4">Featured in this collection:</h4>
                    <div className="flex flex-wrap gap-3">
                      {activeCategory.featured.map((product, index) => (
                        <motion.div
                          key={product}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Badge variant="outline" className="px-3 py-1">
                            {product}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button asChild size="lg" className={`bg-gradient-to-r ${activeCategory.color} hover:opacity-90 text-white rounded-full px-8`}>
                    <Link href={activeCategory.href}>
                      Explore {activeCategory.name} Collection
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-4">
              Can't Decide? Let Our Experts Help
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take our personalized fragrance quiz to discover scents that perfectly match your style and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8">
                Take Fragrance Quiz
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8">
                View All Collections
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}