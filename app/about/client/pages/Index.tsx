import { useState } from "react";
import { Award, Users, Target, Shield, TrendingUp, CheckCircle2, Link } from "lucide-react";
import Carousel from "@/components/carousel/Carousel";
import { TeamIcon, CheckIcon, MissionIcon } from "@/components/carousel/Icons";
import type { CarouselSlide } from "@/components/carousel/Carousel";

const defaultSlides: CarouselSlide[] = [
  {
    id: "team",
    title: "OUR TEAM",
    description:
      'Our team believes that "tougher proposition makes better performance easier." Every member contributes expertise, effort, and passion to make our unit strong and reliable.',
    icon: <TeamIcon />,
  },
  {
    id: "choose",
    title: "WHY CHOOSE US?",
    description:
      "The range of fasteners offered by us are in strictly in compliance with BS, IS & DIN certification as well as are known for corrosion resistance and high durability finish.",
    icon: <CheckIcon />,
  },
  {
    id: "mission",
    title: "OUR MISSION",
    description:
      "We strive to set new benchmarks of excellence in the fasteners industry through commitment, innovation, and precision.",
    icon: <MissionIcon />,
  },
  {
    id: "quality",
    title: "QUALITY ASSURANCE",
    description:
      "Every fastener undergoes rigorous quality testing to ensure it meets our high standards and customer expectations.",
    icon: <TeamIcon />,
  },
  {
    id: "innovation",
    title: "INNOVATION",
    description:
      "We continuously invest in research and development to bring cutting-edge fastening solutions to the market.",
    icon: <CheckIcon />,
  },
];

export default function Index() {
  const [slides] = useState<CarouselSlide[]>(defaultSlides);
  const [, setCurrentSlideIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentSlideIndex(index);
  };

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "5000+", label: "Products" },
    { value: "1000+", label: "Happy Clients" },
    { value: "99.8%", label: "Quality Rate" },
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality First",
      description: "Every product meets international standards (BS, IS & DIN certified) with rigorous quality control.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Experienced professionals dedicated to providing technical support and guidance for your projects.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Customer Focus",
      description: "We prioritize your needs with customized solutions, bulk orders, and competitive pricing.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reliability",
      description: "Consistent supply chain, timely delivery, and products you can trust for critical applications.",
    },
  ];

  const certifications = [
    "ISO 9001:2015 Certified",
    "BS Standards Compliant",
    "IS Standards Compliant",
    "DIN Standards Compliant",
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#1a5f7a] to-[#134b61] text-white pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span style={{ color: '#BCFF83' }}>OnlyScrews</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Your trusted partner for premium industrial fasteners, delivering quality and reliability since day one.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#BCFF83' }}>
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                Founded with a vision to revolutionize the fasteners industry, <strong>OnlyScrews</strong> has grown 
                from a small operation to a leading supplier of industrial fasteners across the region. Our journey 
                began with a simple belief: quality fasteners are the foundation of every great construction.
              </p>
              <p>
                Today, we serve thousands of customers ranging from small workshops to large industrial enterprises, 
                providing them with a comprehensive range of screws, bolts, nuts, washers, anchors, and specialty fasteners. 
                Each product in our catalog is carefully selected and tested to meet the highest industry standards.
              </p>
              <p>
                What sets us apart is our commitment to not just selling products, but building lasting relationships 
                with our clients. We understand that every project has unique requirements, and our experienced team 
                is always ready to provide expert guidance and customized solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Core Values
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="mb-4 text-[#1a5f7a]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <Carousel
            slides={slides}
            autoPlay={true}
            autoPlayInterval={6000}
            onSlideChange={handleSlideChange}
          />
        </div>
      </div>

      {/* Certifications */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certified Excellence
            </h2>
            <p className="text-gray-600 mb-12">
              Our commitment to quality is backed by international certifications
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-[#BCFF83]/20"
                >
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-3 text-[#BCFF83]" />
                  <p className="font-semibold text-gray-800">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-[#1a5f7a] to-[#134b61] text-white">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6 text-[#BCFF83]" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you need bulk orders, custom solutions, or expert advice, 
            we&apos;re here to help you find the perfect fastening solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/bulk-enquiry"
              className="inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              style={{ backgroundColor: '#BCFF83', color: '#000' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Request a Quote
            </a>
            <Link
              href="/products"
              className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 rounded-lg font-semibold text-lg transition-all border-2 border-white/30"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
