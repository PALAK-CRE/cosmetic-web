import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'skincare',
    name: 'Skincare',
    icon: '🧴',
    description: 'Face care, moisturizers, serums & more',
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'makeup',
    name: 'Makeup',
    icon: '💄',
    description: 'Lipsticks, foundations, eyeshadows & more',
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'fragrance',
    name: 'Fragrance',
    icon: '🌸',
    description: 'Perfumes, body sprays & deodorants',
    image: 'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'haircare',
    name: 'Hair Care',
    icon: '💇‍♀️',
    description: 'Shampoos, conditioners, hair oils & styling',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'bodycare',
    name: 'Body Care',
    icon: '🧴',
    description: 'Body lotions, scrubs, bath products',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'nails',
    name: 'Nail Care',
    icon: '💅',
    description: 'Nail polish, nail art, manicure tools',
    image: 'https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const products: Product[] = [
  // Skincare Products
  {
    id: 1,
    name: 'Vitamin C Serum',
    brand: 'The Ordinary',
    category: 'skincare',
    description: 'A potent antioxidant serum that brightens skin and reduces signs of aging. Contains 23% L-Ascorbic Acid powder suspended in a base of Hyaluronic Acid. Perfect for morning use to protect against environmental damage.',
    image: 'https://images.pexels.com/photos/7755515/pexels-photo-7755515.jpeg?auto=compress&cs=tinysrgb&w=400',
    prices: {
      amazon: 899,
      flipkart: 950,
      nykaa: 850,
      myntra: 920
    },
    rating: 4.5,
    reviews: 2340
  },
  {
    id: 2,
    name: 'Hyaluronic Acid Moisturizer',
    brand: 'CeraVe',
    category: 'skincare',
    description: 'Lightweight, non-greasy moisturizer that provides 24-hour hydration. Formulated with hyaluronic acid and ceramides to restore and maintain the skin barrier. Suitable for all skin types.',
    image: 'https://images.pexels.com/photos/7755501/pexels-photo-7755501.jpeg?auto=compress&cs=tinysrgb&w=400',
    prices: {
      amazon: 1299,
      flipkart: 1350,
      nykaa: 1250,
      myntra: 1320
    },
    rating: 4.7,
    reviews: 1890
  },
  {
    id: 3,
    name: 'Retinol Night Cream',
    brand: 'Olay',
    category: 'skincare',
    description: 'Anti-aging night cream with retinol and niacinamide. Helps reduce fine lines, wrinkles, and improves skin texture overnight. Gentle formula suitable for beginners to retinol.',
    image: 'https://images.pexels.com/photos/7755718/pexels-photo-7755718.jpeg?auto=compress&cs=tinysrgb&w=400',
    prices: {
      amazon: 1599,
      flipkart: 1650,
      nykaa: 1549,
      myntra: 1620
    },
    rating: 4.3,
    reviews: 1567
  },

  // Makeup Products
  {
    id: 4,
    name: 'Matte Liquid Lipstick',
    brand: 'Maybelline',
    category: 'makeup',
    description: 'Long-lasting matte liquid lipstick that stays put for up to 16 hours. Highly pigmented formula with a comfortable, non-drying finish. Available in vibrant red shade.',
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400',
    prices: {
      amazon: 649,
      flipkart: 699,
      nykaa: 625,
      myntra: 675
    },
    rating: 4.4,
    reviews: 3210
  },
  {
    id: 5,
    name: 'Full Coverage Foundation',
    brand: 'L\'Oreal',
    category: 'makeup',
    description: 'Full coverage liquid foundation with SPF 25. Provides flawless coverage that lasts all day. Available in 20 shades to match every skin tone. Oil-free and non-comedogenic.',
    image: 'https://images.pexels.com/photos/2533269/pexels-photo-2533269.jpeg?auto=compress&cs=tinysrgb&w=400',
    prices: {
      amazon: 1199,
      flipkart: 1250,
      nykaa: 1149,
      myntra: 1220
    },
    rating: 4.2,
    reviews: 2890
  },
  {
    id: 6,
    name: 'Eyeshadow Palette',
    brand: 'Urban Decay',
    category: 'makeup',
    description: '12-shade eyeshadow palette with highly pigmented colors. Mix of matte and shimmer finishes. Perfect for creating both everyday and dramatic looks. Includes mirror and dual-ended brush.',
    image: 'https://images.pexels.com/photos/2533271/pexels-photo-2533271.jpeg?auto=compress&cs=tinysrgb&w=400',
    prices: {
      amazon: 2999,
      flipkart: 3100,
      nykaa: 2899,
      myntra: 3050
    },
    rating: 4.8,
    reviews: 1456
  },

  // Fragrance Products
  {
    id: 7,
    name: 'Floral Eau de Parfum',
    brand: 'Chanel',
    category: 'fragrance',
    description: 'Elegant floral fragrance with notes of jasmine, rose, and sandalwood. Long-lasting scent that evolves throughout the day. Perfect for special occasions and everyday wear.',
    image: 'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=400',
    prices: {
      amazon: 8999,
      flipkart: 9200,
      nykaa: 8799,
      myntra: 9100
    },
    rating: 4.6,
    reviews: 987
  },
  {
    id: 8,
    name: 'Fresh Body Spray',
    brand: 'Bath & Body Works',
    category: 'fragrance',
    description: 'Light and refreshing body spray with cucumber and green tea scent. Perfect for daily use and gym sessions. Alcohol-free formula that won\'t dry out your skin.',
    image: 'https://images.pexels.com/photos/1961796/pexels-photo-1961796.jpeg?auto=compress&cs=tinysrgb&w=400',
    prices: {
      amazon: 1299,
      flipkart: 1350,
      nykaa: 1249,
      myntra: 1320
    },
    rating: 4.1,
    reviews: 2134
  },

  // Hair Care Products
  {
    id: 9,
    name: 'Argan Oil Shampoo',
    brand: 'Moroccanoil',
    category: 'haircare',
    description: 'Sulfate-free shampoo enriched with argan oil. Gently cleanses while nourishing and moisturizing hair. Suitable for all hair types, especially dry and damaged hair.',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400',
    prices: {
      amazon: 1899,
      flipkart: 1950,
      nykaa: 1849,
      myntra: 1920
    },
    rating: 4.5,
    reviews: 1678
  },
  {
    id: 10,
    name: 'Hair Growth Serum',
    brand: 'The Inkey List',
    category: 'haircare',
    description: 'Caffeine-infused hair growth serum that stimulates scalp circulation. Helps reduce hair fall and promotes healthy hair growth. Apply to clean scalp twice daily.',
    image: 'https://images.pexels.com/photos/3993450/pexels-photo-3993450.jpeg?auto=compress&cs=tinysrgb&w=400',
    prices: {
      amazon: 1499,
      flipkart: 1550,
      nykaa: 1449,
      myntra: 1520
    },
    rating: 4.3,
    reviews: 1234
  },

  // Body Care Products
  {
    id: 11,
    name: 'Shea Butter Body Lotion',
    brand: 'The Body Shop',
    category: 'bodycare',
    description: '48-hour moisture body lotion with Community Trade shea butter. Rich, creamy formula that absorbs quickly without leaving greasy residue. Perfect for dry skin.',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
    prices: {
      amazon: 1095,
      flipkart: 1150,
      nykaa: 1045,
      myntra: 1120
    },
    rating: 4.4,
    reviews: 2567
  },
  {
    id: 12,
    name: 'Exfoliating Body Scrub',
    brand: 'St. Ives',
    category: 'bodycare',
    description: 'Natural apricot scrub that gently exfoliates dead skin cells. Reveals smoother, softer skin. Made with 100% natural exfoliants. Use 2-3 times per week.',
    image: 'https://images.pexels.com/photos/4465125/pexels-photo-4465125.jpeg?auto=compress&cs=tinysrgb&w=400',
    prices: {
      amazon: 599,
      flipkart: 650,
      nykaa: 575,
      myntra: 625
    },
    rating: 4.2,
    reviews: 1890
  },

  // Nail Care Products
  {
    id: 13,
    name: 'Gel Nail Polish',
    brand: 'OPI',
    category: 'nails',
    description: 'Long-lasting gel nail polish that provides salon-quality results at home. Chip-resistant formula lasts up to 2 weeks. Available in classic red shade.',
    image: 'https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=400',
    prices: {
      amazon: 899,
      flipkart: 950,
      nykaa: 849,
      myntra: 920
    },
    rating: 4.6,
    reviews: 1456
  },
  {
    id: 14,
    name: 'Cuticle Oil',
    brand: 'Essie',
    category: 'nails',
    description: 'Nourishing cuticle oil with vitamin E and jojoba oil. Softens and conditions cuticles for healthier-looking nails. Easy-to-use brush applicator.',
    image: 'https://images.pexels.com/photos/1070361/pexels-photo-1070361.jpeg?auto=compress&cs=tinysrgb&w=400',
    prices: {
      amazon: 649,
      flipkart: 699,
      nykaa: 625,
      myntra: 675
    },
    rating: 4.3,
    reviews: 987
  }
];