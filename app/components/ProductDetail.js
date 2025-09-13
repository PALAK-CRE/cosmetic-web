'use client';

export default function ProductDetail({ product, onBack, onAddToCart }) {
  const priceEntries = Object.entries(product.prices).sort(([, a], [, b]) => a - b);
  const lowestPrice = priceEntries[0][1];

  const getPlatformLogo = (platform) => {
    const logos = {
      amazon: '🛒',
      flipkart: '🛍️',
      nykaa: '💄',
      myntra: '👗'
    };
    return logos[platform] || '🛒';
  };

  const getPlatformColor = (platform) => {
    const colors = {
      amazon: 'bg-orange-500 hover:bg-orange-600',
      flipkart: 'bg-blue-500 hover:bg-blue-600',
      nykaa: 'bg-pink-500 hover:bg-pink-600',
      myntra: 'bg-purple-500 hover:bg-purple-600'
    };
    return colors[platform] || 'bg-gray-500 hover:bg-gray-600';
  };

  const handleBuyNow = (platform) => {
    // In a real app, these would be actual product URLs
    const urls = {
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
        className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors font-medium"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Products
      </button>

      <div className="bg-white rounded-xl shadow-elegant overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {/* Product Image */}
          <div className="relative h-80 sm:h-96 lg:h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Product Info */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="mb-6">
              <div className="mb-3">
                <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">{product.brand}</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-700 font-semibold mr-1">{product.rating}</span>
                  <span className="text-gray-500">({product.reviews} reviews)</span>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                {product.description}
              </p>
            </div>

            {/* Price Comparison */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Available at
              </h3>
              
              <div className="space-y-3">
                {priceEntries.map(([platform, price], index) => (
                  <div
                    key={platform}
                    className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-200 ${
                      index === 0 
                        ? 'border-green-200 bg-green-50 ring-1 ring-green-200' 
                        : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center flex-1">
                      <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center mr-3">
                        <span className="text-lg">{getPlatformLogo(platform)}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 capitalize flex items-center">
                          {platform}
                          {index === 0 && (
                            <span className="ml-2 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                              Best Price
                            </span>
                          )}
                        </div>
                        <div className="text-xl font-bold text-gray-900">
                          ₹{price}
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleBuyNow(platform)}
                      className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
                    >
                      Buy Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onAddToCart(product)}
                className="flex-1 bg-white border-2 border-gray-900 text-gray-900 py-3 px-6 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-200 font-semibold flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9" />
                </svg>
                Add to Cart
              </button>
              <button
                onClick={() => handleBuyNow(priceEntries[0][0])}
                className="flex-1 gradient-primary text-white py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-200 font-semibold"
              >
                Buy at Best Price
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}