"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowLeft, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Zap, 
  Shield, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  Star,
  Hexagon,
  Lock,
  Cpu,
  Globe
} from "lucide-react"
import { useCart } from "@/providers/cart-provider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"

export default function Web3ProductClient({ product }: { product: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0].ml)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>("details")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { addItem } = useCart()

  const selectedSizeOption = product.sizes.find((s: { ml: number; stock: number }) => s.ml === selectedSize)
  const isOutOfStock = selectedSizeOption?.stock === 0

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleAddToCart = () => {
    if (selectedSize) {
      addItem(product, selectedSize)
      toast.success("Added to cart", {
        description: `${product.name} (${selectedSize}ml) added to your cart`,
      })
    }
  }

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist")
  }

  const shareProduct = () => {
    navigator.share?.({
      title: product.name,
      text: product.description,
      url: window.location.href,
    }) || toast.success("Link copied to clipboard")
  }

  const sections = [
    {
      id: "details",
      title: "Product Details",
      icon: Cpu,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Brand</h4>
              <p className="text-sm text-muted-foreground">{product.brand}</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Category</h4>
              <p className="text-sm text-muted-foreground capitalize">{product.category}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "notes",
      title: "Fragrance Profile",
      icon: Sparkles,
      content: (
        <div className="space-y-6">
          {product.notes.map((note: { type: string; notes: string[] }, index: number) => (
            <motion.div
              key={note.type}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                <h4 className="font-medium capitalize">{note.type} Notes</h4>
              </div>
              <div className="flex flex-wrap gap-2 ml-5">
                {note.notes.map((noteName) => (
                  <Badge key={noteName} variant="outline" className="text-xs">
                    {noteName}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      id: "blockchain",
      title: "Blockchain Verification",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
            <Shield className="h-5 w-5 text-green-500" />
            <div>
              <p className="font-medium text-sm">Authenticity Verified</p>
              <p className="text-xs text-muted-foreground">Blockchain certificate: #0x7f8a9b2c</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-muted/50 rounded-lg">
              <Lock className="h-4 w-4 mb-2 text-blue-500" />
              <p className="text-xs font-medium">Secure</p>
              <p className="text-xs text-muted-foreground">256-bit encryption</p>
            </div>
            <div className="p-3 bg-muted/50 rounded-lg">
              <Globe className="h-4 w-4 mb-2 text-purple-500" />
              <p className="text-xs font-medium">Global</p>
              <p className="text-xs text-muted-foreground">Worldwide shipping</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating Cursor Effect */}
      <motion.div
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-full h-full bg-white rounded-full opacity-50" />
      </motion.div>

      <div className="container relative z-10 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <Link 
            href="/shop" 
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Shop</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={shareProduct}
              className="text-white hover:bg-white/10"
            >
              <Share2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleWishlist}
              className="text-white hover:bg-white/10"
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
            </Button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600/50">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
              <Image
                src={product.images[currentImageIndex]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Floating Elements */}
              <div className="absolute top-4 left-4">
                <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0">
                  <Hexagon className="w-3 h-3 mr-1" />
                  Web3 Verified
                </Badge>
              </div>
              
              <div className="absolute bottom-4 right-4">
                <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                  <Zap className="h-4 w-4 text-yellow-400" />
                </div>
              </div>
            </div>
            
            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    className={`relative aspect-square h-20 overflow-hidden rounded-lg border-2 transition-all ${
                      currentImageIndex === index 
                        ? "border-cyan-400 shadow-lg shadow-cyan-400/25" 
                        : "border-slate-600 hover:border-slate-500"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Header Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="border-cyan-400/50 text-cyan-400">
                  {product.brand}
                </Badge>
                <Badge 
                  variant="outline" 
                  className={`border-purple-400/50 ${
                    product.gender === 'male' ? 'text-blue-400' : 
                    product.gender === 'female' ? 'text-pink-400' : 
                    'text-purple-400'
                  }`}
                >
                  {product.gender}
                </Badge>
              </div>
              
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-slate-400 ml-2">(4.9) • 127 reviews</span>
              </div>
            </div>

            {/* Size Selection */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <h3 className="font-medium mb-4 text-white">Select Size</h3>
                <RadioGroup
                  value={selectedSize?.toString()}
                  onValueChange={(value) => setSelectedSize(parseInt(value))}
                  className="grid grid-cols-3 gap-4"
                >
                  {product.sizes.map((size: { ml: number; stock: number; price: number }) => (
                    <Label
                      key={size.ml}
                      className={`relative cursor-pointer rounded-xl border-2 p-4 text-center transition-all hover:scale-105 ${
                        selectedSize === size.ml 
                          ? "border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/25" 
                          : "border-slate-600 hover:border-slate-500"
                      } ${size.stock === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      <RadioGroupItem
                        value={size.ml.toString()}
                        disabled={size.stock === 0}
                        className="sr-only"
                      />
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-white">{size.ml}</div>
                        <div className="text-xs text-slate-400">ml</div>
                        <div className="text-lg font-semibold text-cyan-400">${size.price}</div>
                        <div className="text-xs text-slate-500">
                          {size.stock === 0 ? "Out of stock" : `${size.stock} left`}
                        </div>
                      </div>
                      {selectedSize === size.ml && (
                        <motion.div
                          layoutId="selectedSize"
                          className="absolute inset-0 rounded-xl border-2 border-cyan-400 bg-cyan-400/5"
                        />
                      )}
                    </Label>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Add to Cart */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 rounded-xl h-14 text-lg font-semibold"
                disabled={isOutOfStock}
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                {isOutOfStock ? "Out of Stock" : `Add to Cart • $${selectedSizeOption?.price}`}
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  className="border-slate-600 text-white hover:bg-slate-800 rounded-xl"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  Buy with Crypto
                </Button>
                <Button 
                  variant="outline" 
                  className="border-slate-600 text-white hover:bg-slate-800 rounded-xl"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Save for Later
                </Button>
              </div>
            </div>

            {/* Expandable Sections */}
            <div className="space-y-4">
              {sections.map((section) => {
                const Icon = section.icon
                const isExpanded = expandedSection === section.id
                
                return (
                  <Card key={section.id} className="bg-slate-800/30 border-slate-700/50">
                    <CardContent className="p-0">
                      <button
                        onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5 text-cyan-400" />
                          <span className="font-medium text-white">{section.title}</span>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4 text-slate-400" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-slate-400" />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6">
                              <Separator className="mb-4 bg-slate-700" />
                              {section.content}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}