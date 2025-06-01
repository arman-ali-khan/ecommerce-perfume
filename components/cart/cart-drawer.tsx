"use client"

import { X } from "lucide-react"
import { useEffect, useState } from "react"

import { useCart } from "@/providers/cart-provider"
import { useWeb3 } from "@/providers/web3-provider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CartItem } from "@/components/cart/cart-item"
import { SheetContent, SheetHeader, SheetTitle, Sheet } from "@/components/ui/sheet"

export function CartDrawer() {
  const { isOpen, closeCart, items, subtotal, clearCart } = useCart()
  const { web3State, connectWallet, checkoutWithCrypto } = useWeb3()
  const [paymentProcessing, setPaymentProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleCryptoCheckout = async () => {
    if (!web3State.isConnected) {
      await connectWallet()
      return
    }
    
    setPaymentProcessing(true)
    
    try {
      const success = await checkoutWithCrypto(subtotal)
      
      if (success) {
        setPaymentSuccess(true)
        clearCart()
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setPaymentSuccess(false)
          closeCart()
        }, 5000)
      }
    } catch (error) {
      console.error("Payment failed:", error)
    } finally {
      setPaymentProcessing(false)
    }
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
          {items.length === 0 && !paymentSuccess && (
            <div className="flex h-[50vh] w-full flex-col items-center justify-center space-y-2 pt-6">
              <div className="text-muted-foreground">Your cart is empty</div>
            </div>
          )}
        </SheetHeader>
        
        {paymentSuccess ? (
          <div className="flex h-full flex-col items-center justify-center space-y-4">
            <Badge variant="success" className="px-3 py-1.5 text-sm">Payment Successful</Badge>
            <p className="text-center text-muted-foreground">
              Thank you for your purchase! Your transaction was completed successfully.
            </p>
          </div>
        ) : (
          items.length > 0 && (
            <>
              <div className="flex flex-1 flex-col gap-5 overflow-auto py-6">
                {items.map((item) => (
                  <CartItem key={item?.product?.id} item={item} />
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
                  className="w-full gap-2" 
                  onClick={handleCryptoCheckout}
                  disabled={paymentProcessing}
                >
                  {web3State.isConnected ? (
                    paymentProcessing ? 
                    "Processing Payment..." : 
                    `Checkout with Crypto • $${subtotal.toFixed(2)}`
                  ) : (
                    "Connect Wallet"
                  )}
                </Button>
                
                {web3State.isConnected && (
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Badge variant="web3" className="text-xs">
                      {web3State.address?.substring(0, 6)}...
                      {web3State.address?.substring(web3State.address.length - 4)}
                    </Badge>
                    <span>{web3State.balance.toFixed(4)} ETH</span>
                  </div>
                )}
              </div>
            </>
          )
        )}
      </SheetContent>
    </Sheet>
  )
}