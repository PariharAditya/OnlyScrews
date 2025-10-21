import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-[#1a5f7a] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About OnlyScrews</h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Your trusted partner in industrial fastening solutions, delivering quality and reliability since 2020.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#1a5f7a]">Our Mission</h2>
            <p className="text-lg text-gray-600">
              To provide high-quality fastening solutions that meet and exceed industry standards while ensuring customer satisfaction through excellent service and technical support.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#1a5f7a]">Our Vision</h2>
            <p className="text-lg text-gray-600">
              To become the leading supplier of industrial fasteners in India, recognized for our commitment to quality, innovation, and customer service.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1a5f7a] mb-12">Why Choose OnlyScrews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#1a5f7a] mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                All our products undergo rigorous quality control and meet international standards for strength and durability.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#1a5f7a] mb-4">Expert Support</h3>
              <p className="text-gray-600">
                Our technical team provides expert guidance to help you choose the right fastening solutions for your applications.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#1a5f7a] mb-4">Fast Delivery</h3>
              <p className="text-gray-600">
                With our extensive inventory and efficient logistics, we ensure quick delivery across India.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-[#1a5f7a] mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              title: "Quality",
              description: "Commitment to delivering products that meet the highest standards"
            },
            {
              title: "Integrity",
              description: "Honest and transparent dealings with all stakeholders"
            },
            {
              title: "Innovation",
              description: "Continuous improvement in products and services"
            },
            {
              title: "Customer Focus",
              description: "Putting customer needs at the center of everything we do"
            }
          ].map((value) => (
            <div key={value.title} className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-[#1a5f7a]">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-[#1a5f7a] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss your fastening requirements
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#1a5f7a] py-3 px-8 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
