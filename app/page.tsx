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

        {/* Product Range Section */}
        <div className="w-full bg-white">
          <div className="relative mx-auto" style={{ height: '700px', maxWidth: '90vw' }}>
            <Image
              src="/images/products/4.png"
              alt="Our Product Range"
              fill
              style={{ 
                objectFit: 'contain',
                objectPosition: 'center'
              }}
              className="w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Product Section 2 */}
        <div className="w-full bg-white pt-12 md:pt-20">
          <div className="relative w-full" style={{ height: '1100px' }}>
            <Image
              src="/images/products/2.png"
              alt="Our Products"
              fill
              style={{ 
                objectFit: 'contain',
                objectPosition: 'center'
              }}
              className="w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Mini Assorted Packs */}
        <div className="w-full bg-white pt-12 md:pt-20">
          <MiniAssortedPacks />
        </div>

        
        {/* Product Section 3 */}
        <div className="w-full   bg-white">
          <div className="relative w-screen" style={{ height: '600px' , maxWidth: '150vw' }}>
            <Image
              src="/images/products/3.png"
              alt="Premium Fasteners"
              fill
              style={{ 
                objectFit: 'contain',
                objectPosition: 'center'
              }}
              className="w-full h-full"
              priority
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
        <div className="w-full bg-black text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your fastener requirements and get a customized quote for your needs.
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