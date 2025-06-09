"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SearchDialog } from "./search-dialog"

interface SearchTriggerProps {
  variant?: "default" | "ghost" | "outline"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  children?: React.ReactNode
}

export function SearchTrigger({ 
  variant = "ghost", 
  size = "icon", 
  className,
  children 
}: SearchTriggerProps) {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={() => setSearchOpen(true)}
        aria-label="Search products"
      >
        {children || <Search className="h-5 w-5" />}
      </Button>
      
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  )
}