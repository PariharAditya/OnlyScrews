'use client';

import React from 'react';

interface AddToCartButtonProps {
  productName: string;
}

export default function AddToCartButton({ productName }: AddToCartButtonProps) {
  return (
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors text-sm"
      onClick={() => {
        // Add to cart functionality
        console.log(`Added ${productName} to cart`);
      }}
    >
      Add to Cart
    </button>
  );
}