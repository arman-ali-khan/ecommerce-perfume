"use client";

import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

interface CartAnimationProps {
  startPosition: { x: number; y: number };
  endPosition: { x: number; y: number };
  onComplete: () => void;
  imageUrl?: string;
}

export function CartAnimation({
  startPosition,
  endPosition,
  onComplete,
  imageUrl,
}: CartAnimationProps) {
  const [isAnimating, setIsAnimating] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Step 1: Initial pop
      await controls.start({
        scale: 1.2,
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.2, ease: "easeOut" },
      });

      // Step 2: Slight settle
      await controls.start({
        scale: 1,
        transition: { duration: 0.1, ease: "easeOut" },
      });

      // Step 3: Arc to cart
      await controls.start({
        scale: 0.3,
        x: endPosition.x - 8,
        y: endPosition.y - 8,
        opacity: 0,
        transition: {
          duration: 0.4,
          ease: [0.32, 0, 0.67, 0],
          opacity: { duration: 0.3, delay: 0.1 },
        },
      });

      setIsAnimating(false);
      onComplete();
    };

    sequence();
  }, [controls, endPosition, onComplete]);

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          className="fixed z-50 h-20 w-20 rounded-lg overflow-hidden shadow-lg"
          initial={{
            scale: 0,
            x: startPosition.x - 40,
            y: startPosition.y - 40,
            opacity: 0,
            rotate: -10,
          }}
          animate={controls}
          exit={{
            scale: 0,
            opacity: 0,
            transition: { duration: 0.2 },
          }}
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="Product"
              width={80}
              height={80}
              className="object-cover"
            />
          ) : (
            <div className="h-full w-full bg-primary" />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}