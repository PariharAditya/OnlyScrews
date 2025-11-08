import { useState } from "react";

const FAQData = {
  shipping: [
    {
      question: "How much does Pelican shipping cost?",
      answer:
        "Shipping costs vary depending on your location and the size of your order. We offer free shipping on orders over $500.",
    },
    {
      question: "Where does Pelican ship?",
      answer:
        "We ship throughout the continental United States and select international locations.",
    },
    {
      question: "When can I expect my Pelican sofa/table to arrive?",
      answer:
        "Most orders arrive within 2-4 weeks. Expedited shipping options are available at checkout.",
    },
    {
      question: "What can I expect when my order is delivered?",
      answer:
        "Our delivery team will bring your furniture to your home, set it up, and remove all packaging materials.",
    },
  ],
  discounts: [
    {
      question: "Do you offer seasonal discounts?",
      answer: "Yes, we offer seasonal sales during major holidays.",
    },
    {
      question: "Are there discounts for bulk orders?",
      answer: "Yes, we offer volume discounts on bulk orders.",
    },
  ],
  returns: [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on all items.",
    },
    {
      question: "How do I return an item?",
      answer: "Contact our customer service team to initiate a return.",
    },
  ],
  warranty: [
    {
      question: "What warranty do you offer?",
      answer:
        "All our furniture comes with a 5-year manufacturing warranty.",
    },
    {
      question: "What does the warranty cover?",
      answer:
        "The warranty covers defects in materials and workmanship. It does not cover wear and tear.",
    },
  ],
  sofas: [
    {
      question: "What upholstery options are available?",
      answer:
        "We offer a variety of fabrics, leathers, and performance materials.",
    },
    {
      question: "Can I customize my sofa?",
      answer:
        "Yes, you can customize color, size, and upholstery material.",
    },
  ],
  tables: [
    {
      question: "What materials are your tables made from?",
      answer:
        "Our tables are made from solid wood, engineered wood, and metal combinations.",
    },
  ],
  assembly: [
    {
      question: "Do you provide assembly services?",
      answer: "Yes, assembly is included with all delivery orders.",
    },
  ],
  financing: [
    {
      question: "Do you offer financing options?",
      answer:
        "Yes, we partner with major financing companies for flexible payment plans.",
    },
  ],
  service: [
    {
      question: "Do you offer post-purchase support?",
      answer:
        "Yes, our customer service team is available to assist you after purchase.",
    },
  ],
};

type CategoryKey = keyof typeof FAQData;

const categories: { key: CategoryKey; label: string }[] = [
  { key: "shipping", label: "Shipping" },
  { key: "discounts", label: "Discounts" },
  { key: "returns", label: "Returns & Refunds" },
  { key: "warranty", label: "Warranty" },
  { key: "sofas", label: "Products - Sofas" },
  { key: "tables", label: "Products - Tables" },
  { key: "assembly", label: "Assembly" },
  { key: "financing", label: "Financing" },
  { key: "service", label: "Post-purchase Service" },
];

interface FAQItem {
  question: string;
  answer: string;
}

function FAQAccordionItem({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between hover:opacity-70 transition-opacity"
      >
        <span className="text-neutral-900 text-left font-medium">
          {item.question}
        </span>
        <span className="ml-4 flex-shrink-0 text-neutral-400 font-light text-2xl">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 text-neutral-600 text-sm leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>(
    "shipping"
  );

  const currentFaqs = FAQData[selectedCategory];
  const currentCategoryLabel =
    categories.find((c) => c.key === selectedCategory)?.label || "Shipping";

  return (
    <div className="min-h-screen bg-white -mt-[144px] pt-[80px]">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-16 text-neutral-900">
          Frequently Asked Questions
        </h1>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          {/* Left Sidebar - Categories */}
          <aside className="md:col-span-1">
            <nav className="space-y-0 flex flex-col">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`text-left py-2.5 px-0 font-medium text-sm transition-colors whitespace-nowrap ${
                    selectedCategory === category.key
                      ? "text-neutral-900 border-b-2 border-neutral-900"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Right Content - FAQ Accordion */}
          <main className="md:col-span-4">
            {/* Category Header */}
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              {currentCategoryLabel}
            </h2>

            {/* Accordion Items */}
            <div className="space-y-0">
              {currentFaqs.map((faq, index) => (
                <FAQAccordionItem key={index} item={faq} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
