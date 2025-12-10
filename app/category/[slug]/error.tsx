"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#A3F61E]">Oops!</h1>
        <p className="text-xl text-gray-300 mb-2">Something went wrong</p>
        <p className="text-gray-400 mb-8">
          We encountered an error while loading this product. Please try again.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-[#A3F61E] text-black font-semibold rounded-lg hover:bg-[#8FD919] transition"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition"
          >
            Go Home
          </Link>
        </div>

        {process.env.NODE_ENV === "development" && (
          <div className="mt-8 text-left bg-gray-900 rounded-lg p-4">
            <p className="text-sm text-red-400 font-mono break-words">
              {error.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
