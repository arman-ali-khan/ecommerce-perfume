"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search } from "lucide-react"

import { FilterOptions } from "@/types"
import { getProducts } from "@/lib/products"
import { ProductFilter } from "@/components/shop/product-filter"
import { ProductGrid } from "@/components/shop/product-grid"
import { Input } from "@/components/ui/input"

export default function ShopPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category") || "all"
  const showSearch = searchParams.get("search") === "true"
  const [searchQuery, setSearchQuery] = useState("")
  
  const [filters, setFilters] = useState<FilterOptions>({
    category: categoryParam as any,
    minPrice: 0,
    maxPrice: 300,
    sortBy: "newest"
  })

  const products = getProducts()

  // Update filters when URL parameters change
  useEffect(() => {
    const category = searchParams.get("category")
    if (category) {
      setFilters(prev => ({ ...prev, category: category as any }))
    }
  }, [searchParams])

  const handleFilterChange = useCallback((newFilters: FilterOptions) => {
    setFilters(newFilters)
  }, [])

  const handleSearchClose = () => {
    router.push("/shop")
    setSearchQuery("")
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Shop</h1>
        <p className="text-lg text-muted-foreground">
          Browse our collection of blockchain-inspired products
        </p>
      </div>
      
      {showSearch && (
        <div className="mb-8 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-10 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={handleSearchClose}
            className="absolute right-3 top-3 text-sm text-muted-foreground hover:text-foreground"
          >
            Cancel
          </button>
        </div>
      )}
      
      <div className="mb-8">
        <ProductFilter 
          onFilterChange={handleFilterChange} 
          initialFilters={filters} 
        />
      </div>
      
      <ProductGrid 
        products={products} 
        filters={filters}
        searchQuery={searchQuery} 
      />
    </div>
  )
}