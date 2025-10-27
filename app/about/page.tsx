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
     

      {/* Contact CTA removed as requested */}
    </div>
  );
}
