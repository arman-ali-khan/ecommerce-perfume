"use client"

import { useState, useEffect, useMemo } from "react"
import { Search, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getProducts } from "@/lib/products"
import { ProductCard } from "@/components/shop/product-card"
import { Product } from "@/types"

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const [isSearching, setIsSearching] = useState(false)
  
  const products = useMemo(() => getProducts(), [])

  // Search function
  const searchProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return []
    }

    const query = searchQuery.toLowerCase().trim()
    
    return products.filter(product => {
      // Search in product name
      if (product.name.toLowerCase().includes(query)) return true
      
      // Search in brand
      if (product.brand.toLowerCase().includes(query)) return true
      
      // Search in description
      if (product.description.toLowerCase().includes(query)) return true
      
      // Search in category
      if (product.category.toLowerCase().includes(query)) return true
      
      // Search in tags
      if (product.tags.some(tag => tag.toLowerCase().includes(query))) return true
      
      // Search in fragrance notes
      if (product.notes.some(noteGroup => 
        noteGroup.notes.some(note => note.toLowerCase().includes(query))
      )) return true
      
      return false
    })
  }, [products, searchQuery])

  // Update search results when query changes
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    
    // Debounce search
    const timeoutId = setTimeout(() => {
      setSearchResults(searchProducts)
      setIsSearching(false)
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [searchQuery, searchProducts])

  // Clear search when dialog closes
  useEffect(() => {
    if (!open) {
      setSearchQuery("")
      setSearchResults([])
      setIsSearching(false)
    }
  }, [open])

  const handleClearSearch = () => {
    setSearchQuery("")
    setSearchResults([])
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl min-w-xl w-full border-b h-full overflow-y-auto border-primary max-h-[90vh] p-0 gap-0">
        <DialogHeader className="p-6 pb-4 border-b">
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search Products
          </DialogTitle>
        </DialogHeader>

        {/* Search Input */}
        <div className="p-6 pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for fragrances, brands, notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 h-12 text-lg"
              autoFocus
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8"
                onClick={handleClearSearch}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Search Results */}
        <div className="flex-1 overflow-auto px-6 pb-6">
          {!searchQuery.trim() ? (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Search our collection</h3>
              <p className="text-muted-foreground">
                Find your perfect fragrance by searching for brands, notes, or categories
              </p>
              
              {/* Popular searches */}
              <div className="mt-6">
                <p className="text-sm font-medium mb-3">Popular searches:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Rose", "Oud", "Fresh", "Citrus", "Woody", "Floral"].map((term) => (
                    <Badge
                      key={term}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                      onClick={() => setSearchQuery(term)}
                    >
                      {term}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ) : isSearching ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Searching...</p>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">
                  {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}"
                </h3>
                <Button variant="outline" size="sm" onClick={handleClearSearch}>
                  Clear search
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {searchResults.map((product, index) => (
                  <div key={product.id} onClick={() => onOpenChange(false)}>
                    <ProductCard product={product} index={index} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-lg font-medium mb-2">No results found</h3>
              <p className="text-muted-foreground mb-4">
                We couldn't find any products matching "{searchQuery}"
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Try searching for:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Different keywords or synonyms</li>
                  <li>Brand names (e.g., "AquaScents", "Floral Essence")</li>
                  <li>Fragrance categories (e.g., "woody", "fresh")</li>
                  <li>Specific notes (e.g., "rose", "vanilla")</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}