"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { getFeaturedProducts } from "@/lib/products"
import { ProductCard } from "@/components/shop/product-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, TrendingUp, Clock, Award } from "lucide-react"

const productTabs = [
  {
    id: "featured",
    label: "Featured",
    icon: Star,
    description: "Our top picks"
  },
  {
    id: "trending",
    label: "Trending",
    icon: TrendingUp,
    description: "Popular now"
  },
  {
    id: "new",
    label: "New Arrivals",
    icon: Clock,
    description: "Latest additions"
  },
  {
    id: "bestsellers",
    label: "Best Sellers",
    icon: Award,
    description: "Customer favorites"
  }
]

export function FeaturedProductsAlt() {
  const [activeTab, setActiveTab] = useState("featured")
  const featuredProducts = getFeaturedProducts()

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4">
              Premium Collection
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Discover Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked fragrances that represent the pinnacle of perfumery artistry
            </p>
          </motion.div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-2 lg:grid-cols-4 w-full max-w-2xl h-auto p-1">
              {productTabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <Icon className="h-5 w-5" />
                    <div className="text-center">
                      <div className="font-medium">{tab.label}</div>
                      <div className="text-xs opacity-70">{tab.description}</div>
                    </div>
                  </TabsTrigger>
                )
              })}
            </TabsList>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {productTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {featuredProducts.slice(0, 4).map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ProductCard product={product} index={index} />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { label: "Premium Brands", value: "50+" },
            { label: "Unique Fragrances", value: "200+" },
            { label: "Happy Customers", value: "10K+" },
            { label: "Years of Excellence", value: "15+" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Find Your Signature Scent?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Explore our complete collection and discover the fragrance that perfectly captures your essence.
            </p>
            <Button size="lg" className="rounded-full px-8">
              Shop All Products
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}