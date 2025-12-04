import { FormEvent, useState } from "react";

export default function Contact() {
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
    <div className="relative min-h-screen bg-white pt-[50px]">
      {/* Main Content */}
      <div>
        {/* Contact Us Section */}
        <div className="max-w-4xl mx-auto px-6 py-16 md:px-8 md:py-24">
          <h1 className="text-4xl font-bold text-center mb-8 text-black">
            Screw Bazar
          </h1>

          {/* Contact Information */}
          <div className="mb-20 space-y-12">
            {/* About */}
            <div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Screw Bazar is an online fastener and hardware store, dedicated to supplying a wide range of fastening solutions — from screws, bolts, rivets and dowel-pins to anchors, cotter-pins and more — for both individual and industrial needs. We aim to be a reliable, one-stop destination for quality hardware products, whether you're a DIY enthusiast, a contractor, or a professional in construction or manufacturing.
              </p>
            </div>

            {/* Main Office */}
            <div>
            <div className="relative min-h-screen bg-white pt-2">
                Main Office
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                1st Floor, RK Mansion, 124/1, Venkataramana Naik Ln, S.P Road Cross, Kumbarpet, Dodpete, Nagarathpete, Bengaluru, Karnataka 560002
              </p>
            </div>

            {/* Message */}
            <div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Have any doubts, comments, or just like to say Hi, we are here for you, and we are wearing our thinking caps!
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
                  href="mailto:screwbazar@gmail.com"
                  className="text-gray-800 font-medium hover:underline"
                >
                  screwbazar@gmail.com
                </a>
                , and we will get back to you within an hour
              </p>
            </div>

            {/* Feedback Message */}
            <div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                If you have any suggestions, feedback, or inquiries, you may reach our founding team directly at:
              </p>
              <p className="text-gray-800 text-sm mb-2">
                📩{" "}
                <a
                  href="mailto:Screwbazar@gmail.com"
                  className="text-gray-700 hover:underline"
                >
                  Screwbazar@gmail.com
                </a>
              </p>
              <p className="text-gray-800 text-sm">
                📞{" "}
                <a
                  href="tel:+917007257245"
                  className="text-gray-700 hover:underline"
                >
                  7007257245
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

              {/* Message Textarea */}
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-[#BCFF83] focus:ring-1 focus:ring-[#BCFF83] text-gray-900 placeholder-gray-500 resize-none"
              />

              {/* Submit Button */}
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
        </div>
      </div>
    </div>
  );
}
