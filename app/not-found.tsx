import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 flex items-center">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-[#1a5f7a] text-white px-6 py-3 rounded-md hover:bg-[#134b61] transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}