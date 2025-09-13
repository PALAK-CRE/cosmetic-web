'use client';

import { categories } from '../data/products';

export default function CategorySelection({ onSelectCategory }) {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Shop by Category
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Discover premium beauty products with competitive pricing across leading platforms
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className="group cursor-pointer bg-white rounded-xl shadow-elegant hover:shadow-elegant-hover transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-48 sm:h-52 overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute top-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <span className="text-xl">{category.icon}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}