"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Heart, Star, Gift } from "lucide-react"
import Image from "next/image"

const experiences = [
  {
    icon: Sparkles,
    title: "Personalized Consultation",
    description: "Work with our fragrance experts to discover your perfect scent profile",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Heart,
    title: "Scent Layering Workshop",
    description: "Learn the art of combining fragrances to create your unique signature",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Star,
    title: "Exclusive Previews",
    description: "Be the first to experience new releases and limited editions",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Gift,
    title: "Custom Gift Sets",
    description: "Create bespoke fragrance collections for your loved ones",
    color: "from-emerald-500 to-teal-500"
  }
]

export function ExperienceSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary to-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-6 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            The Complete Experience
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            More Than Just
            <span className="block bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Fragrance
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe in creating memorable experiences that go beyond the bottle, helping you discover and express your unique scent story
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {experiences.map((experience, index) => {
              const Icon = experience.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${experience.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {experience.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </motion.div>
              )
            })}
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg"
                alt="Fragrance Experience"
                width={600}
                height={700}
                className="object-cover w-full h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6"
              >
                <h4 className="text-xl font-bold mb-2">Book Your Experience</h4>
                <p className="text-muted-foreground mb-4">
                  Schedule a personalized consultation with our fragrance experts
                </p>
                <Button className="w-full rounded-full">
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>

            {/* Floating Elements */}
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
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80"
            />
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -10, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-70"
            />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Begin Your Fragrance Journey?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of fragrance enthusiasts who have discovered their perfect scent through our personalized approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8">
                Learn More
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}