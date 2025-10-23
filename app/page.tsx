import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import ContactButtons from '../components/FloatingButton';
import HeroSection from '../components/HeroSection';
import MiniAssortedPacks from '../components/MiniAssortedPacks';

const categories = [
  {
    id: 'screws',
    name: 'Screws',
    image: '/images/Screws.png',
    description: 'High-quality screws for various industrial applications'
  },
  {
    id: 'bolts',
    name: 'Bolts',
    image: '/images/Bolts.png',
    description: 'Durable bolts meeting international standards'
  },
  {
    id: 'nuts',
    name: 'Nuts',
    image: '/images/Nuts.png',
    description: 'Precision-engineered nuts for secure fastening'
  },
  {
    id: 'washers',
    name: 'Washers',
    image: '/images/Washers.png',
    description: 'Wide range of washers for diverse applications'
  },
  {
    id: 'anchors',
    name: 'Anchors',
    image: '/images/Anchors.png',
    description: 'Reliable anchors for structural applications'
  }
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "KR Industries",
    content: "OnlyScrews has been our trusted supplier for all fastener needs. Their quality and service are unmatched in the industry."
  },
  {
    name: "Priya Patel",
    company: "Patel Engineering Works",
    content: "Exceptional product quality and technical support. They understand our requirements perfectly and deliver consistently."
  },
  {
    name: "Amit Shah",
    company: "Shah Manufacturing",
    content: "The team at OnlyScrews goes above and beyond to ensure customer satisfaction. Their bulk supply capabilities are impressive."
  }
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
          <HeroSection />

        {/* Product Categories */}
        <div className="w-full bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a5f7a] mb-12">
              Our Product Range
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/products/${category.id}`}
                  className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="aspect-w-16 aspect-h-9 relative h-48">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#1a5f7a] mb-2 group-hover:text-[#134b61]">
                      {category.name}
                    </h3>
                    <p className="text-gray-600">
                      {category.description}
                    </p>
                    <div className="mt-4 flex items-center text-[#1a5f7a] font-medium">
                      Learn More
                      <svg
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mini Assorted Packs */}
        <MiniAssortedPacks />

        {/* Features */}
        <div className="w-full bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a5f7a] mb-12">
              Why Choose OnlyScrews?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="h-12 w-12 bg-[#1a5f7a] rounded-full flex items-center justify-center mb-4">
                  <Image src="/file.svg" alt="Quality Products" width={24} height={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a5f7a] mb-3">Quality Products</h3>
                <p className="text-gray-600">High-grade fasteners meeting international standards and specifications.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="h-12 w-12 bg-[#1a5f7a] rounded-full flex items-center justify-center mb-4">
                  <Image src="/window.svg" alt="Technical Support" width={24} height={24} />
                </div>
                <h3 className="text-xl font-semibold text-[#1a5f7a] mb-3">Expert Support</h3>
                <p className="text-gray-600">Dedicated technical team to assist with product selection and specifications.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="h-12 w-12 bg-[#1a5f7a] rounded-full flex items-center justify-center mb-4">
                  <Image src="/globe.svg" alt="Pan India Supply" width={24} height={24} />
                </div>
                <h3 className="text-xl font-semibold text-[#1a5f7a] mb-3">Pan India Supply</h3>
                <p className="text-gray-600">Efficient delivery network ensuring timely supply across India.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="w-full bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a5f7a] mb-12">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div className="mt-4">
                    <h3 className="text-[#1a5f7a] font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full bg-[#1a5f7a] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your fastener requirements and get a customized quote for your needs.
            </p>
            <Link
              href="/bulk-enquiry"
              className="inline-block bg-yellow-400 text-[#1a5f7a] px-8 py-3 rounded-md font-semibold hover:bg-yellow-300 transition-colors"
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