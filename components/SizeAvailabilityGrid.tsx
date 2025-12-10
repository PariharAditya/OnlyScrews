"use client";

import { useState, useEffect, useRef } from "react";
import { X, Zap } from "lucide-react";
import {
  MaterialSizeAvailability,
  ProductSizeAvailabilityResponse,
} from "@/types/product";
import { fetchProductSizeAvailability } from "@/services/products";
import MaterialDropdown from "./MaterialDropdown";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredMaterial, setHoveredMaterial] = useState<number | null>(null);
  const [hoveredSize, setHoveredSize] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  if (loading) {
    return (
      <div className="space-y-4">
        {/* Futuristic loading skeleton */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-[1px]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A3F61E]/20 to-transparent animate-[shimmer_2s_infinite] -translate-x-full"></div>
          <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-5">
            <div className="h-14 bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-xl animate-pulse"></div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-[1px]">
          <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-5">
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="h-12 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-xl animate-pulse"
                  style={{ animationDelay: `${i * 100}ms` }}
                ></div>
              ))}
            </div>
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

  // Get the material to show in preview (hovered or selected)
  const previewMaterial =
    hoveredMaterial !== null
      ? data.materials[hoveredMaterial]
      : currentMaterial;

  // Group sizes by M-size prefix for better organization
  const groupSizes = (material: MaterialSizeAvailability) => {
    return material.sizes.reduce((acc, sizeItem) => {
      const match = sizeItem.size.match(/^M-?(\d+)/i);
      const prefix = match ? `M${match[1]}` : "Other";
      if (!acc[prefix]) acc[prefix] = [];
      acc[prefix].push(sizeItem);
      return acc;
    }, {} as Record<string, typeof material.sizes>);
  };

  const groupedSizes = groupSizes(previewMaterial);
  const inStockCount = previewMaterial.sizes.filter((s) => s.available).length;
  const outStockCount = previewMaterial.sizes.filter(
    (s) => !s.available
  ).length;
  const availabilityPercent = Math.round(
    (inStockCount / previewMaterial.sizes.length) * 100
  );

  // Transform materials to MaterialGroup format for dropdown
  const materialGroups = data.materials.map((mat) => ({
    name: mat.materialName,
    slug: mat.materialSlug,
    items: mat.sizes,
  }));

  return (
    <div className="space-y-4">
      {/* Material Dropdown */}
      <MaterialDropdown
        materials={materialGroups}
        selectedIndex={selectedMaterial}
        hoveredIndex={hoveredMaterial}
        isOpen={isDropdownOpen}
        onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
        onSelect={handleMaterialChange}
        onHover={handleMaterialHover}
        onLeave={handleMaterialLeave}
      />

      {/* Size Availability Grid - Futuristic */}
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
                  {previewMaterial.materialName}
                </h4>
              </div>
              {hoveredMaterial !== null &&
                hoveredMaterial !== selectedMaterial && (
                  <span className="text-[10px] px-2 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 uppercase tracking-wider font-bold animate-pulse">
                    Preview Mode
                  </span>
                )}
            </div>

            {/* Availability Progress Ring */}
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12">
                <svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
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
                      <stop offset="0%" stopColor="#A3F61E" />
                      <stop offset="100%" stopColor="#22c55e" />
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
                  <span className="text-gray-400">In Stock</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                  <span className="text-gray-400">Out of Stock</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grouped by M-size */}
        <div className="divide-y divide-gray-800/30 max-h-[420px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
          {Object.entries(groupedSizes).map(([prefix, sizes], groupIdx) => {
            const groupAvailable = sizes.filter((s) => s.available).length;
            return (
              <div key={prefix} className="p-5 relative">
                {/* Group header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#A3F61E]/20 to-transparent flex items-center justify-center border border-[#A3F61E]/20">
                      <span className="text-[#A3F61E] font-bold text-sm">
                        {prefix.replace("M", "")}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-white uppercase tracking-wider">
                      {prefix} Series
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-12 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#A3F61E] to-green-500 rounded-full"
                        style={{
                          width: `${(groupAvailable / sizes.length) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">
                      {groupAvailable}/{sizes.length}
                    </span>
                  </div>
                </div>

                {/* Size pills */}
                <div className="flex flex-wrap gap-2">
                  {sizes.map((sizeItem, sizeIdx) => (
                    <div
                      key={sizeItem.size}
                      onMouseEnter={() => setHoveredSize(sizeItem.size)}
                      onMouseLeave={() => setHoveredSize(null)}
                      className={`
                        group/size relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold 
                        transition-all duration-300 cursor-default
                        ${hoveredSize === sizeItem.size ? "scale-105 z-10" : ""}
                        ${
                          sizeItem.available
                            ? "bg-gradient-to-br from-green-500/15 to-green-500/5 text-green-400 border border-green-500/30 hover:border-green-400/60 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]"
                            : "bg-gradient-to-br from-red-500/10 to-red-500/5 text-red-400/70 border border-red-500/20 hover:border-red-400/40 hover:shadow-[0_0_20px_rgba(239,68,68,0.1)]"
                        }
                      `}
                      style={{
                        animationDelay: `${
                          (groupIdx * sizes.length + sizeIdx) * 30
                        }ms`,
                      }}
                    >
                      {/* Status icon */}
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          sizeItem.available
                            ? "bg-green-500/20"
                            : "bg-red-500/20"
                        }`}
                      >
                        {sizeItem.available ? (
                          <Check className="w-3 h-3" />
                        ) : (
                          <X className="w-3 h-3" />
                        )}
                      </span>
                      <span>{sizeItem.size}</span>

                      {/* Glow effect on hover */}
                      {sizeItem.available && (
                        <div className="absolute inset-0 rounded-xl bg-green-500/10 opacity-0 group-hover/size:opacity-100 transition-opacity blur-sm"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Footer - Futuristic */}
        <div className="relative px-5 py-4 border-t border-gray-800/50 bg-gradient-to-r from-black/60 to-transparent">
          {/* Bottom glow line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#A3F61E]/30 to-transparent"></div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm">Total Variants:</span>
              <span className="text-white font-bold text-lg">
                {previewMaterial.sizes.length}
              </span>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-left">
                  <p className="text-green-400 font-bold text-lg leading-none">
                    {inStockCount}
                  </p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">
                    Available
                  </p>
                </div>
              </div>

              <div className="w-[1px] h-8 bg-gray-800"></div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <X className="w-4 h-4 text-red-400" />
                </div>
                <div className="text-left">
                  <p className="text-red-400 font-bold text-lg leading-none">
                    {outStockCount}
                  </p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">
                    Unavailable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom corner accents */}
        <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-[#A3F61E]/10 rounded-bl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#A3F61E]/10 rounded-br-2xl"></div>
      </div>
    </div>
  );
}
