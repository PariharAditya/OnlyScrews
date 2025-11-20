'use client';

export default function ContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 cursor-pointer">
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-white py-3 px-6 rounded-lg shadow-xl hover:shadow-2xl transition-all text-gray-800 outline-none focus:outline-none cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25d366" className="w-6 h-6 mr-2">
          <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 1.869.518 3.668 1.475 5.235L2 22l4.845-1.47c1.505.882 3.218 1.35 4.946 1.35h.006c5.522 0 9.998-4.477 9.998-9.999 0-2.67-1.04-5.181-2.929-7.071a9.955 9.955 0 00-7.071-2.929l.006.001z" />
          <path fill="white" d="M16.939 14.85c-.199-.558-.812-.894-.812-.894-.533-.285-3.109-1.527-3.584-1.701s-.818-.028-1.166.358c-.348.386-.817.894-.995 1.097-.178.203-.356.229-.66.076-.304-.152-1.284-.473-2.442-1.506-1.097-.843-1.838-1.881-2.015-2.202-.178-.32.178-.497.503-1.092l.33-.558c.077-.152.038-.32-.013-.447-.051-.127-.483-1.167-.66-1.599-.178-.431-.355-.457-.483-.457l-.432-.025c-.254 0-.635.127-.965.457-.331.33-1.27 1.244-1.27 3.033 0 1.79 1.295 3.706 1.472 3.96.178.254 2.442 3.858 6.026 5.242 3.584 1.385 3.584 1.01 4.218.934.635-.076 2.035-.838 2.417-1.599.381-.761.381-1.396.267-1.527z" />
        </svg>
        <span className="text-base font-medium cursor-pointer">Talk to us</span>
      </a>
    </div>
  );
}
