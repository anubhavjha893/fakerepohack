'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  fullDescription: string;
  rating: number;
  reviews: number;
  features: string[];
  specifications: { [key: string]: string };
}

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showAddedToCart, setShowAddedToCart] = useState(false);

  useEffect(() => {
    if (!id) return;

    const mockProducts: Product[] = [
      {
        id: 1,
        name: 'Cotton Kurta Set',
        price: 2499,
        image: '/images/product01.jpeg',
        category: 'suits',
        description: 'Beautiful cotton kurta set',
        fullDescription: 'Handwoven cotton kurta set with traditional patterns.',
        rating: 4.8,
        reviews: 127,
        features: ['100% Cotton', 'Handwoven', 'Breathable', 'Natural Dyes'],
        specifications: {
          Material: 'Pure Cotton',
          Length: '5.5 meters',
          'Blouse Piece': 'Included',
          Origin: 'West Bengal',
        },
      },
      {
        id: 2,
        name: 'Clay Water Pot',
        price: 899,
        image: '/images/product02.jpeg',
        category: 'pottery',
        description: 'Eco-friendly clay water pot',
        fullDescription: 'Handmade clay pot that keeps water cool naturally.',
        rating: 4.6,
        reviews: 89,
        features: ['Natural Clay', 'Cooling', 'Handcrafted', 'Sustainable'],
        specifications: {
          Material: 'Natural Clay',
          Capacity: '5L',
          Height: '30 cm',
          Care: 'Wash without soap',
        },
      },
    ];

    const found = mockProducts.find(p => p.id === parseInt(id as string));
    setProduct(found || null);
  }, [id]);

  const handleAddToCart = () => {
    setShowAddedToCart(true);
    setTimeout(() => setShowAddedToCart(false), 3000);
  };

  const handleAddToWishlist = () => {
    setIsWishlisted(prev => !prev);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-32 text-center text-gray-600">Loading product details...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-20 px-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-red-600">Home</Link> &gt;{' '}
        <Link href="/products" className="hover:text-red-600">Products</Link> &gt;{' '}
        <span className="text-gray-800 font-medium">{product.name}</span>
      </div>

      {/* Product Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-4 py-12 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image */}
          <div>
            <img src={product.image} alt={product.name} className="w-full rounded-lg shadow" />
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="text-lg text-gray-600">{product.description}</div>
            <div className="text-2xl font-semibold text-red-600">₹{product.price}</div>

            {/* Quantity & Actions */}
            <div className="flex items-center gap-4">
              <label>Qty:</label>
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-2 border">-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} className="px-2 border">+</button>
            </div>

            <div className="flex gap-4">
              <button onClick={handleAddToCart} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Add to Cart</button>
              <button onClick={handleAddToWishlist} className={`px-4 py-2 rounded border ${isWishlisted ? 'border-red-500 text-red-500' : 'text-gray-600'}`}>
                {isWishlisted ? 'Wishlisted ❤️' : 'Add to Wishlist 🤍'}
              </button>
            </div>

            {showAddedToCart && (
              <div className="bg-green-100 text-green-800 p-3 mt-3 rounded">
                Product added to cart!
              </div>
            )}

            {/* Features */}
            <div>
              <h2 className="text-lg font-semibold mt-6 mb-2">Key Features:</h2>
              <ul className="list-disc list-inside text-gray-700">
                {product.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Description & Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <h2 className="text-xl font-bold mb-2">Description</h2>
            <p className="text-gray-700">{product.fullDescription}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Specifications</h2>
            <ul className="text-gray-700 space-y-1">
              {Object.entries(product.specifications).map(([key, val]) => (
                <li key={key}><strong>{key}:</strong> {val}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      <Footer />
      <FloatingActions />
    </div>
  );
}
