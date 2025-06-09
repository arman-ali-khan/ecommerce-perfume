"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play, Sparkles, ChevronDown } from "lucide-react"

const heroContent = [
  {
    id: 1,
    title: "Scent Stories",
    subtitle: "Where Every Fragrance Tells a Tale",
    description: "Discover the art of perfumery through our curated collection of extraordinary scents that capture life's most precious moments.",
    image: "https://images.pexels.com/photos/3059398/pexels-photo-3059398.jpeg",
    cta: "Begin Your Journey",
    link: "/shop",
    badge: "Artisan Collection",
    theme: "ocean"
  },
  {
    id: 2,
    title: "Timeless Elegance",
    subtitle: "Crafted for the Connoisseur",
    description: "Experience luxury redefined with our exclusive collection of premium fragrances, each bottle a masterpiece of olfactory art.",
    image: "https://images.pexels.com/photos/3059625/pexels-photo-3059625.jpeg",
    cta: "Explore Luxury",
    link: "/shop?category=oriental",
    badge: "Limited Edition",
    theme: "luxury"
  },
  {
    id: 3,
    title: "Nature's Symphony",
    subtitle: "Fresh & Vibrant Essences",
    description: "Immerse yourself in the pure essence of nature with our fresh collection, capturing the beauty of gardens and meadows.",
    image: "https://images.pexels.com/photos/3059640/pexels-photo-3059640.jpeg",
    cta: "Discover Nature",
    link: "/shop?category=fresh",
    badge: "Eco-Conscious",
    theme: "nature"
  }
]

const themeColors = {
  ocean: "from-blue-600 via-cyan-500 to-teal-400",
  luxury: "from-purple-600 via-pink-500 to-rose-400",
  nature: "from-green-500 via-emerald-400 to-lime-400"
}

export function HeroSectionV3() {
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
      {/* Animated Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ scale: 1.2, opacity: 0 }}
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
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-full backdrop-blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, 40, 0],
            rotate: [0, -90, 0],
            x: [0, 20, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-tr from-white/15 to-white/5 transform rotate-45 backdrop-blur-sm"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"
        />
      </div>

      {/* Main Content */}
      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-7 space-y-8 text-white"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Badge 
                  className={`bg-gradient-to-r ${themeColors[currentContent.theme]} text-white border-0 px-6 py-3 text-sm font-medium rounded-full`}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  {currentContent.badge}
                </Badge>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="space-y-4"
              >
                <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                  <span className="block">{currentContent.title.split(' ')[0]}</span>
                  <span className={`block bg-gradient-to-r ${themeColors[currentContent.theme]} bg-clip-text text-transparent`}>
                    {currentContent.title.split(' ')[1]}
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                  {currentContent.subtitle}
                </h2>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-xl text-gray-200 max-w-2xl leading-relaxed"
              >
                {currentContent.description}
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Button asChild size="lg" className={`bg-gradient-to-r ${themeColors[currentContent.theme]} hover:opacity-90 text-white border-0 rounded-full px-8 py-4 text-lg font-medium`}>
                <Link href={currentContent.link}>
                  {currentContent.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-4 text-lg backdrop-blur-sm"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Story
              </Button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex items-center gap-3 pt-8"
            >
              <span className="text-sm text-gray-300">Discover More</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown className="w-5 h-5 text-gray-300" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Slide Previews */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:col-span-5 hidden lg:flex flex-col space-y-6"
          >
            {heroContent.map((slide, index) => (
              <motion.button
                key={slide.id}
                onClick={() => {
                  setCurrentSlide(index)
                  setIsAutoPlaying(false)
                }}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${
                  index === currentSlide 
                    ? 'scale-105 shadow-2xl' 
                    : 'hover:scale-102 opacity-70 hover:opacity-90'
                }`}
                whileHover={{ scale: index === currentSlide ? 1.05 : 1.02 }}
              >
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${themeColors[slide.theme]} opacity-60`} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="font-bold text-lg">{slide.title}</div>
                    <div className="text-sm opacity-90">{slide.subtitle}</div>
                  </div>
                </div>
                {index === currentSlide && (
                  <motion.div
                    layoutId="activeSlide"
                    className="absolute inset-0 border-4 border-white rounded-2xl"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
        <div className="flex space-x-3">
          {heroContent.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index)
                setIsAutoPlaying(false)
              }}
              className={`relative w-12 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            >
              {index === currentSlide && (
                <motion.div
                  className="absolute inset-0 bg-white rounded-full"
                  layoutId="activeIndicator"
                />
              )}
            </button>
          ))}
        </div>
        
        <div className="w-px h-6 bg-white/40" />
        
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-white hover:text-gray-300 transition-colors text-sm font-medium"
        >
          {isAutoPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </section>
  )
}