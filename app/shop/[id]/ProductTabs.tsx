"use client";

import { useState } from "react";

interface ProductSpec {
  label: string;
  value: string;
}

interface TabsProps {
  specifications: ProductSpec[];
  applications: string[];
  features: string[];
  standards?: string[];
}

export default function ProductTabs({
  specifications,
  applications,
  features,
  standards,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState<
    "specs" | "applications" | "features"
  >("specs");

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <div className="grid grid-cols-3">
          <button
            onClick={() => setActiveTab("specs")}
            className={`px-6 py-4 text-sm font-medium transition-colors ${
              activeTab === "specs"
                ? "text-[#1a5f7a] border-b-2 border-[#1a5f7a] bg-blue-50"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Specifications
          </button>
          <button
            onClick={() => setActiveTab("applications")}
            className={`px-6 py-4 text-sm font-medium transition-colors ${
              activeTab === "applications"
                ? "text-[#1a5f7a] border-b-2 border-[#1a5f7a] bg-blue-50"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Applications
          </button>
          <button
            onClick={() => setActiveTab("features")}
            className={`px-6 py-4 text-sm font-medium transition-colors ${
              activeTab === "features"
                ? "text-[#1a5f7a] border-b-2 border-[#1a5f7a] bg-blue-50"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Features
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === "specs" && (
          <div className="space-y-4">
            {specifications.map((spec, index) => (
              <div
                key={index}
                className="grid grid-cols-2 gap-4 py-2 border-b border-gray-100 last:border-b-0"
              >
                <span className="font-medium text-gray-700">{spec.label}:</span>
                <span className="text-gray-600">{spec.value}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "applications" && (
          <ul className="space-y-3">
            {applications.map((app, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-[#1a5f7a] rounded-full mr-3"></span>
                {app}
              </li>
            ))}
          </ul>
        )}

        {activeTab === "features" && (
          <div className="space-y-4">
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#57C5B6] rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
            {standards && standards.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-800 mb-4">
                  Standards & Compliance
                </h3>
                <div className="flex flex-wrap gap-2">
                  {standards.map((standard) => (
                    <span
                      key={standard}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {standard}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
