"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Blogger",
    image: "https://images.pexels.com/photos/3762762/pexels-photo-3762762.jpeg",
    rating: 5,
    text: "The quality of fragrances here is absolutely exceptional. I've found my signature scent and receive compliments everywhere I go. The customer service is also top-notch!",
    product: "Midnight Rose"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Executive",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    rating: 5,
    text: "As someone who appreciates luxury, this store delivers exactly what I'm looking for. The woody fragrances are sophisticated and long-lasting. Highly recommended!",
    product: "Cedar Woods"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Interior Designer",
    image: "https://images.pexels.com/photos/3762762/pexels-photo-3762762.jpeg",
    rating: 5,
    text: "I love how each fragrance tells a story. The fresh collection is perfect for my active lifestyle, and the packaging is absolutely beautiful. Will definitely order again!",
    product: "Ocean Breeze"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Creative Director",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    rating: 5,
    text: "The oriental collection is simply divine. Rich, complex, and utterly captivating. This has become my go-to place for special occasion fragrances.",
    product: "Oud Royal"
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4">
              Customer Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from fragrance enthusiasts who found their perfect scent
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative h-96 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 h-full flex flex-col justify-center">
                  <div className="flex items-center justify-center mb-8">
                    <Quote className="h-12 w-12 text-primary/20" />
                  </div>

                  <blockquote className="text-lg md:text-xl text-center mb-8 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  <div className="flex items-center justify-center space-x-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="flex items-center justify-center space-x-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </div>
                      <Badge variant="secondary" className="mt-1">
                        Purchased: {testimonials[currentIndex].product}
                      </Badge>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setCurrentIndex(index)}
                className={`p-3 rounded-lg transition-all ${
                  index === currentIndex 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <div className="text-sm font-medium">{testimonial.name}</div>
                <div className="text-xs opacity-70">{testimonial.role}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {[
            { label: "Customer Satisfaction", value: "98%" },
            { label: "5-Star Reviews", value: "2,500+" },
            { label: "Repeat Customers", value: "85%" },
            { label: "Years in Business", value: "15+" }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}