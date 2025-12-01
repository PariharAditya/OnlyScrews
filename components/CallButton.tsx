'use client';
import { useState } from 'react';
import { FiPhone, FiX } from 'react-icons/fi';

export default function CallButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const phoneNumber = "1800-833-0046"; // Replace with your phone number

  return (
    <>
      {/* Floating Call Button */}
      <button
        onClick={() => setIsDialogOpen(true)}
        className="fixed bottom-6 left-6 z-50 bg-white hover:shadow-2xl text-gray-800 py-3 px-6 rounded-lg shadow-xl transition-all duration-300 flex items-center gap-2 cursor-pointer"
        aria-label="Call us"
      >
        <FiPhone className="w-6 h-6 text-green-500" />
        <span className="text-base font-medium">Call Us</span>
      </button>

      {/* Call Dialog */}
      {isDialogOpen && (
        <div className="fixed bottom-20 left-6 z-50">
          <div className="bg-white rounded-xl shadow-xl w-64 relative">
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute right-2 top-2 text-gray-400 hover:text-gray-600 p-1"
            >
              <FiX className="w-4 h-4" />
            </button>

            <div className="text-center pt-6 pb-4 px-4">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <FiPhone className="w-6 h-6 text-orange-500" />
              </div>
              
              <h2 className="text-lg font-medium mb-1">Call Us</h2>
              <p className="text-gray-600 text-xs mb-3">Please call us on:</p>
              
              <a
                href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`}
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-base py-2 px-4 rounded-lg w-full mb-2 transition-colors"
              >
                {phoneNumber}
              </a>
              
              <p className="text-[10px] text-gray-500">
                Business Hours: 9am-8pm
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}