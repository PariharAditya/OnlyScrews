import Link from "next/link";
import Footer from "../components/Footer";
import ContactButtons from "../components/FloatingButton";
import HeroSection from "../components/HeroSection";
import NylonRangeSection from "../components/NylonRangeSection";
import CategoriesSection from "../components/CategoriesSection";
import FeaturedProductsSection from "../components/FeaturedProductsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BlogSection from "../components/BlogSection";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroSection />

        {/* Nylon Range Section */}
        <NylonRangeSection />

        {/* Categories Section */}
        <CategoriesSection />

        {/* Featured Products Section */}
        <FeaturedProductsSection />

        {/* Blog Section */}
        <BlogSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Spacing div */}
        <div className="h-15"></div>

        {/* CTA Section */}
        <div className="w-full bg-black text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your fastener requirements and get a
              customized quote for your needs.
            </p>
            <Link
              href="/bulk-enquiry"
              className="inline-block bg-green-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-600 transition-colors"
            >
              Request Quote Now
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <ContactButtons />
    </>
  );
}
