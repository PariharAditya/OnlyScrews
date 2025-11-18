import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function EmailLogin() {
  const [email, setEmail] = useState("");

  const handleSendEmail = () => {
    if (email.trim()) {
      console.log(`Sending login link to ${email}`);
    }
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
              Login with Email
            </h2>
            <p className="text-gray-600 text-base">
              Enter your email address
            </p>
          </div>

          {/* Email input section */}
          <div className="space-y-4">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none text-gray-800 placeholder-gray-500 focus:border-black transition-colors"
            />

            {/* Send Email button */}
            <button
              onClick={handleSendEmail}
              className="w-full bg-black hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 group"
            >
              <span>Send Login Link</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Back to OTP button */}
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 font-medium w-full"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
