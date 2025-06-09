"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { getFeaturedProducts } from "@/lib/products"
import { ProductCard } from "@/components/shop/product-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, Clock, Award, ArrowRight, Sparkles } from "lucide-react"

const productTabs = [
  {
    id: "featured",
    label: "Signature",
    icon: Star,
    description: "Our most beloved",
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: "trending",
    label: "Trending",
    icon: TrendingUp,
    description: "What's popular now",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "new",
    label: "New Arrivals",
    icon: Clock,
    description: "Fresh additions",
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

export function FeaturedProductsV3() {
  const [activeTab, setActiveTab] = useState("featured")
  const featuredProducts = getFeaturedProducts()

  const activeTabData = productTabs.find(tab => tab.id === activeTab)

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
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
            Premium Collection
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Discover
            <span className="block bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Handpicked fragrances that represent the pinnacle of perfumery artistry, each telling its own unique story
          </p>
        </motion.div>

        {/* Enhanced Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="bg-gray-50 rounded-3xl p-2 shadow-inner">
            <div className="flex flex-wrap justify-center gap-2">
              {productTabs.map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.id
                
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-white shadow-lg' 
                        : 'hover:bg-white/50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`p-2 rounded-xl bg-gradient-to-r ${tab.color} ${
                      isActive ? 'shadow-lg' : ''
                    }`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className={`font-semibold ${
                        isActive ? 'text-gray-900' : 'text-gray-600'
                      }`}>
                        {tab.label}
                      </div>
                      <div className="text-xs text-gray-500">
                        {tab.description}
                      </div>
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white rounded-2xl shadow-lg"
                        style={{ zIndex: -1 }}
                      />
                    )}
                  </motion.button>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Tab Content Header */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${activeTabData?.color} text-white mb-6`}>
              {activeTabData?.icon && <activeTabData.icon className="h-5 w-5" />}
              <span className="font-semibold">{activeTabData?.label}</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {activeTabData?.description}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Carefully selected fragrances that embody the essence of {activeTabData?.label.toLowerCase()}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {featuredProducts.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative">
                  <ProductCard product={product} index={index} />
                  {/* Floating Badge for Featured Items */}
                  {index === 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="absolute -top-3 -right-3 z-10"
                    >
                      <div className={`bg-gradient-to-r ${activeTabData?.color} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                        Featured
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-12 shadow-xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Premium Brands", value: "50+", icon: Award, color: "text-yellow-500" },
                { label: "Unique Fragrances", value: "200+", icon: Star, color: "text-blue-500" },
                { label: "Happy Customers", value: "10K+", icon: TrendingUp, color: "text-green-500" },
                { label: "Years of Excellence", value: "15+", icon: Clock, color: "text-purple-500" }
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg mb-4 group-hover:scale-110 transition-transform ${stat.color}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative overflow-hidden bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-3xl p-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
              <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full" />
              <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white rounded-full" />
            </div>
            
            <div className="relative z-10 text-white">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Find Your
                <span className="block">Signature Scent?</span>
              </h3>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Explore our complete collection and discover the fragrance that perfectly captures your unique essence and style.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" variant="secondary" className="rounded-full px-10 py-4 text-lg font-semibold text-primary">
                  Shop All Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-10 py-4 text-lg border-white text-white hover:bg-white hover:text-primary">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Discover Your Style
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}