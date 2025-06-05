"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/providers/cart-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, subtotal, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState("bkash")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      clearCart()
      toast.success("Order placed successfully!")
      router.push("/")
    } catch (error) {
      toast.error("Payment failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <Button onClick={() => router.push("/shop")} className="mt-4">
          Continue Shopping
        </Button>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold">Checkout</h1>
      
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Shipping Information</h2>
            
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" required />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" required />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" required />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" required />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="postal">Postal Code</Label>
                <Input id="postal" required />
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Payment Method</h2>
            
            <RadioGroup
              value={paymentMethod}
              onValueChange={setPaymentMethod}
              className="grid gap-4"
            >
              <div className="flex items-center space-x-2 rounded-lg border p-4">
                <RadioGroupItem value="bkash" id="bkash" />
                <Label htmlFor="bkash">bKash</Label>
              </div>
              
              <div className="flex items-center space-x-2 rounded-lg border p-4">
                <RadioGroupItem value="nagad" id="nagad" />
                <Label htmlFor="nagad">Nagad</Label>
              </div>
              
              <div className="flex items-center space-x-2 rounded-lg border p-4">
                <RadioGroupItem value="rocket" id="rocket" />
                <Label htmlFor="rocket">Rocket</Label>
              </div>
            </RadioGroup>
          </div>
          
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Processing..." : `Pay ${subtotal.toFixed(2)} USD`}
          </Button>
        </form>
        
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          
          <div className="rounded-lg border p-6">
            <div className="space-y-4">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.selectedSize}`} className="flex justify-between">
                  <div>
                    <p className="font-medium">{item.product.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.selectedSize}ml × {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium">
                    ${(item.product.sizes.find(s => s.ml === item.selectedSize)?.price || 0 * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
              
              <Separator />
              
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at next step</span>
              </div>
              
              <Separator />
              
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}