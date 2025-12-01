"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import SizeAvailabilityGrid from "./SizeAvailabilityGrid";

interface ProductDetailProps {
  readonly title: string;
  readonly slug?: string; // Product slug for fetching size availability
  readonly images: readonly string[];
  readonly materials: readonly {
    readonly id: number;
    readonly name: string;
    readonly color: string;
    readonly image: string;
  }[];
  readonly about: string;
  readonly specifications: readonly {
    readonly label: string;
    readonly value: string;
  }[];
}

export default function ProductDetail({
  title,
  slug,
  images,
  materials,
  about,
  specifications,
}: Readonly<ProductDetailProps>) {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState(0);
  const [activeTab, setActiveTab] = useState<"about" | "applications">("about");
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showMaterialImageModal, setShowMaterialImageModal] = useState(false);
  const [hasSizeAvailability, setHasSizeAvailability] = useState(false);
  const [quoteFormData, setQuoteFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const mainFrameRef = useRef<HTMLDivElement | null>(null);
  const availabilityRef = useRef<HTMLButtonElement | null>(null);

  const [availabilityMinHeight, setAvailabilityMinHeight] = useState<
    number | null
  >(null);

  const nextImage = () => {
    setMainImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setMainImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    // Use ResizeObserver to update the frame height and availability height so they align at the bottom
    const updateHeights = () => {
      const frameEl = mainFrameRef.current;
      const availEl = availabilityRef.current;
      if (!frameEl) return;
      const frameRect = frameEl.getBoundingClientRect();
      if (availEl) {
        const availRect = availEl.getBoundingClientRect();
        // compute height so availability bottom aligns with frame bottom
        const needed = Math.max(0, frameRect.bottom - availRect.top);
        setAvailabilityMinHeight(needed);
      }
    };

    const ro = new ResizeObserver(() => updateHeights());
    if (mainFrameRef.current) ro.observe(mainFrameRef.current);
    if (availabilityRef.current) ro.observe(availabilityRef.current);
    // Also observe window resize
    window.addEventListener("resize", updateHeights);
    // fallback: initial set after next paint
    requestAnimationFrame(updateHeights);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateHeights);
    };
  }, [selectedMaterial, mainImageIndex]);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Product Title - Full Width */}
        <div className="mb-8">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-heading font-bold leading-tight text-white">
            {title}
          </h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 items-stretch">
          {/* Left Column - Images */}
          <div className="flex flex-col gap-6">
            {/* Main Image */}
            <div
              ref={mainFrameRef}
              className="bg-black rounded-xl aspect-square overflow-hidden flex items-center justify-center"
            >
              <img
                src={images[mainImageIndex]}
                alt="Product"
                className="w-full h-full object-contain p-4"
              />
            </div>

            {/* Thumbnail Carousel */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevImage}
                className="flex-shrink-0 w-10 h-10 rounded-full bg-[#A3F61E] text-black flex items-center justify-center hover:bg-[#8FD919] transition"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-3 overflow-x-auto flex-1">
                {images.map((img, idx) => (
                  <button
                    key={`thumbnail-${img}-${idx}`}
                    onClick={() => setMainImageIndex(idx)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition ${
                      mainImageIndex === idx
                        ? "border-[#A3F61E] cursor-pointer"
                        : "border-gray-700 cursor-pointer"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={nextImage}
                className="flex-shrink-0 w-10 h-10 rounded-full bg-[#A3F61E] text-black flex items-center justify-center hover:bg-[#8FD919] transition cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="flex flex-col gap-8 h-full">
            {/* Size Availability Grid - Shows when database has size data */}
            {slug && (
              <SizeAvailabilityGrid
                productSlug={slug}
                selectedMaterialIndex={selectedMaterial}
                onMaterialChange={(idx) => setSelectedMaterial(idx)}
              />
            )}

            {/* Fallback Material Section - Shows when no slug or no size data */}
            {!slug && (
              <>
                <div>
                  <h3 className="text-base font-heading font-semibold mb-4 text-[#BCFF83]">
                    material:{" "}
                    <span className="text-white">
                      {materials[selectedMaterial].name}
                    </span>
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {materials.map((material, idx) => (
                      <button
                        key={material.id}
                        onClick={() => setSelectedMaterial(idx)}
                        className={`px-4 py-2 rounded-full font-sans font-medium text-sm transition ${
                          selectedMaterial === idx
                            ? "bg-[#A3F61E] text-black cursor-pointer"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200 cursor-pointer"
                        }`}
                      >
                        {material.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Availability Section - Fallback with image */}
                <div>
                  <h3 className="text-base font-heading font-semibold mb-4 text-[#BCFF83]">
                    {materials[selectedMaterial].name}:
                  </h3>
                  <button
                    onClick={() => setShowMaterialImageModal(true)}
                    className="w-full rounded-lg overflow-hidden relative transition-all duration-500 hover:opacity-90 cursor-pointer border border-gray-700 bg-[#0f0f0f]"
                    aria-label={`${materials[selectedMaterial].name} image`}
                    ref={availabilityRef}
                    style={{
                      minHeight: availabilityMinHeight
                        ? `${availabilityMinHeight}px`
                        : undefined,
                    }}
                  >
                    <img
                      src={materials[selectedMaterial].image}
                      alt={materials[selectedMaterial].name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Request a Quote Button */}
        <div className="flex justify-center my-12">
          <button
            onClick={() => setShowQuoteModal(true)}
            className="bg-[#A3F61E] text-black px-8 py-3 rounded-full font-heading font-semibold text-lg hover:bg-[#8FD919] transition cursor-pointer"
          >
            Request a Quote
          </button>
        </div>

        {/* About This Piece & Applications Tabs */}
        <div>
          {/* Tab Navigation */}
          <div className="flex gap-6 items-center mb-6">
            <button
              onClick={() => setActiveTab("about")}
              className={`transition font-heading ${
                activeTab === "about"
                  ? "bg-[#A3F61E] text-black px-4 py-2 rounded-full font-semibold text-sm sm:text-base cursor-pointer"
                  : "text-white text-lg sm:text-xl font-semibold cursor-pointer"
              }`}
            >
              About this piece
            </button>
            <button
              onClick={() => setActiveTab("applications")}
              className={`transition font-heading ${
                activeTab === "applications"
                  ? "bg-[#A3F61E] text-black px-4 py-2 rounded-full font-semibold text-sm sm:text-base cursor-pointer"
                  : "text-white text-lg sm:text-xl font-semibold cursor-pointer"
              }`}
            >
              Applications
            </button>
          </div>

          {/* Tab Separator Line */}
          <div className="border-b border-gray-400 mb-8"></div>

          {/* Tab Content */}
          <div>
            {activeTab === "about" && (
              <div className="text-white/80 font-sans leading-relaxed text-sm sm:text-base">
                <p>{about}</p>
              </div>
            )}

            {activeTab === "applications" && (
              <ul className="text-white/80 font-sans text-sm sm:text-base space-y-3">
                {specifications.map((spec) => (
                  <li
                    key={`${spec.label}-${spec.value}`}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#A3F61E] font-bold">•</span>
                    <span>
                      {spec.label && spec.label.toLowerCase() === "application"
                        ? spec.value
                        : spec.label
                        ? `${spec.label}: ${spec.value}`
                        : spec.value}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Quote Modal */}
        {showQuoteModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white border border-gray-200 rounded-lg shadow-xl max-w-xs w-full p-4 relative">
              {/* Close Button */}
              <button
                onClick={() => setShowQuoteModal(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 transition cursor-pointer"
              >
                <X size={20} />
              </button>

              <h2 className="text-lg font-heading font-bold text-gray-900 mb-3">
                Request a Quote
              </h2>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  setSubmitStatus(null);

                  try {
                    const response = await fetch("/api/send-quote", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        ...quoteFormData,
                        product: title,
                        material: materials[selectedMaterial].name,
                      }),
                    });

                    const data = await response.json();

                    if (response.ok) {
                      setSubmitStatus({
                        type: "success",
                        message:
                          "Quote request sent successfully! Check your email for confirmation.",
                      });
                      // Reset form after success
                      setQuoteFormData({
                        name: "",
                        email: "",
                        phone: "",
                        quantity: "",
                        message: "",
                      });
                      // Close modal after 2 seconds on success
                      setTimeout(() => {
                        setShowQuoteModal(false);
                        setSubmitStatus(null);
                      }, 2000);
                    } else {
                      setSubmitStatus({
                        type: "error",
                        message:
                          data.error ||
                          "Failed to send quote request. Please try again.",
                      });
                    }
                  } catch {
                    setSubmitStatus({
                      type: "error",
                      message:
                        "Network error. Please check your connection and try again.",
                    });
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
                className="space-y-2"
              >
                {/* Status Message */}
                {submitStatus && (
                  <div
                    className={`p-2 rounded text-sm ${
                      submitStatus.type === "success"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
                <div>
                  <label
                    htmlFor="quote-name"
                    className="block text-gray-700 font-sans text-xs font-semibold mb-1"
                  >
                    Name *
                  </label>
                  <input
                    id="quote-name"
                    type="text"
                    required
                    value={quoteFormData.name}
                    onChange={(e) =>
                      setQuoteFormData({
                        ...quoteFormData,
                        name: e.target.value,
                      })
                    }
                    className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#A3F61E] focus:ring-1 focus:ring-[#A3F61E]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="quote-email"
                    className="block text-gray-700 font-sans text-xs font-semibold mb-1"
                  >
                    Email *
                  </label>
                  <input
                    id="quote-email"
                    type="email"
                    required
                    value={quoteFormData.email}
                    onChange={(e) =>
                      setQuoteFormData({
                        ...quoteFormData,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#A3F61E] focus:ring-1 focus:ring-[#A3F61E]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="quote-phone"
                    className="block text-gray-700 font-sans text-xs font-semibold mb-1"
                  >
                    Phone *
                  </label>
                  <input
                    id="quote-phone"
                    type="tel"
                    required
                    value={quoteFormData.phone}
                    onChange={(e) =>
                      setQuoteFormData({
                        ...quoteFormData,
                        phone: e.target.value,
                      })
                    }
                    className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#A3F61E] focus:ring-1 focus:ring-[#A3F61E]"
                    placeholder="+91 (98765) 43210"
                  />
                </div>

                <div>
                  <label
                    htmlFor="quote-quantity"
                    className="block text-gray-700 font-sans text-xs font-semibold mb-1"
                  >
                    Quantity *
                  </label>
                  <input
                    id="quote-quantity"
                    type="number"
                    required
                    min="1"
                    value={quoteFormData.quantity}
                    onChange={(e) =>
                      setQuoteFormData({
                        ...quoteFormData,
                        quantity: e.target.value,
                      })
                    }
                    className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#A3F61E] focus:ring-1 focus:ring-[#A3F61E]"
                    placeholder="Number of units"
                  />
                </div>

                <div>
                  <label
                    htmlFor="quote-message"
                    className="block text-gray-700 font-sans text-xs font-semibold mb-1"
                  >
                    Details of the product
                  </label>
                  <textarea
                    id="quote-message"
                    value={quoteFormData.message}
                    onChange={(e) =>
                      setQuoteFormData({
                        ...quoteFormData,
                        message: e.target.value,
                      })
                    }
                    className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#A3F61E] focus:ring-1 focus:ring-[#A3F61E] resize-none"
                    rows={2}
                    placeholder="Additional details..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-1.5 rounded font-heading text-sm font-semibold transition cursor-pointer ${
                    isSubmitting
                      ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                      : "bg-[#A3F61E] text-black hover:bg-[#8FD919]"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Submit Quote Request"}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Material Image Modal */}
        {showMaterialImageModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-2xl w-full bg-white rounded-lg p-4">
              <button
                onClick={() => setShowMaterialImageModal(false)}
                className="absolute top-6 right-6 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition z-10 cursor-pointer"
              >
                <X size={24} />
              </button>
              <img
                src={materials[selectedMaterial].image}
                alt={materials[selectedMaterial].name}
                className="w-full rounded-lg"
              />
              <p className="text-gray-900 font-heading text-center mt-4 text-lg font-semibold">
                {materials[selectedMaterial].name}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
