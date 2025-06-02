"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { useCart } from "@/providers/cart-provider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ProductDescription } from "./product-description"

export default function ProductClient({ product }: { product: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0].ml)
  const { addItem } = useCart()

  const selectedSizeOption = product.sizes.find((s: { ml: number; stock: number }) => s.ml === selectedSize);

  const isOutOfStock = selectedSizeOption?.stock === 0

  const handleAddToCart = () => {
    if (selectedSize) {
      addItem(product, selectedSize)
    }
  }

  return (
    <div className="container py-10">
      <Link 
        href="/shop" 
        className="mb-8 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Shop
      </Link>
      
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-muted/50">
            <Image
              src={product.images[currentImageIndex]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          
          {product.images.length > 1 && (
            <div className="flex gap-2 overflow-auto pb-2">
              {product.images.map((image: { url: string }, index:number) => (
                <button
                  key={index}
                  className={`relative aspect-square h-20 overflow-hidden rounded-md border-2 ${
                    currentImageIndex === index ? "border-primary" : "border-transparent"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <Image
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="space-y-6">
          <div>
            <div className="mb-2 text-sm text-muted-foreground">{product.brand}</div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <Badge variant={
                product.gender === 'male' ? 'default' : 
                product.gender === 'female' ? 'secondary' : 
                'outline'
              }>
                {product.gender}
              </Badge>
              <Badge variant="outline">{product.category}</Badge>
            </div>
          </div>
          
          <p className="text-muted-foreground">{product.description}</p>
          
          <Separator />
          
          <div className="space-y-4">
            <h3 className="font-medium">Select Size</h3>
            <RadioGroup
              value={selectedSize?.toString()}
              onValueChange={(value) => setSelectedSize(parseInt(value))}
              className="grid grid-cols-3 gap-4"
            >
              {product.sizes.map((size) => (
                <Label
                  key={size.ml}
                  className={`flex cursor-pointer flex-col items-center justify-between rounded-lg border p-4 hover:bg-accent ${
                    selectedSize === size.ml ? "border-primary" : "border-input"
                  } ${size.stock === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <RadioGroupItem
                    value={size.ml.toString()}
                    id={`size-${size.ml}`}
                    disabled={size.stock === 0}
                    className="sr-only"
                  />
                  <span className="text-2xl font-semibold">{size.ml}</span>
                  <span className="text-sm text-muted-foreground">ml</span>
                  <span className="mt-2 font-medium">${size.price.toFixed(2)}</span>
                  {size.stock === 0 ? (
                    <span className="mt-1 text-xs text-muted-foreground">Out of stock</span>
                  ) : (
                    <span className="mt-1 text-xs text-muted-foreground">{size.stock} in stock</span>
                  )}
                </Label>
              ))}
            </RadioGroup>
          </div>
          
          <Button 
            size="lg" 
            className="w-full"
            disabled={isOutOfStock}
            onClick={handleAddToCart}
          >
            {isOutOfStock ? "Out of Stock" : "Add to Cart"}
          </Button>
          
          <Separator />
          
          <div className="space-y-4">
            <h3 className="font-medium">Fragrance Notes</h3>
            <div className="grid gap-6 sm:grid-cols-3">
              {product.notes.map((note) => (
                <div key={note.type} className="space-y-2">
                  <h4 className="text-sm font-medium capitalize">{note.type} Notes</h4>
                  <ul className="space-y-1">
                    {note.notes.map((noteName) => (
                      <li key={noteName} className="flex items-center text-sm text-muted-foreground">
                        <Check className="mr-2 h-4 w-4" />
                        {noteName}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProductDescription product={product} />
    </div>
  )
}
