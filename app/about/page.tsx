import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-5">
      {/* Hero Section */}
      

      {/* Mission & Vision */}
      

      {/* Why Choose Us - Visual Section */}
      <div className="w-full bg-white py-12">
        <div className="relative w-full" style={{ height: '800px', maxWidth: '100vw', overflow: 'hidden' }}>
          <Image
            src="/images/products/5.png"
            alt="Why Choose OnlyScrews"
            fill
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center'
            }}
            priority
          />
        </div>
      </div>

      {/* Our Values */}
     

      {/* Contact CTA */}
      <div className="bg-[#1a5f7a] text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="font-sans text-xl mb-8">
            Contact us today to discuss your fastening requirements
          </p>
          <Link
            href="/contact"
            className="font-heading inline-block bg-white text-[#1a5f7a] py-3 px-8 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
