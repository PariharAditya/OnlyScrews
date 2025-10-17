'use client';

import { Phone, MessageCircle } from 'lucide-react';

export default function ContactButtons() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876543210', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+919876543210', '_self');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle size={24} />
      </button>

      {/* Call Button */}
      <button
        onClick={handleCallClick}
        className="bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        aria-label="Call Now"
      >
        <Phone size={24} />
      </button>
    </div>
  );
}