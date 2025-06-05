"use client"

import { useCallback, useEffect, useState } from "react"
import { Filter, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FilterOptions, Category } from "@/types"

interface ProductFilterProps {
  onFilterChange: (filters: FilterOptions) => void
  initialFilters: FilterOptions
}

export function ProductFilter({ onFilterChange, initialFilters }: ProductFilterProps) {
  const [filters, setFilters] = useState<FilterOptions>(initialFilters)
  const [mounted, setMounted] = useState(false)
  const [priceRange, setPriceRange] = useState<[number, number]>([
    initialFilters.minPrice, 
    initialFilters.maxPrice
  ])
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const updateFilters = useCallback((updates: Partial<FilterOptions>) => {
    setFilters(prev => {
      const newFilters = { ...prev, ...updates }
      onFilterChange(newFilters)
      return newFilters
    })
  }, [onFilterChange])

  const handlePriceChange = useCallback((values: number[]) => {
    setPriceRange([values[0], values[1]])
  }, [])
  
  const applyPriceFilter = useCallback(() => {
    updateFilters({
      minPrice: priceRange[0],
      maxPrice: priceRange[1]
    })
  }, [priceRange, updateFilters])

  if (!mounted) return null

  const categories: { value: Category; label: string }[] = [
    { value: "all", label: "All Categories" },
    { value: "floral", label: "Floral" },
    { value: "woody", label: "Woody" },
    { value: "oriental", label: "Oriental" },
    { value: "fresh", label: "Fresh" },
    { value: "citrus", label: "Citrus" },
  ]

  const genderOptions = [
    { value: "all", label: "All Genders" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "unisex", label: "Unisex" },
  ]

  const sortOptions = [
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "newest", label: "Newest Arrivals" },
    { value: "popular", label: "Most Popular" },
  ]

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-2 sm:gap-4">
        <Select 
          value={filters.category} 
          onValueChange={(value) => updateFilters({ category: value as Category })}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select 
          value={filters.gender || 'all'} 
          onValueChange={(value) => updateFilters({ gender: value === 'all' ? undefined : value as 'male' | 'female' | 'unisex' })}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Gender" />
          </SelectTrigger>
          <SelectContent>
            {genderOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="h-9 gap-1">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span>Filters</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="py-6">
              <h4 className="mb-4 text-sm font-medium">Price Range</h4>
              <Slider
                defaultValue={[filters.minPrice, filters.maxPrice]}
                max={300}
                step={1}
                value={priceRange}
                onValueChange={handlePriceChange}
                onValueCommit={applyPriceFilter}
                className="mb-2"
              />
              <div className="flex justify-between text-sm">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>

              <Separator className="my-6" />
              
              <h4 className="mb-4 text-sm font-medium">Categories</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.value} className="flex items-center">
                    <Button
                      variant={filters.category === category.value ? "default" : "outline"}
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => updateFilters({ category: category.value })}
                    >
                      {category.label}
                    </Button>
                  </div>
                ))}
              </div>

              <Separator className="my-6" />
              
              <h4 className="mb-4 text-sm font-medium">Gender</h4>
              <div className="space-y-2">
                {genderOptions.map((option) => (
                  <div key={option.value} className="flex items-center">
                    <Button
                      variant={filters.gender === option.value || (option.value === 'all' && !filters.gender) ? "default" : "outline"}
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => updateFilters({ gender: option.value === 'all' ? undefined : option.value as 'male' | 'female' | 'unisex' })}
                    >
                      {option.label}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <Select 
          value={filters.sortBy} 
          onValueChange={(value) => 
            updateFilters({ 
              sortBy: value as "price-asc" | "price-desc" | "newest" | "popular" 
            })
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}