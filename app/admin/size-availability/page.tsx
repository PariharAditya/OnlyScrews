"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import {
  Trash2,
  Edit2,
  Save,
  X,
  Upload,
  RefreshCw,
  Search,
  Zap,
} from "lucide-react";
import MaterialDropdown from "@/components/MaterialDropdown";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes (formerly cacheTime)
    },
  },
});

interface Product {
  name: string;
  slug: string;
  category: string;
}

interface SizeAvailability {
  id: string;
  productSlug: string;
  productName: string;
  materialSlug: string;
  materialName: string;
  size: string;
  available: boolean;
  sortOrder: number;
}

interface ImportResult {
  success: boolean;
  message: string;
  results?: {
    productsProcessed: number;
    materialsProcessed: number;
    sizesCreated: number;
    errors: string[];
  };
  summary?: string;
}

function SizeAvailabilityAdmin() {
  const [activeTab, setActiveTab] = useState<"import" | "manage">("manage");
  const [csvData, setCsvData] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ImportResult | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [productsWithData, setProductsWithData] = useState<
    Array<{
      name: string;
      slug: string;
      category: string;
      sizeRecordCount: number;
    }>
  >([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState<Partial<SizeAvailability>>({});
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [sizeData, setSizeData] = useState<any[]>([]);
  const [loadingData, setLoadingData] = useState(false);

  // Search & Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMaterialIndex, setSelectedMaterialIndex] = useState(0);
  const [hoveredMaterial, setHoveredMaterial] = useState<number | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Size grid filter and pagination
  const [sizeFilter, setSizeFilter] = useState<
    "all" | "available" | "unavailable"
  >("all");
  const [sizeSearch, setSizeSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // TanStack Query for products
  const { data: productsData, refetch: refetchProducts } = useQuery({
    queryKey: ["admin-products"],
    queryFn: async () => {
      const res = await fetch("/api/admin/size-availability");
      return res.json();
    },
  });

  useEffect(() => {
    if (productsData) {
      setProducts(productsData.allAvailableProducts || []);
      setProductsWithData(productsData.productsWithSizeData || []);
    }
  }, [productsData]);

  const loadProducts = () => {
    refetchProducts();
  };

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(products.map((p) => p.category.split(" > ")[0]));
    return Array.from(cats).sort();
  }, [products]);

  // Fuzzy search function
  const fuzzyMatch = (str: string, pattern: string) => {
    const strLower = str.toLowerCase();
    const patternLower = pattern.toLowerCase();

    if (strLower.includes(patternLower)) return true;

    let patternIdx = 0;
    for (
      let i = 0;
      i < strLower.length && patternIdx < patternLower.length;
      i++
    ) {
      if (strLower[i] === patternLower[patternIdx]) {
        patternIdx++;
      }
    }
    return patternIdx === patternLower.length;
  };

  // Filtered and sorted products with recommendations
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Category filter
    if (categoryFilter !== "all") {
      filtered = filtered.filter((p) => p.category.startsWith(categoryFilter));
    }

    // Search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (p) =>
          fuzzyMatch(p.name, searchQuery) ||
          fuzzyMatch(p.slug, searchQuery) ||
          fuzzyMatch(p.category, searchQuery)
      );
    }

    return filtered;
  }, [products, searchQuery, categoryFilter]);

  // Recommendations: Recently viewed + Most data
  const recommendations = useMemo(() => {
    const recent = products.filter((p) => recentlyViewed.includes(p.slug));
    const withMostData = [...productsWithData]
      .sort((a, b) => b.sizeRecordCount - a.sizeRecordCount)
      .slice(0, 5)
      .map((p) => products.find((prod) => prod.slug === p.slug))
      .filter(Boolean) as Product[];

    const combined = [...recent, ...withMostData];
    const unique = Array.from(
      new Map(combined.map((p) => [p.slug, p])).values()
    );
    return unique.slice(0, 8);
  }, [products, productsWithData, recentlyViewed]);

  // Load size data for selected product
  const loadSizeData = async (productSlug: string) => {
    setLoadingData(true);

    // Track recently viewed
    setRecentlyViewed((prev) => {
      const updated = [productSlug, ...prev.filter((s) => s !== productSlug)];
      return updated.slice(0, 10); // Keep last 10
    });

    try {
      const res = await fetch(`/api/products/${productSlug}/availability`);
      const data = await res.json();

      // Transform data for editing
      const transformed: any[] = [];
      data.materials?.forEach((mat: any) => {
        mat.sizes?.forEach((size: any, index: number) => {
          transformed.push({
            id: mat.materialId,
            productSlug,
            productName: data.productName || productSlug,
            materialSlug: mat.materialSlug,
            materialName: mat.materialName,
            size: size.size,
            available: size.available,
            sortOrder: index,
          });
        });
      });
      setSizeData(transformed);
    } catch (error) {
      console.error("Error loading size data:", error);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    if (selectedProduct) {
      loadSizeData(selectedProduct);
    }
  }, [selectedProduct]);

  // Reset material selection when product changes
  useEffect(() => {
    setSelectedMaterialIndex(0);
    setIsDropdownOpen(false);
    setHoveredMaterial(null);
    setSizeFilter("all");
    setSizeSearch("");
    setCurrentPage(1);
  }, [selectedProduct]);

  const handleImport = async () => {
    if (!csvData.trim()) {
      setResult({ success: false, message: "Please enter some data" });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/admin/size-availability/bulk-import", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: csvData,
      });
      const data = await res.json();
      setResult(data);
      if (data.success) {
        setCsvData("");
        loadProducts();
      }
    } catch (error) {
      setResult({ success: false, message: String(error) });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (item: SizeAvailability) => {
    try {
      const res = await fetch("/api/admin/size-availability", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productSlug: item.productSlug,
          materialSlug: item.materialSlug,
          size: item.size,
          available: editData.available ?? item.available,
          sortOrder: editData.sortOrder ?? item.sortOrder,
        }),
      });

      if (res.ok) {
        setEditingId(null);
        setEditData({});
        loadSizeData(selectedProduct);
        alert("Updated successfully!");
      } else {
        const error = await res.json();
        alert(`Error: ${error.message || error.error}`);
      }
    } catch (error) {
      alert(`Error: ${error}`);
    }
  };

  const handleDelete = async (productSlug: string) => {
    if (!confirm(`Delete all size data for ${productSlug}?`)) return;

    try {
      const res = await fetch(
        `/api/admin/size-availability?productSlug=${productSlug}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        loadProducts();
        if (selectedProduct === productSlug) {
          setSelectedProduct("");
          setSizeData([]);
        }
        alert("Deleted successfully!");
      } else {
        const error = await res.json();
        alert(`Error: ${error.message || error.error}`);
      }
    } catch (error) {
      alert(`Error: ${error}`);
    }
  };

  const exampleData = `hex-sem	Stainless Steel 304	M-4 X 8	Y
hex-sem	Stainless Steel 304	M-4 X 10	Y
hex-sem	Stainless Steel 304	M-4 X 12	Y
hex-sem	Stainless Steel 304	M-5 X 10	N
hex-sem	Mild Steel	M-4 X 8	Y
hex-sem	Mild Steel	M-4 X 10	N`;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#A3F61E]">
              Size Availability Admin
            </h1>
            <p className="text-gray-400 mt-1">
              Manage product size availability data
            </p>
          </div>
          <button
            onClick={loadProducts}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center gap-2 transition"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
          <div className="flex gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products by name, slug, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#111] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-[#A3F61E] focus:outline-none transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-3 bg-[#111] border border-gray-800 rounded-lg text-white focus:border-[#A3F61E] focus:outline-none transition min-w-[200px]"
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Search Results Count */}
          {searchQuery && (
            <div className="text-sm text-gray-400">
              Found {filteredProducts.length} product
              {filteredProducts.length !== 1 ? "s" : ""}
            </div>
          )}

          {/* Recommendations */}
          {!searchQuery && recommendations.length > 0 && (
            <div className="bg-[#111] border border-gray-800 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#A3F61E] rounded-full animate-pulse"></span>
                Recommended Products
              </h3>
              <div className="flex flex-wrap gap-2">
                {recommendations.map((product) => {
                  const hasData = productsWithData.find(
                    (p) => p.slug === product.slug
                  );
                  const isRecent = recentlyViewed.includes(product.slug);
                  return (
                    <button
                      key={product.slug}
                      onClick={() => {
                        setSelectedProduct(product.slug);
                        setActiveTab("manage");
                      }}
                      className="px-3 py-1.5 bg-gray-800/50 hover:bg-gray-700 border border-gray-700 hover:border-[#A3F61E] rounded-lg text-sm transition flex items-center gap-2 group"
                    >
                      {isRecent && (
                        <span className="text-xs text-blue-400">👁</span>
                      )}
                      <span className="group-hover:text-[#A3F61E] transition">
                        {product.name}
                      </span>
                      {hasData && (
                        <span className="text-xs text-gray-500 bg-gray-900 px-1.5 py-0.5 rounded">
                          {hasData.sizeRecordCount}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-gray-800">
          <button
            onClick={() => setActiveTab("manage")}
            className={`px-6 py-3 font-semibold transition ${
              activeTab === "manage"
                ? "text-[#A3F61E] border-b-2 border-[#A3F61E]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Manage Data
          </button>
          <button
            onClick={() => setActiveTab("import")}
            className={`px-6 py-3 font-semibold transition flex items-center gap-2 ${
              activeTab === "import"
                ? "text-[#A3F61E] border-b-2 border-[#A3F61E]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Upload className="w-4 h-4" />
            Bulk Import
          </button>
        </div>

        {/* Manage Tab */}
        {activeTab === "manage" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Products List */}
            <div className="lg:col-span-1">
              <div className="bg-[#111] rounded-xl border border-gray-800 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">
                    Products ({filteredProducts.length})
                  </h2>
                  {(searchQuery || categoryFilter !== "all") && (
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setCategoryFilter("all");
                      }}
                      className="text-xs text-gray-400 hover:text-white flex items-center gap-1"
                    >
                      <X className="w-3 h-3" />
                      Clear
                    </button>
                  )}
                </div>
                <div className="space-y-2 max-h-[600px] overflow-y-auto">
                  {filteredProducts.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
                      <p>No products found</p>
                      {(searchQuery || categoryFilter !== "all") && (
                        <button
                          onClick={() => {
                            setSearchQuery("");
                            setCategoryFilter("all");
                          }}
                          className="text-[#A3F61E] hover:underline text-sm mt-2"
                        >
                          Clear filters
                        </button>
                      )}
                    </div>
                  ) : (
                    filteredProducts.map((p) => {
                      const dataInfo = productsWithData.find(
                        (pd) => pd.slug === p.slug
                      );
                      const hasData = !!dataInfo;

                      return (
                        <div
                          key={p.slug}
                          onClick={() => {
                            if (hasData) {
                              setSelectedProduct(p.slug);
                            }
                          }}
                          className={`p-3 rounded-lg transition ${
                            hasData
                              ? selectedProduct === p.slug
                                ? "bg-[#A3F61E]/20 border border-[#A3F61E] cursor-pointer"
                                : "bg-black/50 hover:bg-gray-900 cursor-pointer"
                              : "bg-black/20 opacity-60 cursor-not-allowed"
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="font-medium">{p.name}</p>
                              <p className="text-xs text-gray-500 mt-1">
                                <code className="text-[#A3F61E]">{p.slug}</code>
                              </p>
                              <p className="text-xs text-gray-600 mt-1">
                                {p.category}
                              </p>
                              {hasData ? (
                                <p className="text-xs text-green-500 mt-1 flex items-center gap-1">
                                  ✓ {dataInfo.sizeRecordCount} sizes
                                </p>
                              ) : (
                                <p className="text-xs text-gray-600 mt-1">
                                  No size data
                                </p>
                              )}
                            </div>
                            {hasData && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDelete(p.slug);
                                }}
                                className="text-red-500 hover:text-red-400 p-1"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>

            {/* Size Data Table */}
            <div className="lg:col-span-2">
              <div className="bg-[#111] rounded-xl border border-gray-800 p-6">
                <h2 className="text-xl font-semibold mb-4">
                  {selectedProduct
                    ? `Size Data: ${
                        productsWithData.find((p) => p.slug === selectedProduct)
                          ?.name || selectedProduct
                      }`
                    : "Select a product"}
                </h2>

                {loadingData ? (
                  <p className="text-gray-500">Loading...</p>
                ) : selectedProduct && sizeData.length === 0 ? (
                  <p className="text-gray-500">No size data found</p>
                ) : selectedProduct ? (
                  <div className="space-y-4">
                    {/* Group by Material */}
                    {(() => {
                      // Group items by material
                      const groups: Record<
                        string,
                        { name: string; slug: string; items: any[] }
                      > = {};

                      sizeData.forEach((item) => {
                        const key =
                          item.materialSlug || item.materialName || "unknown";
                        if (!groups[key]) {
                          groups[key] = {
                            name:
                              item.materialName ||
                              item.materialSlug ||
                              "Unknown Material",
                            slug: item.materialSlug || "unknown",
                            items: [],
                          };
                        }
                        groups[key].items.push(item);
                      });

                      const materialGroups = Object.values(groups);

                      if (materialGroups.length === 0) {
                        return (
                          <p className="text-gray-500">No data to display</p>
                        );
                      }

                      // Get current material (selected or hovered)
                      const currentMaterialIndex =
                        selectedMaterialIndex < materialGroups.length
                          ? selectedMaterialIndex
                          : 0;
                      const previewMaterialIndex =
                        hoveredMaterial !== null
                          ? hoveredMaterial
                          : currentMaterialIndex;
                      const currentMaterial =
                        materialGroups[currentMaterialIndex];
                      const previewMaterial =
                        materialGroups[previewMaterialIndex];

                      const handleMaterialChange = (index: number) => {
                        setSelectedMaterialIndex(index);
                        setIsDropdownOpen(false);
                        setHoveredMaterial(null);
                      };

                      const handleMaterialHover = (index: number) => {
                        if (hoverTimeoutRef.current) {
                          clearTimeout(hoverTimeoutRef.current);
                        }
                        setHoveredMaterial(index);
                      };

                      const handleMaterialLeave = () => {
                        hoverTimeoutRef.current = setTimeout(() => {
                          setHoveredMaterial(null);
                        }, 150);
                      };

                      const inStockCount = currentMaterial.items.filter(
                        (item: any) => item.available
                      ).length;
                      const availabilityPercent = Math.round(
                        (inStockCount / currentMaterial.items.length) * 100
                      );

                      return (
                        <>
                          {/* Material Dropdown */}
                          <MaterialDropdown
                            materials={materialGroups}
                            selectedIndex={currentMaterialIndex}
                            hoveredIndex={hoveredMaterial}
                            isOpen={isDropdownOpen}
                            onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
                            onSelect={handleMaterialChange}
                            onHover={handleMaterialHover}
                            onLeave={handleMaterialLeave}
                          />

                          {/* Size Availability Table */}
                          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#0d0d0d] to-[#080808] border border-gray-800/50">
                            {/* Decorative corner accents */}
                            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[#A3F61E]/20 rounded-tl-2xl"></div>
                            <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-[#A3F61E]/20 rounded-tr-2xl"></div>

                            {/* Header */}
                            <div className="relative px-5 py-4 border-b border-gray-800/50 bg-gradient-to-r from-black/50 to-transparent">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-[#A3F61E]" />
                                    <h4 className="text-base font-bold text-white tracking-wide">
                                      {previewMaterial.name}
                                    </h4>
                                  </div>
                                  {hoveredMaterial !== null &&
                                    hoveredMaterial !==
                                      currentMaterialIndex && (
                                      <span className="text-[10px] px-2 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 uppercase tracking-wider font-bold animate-pulse">
                                        Preview Mode
                                      </span>
                                    )}
                                </div>

                                {/* Availability Progress Ring */}
                                <div className="flex items-center gap-4">
                                  <div className="relative w-12 h-12">
                                    <svg
                                      className="w-12 h-12 -rotate-90"
                                      viewBox="0 0 36 36"
                                    >
                                      <path
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="rgba(255,255,255,0.1)"
                                        strokeWidth="2"
                                      />
                                      <path
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="url(#gradient)"
                                        strokeWidth="2"
                                        strokeDasharray={`${availabilityPercent}, 100`}
                                        strokeLinecap="round"
                                      />
                                      <defs>
                                        <linearGradient
                                          id="gradient"
                                          x1="0%"
                                          y1="0%"
                                          x2="100%"
                                          y2="0%"
                                        >
                                          <stop
                                            offset="0%"
                                            stopColor="#A3F61E"
                                          />
                                          <stop
                                            offset="100%"
                                            stopColor="#22c55e"
                                          />
                                        </linearGradient>
                                      </defs>
                                    </svg>
                                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                                      {availabilityPercent}%
                                    </span>
                                  </div>

                                  <div className="hidden sm:flex flex-col gap-1 text-xs">
                                    <div className="flex items-center gap-2">
                                      <div className="w-2 h-2 rounded-full bg-[#A3F61E] shadow-[0_0_10px_rgba(163,246,30,0.5)]"></div>
                                      <span className="text-gray-400">
                                        In Stock
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                                      <span className="text-gray-400">
                                        Out of Stock
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Filter and Search Controls */}
                            <div className="px-5 py-3 border-b border-gray-800/50 bg-black/20">
                              <div className="flex items-center justify-between gap-4 flex-wrap">
                                <div className="flex items-center gap-3">
                                  {/* Size Search */}
                                  <div className="relative">
                                    <input
                                      type="text"
                                      value={sizeSearch}
                                      onChange={(e) => {
                                        setSizeSearch(e.target.value);
                                        setCurrentPage(1);
                                      }}
                                      placeholder="Search sizes..."
                                      className="bg-black border border-gray-700 rounded-lg px-3 py-1.5 pr-8 text-sm focus:border-[#A3F61E] focus:outline-none w-48"
                                    />
                                    {sizeSearch && (
                                      <button
                                        onClick={() => {
                                          setSizeSearch("");
                                          setCurrentPage(1);
                                        }}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                                      >
                                        <X className="w-4 h-4" />
                                      </button>
                                    )}
                                  </div>

                                  {/* Availability Filter */}
                                  <select
                                    value={sizeFilter}
                                    onChange={(e) => {
                                      setSizeFilter(e.target.value as any);
                                      setCurrentPage(1);
                                    }}
                                    className="bg-black border border-gray-700 rounded-lg px-3 py-1.5 text-sm focus:border-[#A3F61E] focus:outline-none"
                                  >
                                    <option value="all">All Sizes</option>
                                    <option value="available">
                                      Available Only
                                    </option>
                                    <option value="unavailable">
                                      Unavailable Only
                                    </option>
                                  </select>
                                </div>

                                {/* Results count */}
                                <div className="text-sm text-gray-400">
                                  {(() => {
                                    let filtered = previewMaterial.items;

                                    if (sizeFilter !== "all") {
                                      filtered = filtered.filter((item: any) =>
                                        sizeFilter === "available"
                                          ? item.available
                                          : !item.available
                                      );
                                    }

                                    if (sizeSearch.trim()) {
                                      filtered = filtered.filter((item: any) =>
                                        item.size
                                          .toLowerCase()
                                          .includes(sizeSearch.toLowerCase())
                                      );
                                    }

                                    return `Showing ${filtered.length} of ${previewMaterial.items.length} sizes`;
                                  })()}
                                </div>
                              </div>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead className="text-left text-gray-400 border-b border-gray-800 bg-black/30">
                                  <tr>
                                    <th className="px-4 py-2">Size</th>
                                    <th className="px-4 py-2">Available</th>
                                    <th className="px-4 py-2">Actions</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-800/50">
                                  {(() => {
                                    let filtered = previewMaterial.items;

                                    // Apply availability filter
                                    if (sizeFilter !== "all") {
                                      filtered = filtered.filter((item: any) =>
                                        sizeFilter === "available"
                                          ? item.available
                                          : !item.available
                                      );
                                    }

                                    // Apply search filter
                                    if (sizeSearch.trim()) {
                                      filtered = filtered.filter((item: any) =>
                                        item.size
                                          .toLowerCase()
                                          .includes(sizeSearch.toLowerCase())
                                      );
                                    }

                                    // Pagination
                                    const startIndex =
                                      (currentPage - 1) * itemsPerPage;
                                    const endIndex = startIndex + itemsPerPage;
                                    const paginatedItems = filtered.slice(
                                      startIndex,
                                      endIndex
                                    );

                                    if (paginatedItems.length === 0) {
                                      return (
                                        <tr>
                                          <td
                                            colSpan={3}
                                            className="px-4 py-8 text-center text-gray-500"
                                          >
                                            No sizes found matching your filters
                                          </td>
                                        </tr>
                                      );
                                    }

                                    return paginatedItems.map((item: any) => (
                                      <tr
                                        key={item.id}
                                        className="hover:bg-gray-900/50"
                                      >
                                        <td className="px-4 py-3">
                                          <code className="bg-black/50 px-2 py-1 rounded text-[#A3F61E] font-mono">
                                            {item.size}
                                          </code>
                                        </td>
                                        <td className="px-4 py-3">
                                          {editingId === item.id ? (
                                            <select
                                              value={
                                                editData.available !== undefined
                                                  ? editData.available
                                                    ? "true"
                                                    : "false"
                                                  : item.available
                                                  ? "true"
                                                  : "false"
                                              }
                                              onChange={(e) =>
                                                setEditData({
                                                  ...editData,
                                                  available:
                                                    e.target.value === "true",
                                                })
                                              }
                                              className="bg-black border border-gray-700 rounded px-2 py-1"
                                            >
                                              <option value="true">Yes</option>
                                              <option value="false">No</option>
                                            </select>
                                          ) : (
                                            <span
                                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                item.available
                                                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                                  : "bg-red-500/20 text-red-400 border border-red-500/30"
                                              }`}
                                            >
                                              {item.available
                                                ? "✓ In Stock"
                                                : "✗ Out of Stock"}
                                            </span>
                                          )}
                                        </td>
                                        <td className="px-4 py-3">
                                          <div className="flex gap-2">
                                            {editingId === item.id ? (
                                              <>
                                                <button
                                                  onClick={() =>
                                                    handleUpdate(item)
                                                  }
                                                  className="text-green-500 hover:text-green-400 p-1"
                                                  title="Save"
                                                >
                                                  <Save className="w-4 h-4" />
                                                </button>
                                                <button
                                                  onClick={() => {
                                                    setEditingId(null);
                                                    setEditData({});
                                                  }}
                                                  className="text-gray-500 hover:text-gray-400 p-1"
                                                  title="Cancel"
                                                >
                                                  <X className="w-4 h-4" />
                                                </button>
                                              </>
                                            ) : (
                                              <button
                                                onClick={() =>
                                                  setEditingId(item.id)
                                                }
                                                className="text-blue-500 hover:text-blue-400 p-1"
                                                title="Edit"
                                              >
                                                <Edit2 className="w-4 h-4" />
                                              </button>
                                            )}
                                          </div>
                                        </td>
                                      </tr>
                                    ));
                                  })()}
                                </tbody>
                              </table>
                            </div>

                            {/* Pagination Controls */}
                            {(() => {
                              let filtered = previewMaterial.items;

                              if (sizeFilter !== "all") {
                                filtered = filtered.filter((item: any) =>
                                  sizeFilter === "available"
                                    ? item.available
                                    : !item.available
                                );
                              }

                              if (sizeSearch.trim()) {
                                filtered = filtered.filter((item: any) =>
                                  item.size
                                    .toLowerCase()
                                    .includes(sizeSearch.toLowerCase())
                                );
                              }

                              const totalPages = Math.ceil(
                                filtered.length / itemsPerPage
                              );

                              if (totalPages <= 1) return null;

                              return (
                                <div className="px-5 py-4 border-t border-gray-800/50 bg-black/20">
                                  <div className="flex items-center justify-between">
                                    <div className="text-sm text-gray-400">
                                      Page {currentPage} of {totalPages}
                                    </div>

                                    <div className="flex items-center gap-2">
                                      <button
                                        onClick={() => setCurrentPage(1)}
                                        disabled={currentPage === 1}
                                        className="px-3 py-1.5 bg-gray-800 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                                      >
                                        First
                                      </button>
                                      <button
                                        onClick={() =>
                                          setCurrentPage((p) =>
                                            Math.max(1, p - 1)
                                          )
                                        }
                                        disabled={currentPage === 1}
                                        className="px-3 py-1.5 bg-gray-800 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                                      >
                                        Previous
                                      </button>

                                      {/* Page numbers */}
                                      <div className="flex items-center gap-1">
                                        {Array.from(
                                          { length: Math.min(5, totalPages) },
                                          (_, i) => {
                                            let pageNum;
                                            if (totalPages <= 5) {
                                              pageNum = i + 1;
                                            } else if (currentPage <= 3) {
                                              pageNum = i + 1;
                                            } else if (
                                              currentPage >=
                                              totalPages - 2
                                            ) {
                                              pageNum = totalPages - 4 + i;
                                            } else {
                                              pageNum = currentPage - 2 + i;
                                            }

                                            return (
                                              <button
                                                key={pageNum}
                                                onClick={() =>
                                                  setCurrentPage(pageNum)
                                                }
                                                className={`px-3 py-1.5 rounded-lg text-sm ${
                                                  currentPage === pageNum
                                                    ? "bg-[#A3F61E] text-black font-bold"
                                                    : "bg-gray-800 text-white hover:bg-gray-700"
                                                }`}
                                              >
                                                {pageNum}
                                              </button>
                                            );
                                          }
                                        )}
                                      </div>

                                      <button
                                        onClick={() =>
                                          setCurrentPage((p) =>
                                            Math.min(totalPages, p + 1)
                                          )
                                        }
                                        disabled={currentPage === totalPages}
                                        className="px-3 py-1.5 bg-gray-800 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                                      >
                                        Next
                                      </button>
                                      <button
                                        onClick={() =>
                                          setCurrentPage(totalPages)
                                        }
                                        disabled={currentPage === totalPages}
                                        className="px-3 py-1.5 bg-gray-800 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                                      >
                                        Last
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              );
                            })()}
                          </div>
                        </>
                      );
                    })()}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    ← Select a product to view and edit size data
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Import Tab */}
        {activeTab === "import" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Import Section */}
            <div className="space-y-6">
              <div className="bg-[#111] rounded-xl border border-gray-800 p-6">
                <h2 className="text-xl font-semibold mb-4">Import Data</h2>

                <div className="mb-4">
                  <label className="block text-sm text-gray-400 mb-2">
                    Paste data from Excel (Tab or Comma separated)
                  </label>
                  <textarea
                    className="w-full h-64 bg-black border border-gray-700 rounded-lg p-4 font-mono text-sm focus:border-[#A3F61E] focus:outline-none"
                    placeholder={`Format: productSlug, materialName, size, available (Y/N)

Example:
${exampleData}`}
                    value={csvData}
                    onChange={(e) => setCsvData(e.target.value)}
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleImport}
                    disabled={loading || !csvData.trim()}
                    className="px-6 py-3 bg-[#A3F61E] text-black font-semibold rounded-lg hover:bg-[#8CD912] disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    {loading ? "Importing..." : "Import Data"}
                  </button>
                  <button
                    onClick={() => setCsvData(exampleData)}
                    className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition"
                  >
                    Load Example
                  </button>
                </div>

                {/* Result */}
                {result && (
                  <div
                    className={`mt-4 p-4 rounded-lg ${
                      result.success
                        ? "bg-green-500/20 border border-green-500/50"
                        : "bg-red-500/20 border border-red-500/50"
                    }`}
                  >
                    <p className="font-semibold">
                      {result.success ? "✅ Success!" : "❌ Error"}
                    </p>
                    <p className="text-sm mt-1">{result.message}</p>
                    {result.summary && (
                      <p className="text-sm mt-1 text-gray-300">
                        {result.summary}
                      </p>
                    )}
                    {result.results?.errors &&
                      result.results.errors.length > 0 && (
                        <div className="mt-2 text-sm text-red-400">
                          <p>Errors:</p>
                          <ul className="list-disc list-inside">
                            {result.results.errors.map((err, i) => (
                              <li key={i}>{err}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                  </div>
                )}
              </div>

              {/* Format Help */}
              <div className="bg-[#111] rounded-xl border border-gray-800 p-6">
                <h2 className="text-lg font-semibold mb-3">Data Format</h2>
                <div className="text-sm text-gray-400 space-y-2">
                  <p>
                    <strong className="text-white">Columns:</strong>{" "}
                    productSlug, materialName, size, available
                  </p>
                  <p>
                    <strong className="text-white">Separator:</strong> Tab (from
                    Excel) or Comma
                  </p>
                  <p>
                    <strong className="text-white">Available values:</strong> Y,
                    Yes, true, 1, Available, In Stock, Green
                  </p>
                  <p>
                    <strong className="text-white">Not Available:</strong> N,
                    No, false, 0, or anything else
                  </p>
                </div>
              </div>
            </div>

            {/* Available Products */}
            <div className="bg-[#111] rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4">
                Available Product Slugs ({products.length})
              </h2>
              <p className="text-sm text-gray-400 mb-4">
                Use these slugs in your import data
              </p>
              <div className="max-h-[600px] overflow-y-auto">
                <table className="w-full text-sm">
                  <thead className="text-left text-gray-500 border-b border-gray-800 sticky top-0 bg-[#111]">
                    <tr>
                      <th className="pb-2">Product Name</th>
                      <th className="pb-2">Slug</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800/50">
                    {products.map((p) => (
                      <tr key={p.slug} className="hover:bg-gray-900/50">
                        <td className="py-2">{p.name}</td>
                        <td className="py-2">
                          <code className="text-[#A3F61E] text-xs bg-black/50 px-2 py-1 rounded">
                            {p.slug}
                          </code>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Wrapper component with QueryClientProvider
export default function SizeAvailabilityAdminPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <SizeAvailabilityAdmin />
    </QueryClientProvider>
  );
}
