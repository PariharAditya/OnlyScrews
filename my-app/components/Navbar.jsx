'use client';
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";



export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-dark/90 backdrop-blur border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
         { /* LOGO SECTION */ }
        <Link href="/" className="text-2xl font-bold text-primary gap-2">
            <Image className="h-9 w-auto" src="/SB.jpg" alt="logo"    width={180}
            height={180}
            className="h-9 w-auto object-contain"
            priority />
           {/* <span className="text-2xl font-bold text-primary">Screw Bazar</span> */}
        </Link>

        <div className="hidden md:flex gap-8 text-gray-200 font-medium">
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-dark border-t border-gray-700 text-center pb-4">
          <Link href="/products" className="block py-2">Products</Link>
          <Link href="/about" className="block py-2">About</Link>
          <Link href="/contact" className="block py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
}
