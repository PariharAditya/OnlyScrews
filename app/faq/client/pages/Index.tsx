import { useState } from "react";

const FAQData = {
  quotations: [
    {
      question: 'How do I request a quote for a product?',
      answer:
        'Use the "Request a Quote" button on any product page and provide product details, quantity, and contact information. Our team will respond with pricing and lead time.',
    },
    {
      question: 'Can I get quotes for large or repeated orders?',
      answer:
        'Yes — for bulk or repeat orders, provide estimated annual quantities, required tolerances, and any drawings/specs so we can give an accurate volume price.',
    },
    {
      question: 'How long does a quote remain valid?',
      answer:
        'Quotes are typically valid for 30 days unless otherwise stated. Lead times and material costs may affect validity.',
    },
  ],
  products: [
    {
      question: 'What product specifications are available?',
      answer:
        'Each product page lists dimensions, materials, grades, and available finishes. Contact us for custom sizes, materials or technical datasheets.',
    },
    {
      question: 'Do you provide technical datasheets or certifications?',
      answer:
        'Yes. We can provide material certificates, test reports, and drawings on request for standard and custom parts.',
    },
  ],
  bulk_orders: [
    {
      question: 'Do you offer volume discounts?',
      answer:
        'Yes. Discounts depend on quantity, material, and order frequency. Request a formal quote to see volume pricing.',
    },
    {
      question: 'Can you handle ongoing supply agreements?',
      answer:
        'We support blanket orders and scheduled deliveries for recurring requirements. Contact our sales team to set this up.',
    },
  ],
  lead_times: [
    {
      question: 'What are typical lead times?',
      answer:
        'Lead times vary by product and quantity. Small orders are often shipped within days; larger or custom orders can take weeks. Your quote will include the expected lead time.',
    },
    {
      question: 'Can lead times be expedited?',
      answer:
        'Sometimes — expedited manufacturing or prioritized production may be available depending on material and capacity. Additional fees may apply.',
    },
  ],
  samples: [
    {
      question: 'Can I get a sample or small trial order?',
      answer:
        'Yes. Small sample orders are available for many items. Contact us with the product code and required quantity for a sample quote.',
    },
  ],
  custom_parts: [
    {
      question: 'Do you manufacture custom parts from drawings?',
      answer:
        'We can manufacture to your drawings and specifications. Provide engineering drawings, tolerances, and material requirements when requesting a quote.',
    },
    {
      question: 'What file formats do you accept for drawings?',
      answer:
        'We accept PDF, DXF, and STEP files. For detailed quoting we prefer fully dimensioned drawings.',
    },
  ],
  support: [
    {
      question: 'How do I contact technical or sales support?',
      answer:
        'Use the Contact page, email us at screwbazar@gmail.com or call the number +91 8951934668 .For urgent quote requests, use the product page quote button.',
    },
    {
      question: 'What information should I provide for faster support?',
      answer:
        'Provide product code, quantity, required material/grade, drawings (if any), and desired delivery timeframe.',
    },
  ],
};

type CategoryKey = keyof typeof FAQData;

const categories: { key: CategoryKey; label: string }[] = [
  { key: 'quotations', label: 'Quotations & Quotes' },
  { key: 'products', label: 'Product Specifications' },
  { key: 'bulk_orders', label: 'Bulk Orders & Discounts' },
  { key: 'lead_times', label: 'Lead Times & Availability' },
  { key: 'samples', label: 'Samples' },
  { key: 'custom_parts', label: 'Custom Parts' },
  { key: 'support', label: 'Contact & Support' },
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
        className="w-full py-4 flex items-center justify-between hover:opacity-70 transition-opacity cursor-pointer"
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
    // default to the first available category key to avoid runtime errors
    'quotations'
  );

  const currentFaqs = FAQData[selectedCategory];
  const currentCategoryLabel =
    categories.find((c) => c.key === selectedCategory)?.label ||
    // fallback to first category label if not found
    (categories.length > 0 ? categories[0].label : '');

  return (
    <div className="min-h-screen bg-white pt-[40px] screw-typography">
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
                  className={`text-left py-2.5 px-0 font-medium text-sm transition-colors whitespace-nowrap cursor-pointer ${
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
