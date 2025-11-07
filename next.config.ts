import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost', 'cdn.builder.io'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig