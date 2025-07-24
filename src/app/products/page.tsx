/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import FloatingActions from '../../components/FloatingActions';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);

  const categories = ['all', 'suit', 'Saree', 'kids', 'Western',];

  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: 1,
        name: ' Cotton kurta set',
        price: 2499,
        image: '/images/product01.jpeg', 
        category: 'suits',
        description: 'Beautiful handwoven cotton kurta set with traditional patterns',
        rating: 4.8,
        reviews: 127
      },
      {
        id: 2,
        name: 'Clay suits',
        price: 1700,
        image: '/images/product02.jpeg',
        category: 'all',
        description: 'Traditional pink  pot with natural cooling properties',
        rating: 4.6,
        reviews: 89
      },
      {
        id: 3,
        name: 'kurta set ',
        price: 1299,
        image: '/images/product03.jpeg',
        category: 'suit',
        description: 'Elegant kurta  with traditional design',
        rating: 4.9,
        reviews: 156
      },
      {
        id: 4,
        name: 'Printed Suit',
        price: 1550,
        image:'/images/product04.jpeg',
        category: 'all',
        description: 'Traditional khadi kurta set with hand-embroidered details',
        rating: 4.7,
        reviews: 94
      },
      {
        id: 5,
        name: 'Western silver set',
        price: 2000,
        image:'/images/product05.jpeg',
        category: 'Western',
        description: 'Beautiful Western set with  patterns',
        rating: 4.5,
        reviews: 73
      },
      {
        id: 6,
        name: 'Top & Bottom Set',
        price: 400,
        image: '/images/product06.jpeg',
        category: 'kids',
        description: 'cotton white top with bottom set',
        rating: 4.8,
        reviews: 112
      },
      {
        id: 7,
        name: 'Cotton saree',
        price: 649,
        image: '/images/product07.jpeg',
        category: 'Saree',
        description: 'Pure cotton saree',
        rating: 4.6,
        reviews: 88
      },
      {
        id: 8,
        name: 'kurta set',
        price: 599,
        image:'/images/product08.jpeg',
        category: 'suit',
        description: 'Traditional khadi kurta set with hand-embroidered details',
        rating: 4.4,
        reviews: 67
      },
      {
        id: 9,
        name: 'Red  Suit',
        price: 1299,
        image: '/images/product09.jpeg',
        category: 'all',
        description: 'Traditional kurti full set  ',
        rating: 4.7,
        reviews: 95
      }
    ];

    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (productId: number) => {
    setCart(prev => [...prev, productId]);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#a86030] text-white py-20"
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Discover our authentic collection of handcrafted village products made by skilled artisans
            </p>
          </div>
        </motion.section>

        {/* Filter Section */}
        <motion.section 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="py-8 bg-white border-b"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-[#a86030] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Products Grid */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-12"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {filteredProducts.map(product => (
                  <motion.div
                    key={product.id}
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    layout
                    className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-[300px] object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          wishlist.includes(product.id)
                            ? 'bg-red-600 text-white'
                            : 'bg-white text-gray-600 hover:bg-red-50'
                        }`}
                      >
                        <i className={`${wishlist.includes(product.id) ? 'ri-heart-fill' : 'ri-heart-line'} text-lg`}></i>
                      </button>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className={`${i < Math.floor(product.rating) ? 'ri-star-fill' : 'ri-star-line'} text-sm`}></i>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-black">₹{product.price}</span>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => addToCart(product.id)}
                            className="bg-[#a86030] hover:bg-[#77411d] text-white px-4 py-2 rounded-lg transition-colors text-sm whitespace-nowrap"
                          >
                            Add to Cart
                          </button>
                          <Link
                            href={`/products/${product.id}`}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors text-sm whitespace-nowrap"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <i className="ri-shopping-bag-line text-6xl text-gray-400 mb-4 w-24 h-24 mx-auto flex items-center justify-center"></i>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
                <p className="text-gray-500">Try selecting a different category</p>
              </div>
            )}
          </div>
        </motion.section>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
}