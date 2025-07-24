/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiThreads } from "react-icons/si";
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { div } from "framer-motion/m";
import { FaThreads } from "react-icons/fa6";

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);


  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-400 uppercase tracking-wide">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#">Branding</a></li>
              <li><a href="#">Design</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Advertisement</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-400 uppercase tracking-wide">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Press kit</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-400 uppercase tracking-wide">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#">Terms of use</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Cookie policy</a></li>
            </ul>
          </div>

          {/* Icon */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-400 uppercase tracking-wide">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="username@site.com"
                className="flex-1 px-3 py-2 rounded bg-gray-800 text-white placeholder-gray-400 text-sm border border-gray-700 focus:outline-none focus:border-red-500"
                required
              />
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded text-sm font-medium whitespace-nowrap"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
          <div className="bottom-20 left-4 z-50 flex flex-row gap-4 mt-5">
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="ri-facebook-fill text-xl"></i>
        </motion.a>

        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
          href="https://www.instagram.com/villagerootss?igsh=azVqbmticXJ2eXp4"
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="ri-instagram-line text-xl"></i>
        </motion.a>

        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
          href="https://www.threads.net/@villagerootss"
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 bg-blue-400 hover:bg-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="ri-twitter-line text-xl"></i>
        </motion.a>

        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
          href="https://youtube.com/@villagsrootss?si=qPlYtluijH2RstEL"
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="ri-youtube-line text-xl"></i>
        </motion.a>
      </div>
        {/* Bottom Centered Note */}
        <div className="text-center mt-8 border-t border-gray-800 pt-2 text-gray-400 text-sm">
          © 2025 Village Roots. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
