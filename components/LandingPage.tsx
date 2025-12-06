'use client';

import Link from 'next/link';

const Sparkle = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
  <div
    className="absolute animate-sparkle"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      animationDelay: `${delay}s`,
    }}
  >
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 0L12.5 8L20 10L12.5 12L10 20L7.5 12L0 10L7.5 8Z"
        fill="#bcff83"
      />
    </svg>
  </div>
);

const ScrewIcon = ({ rotation = 0 }: { rotation?: number }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    {/* Screw head (slot) */}
    <circle cx="12" cy="6" r="4" stroke="#bcff83" strokeWidth="1.5" fill="none" />
    <line x1="9" y1="6" x2="15" y2="6" stroke="#bcff83" strokeWidth="1.5" />
    {/* Screw shaft */}
    <rect x="10.5" y="10" width="3" height="12" stroke="#bcff83" strokeWidth="1.5" fill="none" />
    {/* Threading details */}
    <line x1="9.5" y1="12" x2="14.5" y2="12" stroke="#bcff83" strokeWidth="0.8" opacity="0.6" />
    <line x1="9.5" y1="15" x2="14.5" y2="15" stroke="#bcff83" strokeWidth="0.8" opacity="0.6" />
    <line x1="9.5" y1="18" x2="14.5" y2="18" stroke="#bcff83" strokeWidth="0.8" opacity="0.6" />
  </svg>
);

const BoltIcon = ({ rotation = 0 }: { rotation?: number }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    {/* Bolt head */}
    <path
      d="M12 2 L15 4 L15 8 L12 10 L9 8 L9 4 Z"
      stroke="#bcff83"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Bolt shaft */}
    <rect x="10.5" y="10" width="3" height="10" stroke="#bcff83" strokeWidth="1.5" fill="none" />
    {/* Threading */}
    <line x1="9.5" y1="12" x2="14.5" y2="12" stroke="#bcff83" strokeWidth="0.8" opacity="0.6" />
    <line x1="9.5" y1="15" x2="14.5" y2="15" stroke="#bcff83" strokeWidth="0.8" opacity="0.6" />
    <line x1="9.5" y1="18" x2="14.5" y2="18" stroke="#bcff83" strokeWidth="0.8" opacity="0.6" />
  </svg>
);

const NutIcon = ({ rotation = 0 }: { rotation?: number }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    {/* Hexagonal nut */}
    <path
      d="M12 3 L18 7 L18 15 L12 19 L6 15 L6 7 Z"
      stroke="#bcff83"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Center hole */}
    <circle cx="12" cy="11" r="2.5" stroke="#bcff83" strokeWidth="1.2" fill="none" />
  </svg>
);

