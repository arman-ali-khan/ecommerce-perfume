import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Blockchain Hoodie",
    description: "Premium hoodie with embroidered blockchain design.",
    price: 79.99,
    images: [
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    category: "clothing",
    tags: ["hoodie", "blockchain", "premium"],
    featured: true,
    stock: 50,
  },
  {
    id: "2",
    name: "Crypto Wallet Hardware",
    description: "Secure hardware wallet for your crypto assets.",
    price: 149.99,
    images: [
      "https://images.pexels.com/photos/8937661/pexels-photo-8937661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/8937660/pexels-photo-8937660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    category: "electronics",
    tags: ["wallet", "security", "crypto"],
    featured: true,
    stock: 30,
  },
  {
    id: "3",
    name: "NFT Display Frame",
    description: "Digital frame to display your NFT collection.",
    price: 299.99,
    images: [
      "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3825545/pexels-photo-3825545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    category: "home",
    tags: ["nft", "display", "digital"],
    featured: true,
    stock: 15,
  },
  {
    id: "4",
    name: "Crypto Coin Necklace",
    description: "Elegant necklace with cryptocurrency coin pendant.",
    price: 59.99,
    images: [
      "https://images.pexels.com/photos/5370706/pexels-photo-5370706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5370707/pexels-photo-5370707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    category: "accessories",
    tags: ["jewelry", "necklace", "crypto"],
    featured: false,
    stock: 25,
  },
  {
    id: "5",
    name: "Decentralized Tee",
    description: "Soft cotton t-shirt with decentralized network design.",
    price: 34.99,
    images: [
      "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5698850/pexels-photo-5698850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    category: "clothing",
    tags: ["tshirt", "casual", "defi"],
    featured: false,
    stock: 100,
  },
  {
    id: "6",
    name: "Smart Contract Notebook",
    description: "Premium notebook with embossed smart contract design.",
    price: 24.99,
    images: [
      "https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    category: "accessories",
    tags: ["notebook", "stationery", "ethereum"],
    featured: false,
    stock: 75,
  },
  {
    id: "3",
    name: "NFT Display Frame",
    description: "Digital frame to display your NFT collection.",
    price: 299.99,
    images: [
      "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3825545/pexels-photo-3825545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    category: "home",
    tags: ["nft", "display", "digital"],
    featured: true,
    stock: 15,
  },
  {
    id: "7",
    name: "Blockchain Developer Kit",
    description: "Complete toolkit for blockchain development.",
    price: 199.99,
    images: [
      "https://images.pexels.com/photos/8413213/pexels-photo-8413213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/8413214/pexels-photo-8413214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    category: "electronics",
    tags: ["development", "coding", "kit"],
    featured: true,
    stock: 10,
  },
  {
    id: "8",
    name: "Crypto Mining Lamp",
    description: "Decorative lamp inspired by crypto mining rigs.",
    price: 129.99,
    images: [
      "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    category: "home",
    tags: ["lamp", "mining", "decoration"],
    featured: false,
    stock: 20,
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

export function filterProducts(options: {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: string;
}) {
  let filtered = [...products];
  
  if (options.category && options.category !== 'all') {
    filtered = filtered.filter(product => product.category === options.category);
  }
  
  if (options.minPrice !== undefined) {
    filtered = filtered.filter(product => product.price >= (options.minPrice ?? 0));
  }
  
  if (options.maxPrice !== undefined) {
    filtered = filtered.filter(product => product.price <= (options.maxPrice ?? Infinity));
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
        // In a real app, you would sort by date
        break;
      case 'popular':
        // In a real app, you would sort by popularity/sales
        break;
    }
  }
  
  return filtered;
}
