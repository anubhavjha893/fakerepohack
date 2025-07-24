/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Link from 'next/link';
import Lenis from '@studio-freight/lenis';
import Image from 'next/image';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import FloatingActions from '../../components/FloatingActions';
import Marquee from 'react-fast-marquee';
import dynamic from 'next/dynamic';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AboutPage() {
  const cards = [
    {
      title: 'Our Mission',
      text: 'We aim to create clothing that empowers every woman with confidence and elegance.',
      image: '/missionimg.png'
    },
    {
      title: 'Our Journey',
      text: 'Abhishek started his fashion dream from a small town, rising through challenges to build a trusted brand.',
      image: '/jourimg.jpg'
    },
    {
      title: 'Our Vision',
      text: 'To blend tradition and trend, making every outfit a storytelling experience.',
      image: '/vissionimg.png'
    }
  ];

  const videos = [
    '/video1.mp4',
    '/video2.mp4',
    '/video3.mp4',
    '/video4.mp4',
    '/video5.mp4',
    '/video6.mp4'
  ];

  // ✅ Add smooth scroll & ScrollTrigger safely
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);


gsap.utils.toArray<HTMLElement>('.about-left, .about-image, .about-right').forEach((el) => {
  gsap.fromTo(
    el,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  );
});

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className='min-h-screen relative'>
      <Navigation />

      {/* bg-video box */}
      <motion.div>
        <div className="relative h-screen overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            poster="/fallback.jpg"
          >
            <source src="/bg-video.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0  flex items-center justify-center">
           <motion.h1
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-center text-4xl md:text-6xl font-extrabold bg-white text-transparent bg-clip-text drop-shadow-lg tracking-wide font-serif"
>
  Embrace the Elegance — Boutique Fashion Crafted for You
</motion.h1>
          </div>
        </div>
      </motion.div>

      {/* influencer */}
      <motion.div>
    <section className="flex flex-col md:flex-row items-center justify-center py-16 px-4 gap-10 bg-white">
    <div className="flex items-center flex-col md:flex-row text-[#5F3B27]">
    <Image
      src="/aboutimg.png"
      alt="Abhishek Malhan"
      width={300}
      height={300}
      className="rounded-lg shadow-lg"
    />
    <div className="text-center md:text-left max-w-xl mt-6 md:mt-0 md:ml-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Abhishek Malhan</h2>
      <p className="text-pink-600 font-semibold mb-4">
        Founder | Village Boutique Visionary
      </p>
      <p className="mb-4 text-[#5F3B27]">
        Abhishek Malhan, widely known as Fukra Insaan, has taken a heartfelt initiative
        to uplift women in rural India. In a small village, he built and restored a boutique
        where local women not only create beautiful suits beacuse they have so much skills and earn independently.
        This space is more than a workshop—it's a symbol of empowerment, where tradition is
        woven into opportunity.
      </p>
      <p className="mb-4 text-[#5F3B27]">
        Through this initiative, Abhishek is helping women become self-reliant entrepreneurs.
        His story is not just about fashion—it's about building futures with love, dignity,
        and purpose.
      </p>
      <div className="mt-6">
        <a
          href="https://youtu.be/978Jos1VJak?si=HzMYCLrWI3wYeeMA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 underline font-semibold hover:text-pink-700"
        >
          Watch the Journey on YouTube
        </a>
      </div>
    </div>
  </div>
</section>
      </motion.div>

      {/* Marquee Box */}
      <section className="overflow-hidden bg-[#f0c7b0] py-2 h-12">
        <Marquee gradient={false} speed={60}>
          <span className="text-2xl font-bold text-black mr-12">
          ✨ Fashion With Identity 🎨 Designer With Purpose 💫 Boutique That Tells Your Story 📍 Village Roots ❤️
          </span>
        </Marquee>
      </section>

      {/* 3 Hover Cards Section */}
      <section className="py-20 px-6 md:px-24 bg-[#FFF3F0]">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Explore Our Values</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, idx) => (
            <div key={idx} className="relative group rounded-xl overflow-hidden shadow-lg">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-center p-4">
                <div>
                  <h4 className="text-white text-xl font-bold mb-2">{card.title}</h4>
                  <p className="text-white text-sm">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Videos Section */}
      <section className="bg-[#FFF9F5] py-16 px-6 md:px-24">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-7">Client Testimonials</h3>
        <Marquee speed={100} gradient={false} pauseOnHover={true}>
          {videos.map((vid, i) => (
            <div
              key={i}
              className="mx-4 w-64 h-64 rounded-xl overflow-hidden shadow-lg flex-shrink-0"
            >
              <video
                src={vid}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Marquee>
      </section>

      {/* Values Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-pink-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'ri-heart-line',
                title: 'Authenticity',
                description: 'Every product is genuinely handmade by skilled village artisans'
              },
              {
                icon: 'ri-leaf-line',
                title: 'Sustainability',
                description: 'Eco-friendly materials and practices that respect our environment'
              },
              {
                icon: 'ri-team-line',
                title: 'Community',
                description: 'Supporting rural communities and preserving traditional crafts'
              },
              {
                icon: 'ri-shield-check-line',
                title: 'Quality',
                description: 'Rigorous quality standards ensure exceptional craftsmanship'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${value.icon} text-2xl text-red-600`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <FloatingActions />
      <Footer />
    </div>
  );
}

export default AboutPage;
