import { useState } from "react"
import { DataTable } from "@/components/admin/products/data-table"
import { columns } from "@/components/admin/products/columns"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { products } from "@/lib/products"
import { ProductDialog } from "@/components/admin/products/product-dialog"

export default function ProductsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Products</h2>
        <ProductDialog>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </ProductDialog>
      </div>
      <DataTable columns={columns} data={products} />
    </div>
  )
}