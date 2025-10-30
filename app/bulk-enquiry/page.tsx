"use client";

import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

export default function BulkEnquiry() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Create a WhatsApp message with the form data
    const message = `
New Bulk Enquiry:
Phone: ${formData.get("phone")}
Email: ${formData.get("email")}
Description: ${formData.get("description")}
`;

    // Replace this with your WhatsApp number
    const whatsappUrl = `https://wa.me/919879879879?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    // Reset form and show confirmation
    e.currentTarget.reset();
    alert("Thank you for your inquiry! We will contact you shortly.");
  };

  return (
    <>
      <div className="min-h-screen bg-white pt-20">
        <div className="w-screen">
          <div className="relative w-full" style={{ height: "600px" }}>
            {/* Background Image */}
            <Image
              src="/images/products/6.png"
              alt="Product Details"
              fill
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
              className="w-full h-full"
              priority
            />

            {/* Form Overlay */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[400px] p-6 bg-[#9deb8f]/90 rounded-lg mr-24">
              <h3 className="text-gray-800 font-semibold mb-4">
                To connect instantly for inquiries and quotes:
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description of requirement / Inquiry:
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your requirements"
                  />
                </div>

                <div className="flex gap-4 justify-center">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#1a5f7a] text-white rounded-full hover:bg-[#134b61] transition-colors"
                  >
                    Submit Inquiry
                  </button>
                  <button
                    type="button"
                    onClick={() => (window.location.href = "/products")}
                    className="px-6 py-2 bg-yellow-400 text-[#1a5f7a] rounded-full hover:bg-yellow-300 transition-colors"
                  >
                    Get Bulk Quote
                  </button>
                </div>
              </form>

              <a
                href="/catalogue.pdf"
                download
                className="mt-6 block text-center px-6 py-2 border-2 border-[#1a5f7a] text-[#1a5f7a] rounded-md hover:bg-[#1a5f7a] hover:text-white transition-colors"
              >
                DOWNLOAD CATALOGUE
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingButton />
    </>
  );
}
