'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function InteractiveLink({ href, children, variant = 'primary', ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles = {
    padding: '16px 32px',
    borderRadius: '8px',
    fontWeight: '600',
    textDecoration: 'none',
    fontSize: '1.1rem',
    transition: 'all 0.3s ease',
    display: 'inline-block'
  };

  const variants = {
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

  const hoverStyles = {
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