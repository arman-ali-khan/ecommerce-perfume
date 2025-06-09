import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const categories = [
  {
    name: "Men",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    href: "/shop?gender=male"
  },
  {
    name: "Women",
    image: "https://images.pexels.com/photos/3762762/pexels-photo-3762762.jpeg",
    href: "/shop?gender=female"
  },
  {
    name: "Unisex",
    image: "https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg",
    href: "/shop?gender=unisex"
  },
  {
    name: "Gift Pack",
    image: "https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg",
    href: "/shop?category=gift"
  }
]

const offerBanners = [
  {
    id: "summer-collection",
    title: "Summer Fresh",
    subtitle: "Citrus & Aquatic Scents",
    discount: "25% OFF",
    description: "Beat the heat with refreshing summer fragrances",
    image: "https://images.pexels.com/photos/3059640/pexels-photo-3059640.jpeg",
    link: "/shop?category=fresh",
    badge: "Limited Time",
    bgGradient: "from-cyan-500 to-blue-600",
    textColor: "text-white"
  },
  {
    id: "luxury-oriental",
    title: "Oriental Luxury",
    subtitle: "Premium Oud Collection",
    discount: "Buy 2 Get 1",
    description: "Indulge in exotic oriental fragrances",
    image: "https://images.pexels.com/photos/3059625/pexels-photo-3059625.jpeg",
    link: "/shop?category=oriental",
    badge: "Exclusive",
    bgGradient: "from-purple-600 to-pink-600",
    textColor: "text-white"
  }
]

export function CategoryList() {
  return (
    <section className="container pt-16 space-y-12">
      {/* Main Categories */}
      <div className="flex justify-center gap-8 md:gap-16">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="group flex flex-col sm:flex-row items-center gap-4"
          >
            <div className="relative h-12 w-12 overflow-hidden rotate-45 rounded-lg border shadow-lg transition-transform duration-300 group-hover:scale-105">
              <div className="absolute inset-0 -rotate-45 scale-[1.45]">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={48}
                  height={48}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
            <span className="text-sm sm:text-lg font-medium">{category.name}</span>
          </Link>
        ))}
      </div>

      {/* Offer Banners */}
      <div className="grid gap-6 md:grid-cols-2">
        {offerBanners.map((banner) => (
          <div
            key={banner.id}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Background Image */}
            <div className="relative h-48 md:h-56">
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${banner.bgGradient} opacity-85`} />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              {/* Top Section */}
              <div className="flex items-start justify-between">
                <Badge className="bg-white/90 text-black hover:bg-white">
                  {banner.badge}
                </Badge>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className={`text-sm font-bold ${banner.textColor}`}>
                    {banner.discount}
                  </span>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="space-y-3">
                <div>
                  <h3 className={`text-2xl font-bold ${banner.textColor}`}>
                    {banner.title}
                  </h3>
                  <p className={`text-sm ${banner.textColor} opacity-90`}>
                    {banner.subtitle}
                  </p>
                </div>
                
                <p className={`text-sm ${banner.textColor} opacity-80 line-clamp-2`}>
                  {banner.description}
                </p>

                <Button 
                  asChild 
                  className="bg-white text-black hover:bg-white/90 transition-colors"
                >
                  <Link href={banner.link}>
                    Shop Collection
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Additional Category Offers */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            category: "Floral",
            offer: "20% OFF",
            image: "https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg",
            link: "/shop?category=floral"
          },
          {
            category: "Woody",
            offer: "15% OFF",
            image: "https://images.pexels.com/photos/3059650/pexels-photo-3059650.jpeg",
            link: "/shop?category=woody"
          },
          {
            category: "Citrus",
            offer: "30% OFF",
            image: "https://images.pexels.com/photos/3059640/pexels-photo-3059640.jpeg",
            link: "/shop?category=citrus"
          },
          {
            category: "Fresh",
            offer: "25% OFF",
            image: "https://images.pexels.com/photos/3059398/pexels-photo-3059398.jpeg",
            link: "/shop?category=fresh"
          }
        ].map((item) => (
          <Link
            key={item.category}
            href={item.link}
            className="group relative overflow-hidden rounded-lg bg-muted/50 p-4 transition-all hover:shadow-md"
          >
            <div className="relative aspect-square mb-3 overflow-hidden rounded-md">
              <Image
                src={item.image}
                alt={item.category}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-2 right-2">
                <Badge variant="destructive" className="text-xs">
                  {item.offer}
                </Badge>
              </div>
            </div>
            <h4 className="font-medium text-center">{item.category}</h4>
          </Link>
        ))}
      </div>
    </section>
  )
}