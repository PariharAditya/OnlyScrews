"use client";

import React, { useState } from 'react';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';

export default function BulkEnquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        comment: ''
      });
      alert('Thank you for your inquiry! We will get back to you soon.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            For Bulk orders and Your feedback!
          </h1>
          <p className="text-lg text-gray-600">
            Kindly fill the form up and share your requirements.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#BCFF83] focus:ring-2 focus:ring-[#BCFF83]/30 outline-none transition-all"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#BCFF83] focus:ring-2 focus:ring-[#BCFF83]/30 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Phone Input */}
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#BCFF83] focus:ring-2 focus:ring-[#BCFF83]/30 outline-none transition-all"
                required
              />
            </div>

            {/* Comment Input */}
            <div>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Comment"
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#BCFF83] focus:ring-2 focus:ring-[#BCFF83]/30 outline-none transition-all resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="mx-auto block bg-[#BCFF83] text-black px-8 py-3 rounded-lg font-bold hover:brightness-95 transition duration-200 cursor-pointer"
                style={{ boxShadow: '0 6px 18px rgba(188,255,131,0.12)' }}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <FloatingButton />
    </div>
  );
}
