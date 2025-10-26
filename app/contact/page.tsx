'use client';

import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you shortly.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Contact Header */}
      <div className="bg-[#1a5f7a] text-white py-16 relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl font-bold mb-6">Contact Us</h1>
            <p className="font-sans text-xl mb-8">
              Our customer service team is here to help you with any questions about our products,
              bulk orders, or technical specifications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-heading text-lg font-semibold mb-2">Call Us</h3>
                <p className="font-sans">+91-9876543210</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-heading text-lg font-semibold mb-2">Email Us</h3>
                <p className="font-sans">info@screwbazar.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-heading text-lg font-semibold mb-2">Visit Us</h3>
                <p>Delhi NCR, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
              <h2 className="font-heading text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#1a5f7a] p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-gray-800">Phone</h3>
                  <p className="font-sans text-gray-600">+91-9876543210</p>
                  <p className="font-sans text-gray-600">Mon-Sat 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#1a5f7a] p-3 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-gray-800">Email</h3>
                  <p className="font-sans text-gray-600">info@screwbazar.com</p>
                  <p className="font-sans text-gray-600">For inquiries and support</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#1a5f7a] p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-gray-800">Location</h3>
                  <p className="font-sans text-gray-600">Delhi NCR, India</p>
                  <p className="font-sans text-gray-600">Serving industrial hubs nationwide</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#1a5f7a] p-3 rounded-full">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-gray-800">Business Hours</h3>
                  <p className="font-sans text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="font-sans text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Company Logo */}
            <div className="pt-8 border-t mt-8">
              <div className="flex items-center space-x-4">
                <Image
                  src="/SB.jpg"
                  alt="Screw Bazar Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
              <p className="font-sans mt-4 text-sm text-gray-600">
                Your trusted partner for industrial fasteners and hardware solutions.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="font-heading text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="font-sans block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1a5f7a] focus:border-[#1a5f7a]"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="font-sans block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1a5f7a] focus:border-[#1a5f7a]"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="phone" className="font-sans block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1a5f7a] focus:border-[#1a5f7a]"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="message" className="font-sans block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1a5f7a] focus:border-[#1a5f7a]"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="font-heading w-full bg-[#1a5f7a] text-white py-3 px-6 rounded-md hover:bg-[#134b61] transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-heading text-xl font-semibold mb-3">What are your delivery timelines?</h3>
              <p className="font-sans text-gray-600">We typically process and ship orders within 24-48 hours. Delivery time depends on your location and can take 2-5 business days within India.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-heading text-xl font-semibold mb-3">Do you offer bulk pricing?</h3>
              <p className="font-sans text-gray-600">Yes, we offer competitive bulk pricing for large orders. Please contact our sales team with your requirements for a custom quote.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-heading text-xl font-semibold mb-3">What payment methods do you accept?</h3>
              <p className="font-sans text-gray-600">We accept various payment methods including bank transfers, UPI, and other standard payment options. For bulk orders, we can discuss payment terms.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-heading text-xl font-semibold mb-3">Do you provide technical specifications?</h3>
              <p className="font-sans text-gray-600">Yes, we provide detailed technical specifications for all our products. You can find these on individual product pages or contact our technical team for specific requirements.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-heading text-xl font-semibold mb-3">What is your return policy?</h3>
              <p className="font-sans text-gray-600">We accept returns within 7 days of delivery for unused products in original packaging. Please contact our customer service team to initiate a return.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white text-gray-800 border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/SB.jpg"
                alt="Screw Bazar Logo"
                width={120}
                height={40}
                className="mb-4 h-8 w-auto"
              />
              <p className="font-sans text-sm">Your trusted partner for industrial fasteners and hardware solutions.</p>
            </div>
            
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 font-sans">
                <li><a href="/" className="hover:text-[#1a5f7a] transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-[#1a5f7a] transition-colors">About Us</a></li>
                <li><a href="/products" className="hover:text-[#1a5f7a] transition-colors">Products</a></li>
                <li><a href="/contact" className="hover:text-[#1a5f7a] transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 font-sans">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91-9876543210</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@screwbazar.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Delhi NCR, India</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Business Hours</h4>
              <ul className="space-y-2 font-sans">
                <li>Monday - Saturday</li>
                <li>9:00 AM - 6:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#25d366] hover:text-[#128C7E] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                  <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 1.869.518 3.668 1.475 5.235L2 22l4.845-1.47c1.505.882 3.218 1.35 4.946 1.35h.006c5.522 0 9.998-4.477 9.998-9.999 0-2.67-1.04-5.181-2.929-7.071a9.955 9.955 0 00-7.071-2.929l.006.001z" />
                  <path fill="white" d="M16.939 14.85c-.199-.558-.812-.894-.812-.894-.533-.285-3.109-1.527-3.584-1.701s-.818-.028-1.166.358c-.348.386-.817.894-.995 1.097-.178.203-.356.229-.66.076-.304-.152-1.284-.473-2.442-1.506-1.097-.843-1.838-1.881-2.015-2.202-.178-.32.178-.497.503-1.092l.33-.558c.077-.152.038-.32-.013-.447-.051-.127-.483-1.167-.66-1.599-.178-.431-.355-.457-.483-.457l-.432-.025c-.254 0-.635.127-.965.457-.331.33-1.27 1.244-1.27 3.033 0 1.79 1.295 3.706 1.472 3.96.178.254 2.442 3.858 6.026 5.242 3.584 1.385 3.584 1.01 4.218.934.635-.076 2.035-.838 2.417-1.599.381-.761.381-1.396.267-1.527z" />
                </svg>
                <span className="font-heading">Talk to us</span>
              </a>
            </div>
            <p className="font-sans">&copy; {new Date().getFullYear()} Screw Bazar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
