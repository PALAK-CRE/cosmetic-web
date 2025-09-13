'use client';

import { products } from '../data/products';

export default function ProductList({ category, onSelectProduct, onBack }) {
  const categoryProducts = products.filter(product => product.category === category);
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  const getLowestPrice = (prices) => {
    return Math.min(...Object.values(prices));
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Categories
        </button>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            {categoryName} Products
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            {categoryProducts.length} products available
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
        {categoryProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => onSelectProduct(product)}
            className="group cursor-pointer bg-white rounded-lg shadow-elegant hover:shadow-elegant-hover transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-gray-900 px-2 py-1 rounded-md text-xs font-semibold shadow-sm">
                ₹{getLowestPrice(product.prices)}
              </div>
            </div>
            
            <div className="p-4">
              <div className="mb-2">
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">{product.brand}</span>
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2 text-sm leading-tight">
                {product.name}
              </h3>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs text-gray-600 font-medium">{product.rating}</span>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{product.reviews}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}