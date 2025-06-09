"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react"

const heroSlides = [
  {
    id: 1,
    title: "Signature Scents",
    subtitle: "Discover Your Perfect Fragrance",
    description: "Curated collection of premium perfumes that define your unique style and personality.",
    image: "https://images.pexels.com/photos/3059398/pexels-photo-3059398.jpeg",
    cta: "Explore Collection",
    link: "/shop",
    badge: "New Collection",
    stats: { products: "200+", brands: "50+" }
  },
  {
    id: 2,
    title: "Luxury Redefined",
    subtitle: "Premium Fragrance Experience",
    description: "Indulge in the finest selection of luxury perfumes from world-renowned perfumers.",
    image: "https://images.pexels.com/photos/3059625/pexels-photo-3059625.jpeg",
    cta: "Shop Luxury",
    link: "/shop?category=oriental",
    badge: "Exclusive",
    stats: { satisfaction: "98%", customers: "10K+" }
  },
  {
    id: 3,
    title: "Fresh & Vibrant",
    subtitle: "Summer Fragrance Collection",
    description: "Light, refreshing scents perfect for warm days and memorable moments.",
    image: "https://images.pexels.com/photos/3059640/pexels-photo-3059640.jpeg",
    cta: "Shop Fresh",
    link: "/shop?category=fresh",
    badge: "Limited Edition",
    stats: { reviews: "5★", shipping: "Free" }
  }
]

export function HeroSectionAlt() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={currentSlideData.image}
          alt={currentSlideData.title}
          fill
          className="object-cover transition-all duration-1000 ease-in-out"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-white">
              <div className="space-y-4">
                <Badge variant="web3" className="w-fit">
                  {currentSlideData.badge}
                </Badge>
                
                <div className="space-y-2">
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    {currentSlideData.title}
                  </h1>
                  <h2 className="text-xl md:text-2xl text-gray-300">
                    {currentSlideData.subtitle}
                  </h2>
                </div>
                
                <p className="text-lg text-gray-200 max-w-lg leading-relaxed">
                  {currentSlideData.description}
                </p>
              </div>

              {/* Stats */}
              <div className="flex gap-8">
                {Object.entries(currentSlideData.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold">{value}</div>
                    <div className="text-sm text-gray-300 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
                  <Link href={currentSlideData.link}>
                    {currentSlideData.cta}
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-black"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Story
                </Button>
              </div>
            </div>

            {/* Right Content - Slide Indicators */}
            <div className="hidden lg:flex flex-col items-end space-y-6">
              <div className="space-y-4">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(index)}
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
                      <div className="font-medium">{slide.title}</div>
                      <div className="text-sm text-gray-300">{slide.subtitle}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-black"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
        
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-black"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-8 right-8">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-white hover:bg-white/20"
        >
          {isAutoPlaying ? 'Pause' : 'Play'}
        </Button>
      </div>
    </section>
  )
}