const FastenerDecor = ({
  x,
  y,
  type,
  delay,
  rotation,
  size = 24,
}: {
  x: number;
  y: number;
  type: "screw" | "bolt" | "nut";
  delay: number;
  rotation?: number;
  size?: number;
}) => {
  const iconMap = {
    screw: <ScrewIcon rotation={rotation} />,
    bolt: <BoltIcon rotation={rotation} />,
    nut: <NutIcon rotation={rotation} />,
  };

  const opacityValues = [0.3, 0.5, 0.7];
  const randomOpacity = opacityValues[Math.floor(delay * 10) % opacityValues.length];

  return (
    <div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        opacity: randomOpacity,
        animation: `float 4s ease-in-out ${delay}s infinite`,
        transform: `scale(${size / 24})`,
        transformOrigin: "center",
      }}
    >
      {iconMap[type]}
    </div>
  );
};


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-nunito relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage:
            'url("https://cdn.builder.io/api/v1/image/assets%2F7f57dba66b364536872ca066871a9cb1%2F3af9fd314ff7406ab9212bfa63b9e7df?format=webp&width=800")',
          opacity: 0.35,
        }}
      />
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen items-center gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-0">
          {/* Left Section - Logo */}
          <div className="flex items-center justify-center py-6 sm:py-8 lg:py-0 order-1 lg:order-1">
            <div className="relative w-full max-w-[280px] sm:max-w-sm">
              <div className="relative flex items-center justify-center">
                {/* Central Logo Block */}
                <div className="bg-white rounded-[2rem] sm:rounded-[3rem] flex items-center justify-center shadow-2xl px-6 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10">
                  <div className="text-center">
                    <div className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black leading-tight tracking-tight whitespace-nowrap" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, letterSpacing: '-0.8px' }}>
                      <span className="font-bold">SCREW</span>
                      <span className="font-light ml-0.5" style={{ fontWeight: 300, letterSpacing: '0.5px' }}>BAZAR</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Fastener Icons - Artistic Grid */}
                {/* Top Row */}
                <FastenerDecor x={2} y={-8} type="screw" delay={0} rotation={25} size={20} />
                <FastenerDecor x={15} y={-12} type="bolt" delay={0.15} rotation={-40} size={28} />
                <FastenerDecor x={30} y={-10} type="nut" delay={0.3} rotation={15} size={18} />
                <FastenerDecor x={70} y={-14} type="screw" delay={0.45} rotation={-60} size={24} />
                <FastenerDecor x={85} y={-8} type="bolt" delay={0.6} rotation={35} size={22} />
                <FastenerDecor x={98} y={-6} type="nut" delay={0.75} rotation={-25} size={20} />

                {/* Left Side */}
                <FastenerDecor x={-12} y={10} type="bolt" delay={0.3} rotation={50} size={26} />
                <FastenerDecor x={-10} y={30} type="nut" delay={0.45} rotation={-35} size={19} />
                <FastenerDecor x={-14} y={55} type="screw" delay={0.6} rotation={-15} size={23} />
                <FastenerDecor x={-8} y={80} type="bolt" delay={0.75} rotation={70} size={25} />

                {/* Right Side */}
                <FastenerDecor x={102} y={15} type="nut" delay={0.2} rotation={45} size={21} />
                <FastenerDecor x={108} y={35} type="screw" delay={0.4} rotation={-50} size={24} />
                <FastenerDecor x={104} y={60} type="bolt" delay={0.55} rotation={20} size={22} />
                <FastenerDecor x={110} y={78} type="nut" delay={0.7} rotation={-70} size={20} />

                {/* Bottom Row */}
                <FastenerDecor x={5} y={110} type="nut" delay={0.25} rotation={60} size={23} />
                <FastenerDecor x={25} y={115} type="screw" delay={0.4} rotation={-35} size={21} />
                <FastenerDecor x={50} y={112} type="bolt" delay={0.55} rotation={-10} size={26} />
                <FastenerDecor x={75} y={116} type="nut" delay={0.7} rotation={45} size={19} />
                <FastenerDecor x={92} y={110} type="screw" delay={0.85} rotation={-55} size={24} />

                {/* Inner Decorative Accents */}
                <FastenerDecor x={20} y={15} type="screw" delay={0.5} rotation={-70} size={16} />
                <FastenerDecor x={80} y={20} type="bolt" delay={0.65} rotation={30} size={18} />
                <FastenerDecor x={15} y={80} type="nut" delay={0.35} rotation={-45} size={17} />
                <FastenerDecor x={82} y={75} type="screw" delay={0.8} rotation={15} size={19} />

                {/* Decorative Sparkles */}
                <Sparkle x={5} y={10} delay={0} />
                <Sparkle x={88} y={8} delay={0.3} />
                <Sparkle x={85} y={80} delay={0.6} />
                <Sparkle x={8} y={75} delay={0.9} />
                <Sparkle x={45} y={5} delay={1.2} />
                <Sparkle x={95} y={90} delay={1.5} />
                <Sparkle x={25} y={92} delay={0.4} />
                <Sparkle x={12} y={35} delay={1.1} />
              </div>
            </div>
          </div>

          {/* Right Section - Headline & CTA */}
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-4 sm:gap-6 py-6 sm:py-8 lg:py-0 lg:pl-8 order-2 lg:order-2">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-montserrat text-[#bcff83] leading-tight mb-2 sm:mb-4">
                Engineered
                <br />
                Fastening Solutions
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-nunito">
                — Built For Performance
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 sm:gap-4 flex-wrap justify-center lg:justify-start pt-2 sm:pt-4">
              <Link href="/products" className="px-5 sm:px-6 md:px-8 py-2 sm:py-3 border-2 border-[#bcff83] text-white bg-black hover:bg-[#bcff83] hover:text-black transition-colors font-nunito font-semibold rounded-lg text-xs sm:text-sm md:text-base">
                View All
              </Link>
              <Link href="/bulk-enquiry" className="px-5 sm:px-6 md:px-8 py-2 sm:py-3 border-2 border-[#bcff83] text-white bg-black hover:bg-[#bcff83] hover:text-black transition-colors font-nunito font-semibold rounded-lg text-xs sm:text-sm md:text-base">
                Inquire
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
