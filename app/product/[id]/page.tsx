// app/product/[id]/page.tsx
import { notFound } from "next/navigation"
import { getAllProductIds, getProductById } from "@/lib/products"
import ProductClient from "./product-client"

export async function generateStaticParams() {
  const products = await getAllProductIds() // [{ id: "1" }, { id: "2" }]
  return products.map((p) => ({ id: p.id }))
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id)

  if (!product) notFound()

  return <ProductClient product={product} />
}
