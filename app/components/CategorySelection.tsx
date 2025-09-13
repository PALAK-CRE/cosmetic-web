'use client';

import { categories } from '../data/products';
import { Category } from '../types';

interface CategorySelectionProps {
  onSelectCategory: (category: string) => void;
}

export default function CategorySelection({ onSelectCategory }: CategorySelectionProps) {
  return (
    <div className="text-center">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Choose Your Beauty Category
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover amazing products across all beauty categories with the best prices from top retailers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category: Category) => (
          <div
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-3xl mb-2">{category.icon}</div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}