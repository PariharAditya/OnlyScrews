import React from 'react';

export const viewport = {
  themeColor: '#1a5f7a',
};

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
