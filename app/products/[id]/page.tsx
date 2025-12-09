import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductTabs from "./ProductTabs";
import { Metadata } from "next";

interface ProductSpec {
  label: string;
  value: string;
}

interface ProductInfo {
  name: string;
  category: string;
  description: string;
  image: string;
  specifications: ProductSpec[];
  applications: string[];
  features: string[];
  standards: string[];
}

// Define available categories
const categories = ["nuts", "bolts", "screws", "washers", "anchors"];

interface CategoryInfo {
  name: string;
  description: string;
  image: string;
  products: string[];
}

// Helper function to check if a string is a valid category
const isCategory = (id: string): boolean => {
  return categories.includes(id.toLowerCase());
};

// This would typically come from an API or database
const getCategoryInfo = (id: string): CategoryInfo | null => {
  const categoryMap: Record<string, CategoryInfo> = {
    nuts: {
      name: "Nuts",
      description:
        "High-quality nuts for various industrial applications, including hex nuts, lock nuts, and specialty nuts.",
      image: "/images/Nuts.png",
      products: ["Hex Nuts", "Lock Nuts", "Wing Nuts", "Cap Nuts"],
    },
    bolts: {
      name: "Bolts",
      description:
        "Premium bolts for secure fastening, including hex head bolts, carriage bolts, and specialty bolts.",
      image: "/images/Bolts.png",
      products: ["Hex Head Bolts", "Carriage Bolts", "U-Bolts", "Eye Bolts"],
    },
    screws: {
      name: "Screws",
      description:
        "Wide range of screws for various applications, including machine screws, wood screws, and self-drilling screws.",
      image: "/images/Screws.png",
      products: ["Machine Screws", "Wood Screws", "Self-Drilling Screws"],
    },
    washers: {
      name: "Washers",
      description:
        "Essential washers for load distribution and spacing, including flat washers, lock washers, and specialty washers.",
      image: "/images/Washers.png",
      products: ["Flat Washers", "Lock Washers", "Spring Washers"],
    },
    anchors: {
      name: "Anchors",
      description:
        "Reliable anchors for secure mounting and installation in various materials.",
      image: "/images/Anchors.png",
      products: ["Wall Anchors", "Concrete Anchors", "Toggle Bolts"],
    },
  };

  return categoryMap[id.toLowerCase()] || null;
};

const getProductInfo = (id: string): ProductInfo | null => {
  // If it's a category, don't return product info
  if (isCategory(id)) {
    return null;
  }

  return {
    name: "Hex Head Bolt",
    category: "Bolts",
    description:
      "High-strength hex head bolts designed for industrial applications, featuring exceptional durability and precise threading for secure fastening.",
    image: "/images/Bolts.png",
    specifications: [
      { label: "Material", value: "Carbon Steel, Stainless Steel" },
      { label: "Grade", value: "8.8, 10.9, 12.9" },
      { label: "Finish", value: "Plain, Zinc Plated, Hot Dip Galvanized" },
      { label: "Thread", value: "Metric, UNC, UNF" },
      { label: "Size Range", value: "M6 to M36" },
      { label: "Length Range", value: "20mm to 400mm" },
    ],
    applications: [
      "Heavy Machinery",
      "Construction Equipment",
      "Automotive Assembly",
      "Steel Structures",
      "Industrial Manufacturing",
    ],
    features: [
      "High tensile strength",
      "Precise threading",
      "Corrosion resistant options",
      "Multiple finish options",
      "Various size ranges",
    ],
    standards: ["ISO 4014", "DIN 931", "ASME B18.2.3.1M", "IS 1364"],
  };
};

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const { id } = params;

  // Check if it's a category
  if (isCategory(id)) {
    const categoryInfo = getCategoryInfo(id);
    if (categoryInfo) {
      return {
        title: `${categoryInfo.name} - Quality Fasteners | Screw Bazar`,
        description: categoryInfo.description,
        keywords: [
          categoryInfo.name.toLowerCase(),
          "fasteners",
          "hardware",
          "industrial",
          "online store",
        ],
        openGraph: {
          title: `${categoryInfo.name} | Screw Bazar`,
          description: categoryInfo.description,
          url: `https://www.screwbazar.com/products/${id}`,
          type: "website",
          images: categoryInfo.image
            ? [{ url: categoryInfo.image, alt: categoryInfo.name }]
            : [],
        },
        alternates: {
          canonical: `https://www.screwbazar.com/products/${id}`,
        },
      };
    }
  }

  // For individual products
  const productInfo = getProductInfo(id);
  if (productInfo) {
    return {
      title: `${productInfo.name} - ${productInfo.category} | Screw Bazar`,
      description: productInfo.description,
      keywords: [
        productInfo.name.toLowerCase(),
        productInfo.category.toLowerCase(),
        "fasteners",
        "buy online",
        "quality hardware",
      ],
      openGraph: {
        title: `${productInfo.name} | Screw Bazar`,
        description: productInfo.description,
        url: `https://www.screwbazar.com/products/${id}`,
        type: "product",
        images: productInfo.image
          ? [{ url: productInfo.image, alt: productInfo.name }]
          : [],
      },
      alternates: {
        canonical: `https://www.screwbazar.com/products/${id}`,
      },
    };
  }

  return {
    title: "Product Not Found | Screw Bazar",
  };
}

