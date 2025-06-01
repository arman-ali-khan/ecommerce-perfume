import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

interface CartAnimationProps {
  startPosition: { x: number; y: number }
  endPosition: { x: number; y: number }
  onComplete: () => void
}

export function CartAnimation({ startPosition, endPosition, onComplete }: CartAnimationProps) {
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
      onComplete()
    }, 1000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          className="fixed z-50 h-3 w-3 rounded-full bg-primary"
          initial={{ 
            scale: 1,
            x: startPosition.x,
            y: startPosition.y,
          }}
          animate={{
            scale: 0.5,
            x: endPosition.x,
            y: endPosition.y,
          }}
          exit={{ scale: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 20,
            mass: 1
          }}
        />
      )}
    </AnimatePresence>
  )
}