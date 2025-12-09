"use client";

import { useEffect } from "react";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

export default function BulkEnquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.comment,
          type: "bulk-enquiry",
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your inquiry! We will get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          comment: "",
        });
      } else {
        const data = await response.json();
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send inquiry. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "There was an error submitting your form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-5 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            For Bulk orders and Your feedback!
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Kindly fill the form up and share your requirements.
          </p>
        </div>

        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm">
          {submitStatus && (
            <div
              className={`mb-6 p-4 rounded ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-300"
                  : "bg-red-100 text-red-800 border border-red-300"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-[#BCFF83] focus:ring-2 focus:ring-[#BCFF83]/30 outline-none transition-all"
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
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-[#BCFF83] focus:ring-2 focus:ring-[#BCFF83]/30 outline-none transition-all"
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
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-[#BCFF83] focus:ring-2 focus:ring-[#BCFF83]/30 outline-none transition-all"
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
                rows={5}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-[#BCFF83] focus:ring-2 focus:ring-[#BCFF83]/30 outline-none transition-all resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="mx-auto block bg-[#BCFF83] text-black px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-bold hover:brightness-95 transition duration-200 cursor-pointer disabled:opacity-70"
                style={{ boxShadow: "0 6px 18px rgba(188,255,131,0.12)" }}
              >
                {isSubmitting ? "Sending..." : "Send"}
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
