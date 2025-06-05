"use client"

import Image from "next/image"
import { Product } from "@/types"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

interface ProductDescriptionProps {
  product: Product
}

export function ProductDescription({ product }: ProductDescriptionProps) {
  const inspirationalImages = [
    "https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg",
    "https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg",
    "https://images.pexels.com/photos/3270225/pexels-photo-3270225.jpeg"
  ]

  return (
    <div className="mt-16 space-y-8">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
          <TabsTrigger value="inspiration">Inspiration</TabsTrigger>
        </TabsList>
        
        <TabsContent value="description" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Perfect For</h4>
                    <ul className="list-inside list-disc text-muted-foreground">
                      <li>Daily wear</li>
                      <li>Special occasions</li>
                      <li>Evening events</li>
                      <li>Romantic moments</li>
                    </ul>
                  </div>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="ingredients" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Premium Ingredients</h3>
                  <p className="text-muted-foreground">
                    Our fragrances are crafted using only the finest ingredients, sourced from around the world.
                    Each component is carefully selected to ensure the highest quality and longevity.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Ingredients</h4>
                    <ul className="list-inside list-disc text-muted-foreground">
                      {product.notes.flatMap(note => 
                        note.notes.map(noteName => (
                          <li key={noteName}>{noteName}</li>
                        ))
                      )}
                    </ul>
                  </div>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://images.pexels.com/photos/3059398/pexels-photo-3059398.jpeg"
                    alt="Ingredients"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="inspiration" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">The Inspiration</h3>
                  <p className="text-muted-foreground">
                    Inspired by the beauty and complexity of nature, {product.name} captures the essence
                    of {product.category} fragrances while adding a modern, sophisticated twist.
                  </p>
                </div>
                
                <div className="grid gap-4 sm:grid-cols-3">
                  {inspirationalImages.map((image, index) => (
                    <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src={image}
                        alt={`Inspiration ${index + 1}`}
                        width={400}
                        height={400}
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}