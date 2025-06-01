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
    }, 1000) // Reduced from 1500ms to 1000ms for snappier feedback

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          className="fixed z-50 h-20 w-20 rounded-lg overflow-hidden shadow-lg"
          initial={{ 
            scale: 0,
            x: startPosition.x - 40, // Center the image
            y: startPosition.y - 40, // Center the image
            opacity: 0,
            rotate: -10,
          }}
          animate={[
            // Initial pop with rotation
            {
              scale: 1.2,
              opacity: 1,
              rotate: 0,
              transition: {
                duration: 0.2,
                ease: "easeOut"
              }
            },
            // Slight settle
            {
              scale: 1,
              transition: {
                duration: 0.1,
                ease: "easeOut"
              }
            },
            // Arc flight to cart
            {
              scale: 0.3,
              x: endPosition.x - 8,
              y: endPosition.y - 8,
              opacity: 0,
              transition: {
                duration: 0.4,
                ease: [0.32, 0, 0.67, 0], // Custom easing for arc motion
                opacity: {
                  duration: 0.3,
                  delay: 0.1
                }
              }
            }
          ]}
          exit={{ 
            scale: 0,
            opacity: 0,
            transition: {
              duration: 0.2
            }
          }}
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