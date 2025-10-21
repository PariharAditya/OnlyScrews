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
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const baseStyles: StyleObject = {
    padding: '16px 32px',
    borderRadius: '8px',
    fontWeight: '600',
    textDecoration: 'none',
    fontSize: '1.1rem',
    transition: 'all 0.3s ease',
    display: 'inline-block'
  };

  const variants: Variants = {
    primary: {
      backgroundColor: 'white',
      color: '#1a5f7a',
      border: 'none'
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'white',
      border: '2px solid white'
    },
    accent: {
      backgroundColor: '#57C5B6',
      color: 'white',
      border: 'none'
    }
  };

  const hoverStyles: Variants = {
    primary: {
      backgroundColor: '#f8f9fa',
      transform: 'translateY(-2px)'
    },
    secondary: {
      backgroundColor: 'white',
      color: '#1a5f7a',
      transform: 'translateY(-2px)'
    },
    accent: {
      backgroundColor: '#159895',
      transform: 'translateY(-2px)'
    }
  };

  const currentVariant = variants[variant];
  const currentHover = isHovered ? hoverStyles[variant] : {};

  return (
    <Link
      href={href}
      style={{
        ...baseStyles,
        ...currentVariant,
        ...currentHover
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </Link>
  );
}
