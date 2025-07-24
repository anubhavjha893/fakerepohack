/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import FloatingActions from '../../components/FloatingActions';

 function HelpPage() {
  const [activeTab, setActiveTab] = useState('faq');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I place an order?',
      answer: 'You can place an order by browsing our products, selecting your desired items, adding them to cart, and proceeding to checkout. We accept various payment methods including UPI, credit cards, and net banking.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for all our products. Items must be in original condition with tags intact. Please contact our customer service for return instructions.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping usually takes 3-7 business days within India. Express shipping options are available for faster delivery. International shipping takes 10-15 business days.'
    },
    {
      question: 'Are your products authentic?',
      answer: 'Yes, all our products are 100% authentic and handmade by skilled village artisans. Each product comes with a certificate of authenticity and information about the artisan who made it.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. Please check our shipping policy for detailed information.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email and SMS. You can use this to track your order on our website or the courier partner\'s website.'
    }
  ];

  const contactInfo = [
    {
      icon: 'ri-phone-line',
      title: 'Call Us',
      info: '+91 8123456789',
      description: 'Available 9 AM - 6 PM, Mon-Sat'
    },
    {
      icon: 'ri-mail-line',
      title: 'Email Us',
      info: 'support@villageroots.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Visit Us',
      info: 'Mumbai, Maharashtra, India',
      description: 'Main office and showroom'
    }
  ];

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
    <div className="min-h-screen bg-[#f8eae1]">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Center</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              We're here to help you with any questions or concerns you may have
            </p>
          </div>
        </motion.section>

        {/* Tab Navigation */}
        <motion.section 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-[#e7dad1] border-b"
        >
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex space-x-8">
              {[
                { id: 'faq', label: 'FAQ', icon: 'ri-question-line' },
                { id: 'contact', label: 'Contact Us', icon: 'ri-customer-service-line' },
                { id: 'support', label: 'Support', icon: 'ri-chat-3-line' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 border-b-2 font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-red-600 text-red-600'
                      : 'border-transparent text-gray-600 hover:text-red-600'
                  }`}
                >
                  <i className={`${tab.icon} mr-2`}></i>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </motion.section>

        {/* Tab Content */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-12"
        >
          <div className="max-w-7xl mx-auto px-4">
            {activeTab === 'faq' && (
              <div className="max-w-4xl mx-auto">
                <motion.div variants={itemVariants} className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                  <p className="text-lg text-gray-600">Find quick answers to common questions</p>
                </motion.div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-white rounded-lg shadow-sm border overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <i className={`ri-arrow-${expandedFaq === index ? 'up' : 'down'}-s-line text-gray-500`}></i>
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 pb-4 text-gray-600 border-t border-gray-100">
                          <p className="pt-6">{faq.answer}</p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="max-w-4xl mx-auto">
                <motion.div variants={itemVariants} className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <p className="text-lg text-gray-600">Get in touch with our support team</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {contactInfo.map((contact, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className={`${contact.icon} text-2xl text-[#daa786]`}></i>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{contact.title}</h3>
                      <p className="text-lg text-[#a05626] font-medium mb-2">{contact.info}</p>
                      <p className="text-gray-600 text-sm">{contact.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Form */}
                <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="Your email address"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Message subject"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                        placeholder="Your message (max 500 characters)"
                        maxLength={500}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#a0633a] hover:bg-[#5a3115] text-white font-semibold py-3 px-6 rounded-lg transition-colors "
                    >
                      Send Message
                    </button>
                  </form>
                </motion.div>
              </div>
            )}

            {activeTab === 'support' && (
              <div className="max-w-4xl mx-auto">
                <motion.div variants={itemVariants} className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Options</h2>
                  <p className="text-lg text-gray-600">Choose the best way to get help</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <i className="ri-whatsapp-line text-xl text-green-600"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">WhatsApp Support</h3>
                        <p className="text-gray-600">Quick responses via WhatsApp</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Get instant help through WhatsApp. Our support team is available to assist you with orders, 
                      product information, and general inquiries.
                    </p>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap">
                      <i className="ri-whatsapp-line mr-2"></i>
                      Chat on WhatsApp
                    </button>
                  </motion.div>

                  <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <i className="ri-phone-line text-xl text-blue-600"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Phone Support</h3>
                        <p className="text-gray-600">Speak directly with our team</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Call our support team for immediate assistance. Available Monday to Saturday, 
                      9 AM to 6 PM IST.
                    </p>
                    <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap">
                      <i className="ri-phone-line mr-2"></i>
                      Call Now
                    </button>
                  </motion.div>

                  <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                        <i className="ri-mail-line text-xl text-purple-600"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Email Support</h3>
                        <p className="text-gray-600">Detailed support via email</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Send us detailed inquiries via email. We respond to all emails within 24 hours 
                      during business days.
                    </p>
                    <button className="w-full mb-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap">
                      <i className="ri-mail-line mr-2"></i>
                      Send Email
                    </button>
                  </motion.div>

                  <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                        <i className="ri-chat-3-line text-xl text-orange-600"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Live Chat</h3>
                        <p className="text-gray-600">Real-time chat support</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-1">
                      Start a live chat session with our support team. Available during business hours 
                      for immediate assistance.
                    </p>
                    <button className="w-full bg-[#daa786] hover:bg-[#753e19] text-white font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap">
                      <i className="ri-chat-3-line mr-2"></i>
                      Start Chat
                    </button>
                  </motion.div>
                </div>
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
export default HelpPage;