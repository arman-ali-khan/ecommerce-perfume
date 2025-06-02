"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Product } from '@/types'
import { ProductCard } from './product-card'

import 'swiper/css'
import 'swiper/css/pagination'

interface ProductCarouselProps {
  products: Product[]
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1.2}
      breakpoints={{
        480: {
          slidesPerView: 2.2
        }
      }}
      className="w-full"
    >
      {products.map((product, index) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
