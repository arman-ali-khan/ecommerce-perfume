export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  tags: string[];
  featured: boolean;
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type Category = 'clothing' | 'accessories' | 'electronics' | 'home' | 'all';

export interface FilterOptions {
  category: Category;
  minPrice: number;
  maxPrice: number;
  sortBy: 'price-asc' | 'price-desc' | 'newest' | 'popular';
}

export interface Web3State {
  isConnected: boolean;
  address: string | null;
  balance: number;
  chainId: number | null;
}