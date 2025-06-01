"use client"

import { CartItem, Product } from "@/types"
import React, { createContext, useContext, useEffect, useState } from "react"

interface CartContextType {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  isOpen: boolean
  toggleCart: () => void
  closeCart: () => void
  openCart: () => void
  totalItems: number
  subtotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  // Calculate derived values
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity, 
    0
  )

  // Initialize state from localStorage when component mounts
  useEffect(() => {
    setMounted(true)
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      try {
        setItems(JSON.parse(storedCart))
      } catch (e) {
        console.error("Failed to parse cart from localStorage:", e)
      }
    }
  }, [])

  // Save to localStorage when cart changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("cart", JSON.stringify(items))
    }
  }, [items, mounted])

  const addItem = (product: Product) => {
    setItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id)
      
      if (existingItem) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      
      return [...prev, { product, quantity: 1 }]
    })

    // Open cart drawer when adding items
    setIsOpen(true)
  }

  const removeItem = (productId: string) => {
    setItems(prev => prev.filter(item => item.product.id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId)
      return
    }

    setItems(prev => 
      prev.map(item => 
        item.product.id === productId 
          ? { ...item, quantity }
          : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const toggleCart = () => {
    setIsOpen(prev => !prev)
  }

  const openCart = () => {
    setIsOpen(true)
  }
  
  const closeCart = () => {
    setIsOpen(false)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isOpen,
        toggleCart,
        openCart,
        closeCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  
  return context
}