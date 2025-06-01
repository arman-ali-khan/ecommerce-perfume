"use client"

import { useState, useEffect } from "react"

import { FilterOptions, Product } from "@/types"
import { ProductCard } from "@/components/shop/product-card"

interface ProductGridProps {
  products: Product[]
  filters: FilterOptions
}

export function ProductGrid({ products, filters }: ProductGridProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  
  useEffect(() => {
    let filtered = [...products]
    
    // Apply category filter
    if (filters.category && filters.category !== "all") {
      filtered = filtered.filter(p => p.category === filters.category)
    }
    
    // Apply price range filter
    filtered = filtered.filter(p => 
      p.price >= filters.minPrice && 
      p.price <= filters.maxPrice
    )
    
    // Apply sorting
    if (filters.sortBy === "price-asc") {
      filtered.sort((a, b) => a.price - b.price)
    } else if (filters.sortBy === "price-desc") {
      filtered.sort((a, b) => b.price - a.price)
    } else if (filters.sortBy === "newest") {
      // In a real app, you would sort by date
      // Here we'll just use the ID as a proxy for "newest"
      filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id))
    } else if (filters.sortBy === "popular") {
      // For demo purposes, use featured status as proxy for popularity
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }
    
    setFilteredProducts(filtered)
  }, [products, filters])
  
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))
      ) : (
        <div className="col-span-full py-12 text-center text-muted-foreground">
          No products match your filters.
        </div>
      )}
    </div>
  )
}