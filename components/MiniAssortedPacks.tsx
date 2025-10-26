'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AddToCartButton from './AddToCartButton';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  soldOut?: boolean;
}

const products: Product[] = [
  {
    id: 'm3-allen',
    name: 'M3 Allen Button head SS304 assorted box',
    price: 220.00,
    imageUrl: '/images/Screws.png'
  },
  {
    id: 'm4-allen',
    name: 'M4 Allen Button head SS304 assorted box',
    price: 250.00,
    imageUrl: '/images/Screws.png'
  },
  {
    id: 'm5-allen',
    name: 'M5 Allen Button head SS304 assorted box',
    price: 290.00,
    imageUrl: '/images/Screws.png',
    soldOut: true
  },
  {
    id: 'm3-spacer',
    name: 'M3 Female to Female and Male to Female hex spacer standoff assorted pack Brass with Nickel plating',
    price: 500.00,
    imageUrl: '/images/Bolts.png'
  },
  {
    id: 'm2-socket',
    name: 'M2 & M2.5 Allen Socket Head(12.9) Assorted Screw Pack Drone Screw Pack',
    price: 1180.00,
    imageUrl: '/images/Nuts.png'
  }
];

export default function MiniAssortedPacks() {
  return (
    <section className="py-16 bg-black w-full">
      <div className="w-full px-4">
        <h2 className="font-heading text-4xl font-bold text-center mb-12 text-white">
          Mini Assorted Packs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-[2000px] mx-auto">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-800"
            >
              <div className="relative aspect-square mb-4 bg-gray-800 rounded-md overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-contain w-full h-full"
                  priority
                />
                {product.soldOut && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md"> 
                    <span className="text-white font-semibold text-lg">Sold Out</span>
                  </div>
                )}
              </div>
              
              <h3 className="font-heading text-sm font-medium text-gray-200 mb-2 line-clamp-2 h-10">
                {product.name}
              </h3>
              
              <div className="flex justify-between items-center">
                <p className="font-sans text-lg font-semibold text-gray-200">
                  ₹{product.price.toFixed(2)}
                </p>
                {!product.soldOut && (
                  <AddToCartButton productName={product.name} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}