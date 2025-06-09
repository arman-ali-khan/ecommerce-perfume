"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Mail, Gift, Bell, Sparkles, Check } from "lucide-react"
import { toast } from "sonner"

const benefits = [
  {
    icon: Gift,
    title: "Exclusive Offers",
    description: "Get 15% off your first order and access to member-only deals"
  },
  {
    icon: Bell,
    title: "Early Access",
    description: "Be the first to discover new fragrances and limited editions"
  },
  {
    icon: Sparkles,
    title: "Fragrance Tips",
    description: "Expert advice on choosing and wearing your perfect scent"
  }
]

export function NewsletterSection() {
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
      <section className="py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <Check className="h-10 w-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome to Our Community!
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Thank you for subscribing. Check your email for your exclusive 15% discount code.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white rounded-full" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <Badge variant="secondary" className="mb-4">
              Join Our Community
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay in the Scent
            </h2>
            
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Join thousands of fragrance enthusiasts and get exclusive access to new arrivals, 
              expert tips, and special offers delivered to your inbox.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-white/20 rounded-lg p-2 mt-1">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="opacity-80 text-sm">{benefit.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Content - Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Get 15% Off</h3>
              <p className="text-muted-foreground">
                Subscribe to our newsletter and receive an exclusive discount on your first order
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-lg"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-12 text-lg"
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Get My Discount"}
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-4">
              By subscribing, you agree to our Privacy Policy and Terms of Service. 
              Unsubscribe at any time.
            </p>

            {/* Social Proof */}
            <div className="mt-6 pt-6 border-t text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Join 10,000+ fragrance lovers
              </p>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-8 h-8 bg-gray-200 rounded-full" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">+10K</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}