"use client";

import ContactForm from "./client/ContactForm";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-white pt-2">
      <div className="max-w-4xl mx-auto px-6 py-12 md:px-8 md:py-20">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">Screw Bazar</h1>

        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          Screw Bazar is an online fastener and hardware store, dedicated to supplying a wide range of fastening solutions — from screws, bolts, rivets and dowel-pins to anchors, cotter-pins and more — for both individual and industrial needs. We aim to be a reliable, one-stop destination for quality hardware products, whether you’re a DIY enthusiast, a contractor, or a professional in construction or manufacturing.
        </p>

        <h2 className="text-lg font-semibold text-black mb-2">Main Office</h2>
        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          1st Floor, RK Mansion, 124/1, Venkataramana Naik Ln, S.P Road Cross, Kumbarpet, Dodpete, Nagarathpete, Bengaluru, Karnataka 560002
        </p>

        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          Have any doubts, comments, or just like to say Hi, we are here for you, and we are wearing our thinking caps!
        </p>

        <p className="text-gray-800 text-sm font-medium mb-6">
          1800 833 0066 <span className="font-normal text-gray-600">(Mon-Sun, 9 am - 8 pm)</span>
        </p>

        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          You can also fill up the form below, or drop an email at{' '}
          <a href="mailto:screwbazar@gmail.com" className="text-gray-800 font-medium hover:underline">screwbazar@gmail.com</a>, and we will get back to you within an hour
        </p>

        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          If you have any suggestions, feedback, or inquiries, you may reach our founding team directly at:
        </p>

        <p className="text-gray-800 text-sm mb-2">📩 <a href="mailto:Screwbazar@gmail.com" className="hover:underline">Screwbazar@gmail.com</a></p>
        <p className="text-gray-800 text-sm mb-6">📞 <a href="tel:+917007257245" className="hover:underline">7007257245</a></p>

        <hr className="my-8 border-gray-200" />

        <ContactForm />
      </div>
    </div>
  );
}
