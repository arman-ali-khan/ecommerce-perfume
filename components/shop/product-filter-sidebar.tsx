"use client"

import { useCallback, useEffect, useState } from "react"
import { X, Filter, ChevronDown, ChevronUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { FilterOptions, Category } from "@/types"
import { cn } from "@/lib/utils"

interface ProductFilterSidebarProps {
  onFilterChange: (filters: FilterOptions) => void
  initialFilters: FilterOptions
  isOpen: boolean
  onClose: () => void
  className?: string
}

interface FilterSection {
  id: string
  title: string
  isExpanded: boolean
}

export function ProductFilterSidebar({ 
  onFilterChange, 
  initialFilters, 
  isOpen, 
  onClose,
  className 
}: ProductFilterSidebarProps) {
  const [filters, setFilters] = useState<FilterOptions>(initialFilters)
  const [priceRange, setPriceRange] = useState<[number, number]>([
    initialFilters.minPrice, 
    initialFilters.maxPrice
  ])
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    categories: true,
    gender: true,
    price: true,
    brands: true,
    notes: false,
    sort: true
  })

  const categories: { value: Category; label: string; count?: number }[] = [
    { value: "all", label: "All Categories", count: 8 },
    { value: "floral", label: "Floral", count: 3 },
    { value: "woody", label: "Woody", count: 2 },
    { value: "oriental", label: "Oriental", count: 1 },
    { value: "fresh", label: "Fresh", count: 1 },
    { value: "citrus", label: "Citrus", count: 1 },
  ]

  const genderOptions = [
    { value: "all", label: "All Genders", count: 8 },
    { value: "male", label: "Male", count: 2 },
    { value: "female", label: "Female", count: 3 },
    { value: "unisex", label: "Unisex", count: 3 },
  ]

  const brands = [
    { value: "aquascents", label: "AquaScents", count: 1 },
    { value: "floral-essence", label: "Floral Essence", count: 3 },
    { value: "oriental-luxe", label: "Oriental Luxe", count: 1 },
    { value: "fresh-vibes", label: "Fresh Vibes", count: 1 },
    { value: "woodland", label: "Woodland", count: 2 },
  ]

  const fragranceNotes = [
    { value: "rose", label: "Rose", count: 2 },
    { value: "jasmine", label: "Jasmine", count: 2 },
    { value: "vanilla", label: "Vanilla", count: 3 },
    { value: "cedar", label: "Cedar", count: 2 },
    { value: "bergamot", label: "Bergamot", count: 3 },
    { value: "sandalwood", label: "Sandalwood", count: 4 },
    { value: "musk", label: "Musk", count: 3 },
    { value: "amber", label: "Amber", count: 2 },
  ]

  const sortOptions = [
    { value: "newest", label: "Newest Arrivals" },
    { value: "popular", label: "Most Popular" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
  ]

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

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  const clearAllFilters = () => {
    const defaultFilters: FilterOptions = {
      category: "all",
      minPrice: 0,
      maxPrice: 300,
      sortBy: "newest"
    }
    setFilters(defaultFilters)
    setPriceRange([0, 300])
    updateFilters(defaultFilters)
  }

  const getActiveFiltersCount = () => {
    let count = 0
    if (filters.category !== "all") count++
    if (filters.gender) count++
    if (filters.minPrice > 0 || filters.maxPrice < 300) count++
    return count
  }

  const FilterSection = ({ 
    id, 
    title, 
    children, 
    badge 
  }: { 
    id: string
    title: string
    children: React.ReactNode
    badge?: string | number
  }) => (
    <div className="space-y-3">
      <button
        onClick={() => toggleSection(id)}
        className="flex w-full items-center justify-between text-sm font-medium hover:text-primary"
      >
        <div className="flex items-center gap-2">
          <span>{title}</span>
          {badge && (
            <Badge variant="secondary" className="text-xs">
              {badge}
            </Badge>
          )}
        </div>
        {expandedSections[id] ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>
      {expandedSections[id] && (
        <div className="space-y-3">
          {children}
        </div>
      )}
    </div>
  )

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-80 bg-background border-r transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:w-64",
        isOpen ? "translate-x-0" : "-translate-x-full",
        className
      )}>
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b lg:hidden">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              <h2 className="font-semibold">Filters</h2>
              {getActiveFiltersCount() > 0 && (
                <Badge variant="default" className="text-xs">
                  {getActiveFiltersCount()}
                </Badge>
              )}
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              <h2 className="font-semibold">Filters</h2>
              {getActiveFiltersCount() > 0 && (
                <Badge variant="default" className="text-xs">
                  {getActiveFiltersCount()}
                </Badge>
              )}
            </div>
            {getActiveFiltersCount() > 0 && (
              <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                Clear All
              </Button>
            )}
          </div>

          {/* Filters Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Categories */}
            <FilterSection id="categories" title="Categories">
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.value} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category.value}`}
                        checked={filters.category === category.value}
                        onCheckedChange={() => updateFilters({ category: category.value })}
                      />
                      <Label 
                        htmlFor={`category-${category.value}`}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {category.label}
                      </Label>
                    </div>
                    {category.count && (
                      <span className="text-xs text-muted-foreground">
                        {category.count}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </FilterSection>

            <Separator />

            {/* Gender */}
            <FilterSection id="gender" title="Gender">
              <div className="space-y-2">
                {genderOptions.map((option) => (
                  <div key={option.value} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`gender-${option.value}`}
                        checked={filters.gender === option.value || (option.value === 'all' && !filters.gender)}
                        onCheckedChange={() => 
                          updateFilters({ 
                            gender: option.value === 'all' ? undefined : option.value as 'male' | 'female' | 'unisex' 
                          })
                        }
                      />
                      <Label 
                        htmlFor={`gender-${option.value}`}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {option.label}
                      </Label>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {option.count}
                    </span>
                  </div>
                ))}
              </div>
            </FilterSection>

            <Separator />

            {/* Price Range */}
            <FilterSection id="price" title="Price Range">
              <div className="space-y-4">
                <Slider
                  defaultValue={[filters.minPrice, filters.maxPrice]}
                  max={300}
                  step={5}
                  value={priceRange}
                  onValueChange={handlePriceChange}
                  onValueCommit={applyPriceFilter}
                  className="w-full"
                />
                <div className="flex items-center justify-between text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <Label className="text-xs">Min</Label>
                    <div className="text-sm font-medium">${priceRange[0]}</div>
                  </div>
                  <div className="flex-1">
                    <Label className="text-xs">Max</Label>
                    <div className="text-sm font-medium">${priceRange[1]}</div>
                  </div>
                </div>
              </div>
            </FilterSection>

            <Separator />

            {/* Brands */}
            <FilterSection id="brands" title="Brands">
              <div className="space-y-2">
                {brands.map((brand) => (
                  <div key={brand.value} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id={`brand-${brand.value}`} />
                      <Label 
                        htmlFor={`brand-${brand.value}`}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {brand.label}
                      </Label>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {brand.count}
                    </span>
                  </div>
                ))}
              </div>
            </FilterSection>

            <Separator />

            {/* Fragrance Notes */}
            <FilterSection id="notes" title="Fragrance Notes">
              <div className="space-y-2">
                {fragranceNotes.map((note) => (
                  <div key={note.value} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id={`note-${note.value}`} />
                      <Label 
                        htmlFor={`note-${note.value}`}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {note.label}
                      </Label>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {note.count}
                    </span>
                  </div>
                ))}
              </div>
            </FilterSection>

            <Separator />

            {/* Sort Options */}
            <FilterSection id="sort" title="Sort By">
              <RadioGroup
                value={filters.sortBy}
                onValueChange={(value) => 
                  updateFilters({ 
                    sortBy: value as "price-asc" | "price-desc" | "newest" | "popular" 
                  })
                }
                className="space-y-2"
              >
                {sortOptions.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={`sort-${option.value}`} />
                    <Label 
                      htmlFor={`sort-${option.value}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </FilterSection>
          </div>

          {/* Mobile Footer */}
          <div className="border-t p-4 lg:hidden">
            <div className="flex gap-2">
              <Button variant="outline" onClick={clearAllFilters} className="flex-1">
                Clear All
              </Button>
              <Button onClick={onClose} className="flex-1">
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}