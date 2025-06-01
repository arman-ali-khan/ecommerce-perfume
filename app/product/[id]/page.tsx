"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react"
import { notFound } from "next/navigation"

import { getProductById } from "@/lib/products"
import { useCart } from "@/providers/cart-provider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)
  const [quantity, setQuantity] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { addItem } = useCart()
  
  if (!product) {
    notFound()
  }
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0 && newQuantity <= product.stock) {
      setQuantity(newQuantity)
    }
  }
  
  const handleAddToCart = () => {
    // Add product to cart with the selected quantity
    for (let i = 0; i < quantity; i++) {
      addItem(product)
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
              {product.images.map((image, index) => (
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
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-2xl font-semibold">${product.price.toFixed(2)}</span>
              {product.featured && <Badge variant="web3">Featured</Badge>}
            </div>
          </div>
          
          <p className="text-muted-foreground">{product.description}</p>
          
          <Separator />
          
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-medium">Quantity</h3>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                
                <span className="w-6 text-center">{quantity}</span>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= product.stock}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">
              {product.stock} items in stock
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="w-full gap-2"
            disabled={product.stock <= 0}
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
          
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Web3 Features</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                NFT authenticity certificate included
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Purchase with cryptocurrency
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Unlock exclusive digital content
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}