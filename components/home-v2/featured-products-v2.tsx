"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { getFeaturedProducts } from "@/lib/products"
import { ProductCard } from "@/components/shop/product-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, TrendingUp, Clock, Award, ArrowRight, Filter } from "lucide-react"

const productTabs = [
  {
    id: "featured",
    label: "Featured",
    icon: Star,
    description: "Our top picks",
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: "trending",
    label: "Trending",
    icon: TrendingUp,
    description: "Popular now",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "new",
    label: "New Arrivals",
    icon: Clock,
    description: "Latest additions",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "bestsellers",
    label: "Best Sellers",
    icon: Award,
    description: "Customer favorites",
    color: "from-purple-500 to-pink-500"
  }
]

export function FeaturedProductsV2() {
  const [activeTab, setActiveTab] = useState("featured")
  const featuredProducts = getFeaturedProducts()

  const activeTabData = productTabs.find(tab => tab.id === activeTab)

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Premium Collection
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked fragrances that represent the pinnacle of perfumery artistry and craftsmanship
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Enhanced Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg border">
              <TabsList className="grid grid-cols-2 lg:grid-cols-4 w-full max-w-4xl h-auto bg-transparent gap-2">
                {productTabs.map((tab) => {
                  const Icon = tab.icon
                  const isActive = activeTab === tab.id
                  return (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className={`flex flex-col items-center gap-3 p-6 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r ' + tab.color + ' text-white shadow-lg' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <Icon className={`h-6 w-6 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                      <div className="text-center">
                        <div className={`font-semibold ${isActive ? 'text-white' : 'text-gray-900'}`}>
                          {tab.label}
                        </div>
                        <div className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                          {tab.description}
                        </div>
                      </div>
                    </TabsTrigger>
                  )
                })}
              </TabsList>
            </div>
          </div>

          {/* Tab Content Header */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-8"
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${activeTabData?.color} text-white mb-4`}>
              {activeTabData?.icon && <activeTabData.icon className="h-4 w-4" />}
              <span className="font-medium">{activeTabData?.label}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {activeTabData?.description}
            </h3>
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {productTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                  {featuredProducts.slice(0, 4).map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 40 }}
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

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Premium Brands", value: "50+", icon: Award },
                { label: "Unique Fragrances", value: "200+", icon: Star },
                { label: "Happy Customers", value: "10K+", icon: TrendingUp },
                { label: "Years of Excellence", value: "15+", icon: Clock }
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="relative overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-primary rounded-3xl p-12 md:p-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
              <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full" />
              <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white rounded-full" />
            </div>
            
            <div className="relative z-10 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Find Your Signature Scent?
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Explore our complete collection and discover the fragrance that perfectly captures your unique essence and style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="rounded-full px-8 text-primary">
                  Shop All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white hover:text-primary">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter by Preference
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}