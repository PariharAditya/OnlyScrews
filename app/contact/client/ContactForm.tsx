"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
          ...formData,
          type: "contact",
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: "Thank you! Your message has been sent. We'll get back to you within an hour.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        setSubmitStatus({
          type: 'error',
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: 'error',
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto w-full">
      <h2 className="text-3xl font-bold mb-6 text-center text-black">Contact</h2>
      
      {submitStatus && (
        <div className={`mb-6 p-4 rounded ${submitStatus.type === 'success' ? 'bg-green-100 text-green-800 border border-green-300' : 'bg-red-100 text-red-800 border border-red-300'}`}>
          {submitStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-[#BCFF83] focus:ring-1 focus:ring-[#BCFF83] text-gray-900 placeholder-gray-500"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-[#BCFF83] focus:ring-1 focus:ring-[#BCFF83] text-gray-900 placeholder-gray-500"
          />
        </div>

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-[#BCFF83] focus:ring-1 focus:ring-[#BCFF83] text-gray-900 placeholder-gray-500 resize-none"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#BCFF83] hover:bg-[#a8e85c] disabled:bg-[#8fcc4a] text-black font-bold py-3 px-6 rounded transition-colors duration-200 cursor-pointer"
          aria-label="Send message"
        >
          {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
        </button>
      </form>
    </div>
  );
}
