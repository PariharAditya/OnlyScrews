"use client";

import { useState, useEffect } from "react";

interface Product {
  name: string;
  slug: string;
  category: string;
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

export default function SizeAvailabilityAdminPage() {
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

  // Load products list on mount
  useEffect(() => {
    fetch("/api/admin/size-availability")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.allAvailableProducts || []);
        setProductsWithData(data.productsWithSizeData || []);
      })
      .catch(console.error);
  }, [result]); // Reload when result changes

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
        setCsvData(""); // Clear on success
      }
    } catch (error) {
      setResult({ success: false, message: String(error) });
    } finally {
      setLoading(false);
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
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-[#A3F61E]">
          Size Availability Admin
        </h1>
        <p className="text-gray-400 mb-8">
          Import product size availability data from Excel or CSV format
        </p>

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
                  <strong className="text-white">Columns:</strong> productSlug,
                  materialName, size, available
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
                  <strong className="text-white">Not Available:</strong> N, No,
                  false, 0, or anything else
                </p>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="space-y-6">
            {/* Products with Size Data */}
            <div className="bg-[#111] rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4">
                Products with Size Data ({productsWithData.length})
              </h2>
              {productsWithData.length === 0 ? (
                <p className="text-gray-500">No products have size data yet</p>
              ) : (
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {productsWithData.map((p) => (
                    <div
                      key={p.slug}
                      className="flex items-center justify-between p-3 bg-black/50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{p.name}</p>
                        <p className="text-xs text-gray-500">
                          <code className="text-[#A3F61E]">{p.slug}</code> •{" "}
                          {p.category}
                        </p>
                      </div>
                      <span className="text-sm text-gray-400">
                        {p.sizeRecordCount} sizes
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Available Products */}
            <div className="bg-[#111] rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4">
                Available Product Slugs ({products.length})
              </h2>
              <p className="text-sm text-gray-400 mb-4">
                Use these slugs in your import data
              </p>
              <div className="max-h-80 overflow-y-auto">
                <table className="w-full text-sm">
                  <thead className="text-left text-gray-500 border-b border-gray-800">
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
        </div>
      </div>
    </div>
  );
}
