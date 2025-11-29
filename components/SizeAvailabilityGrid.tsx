"use client";

import { useState, useEffect } from "react";
import {
  MaterialSizeAvailability,
  ProductSizeAvailabilityResponse,
} from "@/types/product";
import { fetchProductSizeAvailability } from "@/services/products";

interface SizeAvailabilityGridProps {
  readonly productSlug: string;
  readonly selectedMaterialIndex?: number;
  readonly onMaterialChange?: (index: number) => void;
}

export default function SizeAvailabilityGrid({
  productSlug,
  selectedMaterialIndex = 0,
  onMaterialChange,
}: SizeAvailabilityGridProps) {
  const [data, setData] = useState<ProductSizeAvailabilityResponse | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [selectedMaterial, setSelectedMaterial] = useState(
    selectedMaterialIndex
  );

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const result = await fetchProductSizeAvailability(productSlug);
      setData(result);
      setLoading(false);
    }
    loadData();
  }, [productSlug]);

  useEffect(() => {
    setSelectedMaterial(selectedMaterialIndex);
  }, [selectedMaterialIndex]);

  const handleMaterialChange = (index: number) => {
    setSelectedMaterial(index);
    onMaterialChange?.(index);
  };

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-6 bg-gray-700/50 rounded w-48"></div>
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-10 bg-gray-700/50 rounded-full w-36"
            ></div>
          ))}
        </div>
        <div className="rounded-xl border border-gray-700/50 bg-[#0a0a0a] p-5">
          <div className="grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div key={i} className="h-12 bg-gray-700/30 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!data || data.materials.length === 0) {
    return null;
  }

  const currentMaterial: MaterialSizeAvailability | undefined =
    data.materials[selectedMaterial];

  if (!currentMaterial) {
    return null;
  }

  // Group sizes by M-size prefix for better organization
  const groupedSizes = currentMaterial.sizes.reduce((acc, sizeItem) => {
    const match = sizeItem.size.match(/^M-?(\d+)/i);
    const prefix = match ? `M${match[1]}` : "Other";
    if (!acc[prefix]) acc[prefix] = [];
    acc[prefix].push(sizeItem);
    return acc;
  }, {} as Record<string, typeof currentMaterial.sizes>);

  return (
    <div className="space-y-5">
      {/* Material Selector */}
      <div>
        <h3 className="text-sm font-heading font-semibold mb-3 text-[#BCFF83] uppercase tracking-wide">
          Select Material
        </h3>
        <div className="flex flex-wrap gap-2">
          {data.materials.map((material, idx) => (
            <button
              key={material.materialId}
              onClick={() => handleMaterialChange(idx)}
              className={`px-5 py-2.5 rounded-full font-sans font-medium text-sm transition-all duration-200 cursor-pointer ${
                selectedMaterial === idx
                  ? "bg-[#A3F61E] text-black shadow-lg shadow-[#A3F61E]/20 scale-105"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
              }`}
            >
              {material.materialName}
            </button>
          ))}
        </div>
      </div>

      {/* Size Availability Grid */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-heading font-semibold text-[#BCFF83] uppercase tracking-wide">
            {currentMaterial.materialName} - Size Chart
          </h4>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <span>In Stock</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <span>Out of Stock</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-800 bg-gradient-to-b from-[#111] to-[#0a0a0a] overflow-hidden">
          {/* Grouped by M-size */}
          <div className="divide-y divide-gray-800/50">
            {Object.entries(groupedSizes).map(([prefix, sizes]) => (
              <div key={prefix} className="p-4">
                <div className="text-xs text-gray-500 font-medium mb-2 uppercase tracking-wider">
                  {prefix} Series
                </div>
                <div
                  className="grid gap-2"
                  style={{
                    gridTemplateColumns: `repeat(auto-fill, minmax(100px, 1fr))`,
                  }}
                >
                  {sizes.map((sizeItem) => (
                    <div
                      key={sizeItem.size}
                      className={`
                        relative px-3 py-3 rounded-lg text-center text-sm font-medium 
                        transition-all duration-200 cursor-default
                        ${
                          sizeItem.available
                            ? "bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500/20 hover:border-green-500/50"
                            : "bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 hover:border-red-500/50"
                        }
                      `}
                    >
                      {/* Status indicator dot */}
                      <span
                        className={`absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full ${
                          sizeItem.available ? "bg-green-500" : "bg-red-500"
                        }`}
                      />
                      <span className="block text-xs opacity-60 mb-0.5">
                        Size
                      </span>
                      <span className="block font-semibold">
                        {sizeItem.size}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Summary Footer */}
          <div className="bg-black/30 px-4 py-3 border-t border-gray-800/50">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>
                Total:{" "}
                <span className="text-white font-medium">
                  {currentMaterial.sizes.length}
                </span>{" "}
                sizes
              </span>
              <span>
                <span className="text-green-400 font-medium">
                  {currentMaterial.sizes.filter((s) => s.available).length}
                </span>{" "}
                in stock,{" "}
                <span className="text-red-400 font-medium">
                  {currentMaterial.sizes.filter((s) => !s.available).length}
                </span>{" "}
                out of stock
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
