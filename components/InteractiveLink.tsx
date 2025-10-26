'use client';

import Link from 'next/link';
import { useState, ReactNode } from 'react';
import { LinkProps } from 'next/link';

type StyleObject = {
  backgroundColor?: string;
  color?: string;
  border?: string;
  padding?: string;
  borderRadius?: string;
  fontWeight?: string;
  textDecoration?: string;
  fontSize?: string;
  transition?: string;
  display?: string;
  transform?: string;
};

interface Variants {
  readonly primary: StyleObject;
  readonly secondary: StyleObject;
  readonly accent: StyleObject;
}

interface InteractiveLinkProps extends Omit<LinkProps, 'href'> {
  readonly href: string;
  readonly children: ReactNode;
  readonly variant?: 'primary' | 'secondary' | 'accent';
}

export default function InteractiveLink({ 
  href, 
  children, 
  variant = 'primary', 
  ...props 
}: InteractiveLinkProps) {
  const baseClasses = "font-heading px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform inline-block hover:-translate-y-0.5";
  
  const variantClasses = {
    primary: "bg-white text-[#1a5f7a] hover:bg-gray-50",
    secondary: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#1a5f7a]",
    accent: "bg-[#57C5B6] text-white hover:bg-[#159895]"
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]}`}
      {...props}
    >
      {children}
    </Link>
  );
}
