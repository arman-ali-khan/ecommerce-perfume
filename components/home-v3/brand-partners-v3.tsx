"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const brands = [
  { name: "AquaScents", logo: "AS" },
  { name: "Floral Essence", logo: "FE" },
  { name: "Oriental Luxe", logo: "OL" },
  { name: "Fresh Vibes", logo: "FV" },
  { name: "Woodland", logo: "WL" },
  { name: "Artisan Perfumes", logo: "AP" },
  { name: "Royal Fragrances", logo: "RF" },
  { name: "Modern Scents", logo: "MS" }
]

export function BrandPartnersV3() {
  return (
    <section className="py-20 bg-white border-b">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">
            Trusted Partners
          </Badge>
          <h3 className="text-2xl font-bold text-muted-foreground mb-8">
            Collaborating with the world's finest perfume houses
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <div className="flex animate-scroll">
            {[...brands, ...brands].map((brand, index) => (
              <motion.div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                  <span className="text-xl font-bold text-gray-600">{brand.logo}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}