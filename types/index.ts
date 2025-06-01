export interface PerfumeNote {
  type: 'top' | 'middle' | 'base';
  notes: string[];
}

export interface SizeOption {
  ml: number;
  price: number;
  stock: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  brand: string;
  gender: 'male' | 'female' | 'unisex';
  notes: PerfumeNote[];
  sizes: SizeOption[];
  images: string[];
  category: string;
  tags: string[];
  featured: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: number;
}

export type Category = 'floral' | 'woody' | 'oriental' | 'fresh' | 'citrus' | 'all';

export interface FilterOptions {
  category: Category;
  gender?: 'male' | 'female' | 'unisex';
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