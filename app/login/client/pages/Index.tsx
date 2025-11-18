import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Mail, MessageCircle, ChevronDown } from "lucide-react";

const COUNTRIES = [
  { code: "+91", flag: "🇮🇳", name: "India" },
];

export default function Index() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("+91");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentCountry = COUNTRIES.find((c) => c.code === selectedCountry);

  const handleRequestOTP = () => {
    if (phoneNumber.trim()) {
      const otp = Math.floor(1000 + Math.random() * 9000).toString();
      sessionStorage.setItem("otp", otp);
      sessionStorage.setItem("phone", `${selectedCountry}${phoneNumber}`);
      console.log(`Generated OTP: ${otp}`);
      navigate("/verify-otp", {
        state: { phone: `${selectedCountry}${phoneNumber}` },
      });
    }
  };

  const handleEmailLogin = () => {
    navigate("/email");
  };

  const handleWhatsAppLogin = () => {
    navigate("/whatsapp");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F3c37fbde83fe43be8fad8675de33582a%2F73f2212a4ead4e649a0cc0205419d4fe?format=webp&width=800"
            alt="ScrewBazar"
            className="h-28 sm:h-40 object-contain"
          />
        </div>

        {/* Main content */}
        <div className="space-y-6">
          {/* Heading */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Login with OTP
            </h2>
            <p className="text-gray-600 text-base">
              Enter your log in details
            </p>
          </div>

          {/* Phone input section */}
          <div className="space-y-4">
            <div className="flex gap-2">
              {/* Country code selector */}
              <div className="relative w-32">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-between"
                >
                  <span className="flex items-center gap-1">
                    <span className="text-lg">{currentCountry?.flag}</span>
                    <span className="text-sm">{selectedCountry}</span>
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
                    {COUNTRIES.map((country) => (
                      <button
                        key={country.code}
                        onClick={() => {
                          setSelectedCountry(country.code);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors flex items-center gap-2 border-b border-gray-200 last:border-b-0"
                      >
                        <span className="text-lg">{country.flag}</span>
                        <span className="text-sm">
                          {country.name} ({country.code})
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Phone input */}
              <input
                type="tel"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg outline-none text-gray-800 placeholder-gray-500 focus:border-black transition-colors"
              />
            </div>

            {/* Request OTP button */}
            <button
              onClick={handleRequestOTP}
              className="w-full bg-black hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 group"
            >
              <span>Request OTP</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-500 text-sm font-medium">
              Or Login Using
            </span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Alternative login buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={handleEmailLogin}
              className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 font-medium"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </button>
            <button
              onClick={handleWhatsAppLogin}
              className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 font-medium"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
