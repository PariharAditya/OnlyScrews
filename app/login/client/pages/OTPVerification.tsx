import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function OTPVerification() {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const phone = location.state?.phone || sessionStorage.getItem("phone") || "";

  const handleVerifyOTP = () => {
    const storedOtp = sessionStorage.getItem("otp");
    
    if (!otp.trim()) {
      setError("Please enter the OTP");
      return;
    }

    if (otp === storedOtp) {
      setSuccess(true);
      setError("");
      console.log("OTP verified successfully!");
      setTimeout(() => {
        sessionStorage.removeItem("otp");
        sessionStorage.removeItem("phone");
        navigate("/");
      }, 2000);
    } else {
      setError("Incorrect OTP. Please try again.");
      setOtp("");
    }
  };

  const handleResendOTP = () => {
    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    sessionStorage.setItem("otp", newOtp);
    console.log(`New OTP generated: ${newOtp}`);
    setOtp("");
    setError("");
    setSuccess(false);
  };

  const handleBack = () => {
    sessionStorage.removeItem("otp");
    sessionStorage.removeItem("phone");
    navigate("/");
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
              Verify OTP
            </h2>
            <p className="text-gray-600 text-base">
              Enter the 4-digit code sent to {phone}
            </p>
          </div>

          {success && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
              <p className="text-green-700 font-medium">
                ✓ OTP verified successfully!
              </p>
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-center">
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          )}

          {/* OTP input section */}
          <div className="space-y-4">
            <input
              type="text"
              inputMode="numeric"
              placeholder="0000"
              maxLength={4}
              value={otp}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setOtp(value.slice(0, 4));
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none text-center text-2xl tracking-widest text-gray-800 placeholder-gray-500 focus:border-black transition-colors"
            />

            {/* Verify button */}
            <button
              onClick={handleVerifyOTP}
              disabled={otp.length !== 4 || success}
              className="w-full bg-black hover:bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 group"
            >
              <span>Verify OTP</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-500 text-sm font-medium">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Resend and Back buttons */}
          <div className="space-y-2">
            <button
              onClick={handleResendOTP}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 font-medium"
            >
              Resend OTP
            </button>
            <button
              onClick={handleBack}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
