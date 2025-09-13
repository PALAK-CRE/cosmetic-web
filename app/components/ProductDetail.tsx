'use client';

import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductDetail({ product, onBack, onAddToCart }: ProductDetailProps) {
  const priceEntries = Object.entries(product.prices).sort(([, a], [, b]) => a - b);
  const lowestPrice = priceEntries[0][1];

  const getPlatformLogo = (platform: string) => {
    const logos: { [key: string]: string } = {
      amazon: '🛒',
      flipkart: '🛍️',
      nykaa: '💄',
      myntra: '👗'
    };
    return logos[platform] || '🛒';
  };

  const getPlatformColor = (platform: string) => {
    const colors: { [key: string]: string } = {
      amazon: 'bg-orange-500 hover:bg-orange-600',
      flipkart: 'bg-blue-500 hover:bg-blue-600',
      nykaa: 'bg-pink-500 hover:bg-pink-600',
      myntra: 'bg-purple-500 hover:bg-purple-600'
    };
    return colors[platform] || 'bg-gray-500 hover:bg-gray-600';
  };

  const handleBuyNow = (platform: string) => {
    // In a real app, these would be actual product URLs
    const urls: { [key: string]: string } = {
      amazon: `https://amazon.in/search?k=${encodeURIComponent(product.name)}`,
      flipkart: `https://flipkart.com/search?q=${encodeURIComponent(product.name)}`,
      nykaa: `https://nykaa.com/search/result/?q=${encodeURIComponent(product.name)}`,
      myntra: `https://myntra.com/search?q=${encodeURIComponent(product.name)}`
    };
    
    window.open(urls[platform], '_blank');
  };

  return (
    <div>
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center text-pink-600 hover:text-pink-700 mb-6 transition-colors"
      >
        <span className="mr-2">←</span>
        Back to Products
      </button>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative h-96 lg:h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="p-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg text-gray-500 font-medium">{product.brand}</span>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1 text-lg">★</span>
                  <span className="text-gray-700 font-medium">{product.rating}</span>
                  <span className="text-gray-500 ml-2">({product.reviews} reviews)</span>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Price Comparison */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                💰 Price Comparison
              </h3>
              
              <div className="space-y-3">
                {priceEntries.map(([platform, price], index) => (
                  <div
                    key={platform}
                    className={`flex items-center justify-between p-4 rounded-lg border-2 ${
                      index === 0 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{getPlatformLogo(platform)}</span>
                      <div>
                        <div className="font-semibold text-gray-800 capitalize">
                          {platform}
                          {index === 0 && (
                            <span className="ml-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                              BEST PRICE
                            </span>
                          )}
                        </div>
                        <div className="text-2xl font-bold text-gray-800">
                          ₹{price}
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleBuyNow(platform)}
                      className={`${getPlatformColor(platform)} text-white px-6 py-3 rounded-lg font-medium transition-colors`}
                    >
                      Buy Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex space-x-4">
              <button
                onClick={() => onAddToCart(product)}
                className="flex-1 bg-pink-600 text-white py-4 px-6 rounded-lg hover:bg-pink-700 transition-colors font-semibold text-lg"
              >
                🛒 Add to Cart
              </button>
              <button
                onClick={() => handleBuyNow(priceEntries[0][0])}
                className="flex-1 bg-green-600 text-white py-4 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg"
              >
                ⚡ Buy at Best Price
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}