export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  description: string;
  image: string;
  prices: {
    amazon: number;
    flipkart: number;
    nykaa: number;
    myntra: number;
  };
  rating: number;
  reviews: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  image: string;
}