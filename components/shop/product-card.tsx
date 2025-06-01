"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingBag } from "lucide-react"

import { Product } from "@/types"
import { cn } from "@/lib/utils"
import { useCart } from "@/providers/cart-provider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart()
  const isOutOfStock = product.stock <= 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-lg border bg-background"
    >
      <div className="relative aspect-square overflow-hidden bg-muted/50">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105"
          />
        </Link>
        
        {product.featured && (
          <Badge
            className="absolute left-2 top-2 px-2 py-1"
            variant="web3"
          >
            Featured
          </Badge>
        )}

        <Button
          size="icon"
          className={cn(
            "absolute right-2 top-2 h-8 w-8 rounded-full opacity-0 transition-opacity group-hover:opacity-100 lg:block",
            isOutOfStock && "cursor-not-allowed opacity-50",
            "hidden" // Hide on mobile
          )}
          disabled={isOutOfStock}
          onClick={() => addItem(product)}
        >
          <ShoppingBag className="h-4 w-4" />
          <span className="sr-only">Add to cart</span>
        </Button>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-1 font-medium">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-4">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          <Button
            size="sm"
            className="lg:hidden"
            disabled={isOutOfStock}
            onClick={() => addItem(product)}
          >
            Add
          </Button>
          <span className="hidden text-sm text-muted-foreground lg:inline">
            {isOutOfStock ? "Out of stock" : `${product.stock} in stock`}
          </span>
        </div>
      </div>
    </motion.div>
  )
}