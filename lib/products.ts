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
      "https://images.pexels.com/photos/3059398/pexels-photo-3059398.jpeg",
      "https://images.pexels.com/photos/3059399/pexels-photo-3059399.jpeg"
    ],
    category: "fresh",
    tags: ["aquatic", "fresh", "summer"],
    featured: true,
    price: 49.99
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
      "https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg",
      "https://images.pexels.com/photos/3059610/pexels-photo-3059610.jpeg"
    ],
    category: "floral",
    tags: ["floral", "romantic", "evening"],
    featured: true,
    price: 59.99
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
      "https://images.pexels.com/photos/3059625/pexels-photo-3059625.jpeg",
      "https://images.pexels.com/photos/3059626/pexels-photo-3059626.jpeg"
    ],
    category: "oriental",
    tags: ["oud", "luxury", "exotic"],
    featured: true,
    price: 199.99
  },
  {
    id: "4",
    name: "Citrus Burst",
    brand: "Fresh Vibes",
    description: "An energizing blend of citrus fruits and fresh herbs.",
    gender: "unisex",
    notes: [
      {
        type: "top",
        notes: ["Orange", "Lemon", "Grapefruit"]
      },
      {
        type: "middle",
        notes: ["Mint", "Basil", "Green Tea"]
      },
      {
        type: "base",
        notes: ["Vetiver", "White Woods", "Musk"]
      }
    ],
    sizes: [
      { ml: 30, price: 45.99, stock: 60 },
      { ml: 50, price: 75.99, stock: 35 },
      { ml: 100, price: 119.99, stock: 25 }
    ],
    images: [
      "https://images.pexels.com/photos/3059640/pexels-photo-3059640.jpeg",
      "https://images.pexels.com/photos/3059641/pexels-photo-3059641.jpeg"
    ],
    category: "citrus",
    tags: ["fresh", "energetic", "summer"],
    featured: false,
    price: 45.99
  },
  {
    id: "5",
    name: "Cedar Woods",
    brand: "Woodland",
    description: "A sophisticated woody fragrance with deep forest notes.",
    gender: "male",
    notes: [
      {
        type: "top",
        notes: ["Bergamot", "Pine Needles"]
      },
      {
        type: "middle",
        notes: ["Cedar", "Cypress", "Juniper"]
      },
      {
        type: "base",
        notes: ["Sandalwood", "Amber", "Oakmoss"]
      }
    ],
    sizes: [
      { ml: 50, price: 85.99, stock: 30 },
      { ml: 100, price: 139.99, stock: 20 }
    ],
    images: [
      "https://images.pexels.com/photos/3059650/pexels-photo-3059650.jpeg",
      "https://images.pexels.com/photos/3059651/pexels-photo-3059651.jpeg"
    ],
    category: "woody",
    tags: ["woody", "forest", "masculine"],
    featured: false,
    price: 85.99
  },
  {
    id: "6",
    name: "Jasmine Dreams",
    brand: "Floral Essence",
    description: "A delicate floral fragrance centered around jasmine blooms.",
    gender: "female",
    notes: [
      {
        type: "top",
        notes: ["Green Tea", "Bergamot"]
      },
      {
        type: "middle",
        notes: ["Jasmine", "Lily of the Valley", "Orange Blossom"]
      },
      {
        type: "base",
        notes: ["White Musk", "Vanilla", "Sandalwood"]
      }
    ],
    sizes: [
      { ml: 30, price: 55.99, stock: 45 },
      { ml: 50, price: 85.99, stock: 30 },
      { ml: 100, price: 139.99, stock: 15 }
    ],
    images: [
      "https://images.pexels.com/photos/3059660/pexels-photo-3059660.jpeg",
      "https://images.pexels.com/photos/3059661/pexels-photo-3059661.jpeg"
    ],
    category: "floral",
    tags: ["floral", "feminine", "elegant"],
    featured: false,
    price: 55.99
  },
  {
    id: "7",
    name: "Velvet Orchid",
    brand: "Floral Essence",
    description: "A luxurious floral oriental with rich vanilla and orchid notes.",
    gender: "female",
    notes: [
      {
        type: "top",
        notes: ["Mandarin", "Honey"]
      },
      {
        type: "middle",
        notes: ["Orchid", "Magnolia", "Iris"]
      },
      {
        type: "base",
        notes: ["Vanilla", "Suede", "Sandalwood"]
      }
    ],
    sizes: [
      { ml: 30, price: 65.99, stock: 35 },
      { ml: 50, price: 95.99, stock: 25 },
      { ml: 100, price: 159.99, stock: 15 }
    ],
    images: [
      "https://images.pexels.com/photos/3059670/pexels-photo-3059670.jpeg",
      "https://images.pexels.com/photos/3059671/pexels-photo-3059671.jpeg"
    ],
    category: "floral",
    tags: ["floral", "oriental", "luxury"],
    featured: true,
    price: 65.99
  },
  {
    id: "8",
    name: "Mountain Pine",
    brand: "Woodland",
    description: "A fresh woody fragrance inspired by mountain forests.",
    gender: "male",
    notes: [
      {
        type: "top",
        notes: ["Pine", "Eucalyptus"]
      },
      {
        type: "middle",
        notes: ["Fir Balsam", "Cedar", "Sage"]
      },
      {
        type: "base",
        notes: ["Pine Needles", "Moss", "Wood Resin"]
      }
    ],
    sizes: [
      { ml: 50, price: 79.99, stock: 40 },
      { ml: 100, price: 129.99, stock: 25 }
    ],
    images: [
      "https://images.pexels.com/photos/3059680/pexels-photo-3059680.jpeg",
      "https://images.pexels.com/photos/3059681/pexels-photo-3059681.jpeg"
    ],
    category: "woody",
    tags: ["woody", "fresh", "outdoor"],
    featured: false,
    price: 79.99
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
  return products.map((product) => ({ id: product.id }));
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

  if (typeof options.minPrice === 'number') {
    const min = options.minPrice;
    filtered = filtered.filter(product => product.price >= min);
  }

  if (typeof options.maxPrice === 'number') {
    const max = options.maxPrice;
    filtered = filtered.filter(product => product.price <= max);
  }

  if (options.sortBy) {
    switch (options.sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      case 'popular':
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
  }

  return filtered;
}
