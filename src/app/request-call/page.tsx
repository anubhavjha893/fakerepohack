/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import FloatingActions from '../../components/FloatingActions';

export default function RequestCallPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredTime: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        preferredTime: '',
        subject: '',
        message: ''
      });
    }, 5000);
  };

  const timeSlots = [
    '9:00 AM - 11:00 AM',
    '11:00 AM - 1:00 PM',
    '1:00 PM - 3:00 PM',
    '3:00 PM - 5:00 PM',
    '5:00 PM - 7:00 PM'
  ];

  const callReasons = [
    'Product Information',
    'Order Support',
    'Technical Issues',
    'Bulk Orders',
    'Custom Requirements',
    'General Inquiry'
  ];

  return (
    <div className="min-h-screen ">
      <Navigation />
      
      <div className="pt-16" >
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative py-20 bg-[#d68b59]"
          // style={{
          //   backgroundImage: `url('https://www.daac.in/images/images_new_web/request-call.jpg`,
          //   backgroundSize: 'cover',
          //   backgroundPosition: 'center'
          // }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Request a Call</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Our expert team is ready to assist you. Schedule a call at your convenience.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Main Content */}
        <motion.section 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="py-12 "
        >
          <div className="max-w-4xl mx-auto px-4 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Call Request Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Call</h2>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time Slot *
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select a time slot</option>
                        {timeSlots.map((slot, index) => (
                          <option key={index} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Call Purpose *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select call purpose</option>
                        {callReasons.map((reason, index) => (
                          <option key={index} value={reason}>{reason}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                        placeholder="Tell us more about your inquiry (max 500 characters)"
                        maxLength={500}
                      ></textarea>
                      <div className="text-right text-sm text-gray-500 mt-1">
                        {formData.message.length}/500
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#bb662d]  hover:bg-[#5f3519]  text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 whitespace-nowrap"
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <i className="ri-loader-4-line animate-spin mr-2"></i>
                          Scheduling Call...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <i className="ri-phone-line mr-2"></i>
                          Request Call
                        </span>
                      )}
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-check-line text-3xl text-green-500"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Scheduled Successfully!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for your request. Our team will call you at your preferred time slot.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800 text-sm">
                        <strong>What's next:</strong> You will receive a confirmation SMS and email with call details.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Information Panel */}
              <div className="space-y-6">
                {/* Contact Information */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#daa786] rounded-full flex items-center justify-center mr-3">
                        <i className="ri-phone-line text-[#a16136]"></i>
                      </div>
                      <div>
                        <div className="font-medium text-[#a16136]">Phone</div>
                        <div className="text-gray-600">+91 8123456789</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#daa786] rounded-full flex items-center justify-center mr-3">
                        <i className="ri-mail-line text-[#a16136]"></i>
                      </div>
                      <div>
                        <div className="font-medium text-[#a16136]">Email</div>
                        <div className="text-gray-600">support@villageroots.com</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#daa786] rounded-full flex items-center justify-center mr-3">
                        <i className="ri-time-line text-[#a16136]"></i>
                      </div>
                      <div>
                        <div className="font-medium text-[#a16136]">Hours</div>
                        <div className="text-gray-600">Mon-Sat: 9 AM - 6 PM</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Request a Call */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Request a Call?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-600 mr-3 mt-0.5 w-6 h-6 flex items-center justify-center"></i>
                      <span className="text-gray-700">Get personalized product recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-600 mr-3 mt-0.5 w-6 h-6 flex items-center justify-center"></i>
                      <span className="text-gray-700">Discuss bulk order requirements</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-600 mr-3 mt-0.5 w-6 h-6 flex items-center justify-center"></i>
                      <span className="text-gray-700">Get expert advice on traditional crafts</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-600 mr-3 mt-0.5 w-6 h-6 flex items-center justify-center"></i>
                      <span className="text-gray-700">Resolve any concerns immediately</span>
                    </li>
                  </ul>
                </div>

                {/* Emergency Contact */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-2">
                    <i className="ri-alert-line mr-2"></i>
                    Need Immediate Help?
                  </h3>
                  <p className="text-red-700 text-sm mb-4">
                    For urgent matters, you can call us directly or use WhatsApp for faster response.
                  </p>
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
                      <i className="ri-phone-line mr-2"></i>
                      Call Now
                    </button>
                    <button className="flex-1 bg-green-500 hover:bg-green-700  text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
                      <i className="ri-whatsapp-line mr-2"></i>
                      WhatsApp
                    </button>
                  </div>
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