"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingBag } from "lucide-react"
import { useRef, useState } from "react"

import { Product } from "@/types"
import { cn } from "@/lib/utils"
import { useCart } from "@/providers/cart-provider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CartAnimation } from "@/components/cart/cart-animation"
import { toast } from "sonner"

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [showAnimation, setShowAnimation] = useState(false)
  const [loading, setLoading] = useState(false)
  const [animationConfig, setAnimationConfig] = useState<{
    startPosition: { x: number; y: number }
    endPosition: { x: number; y: number }
  } | null>(null)
  
  const lowestPrice = Math.min(...product.sizes.map(s => s.price))
  const isOutOfStock = product.sizes.every(s => s.stock <= 0)

  const handleAddToCart = async () => {
    if (!buttonRef.current) return
    setLoading(true)

    const buttonRect = buttonRef.current.getBoundingClientRect()
    const cartButton = document.querySelector('[data-cart-button]')
    
    if (cartButton) {
      const cartRect = cartButton.getBoundingClientRect()
      
      setAnimationConfig({
        startPosition: {
          x: buttonRect.left + buttonRect.width / 2,
          y: buttonRect.top + buttonRect.height / 2
        },
        endPosition: {
          x: cartRect.left + cartRect.width / 2,
          y: cartRect.top + cartRect.height / 2
        }
      })
      
      setShowAnimation(true)
      addItem(product, product.sizes[0].ml)
      
      // Simulate a delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500))
      
      toast.success(`Added ${product.name} to cart`, {
        position: window.innerWidth < 640 ? "top-center" : "bottom-left",
        duration: 2000,
      })
    }
    setLoading(false)
  }

  return (
    <>
      {showAnimation && animationConfig && (
        <CartAnimation
          startPosition={animationConfig.startPosition}
          endPosition={animationConfig.endPosition}
          onComplete={() => setShowAnimation(false)}
          imageUrl={product.images[0]}
        />
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-lg border bg-background"
      >
        <div className="relative aspect-square overflow-hidden bg-muted/50">
          <Link href={`/product/${product.id}`}>
            <Image
              src={product.images[0]}
              alt={product.name}
              width={400} 
              height={400}
              className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
            />
          </Link>
          
          <Badge
            className="absolute left-2 top-2 px-2 py-1"
            variant={product.gender === 'male' ? 'default' : product.gender === 'female' ? 'secondary' : 'outline'}
          >
            {product.gender}
          </Badge>

          <Button
            ref={buttonRef}
            size="icon"
            className={cn(
              "absolute right-2 top-2 h-8 w-auto px-2 gap-1 rounded-full opacity-0 transition-opacity group-hover:opacity-100 lg:flex",
              isOutOfStock && "cursor-not-allowed opacity-50",
              "hidden"
            )}
            disabled={isOutOfStock || loading}
            onClick={handleAddToCart}
          >
            {loading ? "Adding..." : "Add cart"}
            <ShoppingBag className="h-4 w-4" />
            <span className="sr-only">Add to cart</span>
          </Button>
        </div>

        <div className="flex flex-1 flex-col p-4">
          <div className="mb-2 text-muted-foreground text-xs sm:text-sm">{product.brand}</div>
          <h3 className="line-clamp-1 font-medium text-xs sm:text-sm">{product.name}</h3>
          <p className="mt-1 line-clamp-2 text-xs sm:text-sm text-muted-foreground">
            {product.description}
          </p>
          <div className="mt-auto flex items-center justify-between gap-2 pt-4">
            <div>
              <span className="text-sm sm:text-md font-semibold">${lowestPrice.toFixed(2)}</span>
              <span className="text-xs sm:text-sm text-muted-foreground"> / {product.sizes[0].ml}ml</span>
            </div>
            <Button
              ref={buttonRef}
              size="sm"
              className="lg:hidden"
              disabled={isOutOfStock || loading}
              onClick={handleAddToCart}
            >
              {loading ? "Adding..." : "Add"}
            </Button>
          </div>
        </div>
      </motion.div>
    </>
  )
}