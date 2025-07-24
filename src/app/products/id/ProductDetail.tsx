/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import FloatingActions from '../../../components/FloatingActions';

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

export default function ProductDetail({ productId }: { productId: string }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showAddedToCart, setShowAddedToCart] = useState(false);

  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: 1,
        name: ' Cotton kurta set',
        price: 2499,
        image: '/images/product01.jpeg', 
        category: 'suits',
        description:'',
         fullDescription: 'Beautiful handwoven cotton kurta set with traditional patterns',
        rating: 4.8,
        reviews: 127,
        features: [
          '100% Pure Cotton',
          'Handwoven by Village Artisans',
          'Traditional Geometric Patterns',
          'Natural Dyes Used',
          'Comfortable and Breathable',
          'Includes Matching Blouse Piece'
        ],
        specifications: {
          'Material': 'Pure Cotton',
          'Length': '5.5 meters',
          'Blouse Piece': 'Included (0.8 meters)',
          'Care Instructions': 'Hand wash with mild detergent',
          'Origin': 'Handwoven in West Bengal',
          'Weight': '400 grams'
        }
      },
      {
        id: 2,
        name: 'Clay suits',
        price: 1700,
        image: '/images/product02.jpeg',
        category: 'pottery',
        description: 'Traditional pink  pot with natural cooling properties',
        rating: 4.6,
        reviews: 89,
        fullDescription: 'This traditional clay water pot is handcrafted by skilled potters using age-old techniques passed down through generations. The natural clay material provides excellent cooling properties, keeping water naturally cool without electricity. The decorative patterns are hand-etched, making each pot unique.',
        features: [
          'Natural Clay Construction',
          'Excellent Cooling Properties',
          'Hand-etched Decorative Patterns',
          'Eco-friendly and Sustainable',
          'No Electricity Required',
          'Improves Water Taste'
        ],
        specifications: {
          'Material': 'Natural Clay',
          'Capacity': '5 Liters',
          'Height': '30 cm',
          'Diameter': '25 cm',
          'Weight': '2.5 kg',
          'Care': 'Clean with water, avoid soap'
        }
      },
      {
       id: 3,
        name: 'kurta set ',
        price: 1299,
        image: '/images/product03.jpeg',
        category: 'suit',
        description: 'Elegant kurta  with traditional design',
        rating: 4.9,
        reviews: 156,
       fullDescription: 'This traditional clay water pot is handcrafted by skilled potters using age-old techniques passed down through generations. The natural clay material provides excellent cooling properties, keeping water naturally cool without electricity. The decorative patterns are hand-etched, making each pot unique.',
        features: [
          'Natural Clay Construction',
          'Excellent Cooling Properties',
          'Hand-etched Decorative Patterns',
          'Eco-friendly and Sustainable',
          'No Electricity Required',
          'Improves Water Taste'
        ],
        specifications: {
          'Material': 'Natural Clay',
          'Capacity': '5 Liters',
          'Height': '30 cm',
          'Diameter': '25 cm',
          'Weight': '2.5 kg',
          'Care': 'Clean with water, avoid soap'
        }
      },
      {
        id: 2,
        name: 'Clay Water Pot',
        price: 899,
        image: '/images/product02.jpeg',
        category: 'pottery',
        description: 'Traditional clay water pot with natural cooling properties',
        fullDescription: 'This traditional clay water pot is handcrafted by skilled potters using age-old techniques passed down through generations. The natural clay material provides excellent cooling properties, keeping water naturally cool without electricity. The decorative patterns are hand-etched, making each pot unique.',
        rating: 4.6,
        reviews: 89,
        features: [
          'Natural Clay Construction',
          'Excellent Cooling Properties',
          'Hand-etched Decorative Patterns',
          'Eco-friendly and Sustainable',
          'No Electricity Required',
          'Improves Water Taste'
        ],
        specifications: {
          'Material': 'Natural Clay',
          'Capacity': '5 Liters',
          'Height': '30 cm',
          'Diameter': '25 cm',
          'Weight': '2.5 kg',
          'Care': 'Clean with water, avoid soap'
        }
      },
      {
        id: 4,
        name: 'Printed Suit',
        price: 1550,
        image:'/images/product04.jpeg',
        category: 'all',
        description: 'Traditional khadi kurta set with hand-embroidered details',
        rating: 4.7,
        reviews: 94,
         fullDescription: 'This traditional clay water pot is handcrafted by skilled potters using age-old techniques passed down through generations. The natural clay material provides excellent cooling properties, keeping water naturally cool without electricity. The decorative patterns are hand-etched, making each pot unique.',
        features: [
          'Natural Clay Construction',
          'Excellent Cooling Properties',
          'Hand-etched Decorative Patterns',
          'Eco-friendly and Sustainable',
          'No Electricity Required',
          'Improves Water Taste'
        ],
        specifications: {
          'Material': 'Natural Clay',
          'Capacity': '5 Liters',
          'Height': '30 cm',
          'Diameter': '25 cm',
          'Weight': '2.5 kg',
          'Care': 'Clean with water, avoid soap'
        }
      },
      {
        id: 5,
        name: 'Western silver set',
        price: 2000,
        image:'/images/product05.jpeg',
        category: 'Western',
        description: 'Beautiful Western set with  patterns',
        rating: 4.5,
        reviews: 73,
        fullDescription: 'This traditional clay water pot is handcrafted by skilled potters using age-old techniques passed down through generations. The natural clay material provides excellent cooling properties, keeping water naturally cool without electricity. The decorative patterns are hand-etched, making each pot unique.',
        features: [
          'Natural Clay Construction',
          'Excellent Cooling Properties',
          'Hand-etched Decorative Patterns',
          'Eco-friendly and Sustainable',
          'No Electricity Required',
          'Improves Water Taste'
        ],
        specifications: {
          'Material': 'Natural Clay',
          'Capacity': '5 Liters',
          'Height': '30 cm',
          'Diameter': '25 cm',
          'Weight': '2.5 kg',
          'Care': 'Clean with water, avoid soap'
        }
      },
      {
        id: 6,
        name: 'Top & Bottom Set',
        price: 400,
        image: '/images/product06.jpeg',
        category: 'kids',
        description: 'cotton white top with bottom set',
        rating: 4.8,
        reviews: 112,
          fullDescription: 'This traditional clay water pot is handcrafted by skilled potters using age-old techniques passed down through generations. The natural clay material provides excellent cooling properties, keeping water naturally cool without electricity. The decorative patterns are hand-etched, making each pot unique.',
        features: [
          'Natural Clay Construction',
          'Excellent Cooling Properties',
          'Hand-etched Decorative Patterns',
          'Eco-friendly and Sustainable',
          'No Electricity Required',
          'Improves Water Taste'
        ],
        specifications: {
          'Material': 'Natural Clay',
          'Capacity': '5 Liters',
          'Height': '30 cm',
          'Diameter': '25 cm',
          'Weight': '2.5 kg',
          'Care': 'Clean with water, avoid soap'
        }
      },
      {
          id: 7,
        name: 'Cotton saree',
        price: 649,
        image: '/images/product07.jpeg',
        category: 'Saree',
        description: 'Pure cotton saree',
        rating: 4.6,
        reviews: 88,
        fullDescription: 'This traditional clay water pot is handcrafted by skilled potters using age-old techniques passed down through generations. The natural clay material provides excellent cooling properties, keeping water naturally cool without electricity. The decorative patterns are hand-etched, making each pot unique.',
        features: [
          'Natural Clay Construction',
          'Excellent Cooling Properties',
          'Hand-etched Decorative Patterns',
          'Eco-friendly and Sustainable',
          'No Electricity Required',
          'Improves Water Taste'
        ],
        specifications: {
          'Material': 'Natural Clay',
          'Capacity': '5 Liters',
          'Height': '30 cm',
          'Diameter': '25 cm',
          'Weight': '2.5 kg',
          'Care': 'Clean with water, avoid soap'
        }
      },
      {
       id: 8,
        name: 'kurta set',
        price: 599,
        image:'/images/product08.jpeg',
        category: 'suit',
        description: 'Traditional khadi kurta set with hand-embroidered details',
        rating: 4.4,
        reviews: 67,
          fullDescription: 'This traditional clay water pot is handcrafted by skilled potters using age-old techniques passed down through generations. The natural clay material provides excellent cooling properties, keeping water naturally cool without electricity. The decorative patterns are hand-etched, making each pot unique.',
        features: [
          'Natural Clay Construction',
          'Excellent Cooling Properties',
          'Hand-etched Decorative Patterns',
          'Eco-friendly and Sustainable',
          'No Electricity Required',
          'Improves Water Taste'
        ],
        specifications: {
          'Material': 'Natural Clay',
          'Capacity': '5 Liters',
          'Height': '30 cm',
          'Diameter': '25 cm',
          'Weight': '2.5 kg',
          'Care': 'Clean with water, avoid soap'
        }
      },
      {
        id: 9,
        name: 'Red  Suit',
        price: 1299,
        image: '/images/product09.jpeg',
        category: 'all',
        description: 'Traditional kurti full set  ',
        rating: 4.7,
        reviews: 95,
          fullDescription: 'This traditional clay water pot is handcrafted by skilled potters using age-old techniques passed down through generations. The natural clay material provides excellent cooling properties, keeping water naturally cool without electricity. The decorative patterns are hand-etched, making each pot unique.',
        features: [
          'Natural Clay Construction',
          'Excellent Cooling Properties',
          'Hand-etched Decorative Patterns',
          'Eco-friendly and Sustainable',
          'No Electricity Required',
          'Improves Water Taste'
        ],
        specifications: {
          'Material': 'Natural Clay',
          'Capacity': '5 Liters',
          'Height': '30 cm',
          'Diameter': '25 cm',
          'Weight': '2.5 kg',
          'Care': 'Clean with water, avoid soap'
        }
      },    
    ];

    
    const foundProduct = mockProducts.find(p => p.id === parseInt(productId));
    setProduct(foundProduct || mockProducts[0]);
  }, [productId]);

  const handleAddToCart = () => {
    setShowAddedToCart(true);
    setTimeout(() => setShowAddedToCart(false), 3000);
  };

  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-16 flex items-center justify-center h-96">
          <div className="text-center">
            <i className="ri-loader-4-line text-4xl text-red-600 animate-spin mb-4 w-16 h-16 flex items-center justify-center mx-auto"></i>
            <p className="text-gray-600">Loading product details...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-white border-b py-4">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-600 hover:text-red-600 cursor-pointer">Home</Link>
              <i className="ri-arrow-right-s-line text-gray-400"></i>
              <Link href="/products" className="text-gray-600 hover:text-red-600 cursor-pointer">Products</Link>
              <i className="ri-arrow-right-s-line text-gray-400"></i>
              <span className="text-gray-900 font-medium">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Details */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="aspect-square rounded-lg overflow-hidden bg-white shadow-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`${i < Math.floor(product.rating) ? 'ri-star-fill' : 'ri-star-line'} text-sm`}></i>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.reviews} reviews)</span>
                  </div>
                  
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="text-3xl font-bold text-black mb-6">₹{product.price}</div>
                </div>

                {/* Quantity and Actions */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <label className="text-sm font-medium text-gray-700">Quantity:</label>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 text-gray-600 hover:text-red-600 cursor-pointer"
                      >
                        <i className="ri-subtract-line"></i>
                      </button>
                      <span className="px-4 py-2 border-x border-gray-300 font-medium">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-2 text-gray-600 hover:text-red-600 cursor-pointer"
                      >
                        <i className="ri-add-line"></i>
                      </button>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <motion.button
                      onClick={handleAddToCart}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
                    >
                      <i className="ri-shopping-cart-line mr-2"></i>
                      Add to Cart
                    </motion.button>
                    
                    <motion.button
                      onClick={handleAddToWishlist}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`px-6 py-3 rounded-lg font-semibold transition-colors border-2 whitespace-nowrap ${
                        isWishlisted 
                          ? ' text-red-600 border-red-500' 
                          : 'bg-white text-red-600 hover:bg-red-50'
                      }`}
                    >
                      <i className={`${isWishlisted ? 'ri-heart-fill' : 'ri-heart-line'} mr-2`}></i>
                      {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                    </motion.button>
                  </div>

                  {showAddedToCart && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg"
                    >
                      <i className="ri-check-line mr-2"></i>
                      Product added to cart successfully!
                    </motion.div>
                  )}
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Product Description and Specifications */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Description</h3>
                <p className="text-gray-700 leading-relaxed">{product.fullDescription}</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Specifications</h3>
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <dl className="space-y-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <dt className="font-medium text-gray-900">{key}:</dt>
                        <dd className="text-gray-700">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
}