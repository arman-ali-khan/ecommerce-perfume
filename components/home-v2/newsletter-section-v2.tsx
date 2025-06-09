"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Mail, Gift, Bell, Sparkles, Check, ArrowRight, Star } from "lucide-react"
import { toast } from "sonner"

const benefits = [
  {
    icon: Gift,
    title: "Exclusive Offers",
    description: "Get 15% off your first order and access to member-only deals",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Bell,
    title: "Early Access",
    description: "Be the first to discover new fragrances and limited editions",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Sparkles,
    title: "Fragrance Tips",
    description: "Expert advice on choosing and wearing your perfect scent",
    color: "from-purple-500 to-pink-500"
  }
]

export function NewsletterSectionV2() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubscribed(true)
    setIsLoading(false)
    toast.success("Welcome to our fragrance community!")
  }

  if (isSubscribed) {
    return (
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 border border-white rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-60 h-60 border border-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-white rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-2xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-8"
            >
              <Check className="h-12 w-12" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Welcome to Our Community!
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl opacity-90 mb-8"
            >
              Thank you for subscribing. Check your email for your exclusive 15% discount code and start exploring our premium collection.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center"
            >
              <Button size="lg" variant="secondary" className="rounded-full px-8">
                Start Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border border-white rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-white rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-white rounded-full" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Join Our Community
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay in the Scent
            </h2>
            
            <p className="text-xl opacity-90 mb-10 leading-relaxed">
              Join thousands of fragrance enthusiasts and get exclusive access to new arrivals, 
              expert tips, and special offers delivered to your inbox.
            </p>

            {/* Enhanced Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className={`bg-gradient-to-r ${benefit.color} rounded-2xl p-3 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                      <p className="opacity-80 leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Content - Enhanced Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-2xl"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-primary/80 rounded-2xl mb-6">
                <Mail className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-3">Get 15% Off</h3>
              <p className="text-muted-foreground text-lg">
                Subscribe to our newsletter and receive an exclusive discount on your first order
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 text-lg pl-6 pr-6 rounded-2xl border-2 focus:border-primary"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-14 text-lg rounded-2xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Subscribing...
                  </div>
                ) : (
                  <>
                    Get My Discount
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-6 leading-relaxed">
              By subscribing, you agree to our Privacy Policy and Terms of Service. 
              Unsubscribe at any time.
            </p>

            {/* Enhanced Social Proof */}
            <div className="mt-8 pt-8 border-t text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Join 10,000+ fragrance lovers
              </p>
              <div className="flex justify-center items-center space-x-2">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-10 h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full border-2 border-white" />
                  ))}
                </div>
                <span className="text-sm font-medium text-muted-foreground ml-3">+10K members</span>
              </div>
              <div className="flex justify-center items-center mt-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground ml-2">4.9/5 rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}