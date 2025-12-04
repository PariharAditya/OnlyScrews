"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
      alert("Thank you! We'll get back to you within an hour.");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto w-full">
      <h2 className="text-3xl font-bold mb-6 text-center text-black">Contact</h2>
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
