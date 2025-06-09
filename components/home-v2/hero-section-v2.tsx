"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Play, Sparkles, Star } from "lucide-react"

const heroContent = [
  {
    id: 1,
    title: "Discover Your Signature Scent",
    subtitle: "Premium Fragrances Collection",
    description: "Explore our curated selection of luxury perfumes from world-renowned brands. Each fragrance tells a unique story.",
    image: "https://images.pexels.com/photos/3059398/pexels-photo-3059398.jpeg",
    cta: "Shop Collection",
    link: "/shop",
    badge: "New Arrivals",
    accent: "from-blue-600 to-purple-600"
  },
  {
    id: 2,
    title: "Luxury Meets Elegance",
    subtitle: "Exclusive Designer Collection",
    description: "Indulge in the finest selection of premium fragrances crafted by master perfumers around the world.",
    image: "https://images.pexels.com/photos/3059625/pexels-photo-3059625.jpeg",
    cta: "Explore Luxury",
    link: "/shop?category=oriental",
    badge: "Premium",
    accent: "from-purple-600 to-pink-600"
  },
  {
    id: 3,
    title: "Fresh & Vibrant",
    subtitle: "Summer Fragrance Collection",
    description: "Light, refreshing scents perfect for warm days and creating unforgettable memories.",
    image: "https://images.pexels.com/photos/3059640/pexels-photo-3059640.jpeg",
    cta: "Shop Fresh",
    link: "/shop?category=fresh",
    badge: "Limited Edition",
    accent: "from-green-500 to-teal-600"
  }
]

export function HeroSectionV2() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const currentContent = heroContent[currentSlide]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={currentContent.image}
              alt={currentContent.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full backdrop-blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 left-16 w-24 h-24 bg-white/5 rounded-full backdrop-blur-sm"
        />
      </div>

      {/* Main Content */}
      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-white"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Badge 
                  className={`bg-gradient-to-r ${currentContent.accent} text-white border-0 px-4 py-2 text-sm font-medium`}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  {currentContent.badge}
                </Badge>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-4"
              >
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  {currentContent.title}
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-300 font-light">
                  {currentContent.subtitle}
                </h2>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg text-gray-200 max-w-lg leading-relaxed"
              >
                {currentContent.description}
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full px-8">
                <Link href={currentContent.link}>
                  {currentContent.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-black rounded-full px-8"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Story
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-300">4.9/5 Rating</span>
              </div>
              <div className="text-sm text-gray-300">
                10,000+ Happy Customers
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Slide Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex flex-col items-end space-y-6"
          >
            <div className="space-y-4">
              {heroContent.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => {
                    setCurrentSlide(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`group flex items-center space-x-4 p-4 rounded-lg transition-all ${
                    index === currentSlide 
                      ? 'bg-white/20 backdrop-blur-sm' 
                      : 'hover:bg-white/10'
                  }`}
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left text-white">
                    <div className="font-medium text-sm">{slide.title}</div>
                    <div className="text-xs text-gray-300">{slide.subtitle}</div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <div className="flex space-x-2">
          {heroContent.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index)
                setIsAutoPlaying(false)
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
        
        <div className="w-px h-6 bg-white/40" />
        
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-white hover:text-gray-300 transition-colors text-sm"
        >
          {isAutoPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </section>
  )
}