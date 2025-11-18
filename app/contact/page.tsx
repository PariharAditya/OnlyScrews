'use client';

import { FormEvent, useState } from "react";

export default function ContactPage() {
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
    <div className="relative min-h-screen bg-white pt-20">
      {/* Main Content */}
      <div>
        {/* Contact Us Section */}
        <div className="max-w-4xl mx-auto px-6 py-16 md:px-8 md:py-24">
          <h1 className="text-4xl font-bold text-center mb-16 text-black">
            Contact us
          </h1>

          {/* Contact Information */}
          <div className="mb-20 space-y-12">
            {/* Pelican Essentials Office */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Pelican Essentials
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                #201/A, First Floor, Kudlu Main Rd, Hosapalaiya, Muneshwara
                Nagar, Bengaluru, Karnataka 560068
              </p>
            </div>

            {/* Corporate Office */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Corporate Office
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                1st floor, Workshala, NR Tower, HSR Layout, Bengaluru,
                Karnataka 560102
              </p>
            </div>

            {/* Message */}
            <div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Have any doubts, comments, or just like to say Hi, we are here
                for you, and we are wearing our thinking caps!
              </p>
            </div>

            {/* Phone */}
            <div>
              <p className="text-gray-800 text-sm font-medium">
                1800 833 0066{" "}
                <span className="font-normal text-gray-600">(Mon-Sun, 9 am - 8 pm)</span>
              </p>
            </div>

            {/* Email Information */}
            <div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                You can also fill up the form below, or drop an email at{" "}
                <a
                  href="mailto:customercare@pelicanessentials.com"
                  className="text-gray-800 font-medium hover:underline"
                >
                  customercare@pelicanessentials.com
                </a>
                , and we will get back to you within an hour
              </p>
            </div>

            {/* Feedback Message */}
            <div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                If you have any suggestions, complaints or just want to drop a
                message, you can drop a message to our founders directly here:
              </p>
              <p className="text-gray-800 text-sm mb-2">
                <span className="font-medium">Pushpender Hooda:</span>{" "}
                <a
                  href="tel:+918197295221"
                  className="text-gray-700 hover:underline"
                >
                  hoods@pelicanessentials.com, 8197295221
                </a>
              </p>
              <p className="text-gray-800 text-sm">
                <span className="font-medium">Shahnawaz Aalam:</span>{" "}
                <a
                  href="mailto:aalam@pelicanessentials.com"
                  className="text-gray-700 hover:underline"
                >
                  aalam@pelicanessentials.com
                </a>
              </p>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-16 border-gray-200" />

          {/* Contact Form Section */}
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-black">
              Contact
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-gray-900 placeholder-gray-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-gray-900 placeholder-gray-500"
                />
              </div>

              {/* Message Textarea */}
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-gray-900 placeholder-gray-500 resize-none"
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#BCFF83] hover:bg-[#a8e85c] disabled:bg-[#8fcc4a] text-black font-bold py-3 px-6 rounded transition-colors duration-200"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
