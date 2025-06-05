"use client"

import Image from "next/image"
import { Minus, Plus, X } from "lucide-react"

import { CartItem as CartItemType } from "@/types"
import { Button } from "@/components/ui/button"
import { useCart } from "@/providers/cart-provider"

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()
  const { product, quantity, selectedSize } = item
  
  const size = product.sizes.find(s => s.ml === selectedSize)
  const price = size?.price || 0

  return (
    <div className="flex items-start gap-4">
      <div className="relative aspect-square h-20 w-20 min-w-20 overflow-hidden rounded-md border bg-muted/50">
        <Image 
          src={product.images[0]} 
          alt={product.name}
          width={80}
          height={80}
          className="object-cover transition-all hover:scale-105"
        />
      </div>
      
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between">
          <div className="space-y-1">
            <h4 className="font-medium">{product.name}</h4>
            <p className="text-sm text-muted-foreground">
              ${price.toFixed(2)} - {selectedSize}ml
            </p>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => removeItem(product.id, selectedSize)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Remove</span>
          </Button>
        </div>
        
        <div className="mt-2 flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={() => updateQuantity(product.id, selectedSize, quantity - 1)}
            disabled={quantity <= 1}
          >
            <Minus className="h-3 w-3" />
            <span className="sr-only">Decrease quantity</span>
          </Button>
          
          <span className="w-8 text-center text-sm">{quantity}</span>
          
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={() => updateQuantity(product.id, selectedSize, quantity + 1)}
            disabled={quantity >= (size?.stock || 0)}
          >
            <Plus className="h-3 w-3" />
            <span className="sr-only">Increase quantity</span>
          </Button>
        </div>
      </div>
    </div>
  )
}