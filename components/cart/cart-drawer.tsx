"use client"

import { X } from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { useCart } from "@/providers/cart-provider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CartItem } from "@/components/cart/cart-item"
import { SheetContent, SheetHeader, SheetTitle, Sheet } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"

export function CartDrawer() {
  const router = useRouter()
  const { isOpen, closeCart, items, subtotal, clearCart } = useCart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleCheckout = () => {
    router.push("/checkout")
    closeCart()
  }

  if (!mounted) return null

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="flex w-10/12 flex-col sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl">Your Cart</SheetTitle>
            <Button variant="ghost" size="icon" onClick={closeCart} className="h-8 w-8 rounded-full">
              <X className="h-4 w-4" />
              <span className="sr-only">Close cart</span>
            </Button>
          </div>
          {items.length === 0 && (
            <div className="flex h-[50vh] w-full flex-col items-center justify-center space-y-2 pt-6">
              <div className="text-muted-foreground">Your cart is empty</div>
            </div>
          )}
        </SheetHeader>
        
        {items.length > 0 && (
          <>
            <div className="flex flex-1 flex-col gap-5 overflow-auto py-6">
              {items.map((item) => (
                <CartItem key={`${item.product.id}-${item.selectedSize}`} item={item} />
              ))}
            </div>
            
            <div className="space-y-4 pt-4">
              <Separator />
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="font-medium">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              
              <Button 
                className="w-full" 
                onClick={handleCheckout}
              >
                Proceed to Checkout • ${subtotal.toFixed(2)}
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}