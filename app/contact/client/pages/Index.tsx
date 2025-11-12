import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 md:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-black">
              Pelican Essentials
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-black font-medium transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Welcome to Pelican Essentials
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            We're here to help you with everything you need. Whether you have
            questions, need support, or want to get in touch with our team,
            we're just a message away.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
