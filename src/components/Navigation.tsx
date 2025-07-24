/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);


  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#e2b79a] shadow-lg fixed w-full top-0 z-50"
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left - Menu Button */}
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-black hover:text-red-600 hover:bg-gray-100 font-bold w-30 transition-colors"
              >
                <i className="ri-menu-line text-xl w-6 h-6 flex items-center justify-center"></i>
              </button>
            </div>

            {/* Center - Logo */}
            <div className="flex-1 flex justify-center">
              <img
            src="/logo.png"
            alt="Village Roots"
            className=" h-20 w-auto object-contain"
        />


            </div>

            {/* Right - Cart, Wishlish and Profile */}
            <div className="flex items-center space-x-4">
                <i className="ri-heart-line text-xl w-6 h-6 flex items-center justify-center"></i>
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative p-2 rounded-md text-black hover:text-red-600 hover:bg-gray-100  font-semibold transition-colors"
              >
                <i className="ri-shopping-cart-line text-xl w-6 h-6 flex items-center justify-center"></i>
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </button>
             
              <Link
                href="/login"
                className="p-2 rounded-md text-black  hover:text-red-600 hover:bg-gray-100 transition-colors"
              >
                <i className="ri-user-line text-xl w-6 h-6 flex items-center justify-center"></i>
              </Link>
            </div>
          </div>
        </div>

       {/* Sidebar Menu Drawer */}
<AnimatePresence>
  {isMenuOpen && (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 h-screen w-64 bg-[#ecd9cc] shadow-lg z-50 border-r"
    >
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-800">Menu</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-600 hover:text-red-600"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-4">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-700 hover:text-red-600 transition-colors"
          >
            <i className="ri-home-line mr-2"></i> Home
          </Link>
          <Link
            href="products"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-700 hover:text-red-600 transition-colors"
          >
            <i className="ri-store-line mr-2"></i> Products
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-700 hover:text-red-600 transition-colors"
          >
            <i className="ri-information-line mr-2"></i> About
          </Link>
          <Link
            href="/help"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-700 hover:text-red-600 transition-colors"
          >
            <i className="ri-question-line mr-2"></i> Help
          </Link>
          <Link
            href="/request-call"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-700 hover:text-red-600 transition-colors"
          >
            <i className="ri-phone-line mr-2"></i> Request Call
          </Link>
        </nav>
      </div>
    </motion.div>
  )}
</AnimatePresence>

        {/* Cart Dropdown */}
        <AnimatePresence>
          {isCartOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute top-full right-4 w-80 bg-white shadow-lg border rounded-lg mt-2"
            >
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-4">Shopping Cart</h3>
                <div className="text-center py-8 text-gray-500">
                  <i className="ri-shopping-cart-line text-4xl mb-2 w-16 h-16 mx-auto flex items-center justify-center"></i>
                  <p>Your cart is empty</p>
                </div>
                <Link
                  href="/products"
                  className="block w-full bg-red-600 text-white text-center py-2 rounded-md hover:bg-red-700 transition-colors whitespace-nowrap"
                >
                  Start Shopping
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Overlay */}
      {(isMenuOpen || isCartOpen) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40 mt-16"
          onClick={() => {
            setIsMenuOpen(false);
            setIsCartOpen(false);
          }}
        />
      )}
    </>
  );
}
