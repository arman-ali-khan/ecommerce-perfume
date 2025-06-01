import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

interface CartAnimationProps {
  startPosition: { x: number; y: number }
  endPosition: { x: number; y: number }
  onComplete: () => void
  imageUrl?: string
}

export function CartAnimation({ startPosition, endPosition, onComplete, imageUrl }: CartAnimationProps) {
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
      onComplete()
    }, 1500)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          className="fixed z-50 h-24 w-24 rounded-lg overflow-hidden shadow-lg"
          initial={{ 
            scale: 0,
            x: startPosition.x - 48, // Center the image (half of width)
            y: startPosition.y - 48, // Center the image (half of height)
            opacity: 0,
          }}
          animate={[
            // First pop up
            {
              scale: 1.2,
              opacity: 1,
              transition: {
                duration: 0.2,
              }
            },
            // Then slightly settle
            {
              scale: 1,
              transition: {
                duration: 0.15,
              }
            },
            // Finally fly to cart
            {
              scale: 0.2,
              x: endPosition.x - 8,
              y: endPosition.y - 8,
              opacity: 0,
              transition: {
                delay: 0.1,
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1], // Custom easing for smooth flight
              }
            }
          ]}
          exit={{ scale: 0, opacity: 0 }}
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="Product"
              fill
              className="object-cover"
            />
          ) : (
            <div className="h-full w-full bg-primary" />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}