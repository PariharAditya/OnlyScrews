"use client";

import { useRef, useEffect } from "react";
import { ChevronDown, Package, Check, CircleDot, Sparkles } from "lucide-react";

interface MaterialItem {
  available: boolean;
  [key: string]: any;
}

interface MaterialGroup {
  name: string;
  slug: string;
  items: MaterialItem[];
}

interface MaterialDropdownProps {
  materials: MaterialGroup[];
  selectedIndex: number;
  hoveredIndex: number | null;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (index: number) => void;
  onHover: (index: number) => void;
  onLeave: () => void;
}

export default function MaterialDropdown({
  materials,
  selectedIndex,
  hoveredIndex,
  isOpen,
  onToggle,
  onSelect,
  onHover,
  onLeave,
}: MaterialDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        if (isOpen) {
          onToggle();
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onToggle]);

  if (materials.length === 0) {
    return null;
  }

  const currentMaterial = materials[selectedIndex] || materials[0];
  const inStockCount = currentMaterial.items.filter(
    (item: any) => item.available
  ).length;
  const outOfStockCount = currentMaterial.items.filter(
    (item: any) => !item.available
  ).length;

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={onToggle}
        className="group w-full relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0d0d0d] to-[#1a1a1a] p-[1px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(163,246,30,0.15)] cursor-pointer"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#A3F61E]/0 via-[#A3F61E]/50 to-[#A3F61E]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative flex items-center justify-between px-5 py-4 rounded-2xl bg-gradient-to-r from-[#0d0d0d] to-[#141414] backdrop-blur-xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#A3F61E]/50 to-transparent"></div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#A3F61E]/20 to-[#A3F61E]/5 flex items-center justify-center border border-[#A3F61E]/20">
                <Package className="w-6 h-6 text-[#A3F61E]" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#A3F61E] animate-pulse"></div>
            </div>
            <div className="text-left">
              <p className="text-[10px] text-[#A3F61E]/60 uppercase tracking-[0.2em] font-medium">
                Material Type
              </p>
              <p className="text-white font-bold text-lg tracking-wide">
                {currentMaterial.name}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-green-400 text-xs font-bold">
                  {inStockCount}
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className="text-red-400 text-xs font-bold">
                  {outOfStockCount}
                </span>
              </div>
            </div>

            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#A3F61E]/30 transition-colors">
              <ChevronDown
                className={`w-5 h-5 text-gray-400 group-hover:text-[#A3F61E] transition-all duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 rounded-2xl bg-[#0a0a0a]/95 backdrop-blur-xl border border-gray-800/50 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#A3F61E]/30 to-transparent"></div>

          <div className="p-3">
            <div className="flex items-center gap-2 px-3 py-2 mb-2">
              <Sparkles className="w-3 h-3 text-[#A3F61E]" />
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">
                Hover to preview • Click to select
              </p>
            </div>

            {materials.map((material, idx) => {
              const inStock = material.items.filter(
                (item: any) => item.available
              ).length;
              const outOfStock = material.items.filter(
                (item: any) => !item.available
              ).length;
              const percent = Math.round(
                (inStock / material.items.length) * 100
              );
              const isSelected = selectedIndex === idx;
              const isHovered = hoveredIndex === idx;

              return (
                <button
                  key={material.slug}
                  onClick={() => onSelect(idx)}
                  onMouseEnter={() => onHover(idx)}
                  onMouseLeave={onLeave}
                  className={`group/item w-full relative overflow-hidden rounded-xl transition-all duration-200 cursor-pointer mb-1 ${
                    isSelected
                      ? "bg-gradient-to-r from-[#A3F61E]/20 to-[#A3F61E]/5"
                      : isHovered
                      ? "bg-white/5"
                      : "hover:bg-white/5"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#A3F61E] rounded-r-full"></div>
                  )}

                  <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                          isSelected
                            ? "bg-[#A3F61E] text-black"
                            : "bg-gray-800/50 text-gray-400 group-hover/item:bg-gray-700/50"
                        }`}
                      >
                        {isSelected ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          <CircleDot className="w-5 h-5" />
                        )}
                      </div>
                      <div className="text-left">
                        <span
                          className={`font-semibold block ${
                            isSelected ? "text-[#A3F61E]" : "text-white"
                          }`}
                        >
                          {material.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {material.items.length} total sizes
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="hidden sm:block w-16 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#A3F61E] to-green-400 rounded-full transition-all duration-500"
                          style={{ width: `${percent}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-bold text-gray-400">
                        {percent}%
                      </span>

                      <div className="flex items-center gap-2 text-xs">
                        <span className="flex items-center gap-1 text-green-400 font-bold">
                          {inStock}
                        </span>
                        <span className="text-gray-600">/</span>
                        <span className="flex items-center gap-1 text-red-400 font-bold">
                          {outOfStock}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
