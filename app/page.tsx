import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import ContactButtons from "../components/FloatingButton";
import HeroSection from "../components/HeroSection";
import MiniAssortedPacks from "../components/MiniAssortedPacks";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "KR Industries",
    content:
      "OnlyScrews has been our trusted supplier for all fastener needs. Their quality and service are unmatched in the industry.",
  },
  {
    name: "Priya Patel",
    company: "Patel Engineering Works",
    content:
      "Exceptional product quality and technical support. They understand our requirements perfectly and deliver consistently.",
  },
  {
    name: "Amit Shah",
    company: "Shah Manufacturing",
    content:
      "The team at OnlyScrews goes above and beyond to ensure customer satisfaction. Their bulk supply capabilities are impressive.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroSection />

        {/* Nylon Range Section */}
        <div className="w-full relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
          {/* Background Image - Extends beyond viewport */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets%2F61feb74e32ed4195a4cbd55149a401bd%2Fb66521bb13234db2b75617a0f01640df"
              alt="Nylon Range Background"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="w-full h-full opacity-100 scale-110"
              priority
              sizes="100vw"
            />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 container mx-auto px-4">
            {/* Header - Left Aligned */}
            <div className="text-left mb-12 md:mb-16 max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Introducing Nylon Range
              </h2>
              <div className="w-24 h-1 bg-[#c4ff0e] mb-6"></div>
              <p className="text-lg md:text-xl text-gray-900 leading-relaxed">
                <span className="font-semibold">
                  Strong, Lightweight, and Durable for Demanding Application
                </span>
              </p>
              <p className="text-sm md:text-base text-gray-700 mt-4 leading-relaxed">
                Our Nylon Fastener Range offers exceptional mechanical strength
                with minimal weight, making it ideal for high-performance
                industrial and electrical environments. Resistant to corrosion,
                moisture, and vibration, these components — including nylon
                spacers, nuts, bolts, washers, and machine screws — deliver
                long-lasting reliability where metal fasteners may fail. Perfect
                for precision assemblies and non-conductive applications.
              </p>
            </div>

            {/* Product Cards Grid - Larger cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mt-12 md:mt-16">
              {/* Nylon Spacers */}
              <div className="group cursor-pointer">
                <div className="relative bg-black rounded-3xl p-8 md:p-10 aspect-square flex items-center justify-center transform transition-transform group-hover:scale-105 overflow-hidden shadow-lg">
                  <Image
                    src="/images/products/nylon-spacers.png"
                    alt="Nylon Spacers"
                    width={250}
                    height={250}
                    className="object-contain w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#c4ff0e] text-center py-4 px-4">
                    <h3 className="font-bold text-gray-900 text-sm md:text-base">
                      Nylon Spacers
                    </h3>
                  </div>
                </div>
              </div>

              {/* Nylon Washers */}
              <div className="group cursor-pointer">
                <div className="relative bg-black rounded-3xl p-8 md:p-10 aspect-square flex items-center justify-center transform transition-transform group-hover:scale-105 overflow-hidden shadow-lg">
                  <Image
                    src="/images/products/nylon-washers.png"
                    alt="Nylon Washers"
                    width={250}
                    height={250}
                    className="object-contain w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#c4ff0e] text-center py-4 px-4">
                    <h3 className="font-bold text-gray-900 text-sm md:text-base">
                      Nylon Washers
                    </h3>
                  </div>
                </div>
              </div>

              {/* Nylon Nuts */}
              <div className="group cursor-pointer">
                <div className="relative bg-black rounded-3xl p-8 md:p-10 aspect-square flex items-center justify-center transform transition-transform group-hover:scale-105 overflow-hidden shadow-lg">
                  <Image
                    src="/images/products/nylon-nuts.png"
                    alt="Nylon Nuts"
                    width={250}
                    height={250}
                    className="object-contain w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#c4ff0e] text-center py-4 px-4">
                    <h3 className="font-bold text-gray-900 text-sm md:text-base">
                      Nylon Nuts
                    </h3>
                  </div>
                </div>
              </div>

              {/* Nylon Bolts */}
              <div className="group cursor-pointer">
                <div className="relative bg-black rounded-3xl p-8 md:p-10 aspect-square flex items-center justify-center transform transition-transform group-hover:scale-105 overflow-hidden shadow-lg">
                  <Image
                    src="/images/products/nylon-bolts.png"
                    alt="Nylon Bolts"
                    width={250}
                    height={250}
                    className="object-contain w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#c4ff0e] text-center py-4 px-4">
                    <h3 className="font-bold text-gray-900 text-sm md:text-base">
                      Nylon Bolts
                    </h3>
                  </div>
                </div>
              </div>

              {/* Nylon Machine Screws */}
              <div className="group cursor-pointer">
                <div className="relative bg-black rounded-3xl p-8 md:p-10 aspect-square flex items-center justify-center transform transition-transform group-hover:scale-105 overflow-hidden shadow-lg">
                  <Image
                    src="/images/products/nylon-machine-screws.png"
                    alt="Nylon Machine Screws"
                    width={250}
                    height={250}
                    className="object-contain w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#c4ff0e] text-center py-4 px-4">
                    <h3 className="font-bold text-gray-900 text-sm md:text-base">
                      Nylon Machine Screws
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Section 2 */}
        <div className="w-full bg-white">
          <div className="relative w-full h-[600px] sm:h-[800px] md:h-[900px] lg:h-[1100px] px-4">
            <Image
              src="/images/products/2.png"
              alt="Our Products"
              fill
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
              className="w-full h-full"
              priority
              sizes="100vw"
            />
          </div>
        </div>

        {/* Mini Assorted Packs */}
        <div className="w-full bg-white py-12 sm:py-16 md:py-20">
          <MiniAssortedPacks />
        </div>

        {/* Product Section 3 */}
        <div className="w-full bg-white pb-12 md:pb-20">
          <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] px-4">
            <Image
              src="/images/products/3.png"
              alt="Premium Fasteners"
              fill
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
              className="w-full h-full"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Mini Assorted Packs */}
        <div className="w-full bg-white pt-12 md:pt-20">
          <MiniAssortedPacks />
        </div>

        {/* Spacing div */}
        <div className="h-15"></div>

        {/* Testimonials */}
        <div className="w-full bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a5f7a] mb-12">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <p className="text-gray-600 mb-4 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="mt-4">
                    <h3 className="text-[#1a5f7a] font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

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
