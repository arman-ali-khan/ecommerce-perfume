"use client"

import { ShoppingBag } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

import { useCart } from "@/providers/cart-provider"
import { Button } from "@/components/ui/button"

export function FloatingCartButton() {
  const { toggleCart, totalItems } = useCart()
  const [prevCount, setPrevCount] = useState(0)
  const [animate, setAnimate] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && totalItems > prevCount) {
      setAnimate(true)
      const timer = setTimeout(() => setAnimate(false), 1000)
      return () => clearTimeout(timer)
    }
    setPrevCount(totalItems)
  }, [totalItems, prevCount, mounted])

  if (!mounted) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="relative"
          >
            <Button
              onClick={toggleCart}
              size="lg"
              className="h-14 w-14 rounded-full shadow-lg"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-semibold text-primary">
                <motion.span
                  animate={animate ? { scale: [1, 1.3, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {totalItems}
                </motion.span>
              </span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}