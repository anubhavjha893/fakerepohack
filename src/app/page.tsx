/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';
import SplashScreen from '@/components/SplashScreen';
import Marquee from 'react-fast-marquee';
export default function Home() {
  const collections = [
    {
      img: 'https://images.unsplash.com/photo-1720413390928-7077ba5def3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2FyZWVzfGVufDB8fDB8fHww',
      title: 'Saree Collection',
      desc: 'Beautiful sarees for weddings, parties, and festivals',
    },
    {
      img: 'https://media.istockphoto.com/id/1415466863/photo/clothing-in-a-vintage-second-hand-shop.webp?a=1&b=1&s=612x612&w=0&k=20&c=mcQGjK0bLo-V7z2SCsgM1v7svms8Nq15ceQq3MS3q3w=',
      title: 'Suit Collection', 
      desc: 'Beautiful sarees for weddings, parties, and festivals',
    },
    {
      img: 'https://media.istockphoto.com/id/653003428/photo/fashionable-clothes-in-a-boutique-store-in-london.webp?a=1&b=1&s=612x612&w=0&k=20&c=_Xy4DYB7SmC6e-CpyhxjqXsYN9LqUxppiwjCeuHjMSs=',
      title: 'Westerns Collection',
      desc: 'Beautiful sarees for weddings, parties, and festivals' ,
    },
  ];
  

  const [showSplash, setShowSplash] = useState(true);
  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Welcome section */}
     <motion.section 
  initial={{ scale: 1.1, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 2 }}
  className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: "url('/welimg.png')"
  }}
>
  <div className="absolute inset-0 bg-black/40"></div>
  <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6 logo-font mt-20 text-white">
        Welcome to <span className='text-pink-600'>Village Roots</span>
      </h1>
      <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto">
        Discover Boutique Fashion That You’ll Truly Love — Elegant, Effortless, And Uniquely You.
      </p>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          href="/products"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
        >
          Explore Products
        </Link>
      </motion.div>
    </motion.div>
  </div>
</motion.section>


      {/* hero Section */}
  <motion.section
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="py-12 bg-[#f8dcc5]"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
      {/* Image Section */}
      <motion.div variants={itemVariants} className="flex justify-center">
        <img
          src="/heroimg.png"
          alt="Traditional Crafts"
          className="shadow-lg object-cover h-[300px] sm:h-[350px] md:h-[400px] w-[500px] rounded-lg"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div variants={itemVariants} className="space-y-1">
       <h2 className="text-4xl sm:text-4xl font-bold mb-6 text-gray-900">
   Village Roots &  Fashion Boutique 
</h2>
<p className="text-base sm:text-lg text-gray-600">
  Our boutique is a tribute to the heart of India — its villages. Every garment is carefully handcrafted by rural artisans using techniques passed down through generations, blending earthy authenticity with modern fashion.
</p>
<ul className="space-y-3 mt-4">
  <li className="flex items-center text-gray-700">
    <i className="ri-check-line text-green-600 mr-2 w-5 h-5 flex items-center justify-center"></i>
    100% Pure Cotton & Natural Fabrics
  </li>
  <li className="flex items-center text-gray-700">
    <i className="ri-check-line text-green-600 mr-2 w-5 h-5 flex items-center justify-center"></i>
    Designed by Skilled Village Artisans
  </li>
  <li className="flex items-center text-gray-700">
    <i className="ri-check-line text-green-600 mr-2 w-5 h-5 flex items-center justify-center"></i>
    Crafted with Love, Culture, and Sustainability
  </li>
</ul>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/about"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
          >
            Learn More
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </div>
</motion.section>

             {/* influencer intro*/}
      <motion.section className="bg-[#FAF4EF] py-20 px-6 md:px-24">
            <motion.div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-[#5F3B27]">
              <div className="text-left about-left">
               <h2 className="text-2xl md:text-3xl font-bold mb-2">Abhishek Malhan </h2>
      <p className="text-pink-600 font-semibold mb-4"> Indian YouTuber and social media personality</p>
    <p className="mb-4">
     Abhishek Malhan, also known online as Fukra Insaan, is a prominent his captivating YouTube videos and his noteworthy participation in esteemed shows like Bigg Boss OTT Season 2 and Temptation Island India.
    </p>
              </div>

              <div className="text-center about-image">
                <img
                  src="/infuimag.png"

                  alt="Abhishek Maalh"
                  className="rounded-xl shadow-lg w-64 h-64 object-cover mx-auto"
                />
                <h4 className="mt-4 text-xl font-semibold">Abhishek Malhan</h4>
              </div>

              <div className="text-right about-right">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Join his Journey</h3>
                <p className="text-lg mb-4">
                  Follow Abhishek on Instagram where he inspires <strong>50k+</strong> followers 
                  with daily updates, stories, and rural transformation insights.
                </p>
               <div className="flex justify-center gap-4 text-pink-600 text-xl mt-3">
                <a href="https://www.facebook.com/share/15fbgPC83k/" target="_blank" rel="noopener noreferrer"><i className="ri-facebook-fill"></i></a>
                <a href="https://www.instagram.com/fukra_insaan?igsh=MWYyaW1mMzY0aWFhcg==" target="_blank" rel="noopener noreferrer"><i className="ri-instagram-line"></i></a>
                <a href="https://x.com/FukraInsaan" target="_blank" rel="noopener noreferrer"><i className="ri-twitter-line"></i></a>
                <a href="https://youtube.com/@fukrainsaan?si=q-02E4pnRoZfe18R" target="_blank" rel="noopener noreferrer"><i className="ri-youtube-line"></i></a>
              </div>
              </div>
            </motion.div>
          </motion.section>


      {/* Our collection  */}
        <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" bg-gray-50 "
      >
        <div className="max-w-7xl mx-auto px-4 mb-2 ">
    
          <div className="bg-[#f3dbcb] py-10  px-4 md:px-16 space-y-20">
          
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Our Collections</h2>
              <p className="text-gray-500 mb-6">Perfect outfits for every occasion</p>
              <div className="flex flex-wrap justify-center gap-8">
                {collections.slice(0, 3).map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl shadow-md   min-w-[250px] max-w-[300px] text-left"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="rounded-md h-40  w-full object-cover mb-4"
                    />
                    <h4 className="text-lg  px-2 font-semibold">{item.title}</h4>
                    <p className="text-sm px-2 py-2 text-gray-600">{item.desc}</p>
                    <p className="text-pink-600 p-4  font-semibold text-sm"><Link href="/products">See More</Link></p>
                  </div>
                ))}
              </div>
            </section>        


            {/* Section 3: Stats */}
            <section className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-10 rounded-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm font-medium">
                <div>
                  <p className="text-2xl font-bold">500+</p>
                  <p>Happy Customers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">1000+</p>
                  <p>Beautiful Outfits</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">50+</p>
                  <p>Designer Collections</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">22.3K+</p>
                  <p>Follower</p>
                </div>
              </div>
            </section>

          </div>

          
        </div>
      </motion.section>

      <Footer />
      <FloatingActions />
    </div>
  );

}