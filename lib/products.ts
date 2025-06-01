import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Ocean Breeze",
    brand: "AquaScents",
    description: "A fresh aquatic fragrance with hints of sea salt and citrus.",
    gender: "unisex",
    notes: [
      {
        type: "top",
        notes: ["Bergamot", "Sea Salt", "Lemon"]
      },
      {
        type: "middle",
        notes: ["Marine Accord", "Jasmine", "Lavender"]
      },
      {
        type: "base",
        notes: ["Ambergris", "Cedar", "Musk"]
      }
    ],
    sizes: [
      { ml: 30, price: 49.99, stock: 50 },
      { ml: 50, price: 79.99, stock: 30 },
      { ml: 100, price: 129.99, stock: 20 }
    ],
    images: [
      "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg",
      "https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg"
    ],
    category: "fresh",
    tags: ["aquatic", "fresh", "summer"],
    featured: true
  },
  {
    id: "2",
    name: "Midnight Rose",
    brand: "Floral Essence",
    description: "An elegant floral fragrance dominated by rose and jasmine.",
    gender: "female",
    notes: [
      {
        type: "top",
        notes: ["Pink Pepper", "Raspberry"]
      },
      {
        type: "middle",
        notes: ["Rose", "Jasmine", "Peony"]
      },
      {
        type: "base",
        notes: ["Vanilla", "Patchouli", "White Musk"]
      }
    ],
    sizes: [
      { ml: 30, price: 59.99, stock: 40 },
      { ml: 50, price: 89.99, stock: 25 },
      { ml: 100, price: 149.99, stock: 15 }
    ],
    images: [
      "https://images.pexels.com/photos/965992/pexels-photo-965992.jpeg",
      "https://images.pexels.com/photos/965993/pexels-photo-965993.jpeg"
    ],
    category: "floral",
    tags: ["floral", "romantic", "evening"],
    featured: true
  },
  {
    id: "3",
    name: "Oud Royal",
    brand: "Oriental Luxe",
    description: "A rich oriental fragrance with precious oud and exotic spices.",
    gender: "unisex",
    notes: [
      {
        type: "top",
        notes: ["Saffron", "Cinnamon"]
      },
      {
        type: "middle",
        notes: ["Oud", "Rose", "Incense"]
      },
      {
        type: "base",
        notes: ["Amber", "Sandalwood", "Vanilla"]
      }
    ],
    sizes: [
      { ml: 50, price: 199.99, stock: 20 },
      { ml: 100, price: 299.99, stock: 10 }
    ],
    images: [
      "https://images.pexels.com/photos/965994/pexels-photo-965994.jpeg",
      "https://images.pexels.com/photos/965995/pexels-photo-965995.jpeg"
    ],
    category: "oriental",
    tags: ["oud", "luxury", "exotic"],
    featured: true
  }
];

export function getProducts() {
  return products;
}

export function getProductById(id: string) {
  return products.find(product => product.id === id);
}

export function getFeaturedProducts() {
  return products.filter(product => product.featured);
}
export function getAllProductIds() {
  return products.map((product) => ({ id: product.id }))
}

export function getProductsByCategory(category: string) {
  return products.filter(product => 
    category === 'all' ? true : product.category === category
  );
}

export function filterProducts(options: {
  category?: string;
  gender?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: string;
}) {
  let filtered = [...products];
  
  if (options.category && options.category !== 'all') {
    filtered = filtered.filter(product => product.category === options.category);
  }
  
  if (options.gender && options.gender !== 'all') {
    filtered = filtered.filter(product => product.gender === options.gender);
  }
  
  if (options.minPrice !== undefined) {
    filtered = filtered.filter(product => 
      Math.min(...product.sizes.map(s => s.price)) >= (options.minPrice ?? 0)
    );
  }
  
  if (options.maxPrice !== undefined) {
    filtered = filtered.filter(product => 
      Math.min(...product.sizes.map(s => s.price)) <= (options.maxPrice ?? Infinity)
    );
  }
  
  if (options.sortBy) {
    switch (options.sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => 
          Math.min(...a.sizes.map(s => s.price)) - Math.min(...b.sizes.map(s => s.price))
        );
        break;
      case 'price-desc':
        filtered.sort((a, b) => 
          Math.min(...b.sizes.map(s => s.price)) - Math.min(...a.sizes.map(s => s.price))
        );
        break;
    }
  }
  
  return filtered;
}