export default async function ProductPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;

  if (!params.id) {
    notFound();
  }

  // Check if this is a category page
  if (isCategory(params.id)) {
    const categoryInfo = getCategoryInfo(params.id);
    if (!categoryInfo) {
      notFound();
    }

    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Category Header */}
        <div className="bg-[#1a5f7a] text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center text-sm">
                <Link href="/products" className="hover:text-yellow-300">
                  Products
                </Link>
                <span className="mx-2">→</span>
                <span>{categoryInfo.name}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">
                {categoryInfo.name}
              </h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Category Image */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="relative h-[400px]">
                <Image
                  src={categoryInfo.image}
                  alt={categoryInfo.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Category Information */}
            <div className="space-y-8">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-600">
                  {categoryInfo.description}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Available Products
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categoryInfo.products.map((productName) => (
                    <div
                      key={productName}
                      className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:border-[#1a5f7a] transition-colors"
                    >
                      <h3 className="text-lg font-medium text-gray-800">
                        {productName}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href="/bulk-enquiry"
                  className="block w-full bg-[#1a5f7a] text-white text-center py-3 px-6 rounded-md hover:bg-[#134b61] transition-colors font-medium"
                >
                  Request Quote
                </Link>
                <p className="text-sm text-gray-500 text-center mt-2">
                  For bulk orders and custom specifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Handle product page
  const product = getProductInfo(params.id);
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Product Header */}
      <div className="bg-[#1a5f7a] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center text-sm">
              <Link href="/products" className="hover:text-yellow-300">
                Products
              </Link>
              <span className="mx-2">→</span>
              <Link
                href={`/products/${product.category.toLowerCase()}`}
                className="hover:text-yellow-300"
              >
                {product.category}
              </Link>
              <span className="mx-2">→</span>
              <span>{product.name}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="relative h-[400px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600">{product.description}</p>
            </div>

            {/* Product Tabs */}
            <ProductTabs
              specifications={product.specifications}
              applications={product.applications}
              features={product.features}
              standards={product.standards}
            />

            {/* CTA */}
            <div className="mt-8 space-y-4">
              <Link
                href="/bulk-enquiry"
                className="block w-full bg-[#1a5f7a] text-white text-center py-3 px-6 rounded-md hover:bg-[#134b61] transition-colors font-medium"
              >
                Request Quote
              </Link>
              <p className="text-sm text-gray-500 text-center">
                For bulk orders and custom specifications
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
