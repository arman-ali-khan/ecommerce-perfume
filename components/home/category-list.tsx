import Link from "next/link"
import Image from "next/image"

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

export function CategoryList() {
  return (
    <section className="container pt-16">
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
    </section>
  )
}