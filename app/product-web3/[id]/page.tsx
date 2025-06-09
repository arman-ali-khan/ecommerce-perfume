import { notFound } from "next/navigation"
import { getAllProductIds, getProductById } from "@/lib/products"
import Web3ProductClient from "./web3-product-client"

export async function generateStaticParams() {
  const products = await getAllProductIds()
  return products.map((p) => ({ id: p.id }))
}

export default async function Web3ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id)

  if (!product) notFound()

  return <Web3ProductClient product={product} />
}