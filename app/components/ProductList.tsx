'use client';

import { products } from '../data/products';
import { Product } from '../types';

interface ProductListProps {
  category: string;
  onSelectProduct: (product: Product) => void;
  onBack: () => void;
}

export default function ProductList({ category, onSelectProduct, onBack }: ProductListProps) {
  const categoryProducts = products.filter(product => product.category === category);
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  const getLowestPrice = (prices: Product['prices']) => {
    return Math.min(...Object.values(prices));
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <button
            onClick={onBack}
            className="flex items-center text-pink-600 hover:text-pink-700 mb-4 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Categories
          </button>
          <h2 className="text-3xl font-bold text-gray-800">
            {categoryName} Products
          </h2>
          <p className="text-gray-600 mt-2">
            {categoryProducts.length} products available
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categoryProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => onSelectProduct(product)}
            className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                From ₹{getLowestPrice(product.prices)}
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500 font-medium">{product.brand}</span>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span className="text-sm text-gray-600">{product.rating}</span>
                </div>
              </div>
              
              <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2">
                {product.name}
              </h3>
              
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  {product.reviews} reviews
                </div>
                <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}