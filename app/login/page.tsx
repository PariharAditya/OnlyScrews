"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      router.push("/");
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full">
      {/* Background Image Container */}
      <div className="relative w-full min-h-screen bg-center bg-cover bg-no-repeat bg-[url('/images/screws-bg.jpg')]">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Login Form Container */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-semibold text-center mb-8 text-white">
              Login to your account
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-500/80 text-white px-4 py-2 rounded-lg text-center mb-4">
                  <span className="block sm:inline">{error}</span>
                </div>
              )}

              {/* Email Field */}
              <div className="mb-4">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-12 bg-white/90 rounded-lg px-4 text-[#1a2e4c] focus:outline-none focus:ring-2 focus:ring-[#1a2e4c]"
                  placeholder="Email Address"
                />
              </div>

              {/* Password Field */}
              <div className="mb-6">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full h-12 bg-white/90 rounded-lg px-4 text-[#1a2e4c] focus:outline-none focus:ring-2 focus:ring-[#1a2e4c]"
                  placeholder="Password"
                />
              </div>

              {/* Login Button */}
              <div className="flex justify-end mb-8">
                <button
                  type="submit"
                  className="w-32 h-12 bg-[#1a2e4c]/90 text-white rounded-full hover:bg-[#1a2e4c] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a2e4c] focus:ring-offset-2"
                >
                  LOGIN
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center mt-6">
                <p className="text-white">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/sign-up"
                    className="text-white underline hover:text-white/80 transition-colors font-medium"
                  >
                    Sign Up now
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
