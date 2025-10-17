'use client';

import { useState } from 'react';

export default function FeatureCard({ icon, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '40px 24px',
        borderRadius: '12px',
        textAlign: 'center',
        boxShadow: isHovered 
          ? '0 12px 20px rgba(0, 0, 0, 0.15)' 
          : '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ fontSize: '3rem', marginBottom: '20px' }}>
        {icon}
      </div>
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#343a40',
        marginBottom: '12px'
      }}>
        {title}
      </h3>
      <p style={{
        color: '#6c757d',
        lineHeight: '1.6',
        fontSize: '1rem'
      }}>
        {description}
      </p>
    </div>
  );
}